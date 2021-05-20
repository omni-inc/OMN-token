// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Blacklistable Token
 * @dev Allows accounts to be blacklisted by Owner
 */

contract Blacklistable is OwnableUpgradeable {
    using AddressUpgradeable for address;

	// Mapping blacklisted Address
    mapping(address => bool) public blacklisted;

    event addBlacklisted(address indexed _account);
    event dropBlacklisted(address indexed _account);


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
    function blacklist(address _account) public onlyOwner() {
        blacklisted[_account] = true;
        emit addBlacklisted(_account);
    }

    /**
     * @dev Removes account from blacklist
     * @param _account The address to remove from the blacklist
     */
    function unBlacklist(address _account) public onlyOwner() {
        blacklisted[_account] = false;
        emit dropBlacklisted(_account);
    }

}
