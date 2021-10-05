// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "../main/Claimable.sol";
import "./Math.sol";

struct FrozenWallet {
	bool scheduled;
	uint32 startDay;
    uint32 afterDays;
    address wallet;
    uint256 totalAmount;
    uint256 dailyAmount;
	uint256 monthlyAmount;
    uint256 initialAmount;
}

struct VestingType {
    uint256 dailyRate;
    uint256 initialRate;
    uint256 afterDays;
	uint256 monthRate;
	uint256 monthDelay;
	bool vesting;
	bool vestingType; //true for daily rate and false for monthly rate
}

/**
 * @title Vesting Methods
 * @dev All Method to permit handle the Vesting Process of OMN token
 */
contract Vesting is OwnableUpgradeable, Math, Claimable, PausableUpgradeable, ERC20PermitUpgradeable {

    /**
     * @dev Method to permit to get the Exactly Unix Epoch of Token Generate Event
     */
	function getReleaseTime() public pure returns (uint256) {
        return 1626440400; // "Friday, 16 July 2021 13:00:00 GMT"
    }

    /**
     * @dev Auxiliary Method to permit to get the Last Exactly Unix Epoch of Blockchain timestamp
     */
    function getTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

}
