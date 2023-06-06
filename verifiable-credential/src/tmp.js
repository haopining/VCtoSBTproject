import { privateToPublic } from 'ethereumjs-util';

// Let's say you have your private key as a hex string
let privateKeyHex = '2bd8b490008adfe9dfbe03c3007323718815e7e2b0ed1924ee293c70602d8a9b';
let privateKeyBuffer = Buffer.from(privateKeyHex, 'hex');

// Now, you can derive your public key
let publicKeyBuffer = privateToPublic(privateKeyBuffer);
let publicKeyHex = publicKeyBuffer.toString('hex');

console.log('Public Key:', publicKeyHex);