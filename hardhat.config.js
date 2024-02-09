require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "746c595a130c4e6b8a6f2ecd88d38da5";
const SEPOLIA_PRIVATE_KEY = "d3b5c54201a9978b38a51a9830f17faf7b8732069c8a2908882662cd0378d6e1";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
