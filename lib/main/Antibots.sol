// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title AntiBots Methods
 * @dev Allows  by Owner
 */
contract Antibots is OwnableUpgradeable {

	// anti-sniping bot defense
    uint256 private burnBeforeBlockNumber;
    bool internal burnBeforeBlockNumberDisabled;

	// Event where Transfer is Burned
	event TransferBurned(address indexed wallet, uint256 amount);
	// Event Disable Antibots defense forever
	event DisableDefenseAntiBots (uint256 blockNumber, bool statusDefense);

	// anti-sniping bot defense
	/**
     * @dev Getting Internal in the smart Contract the Status of Antibots Defense
     */
    function isTransferDisabled() internal view returns (bool) {
        if (_msgSender() == owner()) {
            // owner always can transfer
            return false;
        }
        return (!burnBeforeBlockNumberDisabled && (block.number < burnBeforeBlockNumber));
    }

	/**
     * @dev Antibots Defense - Block any transfer and burn any tokens
	 * @dev Setting the number of blocks that disable the Transfer methods, and burn any call
	 * @param blocksDuration number of block that transfer are disabled, and any transfer will be burned
     */
    function disableTransfers(uint256 blocksDuration) public onlyOwner() {
        require(!burnBeforeBlockNumberDisabled, "Bot defense is disabled");
        burnBeforeBlockNumber = block.number + blocksDuration;
    }

	/**
     * @dev Antibots Defense - Disable Antibot Defense Forever!!
	 * @dev Setting boolean burnBeforeBlockNumberDisabled in true and disable the antibots Defense
     */
    function disableBurnBeforeBlockNumber() public onlyOwner() {
        burnBeforeBlockNumber = uint(0);
        burnBeforeBlockNumberDisabled = true;
		emit DisableDefenseAntiBots (block.number, burnBeforeBlockNumberDisabled);
    }
	/** --------------------- GETTER -----------------------------*/
	/**
     * @dev Antibots Defense - Getting the status of Transfer Disabled (true or false)
	 * @dev Return the status of TransferDisabled function
     */
	function getIsTransferDisabled() public view returns (bool) {
		return (!burnBeforeBlockNumberDisabled && (block.number < burnBeforeBlockNumber));
	}

	/**
     * @dev Antibots Defense - Getting the value of varialbe internal burnBeforeBlockNumber
	 * @dev Return the block Number when the Transfer are Enable again!!
     */
	function getBurnBeforeBlockNumber() public view onlyOwner() returns (uint256){
		return burnBeforeBlockNumber;
	}

	/**
     * @dev Antibots Defense - Getting the status of Antibots Defense are available (true or false)
	 * @dev Return boolean status if the Antibots Defense can used or never again!!
     */
	function getBurnBeforeBlockNumberDisabled() public view returns (bool) {
		return burnBeforeBlockNumberDisabled;
	}
}
