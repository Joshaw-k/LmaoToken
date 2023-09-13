import { ethers } from "hardhat";

async function main() {
  // const lmaoToken = await ethers.deployContract("LmaoToken", []);

  // await lmaoToken.waitForDeployment();

  // console.log(lmaoToken.target);

  const lolToken = await ethers.deployContract("LoLToken", [
    "0x0D3482DA85e91AAFDAe421C358DC7b3314F56934",
  ]);

  await lolToken.waitForDeployment();

  console.log(lolToken.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
