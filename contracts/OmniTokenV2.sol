// SPDX-License-Identifier: ISC

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;
pragma experimental ABIEncoderV2;

import "../lib/@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "../lib/main/Vesting.sol";


contract OmniTokenV2 is Initializable, Vesting{
	using AddressUpgradeable for address;
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;
	// Constant Max Total Supply of OMNI Social Media Network
 	uint256 private constant _maxTotalSupply = 638_888_889 * (uint256(10) ** uint256(18));

	function initialize() initializer() public {
		__Ownable_init();
		__ERC20_init_unchained('OMNI Coin', 'OMN');
		__Pausable_init_unchained();
		__ERC20Permit_init('OMNI Coin');

		// Mint Total Supply
		mint(getMaxTotalSupply());
		// Begininng Deploy of Allocation in the ERC20
		// Allocation #1 / VestingType # 0, Early Backers Total (6.94956521970783)% and Start with 31 days Locked the Token
		vestingTypes.push(VestingType(1930501930501930, 0, 31 days, 0, 0,  true, true)); // 31 Days Locked, 0.193050193050193 Percent daily for 518 days
		// Allocation #2 / VestingType # 1, Seed Total (9.39130435095652)% and Start with 31 days Locked the Token
		vestingTypes.push(VestingType(2188183807439820, 0, 31 days, 0, 0,  true, true)); // 30 Days Locked, 0.218818380743982 Percent daily for 457 days
		// Allocation #3 / VestingType # 2, Private Sale Total (9.52434782926174)%, Unlocked 10% when start the vesting, Start with 31 days Locked the Token and After (8.57191304633557)%
        vestingTypes.push(VestingType(2272727272727270, 100000000000000000, 31 days, 0, 0, true, true)); // 10% Unlocked when start, 31 Days Locked, 0.227272727272727 Percent daily for 396 Days for the 90% Rest
		// Allocation #4 / VestingType # 3, Public Sale Total (1.56521739182609)%, Unlocked 34% when start the vesting, Start with 0 days Locked the Token and After (33)% Monthly
        vestingTypes.push(VestingType(0, 340000000000000000, 0, 330000000000000000, 0, true, false)); // 34% Unlocked when start, 33% Percent Monthly for 2 months Rest
		// Allocation #5 / VestingType # 4, OMNI Team Total (10)% and Start After 274 days Locked the Token
		vestingTypes.push(VestingType(3636363636363640, 0, 274 days, 0, 0, true, true)); // 274 Days Locked, 0.363636363636364 Percent daily for 275 days
		// Allocation #6 / VestingType # 5, Advisors Total (5)% and Start After 31 days Locked the Token
		vestingTypes.push(VestingType(2525252525252530, 0, 31 days, 0, 0, true, true)); // 31 Days Locked, 0.2525252525252530 Percent daily for 396 days
		// Allocation #7 / VestingType # 6, Tech Partners Total (10)% Start After 365 days Locked the Token
		vestingTypes.push(VestingType(1562500000000000, 0, 365 days, 0, 0, true, true)); // 365 Days Locked, 0.15625 Percent daily for 640 days
		// Allocation #8 / VestingType # 7, Marketing Total (8)% Start After 184 days Locked the Token
		vestingTypes.push(VestingType(3663003663003660, 0, 184 days, 0, 0, true, true)); // 184 Days Locked, 0.366300366300366 Percent daily for 273 days
		// Allocation #9 / VestingType # 8, Foundation Total (5)% and Start After 274 days Locked the Token
		vestingTypes.push(VestingType(1562500000000000, 0, 274 days, 0, 0, true, true)); // 274 Days Locked, 0.15625 Percent daily for 640 days
		// Allocation #10 / VestingType # 9, Liquidity Total (3)% and Daily Rate in wei (0), Unlocked the all Token immediatly when Start the Vesting
		vestingTypes.push(VestingType(1000000000000000000, 1000000000000000000, 0, 0, 0, true, true)); // 0 Days 100 Percent
		// Allocation #11 / VestingType # 10, Ecosystem Total (20)% and Start After 92 days Locked the Token
		vestingTypes.push(VestingType(782472613458529, 0, 92 days, 0, 0, true, true)); // 92 Days Locked, 0.0783085356303837 Percent daily for 1278 days
		// Allocation #12 / VestingType # 11, Community Reserve Total (3)% and Start After 183 days Locked the Token
		vestingTypes.push(VestingType(843170320404722, 0, 184 days, 0, 0, true, true)); // 184 Days Locked, 0.0843170320404722 Percent daily for 1186 days
		// Allocation #13 / VestingType # 12, Company Reserve Total (8.56956520824781)% and Start After 273 days Locked the Token
		vestingTypes.push(VestingType(994035785288270, 0, 274 days, 0, 0, true, true)); // 274 Days Locked, 0.099403578528827 Percent daily for 1006 days

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
			require(amounts[i] != 0, "ERC20 OMN: total amount token is zero");
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
	function circulatingSupply() public view returns (uint256 result) {
		uint256 index = omni_wallets.length;
		result = totalSupply().sub(balanceOf(owner()));
		for (uint256 i=0; i < index ; i++ ) {
			if ((omni_wallets[i] != address(0)) && (result != 0)) {
				result -= balanceOf(omni_wallets[i]);
			}
		}
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
     * @dev Destroys `amount` tokens from the caller.
     * @param amount Amount token to burn
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
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

		if(balance.sub(restAmount) < amount) {
			return false;
		}

        return true;
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
		// Permit the Owner execute token transfer/mint/burn while paused contract
		if (_msgSender() != owner()) {
			require(!paused(), "ERC20 OMN: token transfer/mint/burn while paused");
		}
        require(canTransfer(sender, amount), "ERC20 OMN: Wait for vesting day!");
        super._beforeTokenTransfer(sender, recipient, amount);
    }

	/**
     * @dev Override the Standard Transfer Method of Open Zeppelin for checking before if Transfer status is Enabled or Disable.
	 * @param sender Addres of Sender of the token
	 * @param recipient Address of Receptor of the token
     * @param amount Amount token to transfer/transferFrom/mint/burn
     * See {https://github.com/ShieldFinanceHQ/contracts/blob/master/contracts/ShieldToken.sol}.
     */
	function _transfer(address sender, address recipient, uint256 amount) internal override {
        if (isTransferDisabled()) {
            // anti-sniping bot defense is on
            // burn tokens instead of transferring them >:]
            super._burn(sender, amount);
            emit TransferBurned(sender, amount);
        } else {
            super._transfer(sender, recipient, amount);
        }
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
