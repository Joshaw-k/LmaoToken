// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LmaoToken is ERC20 {
    address public owner;
    constructor() ERC20("LmaoToken", "LTK") {
        owner = msg.sender;
        _mint(owner, 1_000_000e18);
    }

    function _transfer(address from, address to, uint amount) internal virtual override {
        uint transferFee = 8 * amount / 100;
        uint transferAmount = amount - transferFee;
        super._transfer(from,to,transferAmount);
        super._transfer(from,owner,transferFee);
    }
}