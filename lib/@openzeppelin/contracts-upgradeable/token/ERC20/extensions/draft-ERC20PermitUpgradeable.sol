// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./draft-IERC20PermitUpgradeable.sol";
import "../ERC20Upgradeable.sol";
import "../../../utils/cryptography/draft-EIP712Upgradeable.sol";
import "../../../utils/cryptography/ECDSAUpgradeable.sol";
import "../../../utils/CountersUpgradeable.sol";
import "../../../utils/AddressUpgradeable.sol";
import "../../../proxy/utils/Initializable.sol";
import "../../../interfaces/IERC1271Upgradeable.sol";
import "hardhat/console.sol";

/**
 * @dev Implementation of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
 * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].
 *
 * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by
 * presenting a message signed by the account. By not relying on `{IERC20-approve}`, the token holder account doesn't
 * need to send a transaction, and thus is not required to hold Ether at all.
 *
 * _Available since v3.4._
 */
abstract contract ERC20PermitUpgradeable is Initializable, ERC20Upgradeable, IERC20PermitUpgradeable, EIP712Upgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    mapping (address => CountersUpgradeable.Counter) private _nonces;

    // solhint-disable-next-line var-name-mixedcase
    bytes32 private _PERMIT_TYPEHASH;

    /**
     * @dev Initializes the {EIP712} domain separator using the `name` parameter, and setting `version` to `"1"`.
     *
     * It's a good idea to use the same `name` that is defined as the ERC20 token name.
     */
    function __ERC20Permit_init(string memory name) internal initializer {
        __Context_init_unchained();
        __EIP712_init_unchained(name, "1");
        __ERC20Permit_init_unchained(name);
    }

    function __ERC20Permit_init_unchained(string memory name) internal initializer {
        _PERMIT_TYPEHASH = keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    }

    /**
     * @dev See {IERC20Permit-permit}.
     */
    function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual override {
        // solhint-disable-next-line not-rely-on-time
        require(block.timestamp <= deadline, "ERC20Permit: expired deadline");

        bytes32 structHash = keccak256(
            abi.encode(
                _PERMIT_TYPEHASH,
                owner,
                spender,
                value,
                _useNonce(owner),
                deadline
            )
        );

        bytes32 hash = _hashTypedDataV4(structHash);
		bytes memory signature = rsvToSig(r,s,v);

        // address signer = ECDSAUpgradeable.recover(hash, v, r, s);
		if (AddressUpgradeable.isContract(owner)) {
            try IERC1271Upgradeable(owner).isValidSignature(hash, signature) returns (bytes4 magicValue) {
                require(magicValue == IERC1271Upgradeable(owner).isValidSignature.selector, "ERC20Permit: invalid signature");
            } catch {
                revert("ERC20Permit: invalid signature");
            }
        } else {
            require(ECDSAUpgradeable.recover(hash, v, r, s) == owner , "ERC20Permit: invalid signature");
        }

        _approve(owner, spender, value);
    }

    /**
     * @dev See {IERC20Permit-nonces}.
     */
    function nonces(address owner) public view virtual override returns (uint256) {
        return _nonces[owner].current();
    }

    /**
     * @dev See {IERC20Permit-DOMAIN_SEPARATOR}.
     */
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view override returns (bytes32) {
        return _domainSeparatorV4();
    }

    /**
     * @dev "Consume a nonce": return the current value and increment.
     *
     * _Available since v4.1._
     */
    function _useNonce(address owner) internal virtual returns (uint256 current) {
        CountersUpgradeable.Counter storage nonce = _nonces[owner];
        current = nonce.current();
        nonce.increment();
    }
    uint256[49] private __gap;

	 /* bytes32 (fixed-size array) to bytes (dynamically-sized array) */
    function rsvToSig(bytes32 _a, bytes32 _b, uint8 _c) public returns (bytes memory){
        // string memory str = string(_bytes32);
        // TypeError: Explicit type conversion not allowed from "bytes32" to "string storage pointer"
        bytes memory bytesArray = new bytes(65);
        for (uint256 i; i < 32; i++) {
            bytesArray[i] = _a[i];
        }
		for (uint256 i=32; i < 64; i++) {
            bytesArray[i] = _b[i-32];
        }
		bytes32 b;
		assembly  { mstore(add(b,32),_c)}
		bytesArray[64] = b[31];
		console.logBytes32( _a);
		console.logBytes32( _b);
		console.logUint(_c);
		console.logBytes(bytesArray);
        return bytesArray;
    }//
}
