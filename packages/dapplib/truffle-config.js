require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name radar situate comic hockey enter oil giggle'; 
let testAccounts = [
"0xf813c79f36b1b50baed974ab8052e504f61788e994c2ec0cdc22052ba43109c0",
"0x4d0d9897eb153f9bd4db495bfe87bd94a76054c508651c1dde83789702fb9bda",
"0xd1c36576f84e71ccc950a8c4c858e0a54dbd68cafb4bbac7d0df1daf9101376c",
"0xeed5440037e1a8aa2c45a7caf72392f246d43620363a9c8ec723820f1d5d97f2",
"0x4b1e450ab38320be810f7ac90b9044aa965f31c7122952d7c18587d64f992f80",
"0xe42b6343e6cde31428a98498465be7481c3e6eb99b3e105487c3dfb1c0ad611b",
"0x9356a4981152e05783396cd1772e77d1efc02d71d97c9c314edbdf6afdd31b92",
"0x664a9b2c10a63603ad392db6af723f85c3cc1861f85d44b96f8fa48ed3f61115",
"0xfd4982657a3a3b0019d9f1bb053d61340ee847ba6ccbd2f002fd8cc4de59e1f6",
"0x29a7fa9ddd20fe9ce1d4b658cd00b07898bd18012a1e488ed1f5e0abd8eb4a00"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

