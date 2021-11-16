require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan raise magic concert grace only equal gaze'; 
let testAccounts = [
"0x96214373276f05138a0c003b361436c247abb26e4a87a390e16bd10d9ced62d6",
"0xb0365fd426a0507efa85b1265da12a2505d45751a43a50a42975d83d85ad2081",
"0xce4ef8009ea83e1a9a959dedba002fd483453ed1b883327b91bc9cf28d8210ef",
"0xebfd25f1a8ef1bf03efa2b716f375fe4eba4cbb5da6b22a33ee30bc0eeb54d77",
"0xb546ad9f8dfe0c84db5976e37b05da598ff157eb4ff09c888882464b7c2972fc",
"0xd37aa70dde7b2b0fedef113112a6be8fb4ea3124025d61a914208ebbdd980026",
"0x3a1129685425f4524ad628c376223fd0d4cb57fb797a7f65180b9c089d40480e",
"0xe1f4bd8c8bba914fe5dece4eaa7f231dad460776a2b4dd45d1d27072c1ff284f",
"0xee232ae7ce022e5fe1b0ed20af00d8565847e66963f89ea2c567f86175731c8a",
"0x9e47419c80cef10aaeecb5b847f10a0d9723800cce930b63a9bbb2b96efebd24"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


