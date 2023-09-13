// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ILol {
    function deposit(uint amount) external;
    function withdraw(uint amount) external;
    function balanceOf(address _owner) external view returns (uint256 balance);
    function approve(address spender, uint rawAmount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}