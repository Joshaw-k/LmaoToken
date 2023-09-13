// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LoLToken is ERC20 {
    address LmaoToken;

    constructor(address _lmaoToken) ERC20("LoLToken", "LLK") {
        LmaoToken = _lmaoToken;
    }

    function deposit(uint amount) external {
        IERC20(LmaoToken).transferFrom(msg.sender, address(this), amount);
        uint receiptToken = 92 * amount / 100;
        _mint(msg.sender,receiptToken);
    }

    function withdraw(uint amount) external {
        require(balanceOf(msg.sender) >= amount,"Don't have enough to withdraw");
        IERC20(LmaoToken).transfer(msg.sender, amount);
        _burn(msg.sender, amount);
    }
}