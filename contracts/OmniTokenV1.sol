//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/presets/ERC20PresetFixedSupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";


contract OmniTokenV1 is Initializable, OwnableUpgradeable, ERC20PausableUpgradeable, ERC20PresetFixedSupplyUpgradeable {
	string greeting;

	function initialize(string memory _greeting) initializer public {
		__Ownable_init();
		__ERC20_init('OMNI App', 'OMNI');
		__ERC20Pausable_init();

		console.log("Deploying a OMNI Token: ", _greeting);
		greeting = _greeting;
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
    function mint( uint256 amount) public onlyOwner() {
        _mint(owner(), amount);
    }
}
