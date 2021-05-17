//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";


contract OmniTokenV2 is Initializable, OwnableUpgradeable, ERC20PausableUpgradeable {
  string greeting;

  function initialize(string memory _greeting) initializer public {
        __Ownable_init();
        __ERC20_init('OMNI App', 'OMNI');
        __ERC20Pausable_init();

    console.log("Deploying a OMNI Token: ", _greeting);
    greeting = _greeting;
  }
}
