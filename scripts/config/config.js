export const network = {
  1: "mainnet",
  56: "bsc",
  42161: "arbitrum",
  10: "optimism",
  137: "polygon",
  43114: "avalanche",
  2222: "kava",
  421611: "arbitrumRinkeby",
};
export const deployInfo = {
  mainnet: {},
  bsc: {},
  arbitrum: {
    poster: "0x5c5bFFdB161E637B7f555CC122831126e02270d5",
    layer2SequencerUptimeFeed: "0xFdB631F5EE196F0ed6FAa767959853A9F217697D",
    assets: {
      iETH: {
        address: "0xEe338313f022caee84034253174FA562495dcC15",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iWBTC: {
        address: "0xD3204E4189BEcD9cD957046A8e4A643437eE0aCC",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x6ce185860a4963106506C203335A2910413708e9",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iUNI: {
        address: "0x46Eca1482fffb61934C4abCA62AbEB0b12FEb17A",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iLINK: {
        address: "0x013ee4934ecbFA5723933c4B08EA5E47449802C8",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x86E53CF1B870786351Da77A57575e79CB55812CB",
        heartbeat: ethers.utils.parseUnits("3600", "wei"),
      },
      iAAVE: {
        address: "0x7702dC73e8f8D9aE95CF50933aDbEE68e9F1D725",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xaD1d5344AaDE45F43E596773Bcc4c423EAbdD034",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iCRV: {
        address: "0x662da37F0B992F58eF0d9b482dA313a3AB639C0D",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xaebDA2c976cfd1eE1977Eac079B4382acb849325",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iDAI: {
        address: "0xf6995955e4B0E5b287693c221f456951D612b628",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xc5C8E77B397E531B8EC06BFb0048328B30E9eCfB",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iUSDC: {
        address: "0x8dc3312c68125a94916d62B97bb5D925f84d4aE0",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iUSDT: {
        address: "0xf52f079Af080C9FB5AFCA57DDE0f8B83d49692a9",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iFRAX: {
        address: "0xb3ab7148cCCAf66686AD6C1bE24D83e58E6a504e",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x0809E3d38d1B4214958faf06D8b1B1a2b73f2ab8",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iEUX: {
        address: "0x5675546Eb94c2c256e6d7c3F7DcAB59bEa3B0B8B",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84",
        heartbeat: ethers.utils.parseUnits("3600", "wei"),
      },
      iMEUX: {
        address: "0x5BE49B2e04aC55A17c72aC37E3a85D9602322021",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84",
        heartbeat: ethers.utils.parseUnits("3600", "wei"),
      },
      iUSX: {
        address: "0x0385F851060c09A552F1A28Ea3f612660256cBAA",
        priceModel: "Layer2PosterModel",
        price: ethers.utils.parseEther("1"),
      },
      iMUSX: {
        address: "0xe8c85B60Cb3bA32369c699015621813fb2fEA56c",
        priceModel: "Layer2PosterModel",
        price: ethers.utils.parseEther("1"),
      },
      iDF: {
        address: "0xaEa8e2e7C97C5B7Cd545d3b152F669bAE29C4a63",
        priceModel: "Layer2ReaderPosterHeartbeatModel",
        heartbeat: ethers.utils.parseUnits("3600", "wei"), // test
        // heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      DF: {
        address: "0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689",
        priceModel: "Layer2ReaderPosterHeartbeatModel",
        reader: "0xaEa8e2e7C97C5B7Cd545d3b152F669bAE29C4a63",
      },
    },
  },
  optimism: {},
  polygon: {},
  avalanche: {},
  kava: {},
  arbitrumRinkeby: {
    poster: "0xF4Db6BB2bd78b42e3cFbA47B667ff8A2CebB570D",
    layer2SequencerUptimeFeed: "0xE1b81189C832D2B8D4b5c5e93B80FD9A5625B238",
    assets: {
      iMUSX: {
        address: "0x772C6832257Fd0D82D4458A08133BCb977aD30aC",
        priceModel: "Layer2PosterModel",
        price: ethers.utils.parseEther("1"),
      },
      iUSX: {
        address: "0xCCdC7b7aBf6637908FDd11CfBbcee7CdcEDaF2D0",
        priceModel: "Layer2PosterModel",
        price: ethers.utils.parseEther("1"),
      },
      iETH: {
        address: "0x4bdEC53C76d646aA2CCC19031950643745baDff5",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8",
        heartbeat: ethers.utils.parseUnits("60", "wei"),
      },
      iWBTC: {
        address: "0x244D1dCAFec54c514D3864EE65679aF484EEB56d",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x0c9973e7a27d00e656B9f153348dA46CaD70d03d",
        heartbeat: ethers.utils.parseUnits("3600", "wei"),
      },
      iDAI: {
        address: "0x6886D2Caef566ed7287633Ab7092BF7A2aedce76",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x3e3546c6b5689f7EAa1BA7Bc9571322c3168D786",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iUSDT: {
        address: "0x29004915a762CAe795819a7e8a4783E6DF9132a5",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0xb1Ac85E779d05C2901812d812210F6dE144b2df0",
        heartbeat: ethers.utils.parseUnits("3600", "wei"),
      },
      iUSDC: {
        address: "0xe5CF0E045B45C1694393124362224e0B34a241F9",
        priceModel: "Layer2ChainlinkHeartbeatModel",
        aggregator: "0x103a2d37Ea6b3b4dA2F5bb44E001001729E74354",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
      },
      iDF: {
        address: "0x515482d94b0d45C06532dbcb3443C09c6aB22Ed2",
        priceModel: "Layer2ReaderPosterHeartbeatModel",
        heartbeat: ethers.utils.parseUnits("86400", "wei"),
        price: ethers.utils.parseEther("0.0364"),
      },
      DF: {
        address: "0x261d5E1C34ad02e40D8E2A95A326821288a78718",
        priceModel: "Layer2ReaderPosterHeartbeatModel",
        reader: "0x515482d94b0d45C06532dbcb3443C09c6aB22Ed2",
      },
    },
  },
};
