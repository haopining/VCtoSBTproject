import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useNetwork } from 'wagmi'
import { Button, Heading, Text, ListItem, UnorderedList } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { LinkComponent } from 'components/layout/LinkComponent'
import * as React from 'react'



function MintNFT({HashVC, VCurl}: { HashVC: string, VCurl: string }) {
  const { chain } = useNetwork()


  const prepareContractWrite = usePrepareContractWrite({
    // VCtoSBT example
    address: '0x6984358AA660A7F6Bbf548057b6f77bA73eF9d21',
    abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"HashVC","type":"string"},{"internalType":"address","name":"holderDID","type":"address"}],"name":"assignVCSBTOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"HashVC","type":"string"}],"name":"deleteVCSBTOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getSBTURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getSBTinfo","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"HashVC","type":"string"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"HashVC","type":"string"},{"internalType":"address","name":"newholderDID","type":"address"}],"name":"modifyVCSBTOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    functionName: 'mint',
    args: [HashVC, VCurl],
    enabled: Boolean(HashVC && VCurl),


  })
  const contractWrite = useContractWrite(prepareContractWrite.config)
  const waitForTransaction = useWaitForTransaction({ hash: contractWrite.data?.hash })

  const handleSendTransation = () => {
    contractWrite.write?.()
  }

  return (
    <div>
      <Heading as="h3" fontSize="xl" my={4}>
        Try out
      </Heading>
      <Button
        width="full"
        disabled={waitForTransaction.isLoading || contractWrite.isLoading || !contractWrite.write}
        mt={4}
        onClick={handleSendTransation}>
        {waitForTransaction.isLoading ? 'Minting SBT...' : contractWrite.isLoading ? 'Check your wallet' : 'Mint SBT'}
      </Button>
      {waitForTransaction.isError && (
        <div>
          <Text mt={2} fontSize="lg">
            Successfully Minted SBT!
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            <LinkComponent href={`https://goerli.etherscan.io/tx/${contractWrite.data?.hash}`}>Check on block explorer</LinkComponent>
          </Text>
        </div>)}
      {waitForTransaction.isSuccess && (
        <div>
          <Text mt={2} color="red" fontSize="lg">
            Error minting SBT
          </Text>
          <Text color="red" fontSize="lg" fontWeight="bold">
            {waitForTransaction.error?.message}
          </Text>
        </div>
      )}
    </div>
  )
}

export default function MintNFTExample() {
  const { isConnected } = useAccount()
  const [HashVC, setHashVC] = React.useState('')
  const [VCurl, setVCurl] = React.useState('')

  if (isConnected) {
    return (
      <div>
        <NextSeo title="Mint SBT" />
        <Heading as="h2" fontSize="2xl" my={4}>
          Mint Verifiable Credential to SBT
        </Heading>
        <p>This example shows how to mint a Verifiable Credential to SBT.</p>

        <><br /></>
        <UnorderedList>
          <ListItem>
            <LinkComponent href="https://docs.openzeppelin.com/contracts/3.x/erc721">HashVerifiableCredential(used SHA256)</LinkComponent>
          </ListItem>
          <input
            style={{ width: '1000px', height: '40px' }}
            id="hashVC"
            onChange={(e) => setHashVC(e.target.value)}
            placeholder="759472f510bed65000b8af9149670206b17a0db2464379883a7844e8e48e27c7"
            value={HashVC}
          />
          <><br /></>
          <ListItem>
            <LinkComponent href="https://wagmi.sh/examples/contract-write">URL</LinkComponent>
          </ListItem>
          <input
            style={{ width: '1000px', height: '40px' }}
            id="VCurl"
            onChange={(e) => setVCurl(e.target.value)}
            placeholder="https://aclab.tw/membercredential/01"
            value={VCurl}
/>


        </UnorderedList>

        <MintNFT HashVC={HashVC} VCurl={VCurl} />
      </div>
    )
  }

  return <div>Connect your wallet first to sign a message.</div>
}
