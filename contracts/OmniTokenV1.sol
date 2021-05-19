// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;

import "../lib/@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../lib/main/Blacklistable.sol";
import "../lib/main/Claimable.sol";
import "hardhat/console.sol";


contract OmniTokenV1 is Initializable, Claimable, Blacklistable, PausableUpgradeable, ERC20PermitUpgradeable {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;
	// Constant Max Total Supply of OMNI Social Media Network
 	uint256 private constant _maxTotalSupply = 1_000_000_000 * (uint256(10) ** uint256(18));

	function initialize(string memory _greeting) initializer() public {
		__Ownable_init();
		__ERC20_init_unchained('OMNI App', 'OMNI');
		__Pausable_init_unchained();
		__ERC20Permit_init('OMNI App');

		// Mint Total Supply
		mint(getMaxTotalSupply());

		console.log("Deploying a OMN Token: ", _greeting);
	}

	function getMaxTotalSupply() public pure returns (uint256) {
		return _maxTotalSupply;
	}

	function canTransfer(address sender, uint256 amount) public view returns (bool) {
		return true;
	}

	function transferMany(address[] calldata recipients, uint256[] calldata amounts)
        external
	    onlyOwner()
		whenNotPaused()
    {
        require(recipients.length == amounts.length, "ERC20 OMN: Wrong array length");

        uint256 total = 0;
        for (uint256 i = 0; i < amounts.length; i++) {
            total = total.add(amounts[i]);
        }

	    _balances[msg.sender] = _balances[msg.sender].sub(total, "ERC20: transfer amount exceeds balance");

        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            uint256 amount = amounts[i];
            require(recipient != address(0), "ERC20: transfer to the zero address");

            _balances[recipient] = _balances[recipient].add(amount);
            emit Transfer(msg.sender, recipient, amount);
        }
    }

    function pause(bool status) public onlyOwner() {
        if (status) {
            _pause();
        } else {
            _unpause();
        }
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance.
     *
     * See {ERC20-_burn} and {ERC20-allowance}.
     *
     * Requirements:
     *
     * - the caller must have allowance for ``accounts``'s tokens of at least
     * `amount`.
     */
    function burnFrom(address account, uint256 amount) public virtual {
        uint256 currentAllowance = allowance(account, _msgSender());
        require(currentAllowance >= amount, "ERC20: burn amount exceeds allowance");
        _approve(account, _msgSender(), currentAllowance - amount);
        _burn(account, amount);
    }

	/**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public virtual {
        _burn(_msgSender(), amount);
    }

	/**
     * @dev Creates `amount` new tokens for `to`.
     *
     * See {ERC20-_mint}.
     *
     * Requirements:
     *
     * - the caller must have the `OWNER`.
		 * - After upgrade the SmartContract and Eliminate this method
     */
    function mint( uint256 _amount) public onlyOwner() {
		require(getMaxTotalSupply() >= totalSupply().add(_amount), "ERC20: Can't Mint, it exceeds the maximum supply ");
        _mint(owner(), _amount);
    }

		// @override
	function _beforeTokenTransfer(address sender, address recipient, uint256 amount) internal virtual override notBlacklisted(sender) {
		require(!isBlacklisted(recipient), "ERC20 OMN: recipient account is blacklisted");
		require(!paused(), "ERC20Pausable: token transfer/mint/burn while paused");
        require(canTransfer(sender, amount), "ERC20 OMN: Wait for vesting day!");
        super._beforeTokenTransfer(sender, recipient, amount);
    }
}
