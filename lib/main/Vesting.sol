// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.2;

import "../@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "../@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "../main/Blacklistable.sol";
import "hardhat/console.sol";
import "./Math.sol";

struct FrozenWallet {
	bool scheduled;
	uint32 startDay;
    uint32 afterDays;
    address wallet;
    uint256 totalAmount;
    uint256 dailyAmount;
    uint256 initialAmount;
}

struct VestingType {
    uint256 dailyRate;
    uint256 initialRate;
    uint256 afterDays;
	bool vesting;
}

contract Vesting is OwnableUpgradeable, Math, Blacklistable, PausableUpgradeable, ERC20PermitUpgradeable {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	using SafeMathUpgradeable for uint32;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	// Mapping of FrozenWallet
	// Address Wallets -> Struc FrozenWallet
	mapping (address => FrozenWallet) public frozenWallets;
	// Array of Struc Vesting Types
    VestingType[] public vestingTypes;

	// Event
	event inFrozenWallet(
		bool scheduled,
		uint32 startDay,
		uint32 afterDays,
		address indexed wallet,
		uint256 indexed totalAmount,
		uint256 dailyAmount,
		uint256 initialAmount
	);

	function getReleaseTime() public pure returns (uint256) {
        return 1622548800; // "Tuesday, 1 June 2021 12:00:00 GMT"
    }

    function addAllocations(address[] calldata addresses, uint256[] calldata totalAmounts, uint256 vestingTypeIndex) external payable onlyOwner() whenNotPaused() returns (bool) {
        require(addresses.length == totalAmounts.length, "Address and totalAmounts length must be same");
        require(vestingTypes[vestingTypeIndex].vesting, "Vesting type isn't found");

        VestingType memory vestingType = vestingTypes[vestingTypeIndex];
        uint256 addressesLength = addresses.length;
		uint256 total = 0;

		for(uint256 i = 0; i < addressesLength; i++) {
			address _address = addresses[i];
			require(_address != address(0), "ERC20: transfer to the zero address");
			require(!isBlacklisted(_address), "ERC20 OMN: recipient account is blacklisted");
			require(totalAmounts[i] != uint(0), "ERC20 OMN: total amount token is zero");
			total = total.add(totalAmounts[i]);
		}

	    _balances[msg.sender] = _balances[msg.sender].sub(total, "ERC20: transfer amount exceeds balance");

        for(uint256 j = 0; j < addressesLength; j++) {
            address _address = addresses[j];
            uint256 totalAmount = totalAmounts[j];
            uint256 dailyAmount = mulDiv(totalAmounts[j], vestingType.dailyRate, 1000000000000000000);
            uint256 initialAmount = mulDiv(totalAmounts[j], vestingType.initialRate, 1000000000000000000);
            uint256 afterDay = vestingType.afterDays;

			// Transfer Token to the Wallet
            _balances[_address] = _balances[_address].add(totalAmount);
            emit Transfer(msg.sender, _address, totalAmount);

			// Frozen Wallet
            addFrozenWallet(_address, totalAmount, dailyAmount, initialAmount, afterDay);
        }

        return true;
    }

	function addFrozenWallet(address wallet, uint256 totalAmount, uint256 dailyAmount, uint256 initialAmount, uint256 afterDays) internal whenNotPaused() {
        uint256 releaseTime = getReleaseTime();

        // Create frozen wallets
        FrozenWallet memory frozenWallet = FrozenWallet(
			true,
			uint32(releaseTime.add(afterDays)),
            uint32(afterDays),
            wallet,
            totalAmount,
            dailyAmount,
            initialAmount
        );

        // Add wallet to frozen wallets
        frozenWallets[wallet] = frozenWallet;

		// emit Event add Frozen Wallet
		emit inFrozenWallet(
			true,
			uint32(releaseTime.add(afterDays)),
            uint32(afterDays),
			wallet,
            totalAmount,
            dailyAmount,
            initialAmount);
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
		uint256 releaseTime = getReleaseTime();

		if (block.timestamp < releaseTime) {
            return 0;
        }

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
