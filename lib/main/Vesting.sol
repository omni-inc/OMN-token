// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.2;

import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "hardhat/console.sol";
import "./Math.sol";

struct FrozenWallet {
    address wallet;
    uint256 totalAmount;
    uint256 dailyAmount;
    uint256 initialAmount;
    uint256 startDay;
    uint256 afterDays;
    bool scheduled;
}
// TODO: need to change for Daily Rate
struct VestingType {
    uint256 dailyRate; //Daily Rate
    uint256 initialRate;
    uint256 afterDays;
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
        return 1623752855; // "Tuesday, 15 June 2021 10:27:35 GMT"
    }

    function addAllocations(address[] memory addresses, uint256[] memory totalAmounts, uint256 vestingTypeIndex) external payable onlyOwner() returns (bool) {
        require(addresses.length == totalAmounts.length, "Address and totalAmounts length must be same");
        require(vestingTypes[vestingTypeIndex].vesting, "Vesting type isn't found");

        VestingType memory vestingType = vestingTypes[vestingTypeIndex];
        uint256 addressesLength = addresses.length;

        for(uint256 i = 0; i < addressesLength; i++) {
            address _address = addresses[i];
            uint256 totalAmount = totalAmounts[i];
            uint256 dailyAmount = mulDiv(totalAmounts[i], vestingType.dailyRate, 100000000000000000000);
            uint256 initialAmount = mulDiv(totalAmounts[i], vestingType.initialRate, 100000000000000000000);
            uint256 afterDay = vestingType.afterDays;

            addFrozenWallet(_address, totalAmount, dailyAmount, initialAmount, afterDay);
        }

        return true;
    }

	function addFrozenWallet(address wallet, uint256 totalAmount, uint256 dailyAmount, uint256 initialAmount, uint256 afterDays) internal {
        uint256 releaseTime = getReleaseTime();

        if (!frozenWallets[wallet].scheduled) {
            IERC20Upgradeable(address(this)).safeTransfer(wallet, totalAmount);
        }

        // Create frozen wallets
        FrozenWallet memory frozenWallet = FrozenWallet(
            wallet,
            totalAmount,
            dailyAmount,
            initialAmount,
            releaseTime.add(afterDays),
            afterDays,
            true
        );

        // Add wallet to frozen wallets
        frozenWallets[wallet] = frozenWallet;
    }

    function getTimestamp() external view returns (uint256) {
        return block.timestamp;
    }

    function getDays(uint256 afterDays) public view returns (uint256) {
        uint256 releaseTime = getReleaseTime();
        uint256 time = releaseTime.add(afterDays);

        if (block.timestamp < time) {
            return 0;
        }

        uint256 diff = block.timestamp.sub(time);
        uint256 dias = diff.div(24 hours); // adapt this formula for days, not for month
		console.log("Calculate Diff: ", diff);
		console.log("Calculate Days: ", dias);
        return dias;
    }

    function isStarted(uint256 startDay) public view returns (bool) {
        uint256 releaseTime = getReleaseTime();

        if (block.timestamp < releaseTime || block.timestamp < startDay) {
            return false;
        }

        return true;
    }

    function getTransferableAmount(address sender) public view returns (uint256) {
        uint256 dias = getDays(frozenWallets[sender].afterDays);
        uint256 dailyTransferableAmount = frozenWallets[sender].dailyAmount.mul(dias);
        uint256 transferableAmount = dailyTransferableAmount.add(frozenWallets[sender].initialAmount);

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
