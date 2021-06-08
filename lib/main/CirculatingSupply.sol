// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

/**
 * @title Circulating Supply Methods
 * @dev Allows update the wallets of OMNI Foundation by Owner
 */
contract CirculatingSupply is OwnableUpgradeable {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	// Array of address
    address[] internal omni_wallets;

    event inOmniWallet(address indexed _account);
    event outOmniWallet(address indexed _account);

	/**
     * @dev Throws if argument account is Zero
     * @param _account The address to check
     */
    modifier notZero(address _account) {
        require(
            _account != address(0),
            "ERC20 OMN: Not Add Zero Address"
        );
		require(
			_msgSender() == owner(),
			"ERC20: is not the Owner"
		);
        _;
    }

	/**
     * @dev function to verify if the address exist in OmniWallet or not
     * @param _account The address to check
     */
	function isOmniWallet(address _account) public view onlyOwner() returns (bool) {
		if (_account == address(0)) {
			return false;
		}
		uint256 index = omni_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == omni_wallets[i]) {
				return true;			}
		}
		return false;
	}

	/**
     * @dev Include the wallet in the wallets address of OMNI Foundation
     * @param _account The address to include
     */
	function addOmniWallet(address _account) public notZero(_account) returns (bool) {
		omni_wallets.push(_account);
		emit inOmniWallet(_account);
		return true;
	}

	/**
     * @dev Exclude the wallet in the wallets address of OMNI Foundation
     * @param _account The address to exclude
     */
	function dropOmniWallet(address _account) public notZero(_account) returns (bool) {
		uint256 index = omni_wallets.length;
		bool flag = false;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == omni_wallets[i]) {
				omni_wallets[i] = address(0);
				flag = true;
			}
		}
		emit outOmniWallet(_account);
		return flag;
	}

	/**
     * @dev Getting the all wallets address of OMNI Foundation
     */
	function getOmniWallets() public view onlyOwner() returns (address[] memory) {
		return omni_wallets;
	}

}
