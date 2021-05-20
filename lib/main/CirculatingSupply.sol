// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

/**
 * @title Blacklistable Token
 * @dev Allows update the wallets by Owner
 */
contract CirculatingSupply is OwnableUpgradeable {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	// Array of address
    address[] internal omni_wallets;

    event inOmniWallet(address indexed _account);
    event unOmniWallet(address indexed _account);

	/**
     * @dev Throws if argument account is Zero
     * @param _account The address to check
     */
    modifier notZero(address _account) {
        require(
            _account == address(0),
            "ERC20 OMN: Not Add Zero Address"
        );
		require(
			_msgSender() == owner(),
			"ERC20: is not the Owner"
		);
        _;
    }

	function isOmniWallet(address _account) public view notZero (_account) returns (bool) {
		uint256 index = omni_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == omni_wallets[i]) {
				return true;			}
		}
		return false;
	}

	function addOmniWallet(address _account) public notZero(_account) returns (bool) {
		uint256 index = omni_wallets.length;
		omni_wallets[index.sub(uint256(1))] = _account;
		emit inOmniWallet(_account);
		return true;
	}

	function dropOmniWallet(address _account) public notZero(_account) returns (bool) {
		uint256 index = omni_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == omni_wallets[i]) {
				omni_wallets[i] = address(0);
			}
		}
		emit unOmniWallet(_account);
		return true;
	}

}
