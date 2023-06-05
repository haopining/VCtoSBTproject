import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { CardList } from 'components/layout/CardList'
import { Code, Text } from '@chakra-ui/react'

import AuthIcon from 'assets/icons/auth.png'
import NFTIcon from 'assets/icons/nft.png'


export const ExampleItems = [
  {
    title: 'Sign-in with Ethereum',
    description: 'Sign-in with Ethereum is a new form of authentication that enables users to control their identity with their Ethereum account.',
    image: AuthIcon.src,
    url: '/examples/siwe',
  },
  {
    title: 'Mint NFT',
    description: 'A Non-Fungible Token (NFT) is used to identify something or someone in a unique way. Use this ERC721 example to mint your own NFT.',
    image: NFTIcon.src,
    url: '/examples/mint-nft',
  }
]

export default function Examples() {
  return (
    <>
      <Head />

      <main>
        <HeadingComponent as="h2">Nexth Examples</HeadingComponent>
        <Text pb={4}>
          All these examples can be found in the main repo at <Code>src/pages/examples</Code> to help you bootstrap development. You can delete the
          entire folder before deploying your own App.{' '}
        </Text>

        <CardList title="Examples" items={ExampleItems} />
      </main>
    </>
  )
}
