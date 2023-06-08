import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      "credentialSubject": {
        "you": "CPH",
        "university": "NCCU",
        "department": "Computer Science",
        "lab": "Applied Cryptography Lab",
        "degree": "2022 Master",
        "ethaddress": "0x55Ceea9fd83798a54D16B4FA4eC63Ce5a7D751c7",
        "id": "did:web:aclab.tw/membercredential/08"
      },
      "issuer": {
        "id": "did:ethr:goerli:0x58DdD58E469d9fF33d0a2e9763E7940fd5aD0776"
      },
      "type": [
        "VerifiableCredential"
      ],
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "issuanceDate": "2023-06-08T10:01:33.000Z",
      "proof": {
        "type": "JwtProof2020",
        "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IkNQSCIsInVuaXZlcnNpdHkiOiJOQ0NVIiwiZGVwYXJ0bWVudCI6IkNvbXB1dGVyIFNjaWVuY2UiLCJsYWIiOiJBcHBsaWVkIENyeXB0b2dyYXBoeSBMYWIiLCJkZWdyZWUiOiIyMDIyIE1hc3RlciIsImV0aGFkZHJlc3MiOiIweDU1Q2VlYTlmZDgzNzk4YTU0RDE2QjRGQTRlQzYzQ2U1YTdENzUxYzcifX0sInN1YiI6ImRpZDp3ZWI6YWNsYWIudHcvbWVtYmVyY3JlZGVudGlhbC8wOCIsIm5iZiI6MTY4NjIxODQ5MywiaXNzIjoiZGlkOmV0aHI6Z29lcmxpOjB4NThEZEQ1OEU0NjlkOWZGMzNkMGEyZTk3NjNFNzk0MGZkNWFEMDc3NiJ9.wYmzuH4p0KRkPLbxpy2e2dQiy5TgOMvds5oHC-13CBnVnKX1W5rks_BZDCrrxeKoUYXQ1y4o19hFriAfLjCC5Q"
      }
    }
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)
