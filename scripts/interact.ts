import { ethers } from "hardhat";

async function main() {
  const [signer1] = await ethers.getSigners();

  const lmaoTokenAddr = "0x0D3482DA85e91AAFDAe421C358DC7b3314F56934";

  const lmaoToken = await ethers.getContractAt(
    "IERC20",
    "0x0D3482DA85e91AAFDAe421C358DC7b3314F56934"
  );

  const lolToken = await ethers.getContractAt(
    "ILol",
    "0xceb74326afcbf68ace376e9135e30f3b9fb7f502"
  );

  const amount = ethers.parseEther("1000");

  await lmaoToken.approve(lolToken, amount);

  console.log(await lmaoToken.allowance(signer1.address, lolToken));

  const amount2 = ethers.parseEther("100");

  await lolToken.deposit(amount2);

  console.log(await lolToken.balanceOf(signer1.address));
  console.log(await lmaoToken.balanceOf(lolToken));

  const amount3 = ethers.parseEther("92");

  await lolToken.withdraw(amount3);

  console.log(await lolToken.balanceOf(signer1.address));
  console.log(await lmaoToken.balanceOf(lolToken));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
