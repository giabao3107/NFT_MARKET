require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

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
    version: "0.8.4",    
    settings: {      
      optimizer: {        
        enabled: true,        
        runs: 200      }    
      }  
    },  
    networks: {    
      hardhat: {      
        chainId: 1337,
        accounts: {
          mnemonic: "test test test test test test test test test test test junk",
          path: "m/44'/60'/0'/0",
          initialIndex: 0,
          count: 20,
          accountsBalance: "10000000000000000000000" // 10000 ETH
        }
      },    
        localhost: {      
          url: "http://127.0.0.1:8545",
          accounts: {
            mnemonic: "test test test test test test test test test test test junk",
            path: "m/44'/60'/0'/0",
            initialIndex: 0,
            count: 20
          }
          },    
          sepolia: {      
            url: "https://sepolia.infura.io/v3/8e7323d7fd6e47e6ba293c62820e4314",      
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],      
            chainId: 11155111    },    
            mainnet: {      url: "https://mainnet.infura.io/v3/8e7323d7fd6e47e6ba293c62820e4314",      
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],      chainId: 1    },    polygon: {      url: "https://polygon-mainnet.infura.io/v3/8e7323d7fd6e47e6ba293c62820e4314",      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],      chainId: 137    }  },}; 