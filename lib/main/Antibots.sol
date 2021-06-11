// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Blacklistable Methods
 * @dev Allows accounts to be blacklisted by Owner
 */
contract Antibots is OwnableUpgradeable {
    using AddressUpgradeable for address;

	// anti-sniping bot defense
    uint256 public burnBeforeBlockNumber;
    bool public burnBeforeBlockNumberDisabled;

	// Event where Transfer is Burned
	event TransferBurned(address indexed wallet, uint256 amount);

	// anti-sniping bot defense
    function isTransferDisabled() public view returns (bool) {
        if (_msgSender() == owner()) {
            // owner always can transfer
            return false;
        }
        return (!burnBeforeBlockNumberDisabled && (block.number < burnBeforeBlockNumber));
    }

    function disableTransfers(uint256 blocksDuration) public onlyOwner() {
        require(!burnBeforeBlockNumberDisabled, "Bot defense is disabled");
        burnBeforeBlockNumber = block.number + blocksDuration;
    }

    function disableBurnBeforeBlockNumber() public onlyOwner() {
        burnBeforeBlockNumber = 0;
        burnBeforeBlockNumberDisabled = true;
    }
}
