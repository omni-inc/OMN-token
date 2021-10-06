// SPDX-License-Identifier: MIT

/// @title OMNI Token V4 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.10 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Whitelistable Methods
 * @dev Allows accounts to be whitelisted by Owner
 */
contract Whitelistable is OwnableUpgradeable {

	// Index Address
	address[] private wallets;
	// Mapping whitelisted Address
    mapping(address => bool) private whitelisted;
	// Events when add or drop a wallets in the whitelisted mapping
    event InWhitelisted(address indexed _account);
    event OutWhitelisted(address indexed _account);

    /**
     * @dev Throws if argument account is whitelisted
     * @param _account The address to check
     */
    modifier Whitelisted(address _account) {
        require(
            whitelisted[_account],
            "ERC20 OMN: receive account is not whitelisted"
        );
        _;
    }

	/**
     * @dev Throws if a given address is equal to address(0)
	 * @param _to The address to check
     */
    modifier validAddress(address _to) {
        require(_to != address(0), "ERC20 OMN: Not Add Zero Address");
        /* solcov ignore next */
        _;
    }

    /**
     * @dev Checks if account is whitelisted
     * @param _account The address to check
     */
    function isWhitelisted(address _account) public view returns (bool) {
		// This if permit to execute burn method
		if (_account == address(0)) { return true;}
        return whitelisted[_account];
    }

    /**
     * @dev Adds account to whitelist
     * @param _account The address to whitelist
     */
    function addWhitelist(address _account) public validAddress(_account) onlyOwner() {
		require(!whitelisted[_account], "ERC20 OMN: Wallet already whitelisted");
        whitelisted[_account] = true;
		wallets.push(_account);
        emit InWhitelisted(_account);
    }

    /**
     * @dev Removes account from whitelist
     * @param _account The address to remove from the whitelist
     */
    function dropWhitelist(address _account) public validAddress(_account) onlyOwner() {
		require(whitelisted[_account], "ERC20 OMN: Wallet not whitelisted");
        whitelisted[_account] = false;
        emit OutWhitelisted(_account);
    }

    /**
     * @dev Getting the List of Address Whitelisted
     */
	function getWhitelist() public view returns (address[] memory) {
		return wallets;
	}

}
