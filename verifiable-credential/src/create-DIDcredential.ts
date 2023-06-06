import { IDIDManagerGetArgs } from '@veramo/core';
import { agent } from './veramo/setup.js'

async function main() {
  const did = 'did:ethr:goerli:0x58DdD58E469d9fF33d0a2e9763E7940fd5aD0776'
  const identifier = await agent.didManagerGet({ did: did } as IDIDManagerGetArgs);

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      type: ["VerifiableCredential"],
      credentialSubject: {
        you: 'CPH',
        university: 'NCCU',
        department: 'Computer Science',
        lab: 'Applied Cryptography Lab',
        degree: '2022 Master',
        ethaddress: '0x55Ceea9fd83798a54D16B4FA4eC63Ce5a7D751c7',
        id: 'did:web:aclab.tw/membercredential/01'
      },
    },
    proofFormat: 'jwt',
  })
  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)