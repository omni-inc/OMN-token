// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

import "./Math.sol";

struct FrozenWallet {
    address wallet;
    uint256 totalAmount;
    uint256 monthlyAmount;
    uint256 initialAmount;
    uint256 startDay;
    uint256 afterDays;
    bool scheduled;
    uint256 monthDelay;
}

struct VestingType {
    uint256 monthlyRate;
    uint256 initialRate;
    uint256 afterDays;
    uint256 monthDelay;
    bool vesting;
}

contract Vesting is OwnableUpgradeable, Math {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	// Mapping of FrozenWallet
	// Address Wallets -> Struc FrozenWallet
	mapping (address => FrozenWallet) public frozenWallets;
	// Array of Struc Vesting Types
    VestingType[] public vestingTypes;

	function getReleaseTime() public pure returns (uint256) {
        return 1611588600; // "Mon, 25 Jan 2021 15:30:00 GMT"
    }

    function addAllocations(address[] memory addresses, uint256[] memory totalAmounts, uint256 vestingTypeIndex) external payable onlyOwner() returns (bool) {
        require(addresses.length == totalAmounts.length, "Address and totalAmounts length must be same");
        require(vestingTypes[vestingTypeIndex].vesting, "Vesting type isn't found");

        VestingType memory vestingType = vestingTypes[vestingTypeIndex];
        uint256 addressesLength = addresses.length;

        for(uint256 i = 0; i < addressesLength; i++) {
            address _address = addresses[i];
            uint256 totalAmount = totalAmounts[i];
            uint256 monthlyAmount = mulDiv(totalAmounts[i], vestingType.monthlyRate, 100000000000000000000);
            uint256 initialAmount = mulDiv(totalAmounts[i], vestingType.initialRate, 100000000000000000000);
            uint256 afterDay = vestingType.afterDays;
            uint256 monthDelay = vestingType.monthDelay;

            addFrozenWallet(_address, totalAmount, monthlyAmount, initialAmount, afterDay, monthDelay);
        }

        return true;
    }

	function addFrozenWallet(address wallet, uint256 totalAmount, uint256 monthlyAmount, uint256 initialAmount, uint256 afterDays, uint256 monthDelay) internal {
        uint256 releaseTime = getReleaseTime();

        if (!frozenWallets[wallet].scheduled) {
            IERC20Upgradeable(address(this)).safeTransfer(wallet, totalAmount);
        }

        // Create frozen wallets
        FrozenWallet memory frozenWallet = FrozenWallet(
            wallet,
            totalAmount,
            monthlyAmount,
            initialAmount,
            releaseTime.add(afterDays),
            afterDays,
            true,
            monthDelay
        );

        // Add wallet to frozen wallets
        frozenWallets[wallet] = frozenWallet;
    }

    function getTimestamp() external view returns (uint256) {
        return block.timestamp;
    }

    function getMonths(uint256 afterDays, uint256 monthDelay) public view returns (uint256) {
        uint256 releaseTime = getReleaseTime();
        uint256 time = releaseTime.add(afterDays);

        if (block.timestamp < time) {
            return 0;
        }

        uint256 diff = block.timestamp.sub(time);
        uint256 months = diff.div(30 days).add(1).sub(monthDelay);

        return months;
    }

    function isStarted(uint256 startDay) public view returns (bool) {
        uint256 releaseTime = getReleaseTime();

        if (block.timestamp < releaseTime || block.timestamp < startDay) {
            return false;
        }

        return true;
    }

    function getTransferableAmount(address sender) public view returns (uint256) {
        uint256 months = getMonths(frozenWallets[sender].afterDays, frozenWallets[sender].monthDelay);
        uint256 monthlyTransferableAmount = frozenWallets[sender].monthlyAmount.mul(months);
        uint256 transferableAmount = monthlyTransferableAmount.add(frozenWallets[sender].initialAmount);

        if (transferableAmount > frozenWallets[sender].totalAmount) {
            return frozenWallets[sender].totalAmount;
        }

        return transferableAmount;
    }

	function getRestAmount(address sender) public view returns (uint256) {
        uint256 transferableAmount = getTransferableAmount(sender);
        uint256 restAmount = frozenWallets[sender].totalAmount.sub(transferableAmount);

        return restAmount;
    }
}
