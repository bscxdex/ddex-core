require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const accounts = {
  mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
  // initialIndex: 18
  // accountsBalance: "990000000000000000000",
}

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey:"6IQTZTMD392X2U2SYZBABWDS8KB6D8UD4T"
  },
  defaultNetwork: "local",
  networks: {
    local: {
      url: `http://localhost:8545`,
      accounts,
      attachs:{
           fee: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
           usdt:"0x41dBB528b5662caD3b8183754C0517b409E00Fa8",
           husd:"0x60aC4593ecea0B22216218c4D0f27533ebB01CB6",
           hbtc:"0xa0945a7aC164287B4e6B8f234337820807074a29",
           heth:"0x9771321265cAD7049903EaF4a574Eab51fD97378",
           hltc:"0x8E02433C31B51ABe3Ac65908d59eF82ddB52714F",
           wbnb :"0x7f3fF452D3da0EAD3ce227eB4A6c84E896685C3C",
           hdot:"0x426dcD4fa088D7b33797Da0002bF36a669B398D5",
           uniswap:{
             factory:"0x607c2d79E406a5DC2D1E01b6820dd5a72FbA58C7",
             router: "0xfC3035f60A3d862E0753eA3D2Eec7679227E8B37",
           },
           ddx : "0x25e67aedBA8aCe016Dd4573df46c50E4F8a97497",
           ddxpool: "0x8a5592b0E95767886642269AEb0B7A80dAa22c8f",
           swapmining: "",

      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      gasPrice: 120 * 1000000000,
      chainId: 1,
    },
    bsc:{
      url: `https://bsc-dataseed.binance.org/`,
      accounts,
      gasPrice: 20*1000000000,
      chainId: 128,
      loggingEnabled: true,
      blockGasLimit:0x280de80,
      attachs:{
          fee: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
           usdt:"0x41dBB528b5662caD3b8183754C0517b409E00Fa8",
           husd:"0x60aC4593ecea0B22216218c4D0f27533ebB01CB6",
           hbtc:"0xa0945a7aC164287B4e6B8f234337820807074a29",
           heth:"0x9771321265cAD7049903EaF4a574Eab51fD97378",
           hltc:"0x8E02433C31B51ABe3Ac65908d59eF82ddB52714F",
           wbnb :"0x7f3fF452D3da0EAD3ce227eB4A6c84E896685C3C",
           hdot:"0x426dcD4fa088D7b33797Da0002bF36a669B398D5",
           uniswap:{
             factory:"0x607c2d79E406a5DC2D1E01b6820dd5a72FbA58C7",
             router: "0xfC3035f60A3d862E0753eA3D2Eec7679227E8B37",
           },
           ddx : "0x25e67aedBA8aCe016Dd4573df46c50E4F8a97497",
           ddxpool: "0x8a5592b0E95767886642269AEb0B7A80dAa22c8f",
           swapmining: "",
        }
    },
    bsclocal:{
      url: `http://119.8.175.222:8545`,
      accounts,
      gasPrice: 0x3b9aca00,
      chainId: 3388,
      attachs:{
            fee: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
           usdt:"0x41dBB528b5662caD3b8183754C0517b409E00Fa8",
           husd:"0x60aC4593ecea0B22216218c4D0f27533ebB01CB6",
           hbtc:"0xa0945a7aC164287B4e6B8f234337820807074a29",
           heth:"0x9771321265cAD7049903EaF4a574Eab51fD97378",
           hltc:"0x8E02433C31B51ABe3Ac65908d59eF82ddB52714F",
           wbnb :"0x7f3fF452D3da0EAD3ce227eB4A6c84E896685C3C",
           hdot:"0x426dcD4fa088D7b33797Da0002bF36a669B398D5",
           uniswap:{
             factory:"0x607c2d79E406a5DC2D1E01b6820dd5a72FbA58C7",
             router: "0xfC3035f60A3d862E0753eA3D2Eec7679227E8B37",
           },
           ddx : "0x25e67aedBA8aCe016Dd4573df46c50E4F8a97497",
           ddxpool: "0x8a5592b0E95767886642269AEb0B7A80dAa22c8f",
           swapmining: "",
      },
    },
  }
};

