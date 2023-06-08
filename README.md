## Getting Started 👀

a simple project for Verifiable credential to Soulbound Token 

## Pre

1. 先到 contracts 資料夾 compile 及 deploy 合約（/contracts 有 README）

合約地址（範例）：0x6984358AA660A7F6Bbf548057b6f77bA73eF9d21

2. 產生 Verifiable Credential （已預先使用 Veramo API 產生出 Verifiable Credential）

Issuer address: 0x58DdD58E469d9fF33d0a2e9763E7940fd5aD0776

Holder address: 0x55Ceea9fd83798a54D16B4FA4eC63Ce5a7D751c7

## Frontend
# 注意：NEVER SHARE OR COMMIT YOUR PRIVATE KEYS TO GITHUB 

要新增自己的 .env，檔案內容如下
```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID='12345' //與 ethereum 溝通的節點 APIkey(ex. Infura)
DEPLOYER_KEY='123' //帳戶私鑰
ETHERSCAN_API_KEY='123' //需註冊 etherscan
```

Run frontend server
```bash
npm run dev
# or
yarn dev
```


