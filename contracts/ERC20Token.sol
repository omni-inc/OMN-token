// SPDX-License-Identifier: MIT

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.2;

//** remove previous contract and create standard ERC20 contract */
import "../lib/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ERC20Token is ERC20Upgradeable {

    function initialize() initializer public {
        __ERC20_init('ERC20 Token', 'WETH');
    }

    function mintToWallet(address address_, uint256 amount)
        public
        payable
        returns (bool)
    {
        _mint(address_, amount);
        return true;
    }
}
