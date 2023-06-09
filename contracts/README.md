# Smart Contracts

This project demonstrates how to add smart contracts to your project using [Hardhat](https://hardhat.org/docs).

Try running some of the following tasks:

```
yarn add --dev hardhat
yarn build
```

## Deploy

Once you're ready to deploy your contracts, setup a deployer account using `DEPLOYER_KEY` and try to run e.g.

```
yarn deploy --network goerli
```


## Verify

Contracts are automatically verified on Etherscan if you've set up the `ETHERSCAN_API_KEY` environment variable. You can also verify contracts manually using

```
yarn verify
```
