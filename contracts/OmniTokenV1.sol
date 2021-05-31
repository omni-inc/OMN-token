// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity ^0.8.2;
pragma experimental ABIEncoderV2;

import "../lib/@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../lib/main/Claimable.sol";
import "../lib/main/CirculatingSupply.sol";
import "../lib/main/Vesting.sol";
import "hardhat/console.sol";

contract OmniTokenV1 is Initializable, Claimable, CirculatingSupply, Vesting {
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;
	// Constant Max Total Supply of OMNI Social Media Network
 	uint256 private constant _maxTotalSupply = 638_888_889 * (uint256(10) ** uint256(18));

	function initialize(string memory _greeting) initializer() public {
		__Ownable_init();
		__ERC20_init_unchained('OMNI App', 'OMN');
		__Pausable_init_unchained();
		__ERC20Permit_init('OMNI App');

		// Mint Total Supply
		mint(getMaxTotalSupply());
		console.log("Deploying Vesting Types");
		// Begininng Deploy of Allocation in the ERC20
		// Allocation #1 / VestingType # 0, Early Backers Total (6.9565217)% and Start After 30 days Locked the Token
		vestingTypes.push(VestingType(1930501930501930, 0, 30 days, true)); // 30 Days Locked, 0.193050193050193 Percent daily for 518 days
		// Allocation #2 / VestingType # 1, Seed Total (9.3913044)% and Start After 30 days Locked the Token
		vestingTypes.push(VestingType(2188183807439820, 0, 30 days, true)); // 30 Days Locked, 0.218818380743982 Percent daily for 457 days
		// Allocation #3 / VestingType # 2, Private Total (8.21739132)%, Unlocked 10% when start the vesting, Start with 30 days Locked the Token and After (8.21739132)%
        vestingTypes.push(VestingType(2272727272727270, 100000000000000000, 30 days, true)); // 10% Unlocked when start, 30 Days Locked, 0.227272727272727 Percent daily for 396 Days for the 90% Rest
		// Allocation #4 Public (1.3043478)% /#10 Liquidity (3)% / VestingType # 3, and Daily Rate in wei (0), Unlocked the all Token immediatly when Start the Vesting
        vestingTypes.push(VestingType(100000000000000000000, 100000000000000000000, 0, true)); // 0 Days 100 Percent
		// Allocation #5 / VestingType # 4, OMNI Team Total (10)% and Start After 273 days Locked the Token
		vestingTypes.push(VestingType(3636363636363640, 0, 273 days, true)); // 273 Days Locked, 0.363636363636364 Percent daily for 275 days
		// Allocation #6 / VestingType # 5, Advisors Total (5)% and Start After 30 days Locked the Token
		vestingTypes.push(VestingType(2525252525252530, 0, 30 days, true)); // 30 Days Locked, 0.2525252525252530 Percent daily for 396 days
		// Allocation #7 / VestingType # 6, Marketing Total (10)% Start After 122 days Locked the Token
		vestingTypes.push(VestingType(2985074626865670, 0, 122 days, true)); // 122 Days Locked, 0.2985074626865670 Percent daily for 335 days
		// Allocation #8 / VestingType # 7, Foundation Total (8)% Start After 273 days Locked the Token
		vestingTypes.push(VestingType(1562500000000000, 0, 273 days, true)); // 273 Days Locked, 0.15625 Percent daily for 640 days
		// Allocation #9 / VestingType # 8, Tech Partners Total (5)% and Start After 365 days Locked the Token
		vestingTypes.push(VestingType(1564945226917060, 0, 365 days, true)); // 365 Days Locked, 0.1564945226917060 Percent daily for 639 days
		// Allocation #11 / VestingType # 9, Ecosystem Total (20)% and Start After 92 days Locked the Token
		vestingTypes.push(VestingType(783085356303837, 0, 92 days, true)); // 92 Days Locked, 0.0783085356303837 Percent daily for 1277 days
		// Allocation #12 / VestingType # 10, Community Reserve Total (3)% and Start After 183 days Locked the Token
		vestingTypes.push(VestingType(843170320404722, 0, 183 days, true)); // 183 Days Locked, 0.0843170320404722 Percent daily for 1186 days
		// Allocation #13 / VestingType # 11, Company Reserve Total (9.21739127442027)% and Start After 273 days Locked the Token
		vestingTypes.push(VestingType(994035785288270, 0, 273 days, true)); // 273 Days Locked, 0.099403578528827 Percent daily for 1006 days

		//Finish Deploy of Allocation in the ERC20
		console.log("Deploying a OMN Token: ", _greeting);
	}

	/**
     * @dev This Method permit getting Maximun total Supply .
     * See {ERC20-_burn}.
     */
	function getMaxTotalSupply() public pure returns (uint256) {
		return _maxTotalSupply;
	}

	/**
     * @dev Implementation / Instance of TransferMany of Parsiq Token.
	 * @dev This method permitr to habdle AirDrop process with a reduce cost of gas in at least 30%
     * @param recipients Array of Address to receive the Tokens in AirDrop process
	 * @param amounts Array of Amounts of token to receive
     * See {https://github.com/parsiq/parsiq-bsc-token/blob/main/contracts/ParsiqToken.sol}.
     */

	function transferMany(address[] calldata recipients, uint256[] calldata amounts)
        external
	    onlyOwner()
		whenNotPaused()
    {
        require(recipients.length == amounts.length, "ERC20 OMN: Wrong array length");

        uint256 total = 0;
        for (uint256 i = 0; i < amounts.length; i++) {
			address recipient = recipients[i];
			require(recipient != address(0), "ERC20: transfer to the zero address");
			require(!isBlacklisted(recipient), "ERC20 OMN: recipient account is blacklisted");
			require(amounts[i] != uint(0), "ERC20 OMN: total amount token is zero");
            total = total.add(amounts[i]);
        }

	    _balances[msg.sender] = _balances[msg.sender].sub(total, "ERC20: transfer amount exceeds balance");

        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            uint256 amount = amounts[i];

            _balances[recipient] = _balances[recipient].add(amount);
            emit Transfer(msg.sender, recipient, amount);
        }
    }

	/**
     * @dev Circulating Supply Method for Calculated based on Wallets of OMNI Foundation
     */
	function circulatingSupply() public view returns (uint256) {
		uint256 index = omni_wallets.length;
		uint256 result = totalSupply().sub(balanceOf(owner()));
		for (uint256 i=0; i < index ; i++ ) {
			if ((omni_wallets[i] != address(0)) && (result != uint256(0))) {
				result -= balanceOf(omni_wallets[i]);
			}
		}
		return result;
	}

	/**
     * @dev Implementation / Instance of paused methods() in the ERC20.
     * @param status Setting the status boolean (True for paused, or False for unpaused)
     * See {ERC20Pausable}.
     */
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
     * @param account Address where the caller's allowance to burn the tokens
	 * @param amount Amount tokens to burn
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
     * @param amount Amount token to burn
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public virtual {
        _burn(_msgSender(), amount);
    }

	/**
     * @dev Override the Hook of Open Zeppelin for checking before execute the method transfer/transferFrom/mint/burn.
	 * @param sender Addres of Sender of the token
	 * @param recipient Address of Receptor of the token
     * @param amount Amount token to transfer/transferFrom/mint/burn
     * See {ERC20 Upgradeable}.
     */
	function _beforeTokenTransfer(address sender, address recipient, uint256 amount) internal virtual override notBlacklisted(sender) {
		require(!isBlacklisted(recipient), "ERC20 OMN: recipient account is blacklisted");
		require(!paused(), "ERC20Pausable: token transfer/mint/burn while paused");
        require(canTransfer(sender, amount), "ERC20 OMN: Wait for vesting day!");
        super._beforeTokenTransfer(sender, recipient, amount);
    }

	/**
     * @dev Override the Hook of Open Zeppelin for checking before execute the method transfer/transferFrom/mint/burn.
	 * @param sender Addres of Sender of the token
     * @param amount Amount token to transfer/transferFrom/mint/burn, Verify that in hook _beforeTokenTransfer
     */
	function canTransfer(address sender, uint256 amount) public view returns (bool) {
        // Control is scheduled wallet
        if (!frozenWallets[sender].scheduled) {
            return true;
        }

        uint256 balance = balanceOf(sender);
        uint256 restAmount = getRestAmount(sender);

        if (balance > frozenWallets[sender].totalAmount && balance.sub(frozenWallets[sender].totalAmount) >= amount) {
            return true;
        }

        if (!isStarted(frozenWallets[sender].startDay) || balance.sub(amount) < restAmount) {
            return false;
        }

        return true;
	}

	/**
     * @dev Creates `amount` new tokens for `to`.
	 * @param _amount Amount Token to mint
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
}
