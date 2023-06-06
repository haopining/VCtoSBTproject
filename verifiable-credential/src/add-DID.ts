import { agent } from './veramo/setup.js'
import { TKeyType } from '@veramo/core'
const importedDID = {
    did: 'did:ethr:goerli:0x58DdD58E469d9fF33d0a2e9763E7940fd5aD0776',
    provider: 'did:ethr:goerli',
    controllerKeyId: 'imported',
    keys: [
      {
        kid: 'imported',
        kms: 'local',
        type: 'Secp256k1' as TKeyType,
        publicKeyHex: 'd54d90d103f7ccd2ff2eb7d1ef6b1d776e3ee3c839b5cfef31420cf2410704f66964a96923e9e664abaaca0b55dac7de95047674c3eb60a3e0b58ab369e41a46',
        privateKeyHex: '2bd8b490008adfe9dfbe03c3007323718815e7e2b0ed1924ee293c70602d8a9b',
      },
    ],
    services: [],
  }
  

async function main() {
  const identifier = await agent.didManagerImport(importedDID)
  console.log(`DID add successfully`)
  console.log(JSON.stringify(importedDID, null, 2))
}

main().catch(console.log)
