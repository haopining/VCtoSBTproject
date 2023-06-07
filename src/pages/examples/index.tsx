import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { CardList } from 'components/layout/CardList'
import { Code, Text } from '@chakra-ui/react'

import NFTIcon from 'assets/icons/nft.png'


export const ExampleItems = [
 
  {
    title: 'Mint SBT',
    description: 'Use this example to mint your own SBT.',
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
