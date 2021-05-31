// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.2;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Blacklistable Methods
 * @dev Allows accounts to be blacklisted by Owner
 */
contract Blacklistable is OwnableUpgradeable {
    using AddressUpgradeable for address;

	// Index Address
	address[] private wallets;
	// Mapping blacklisted Address
    mapping(address => bool) private blacklisted;

    event inBlacklisted(address indexed _account);
    event outBlacklisted(address indexed _account);


    /**
     * @dev Throws if argument account is blacklisted
     * @param _account The address to check
     */
    modifier notBlacklisted(address _account) {
        require(
            !blacklisted[_account],
            "Blacklistable: sender account is blacklisted"
        );
        _;
    }

    /**
     * @dev Checks if account is blacklisted
     * @param _account The address to check
     */
    function isBlacklisted(address _account) public view returns (bool) {
        return blacklisted[_account];
    }

    /**
     * @dev Adds account to blacklist
     * @param _account The address to blacklist
     */
    function addBlacklist(address _account) public onlyOwner() {
        blacklisted[_account] = true;
		wallets.push(_account);
        emit inBlacklisted(_account);
    }

    /**
     * @dev Removes account from blacklist
     * @param _account The address to remove from the blacklist
     */
    function dropBlacklist(address _account) public onlyOwner() {
        blacklisted[_account] = false;
        emit outBlacklisted(_account);
    }

    /**
     * @dev Getting the List of Address Blacklisted
     */
	function getBlacklist() public view onlyOwner() returns (address[] memory) {
		return wallets;
	}

}
