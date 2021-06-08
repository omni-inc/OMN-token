// SPDX-License-Identifier: ISC

/// @title OMNI Token V1 / Ethereum v1
/// @author Alfredo Lopez / Arthur Miranda / OMNI App 2021.5 */

pragma solidity 0.8.4;

//** remove previous contract and create standard ERC20 contract */
import "../lib/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/interfaces/IERC1271Upgradeable.sol";
import "../lib/@openzeppelin/contracts-upgradeable/utils/cryptography/ECDSAUpgradeable.sol";
import "hardhat/console.sol";

contract ERC20Token is OwnableUpgradeable, ERC20Upgradeable {

	using ECDSAUpgradeable for bytes32;

    function initialize() initializer public {
        __ERC20_init('ERC20 Token', 'WETH');
		__Ownable_init();
    }

    function mintToWallet(address address_, uint256 amount)
        public
        payable
        returns (bool)
    {
        _mint(address_, amount);
        return true;
    }

    // Valid magic value bytes4(keccak256("isValidSignature(bytes32,bytes)")
    bytes4 private constant _VALID_SIG = 0x1626ba7e;
    // Invalid magic value
    bytes4 private constant _INVALID_SIG = 0xffffffff;

    function isValidSignature(bytes32 messageHash, bytes memory signature)
        public
        view
        returns (bytes4)
    {
        require(signature.length == 65, "ERC1271: Invalid signature length");
        address signer = messageHash.recover(signature);
        return signer == OwnableUpgradeable(msg.sender).owner() ? _VALID_SIG : _INVALID_SIG;
    }
}
