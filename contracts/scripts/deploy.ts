import { ethers, network, run } from 'hardhat'

async function main() {
  console.log('Deploying VCtoSBT...')

  const args: any[] = []
  const VCtoSBT = await ethers.getContractFactory('VCtoSBT')
  const vctosbt = await VCtoSBT.deploy(...args)

  await vctosbt.deployed()

  console.log(`VCtoSBT deployed to ${vctosbt.address}`)

  // no need to verify on localhost or hardhat
  if (network.config.chainId != 31337 && process.env.ETHERSCAN_API_KEY) {
    console.log(`Waiting for block confirmation...`)
    await vctosbt.deployTransaction.wait(5)

    console.log('Verifying contract...')
    try {
      run('verify:verify', {
        address: vctosbt.address,
        constructorArguments: args,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
