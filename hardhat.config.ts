import { task } from "hardhat/config";
import "hardhat-gas-reporter";
import 'hardhat-contract-sizer';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "@typechain/ethers-v5";
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
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
 export default  {
	networks: {
		mainnet: {
			chainId: 1,
			url: `https://mainnet.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		ropsten: {
			chainId: 3,
			url: `https://ropsten.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		rinkeby: {
			chainId: 4,
			url: `https://rinkeby.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		bsc_mainnet: {
			chainId: 56,
			url: process.env.URL_BSC,
			gasPrice: 65000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		bsc_testnet: {
			chainId: 97,
			url: process.env.URL_TESTNET_BSC,
			gasPrice: 50000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		moonbase: {
			// Need to go to Dicord channel and get DEV (coin in Moonbase Alphanet)
			// And Verify Procedure in https://docs.moonbeam.network/networks/testnet/
			// Faucet https://docs.moonbeam.network/getting-started/testnet/faucet/
			// And Explorer https://moonbase-blockscout.testnet.moonbeam.network/ (Recommend this, https://moonbase.subscan.io/ is too early)
			chainId: 1287,
			url: process.env.URL_MOONBEAM_TESTNET,
			gasPrice: 50000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		hardhat: {
			gasPrice: 135000000000
		}
	},
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true,
				runs: 500
			}
		}
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts"
	},
	mocha: {
		timeout: 20000
	},
	gasReporter: {
		currency: 'USD',
		gasPrice: 135,
		coinmarketcap: process.env.COINMARKETCAP_API_KEY,
		maxMethodDiff: 10,
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false,
	}
};
