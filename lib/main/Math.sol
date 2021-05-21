// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";


contract Math {
	using SafeMathUpgradeable for uint256;

	function mulDiv(uint256 x, uint256 y, uint256 z) public pure returns (uint256) {
        return x.mul(y).div(z);
    }
}
