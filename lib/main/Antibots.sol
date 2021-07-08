// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./Blacklistable.sol";

/**
 * @title AntiBots Methods
 * @dev Allows  by Owner
 */
contract Antibots is OwnableUpgradeable, Blacklistable {

	// anti-sniping bot defense
    uint256 private burnBeforeBlockNumber;
    bool private burnBeforeBlockNumberDisabled;
	// Arrays whitelist
	address[] private whitelist_wallets;

	// Event where Transfer is Burned
	event TransferBurned(address indexed wallet, uint256 amount);
	// Event Disable Antibots defense forever
	event DisableDefenseAntiBots (uint256 blockNumber, bool statusDefense);
	// Event for Add/Drop Whitelist Wallets
	event InWhiteListWallet(address indexed _account);
    event OutWhiteListWallet(address indexed _account);

	// anti-sniping bot defense
	/**
     * @dev Getting Internal in the smart Contract the Status of Antibots Defense
     */
    function isTransferDisabled() internal view returns (bool) {
        if (_msgSender() == owner()) {
            // owner always can transfer
            return false;
        }
		if (isWhiteListed(_msgSender())) {
			// WhiteListed Wallets can transfer
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

	/** ----------------- WHITELIST ---------------------- */

	/**
     * @dev function to verify if the address exist or not in the Whitelisted Array
     * @param _account The address to check
     */
	function isWhiteListed(address _account) public view returns (bool) {
		if (_account == address(0)) {
			return false;
		}
		uint256 index = whitelist_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == whitelist_wallets[i]) {
				return true;			}
		}
		return false;
	}

	/**
     * @dev Include the wallet in the wallets address of Whitelisted in the Antibots Defense
     * @param _account The address to include
     */
	function addWhiteListed(address _account) public validAddress(_account) onlyOwner() returns (bool) {
		require(!isWhiteListed(_account), "ERC20 OMN: wallet is already");
		whitelist_wallets.push(_account);
		emit InWhiteListWallet(_account);
		return true;
	}

	/**
     * @dev Exclude the wallet in the wallets address of Whitelisted in the Antibots Defense
     * @param _account The address to exclude
     */
	function dropWhiteListed(address _account) public validAddress(_account) onlyOwner() returns (bool) {
		require(isWhiteListed(_account), "ERC20 OMN: Wallet don't exist");
		uint256 index = whitelist_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == whitelist_wallets[i]) {
				whitelist_wallets[i] = whitelist_wallets[index - 1];
				whitelist_wallets.pop();
				emit OutWhiteListWallet(_account);
				return true;
			}
		}
		return false;
	}

	/**
     * @dev Getting the all wallets address Whitelisted in the Antibots Defense
     */
	function getWhiteListWallets() public view returns (address[] memory) {
		return whitelist_wallets;
	}
}
