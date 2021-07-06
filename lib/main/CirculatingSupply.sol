// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
 * @title Circulating Supply Methods
 * @dev Allows update the wallets of OMNI Foundation by Owner
 */
contract CirculatingSupply is OwnableUpgradeable {
	// Array of address
    address[] internal omni_wallets;

    event InOmniWallet(address indexed _account);
    event OutOmniWallet(address indexed _account);

	/**
     * @dev Throws if argument account is Zero
     * @param _account The address to check
     */
    modifier notZero(address _account) {
        require(
            _account != address(0),
            "ERC20 OMN: Not Add Zero Address"
        );
        _;
    }

	/**
     * @dev function to verify if the address exist in OmniWallet or not
     * @param _account The address to check
     */
	function isOmniWallet(address _account) public view returns (bool) {
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
	function addOmniWallet(address _account) public notZero(_account) onlyOwner() returns (bool) {
		omni_wallets.push(_account);
		emit InOmniWallet(_account);
		return true;
	}

	/**
     * @dev Exclude the wallet in the wallets address of OMNI Foundation
     * @param _account The address to exclude
     */
	function dropOmniWallet(address _account) public notZero(_account) onlyOwner() returns (bool) {
		require(!isOmniWallet(_account), "ERC20 OMN: OmniWallet don't exist");
		uint256 index = omni_wallets.length;
		for (uint256 i=0; i < index ; i++ ) {
			if (_account == omni_wallets[i]) {
				omni_wallets[i] = omni_wallets[index - 1];
				omni_wallets.pop();
				emit OutOmniWallet(_account);
				return true;
			}
		}
		return false;
	}

	/**
     * @dev Getting the all wallets address of OMNI Foundation
     */
	function getOmniWallets() public view returns (address[] memory) {
		return omni_wallets;
	}

}
