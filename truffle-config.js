module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    compilers: {
       solc: {
           "version": "0.8.0+commit.1d4f565a.Emscripten.clang" // ex:  "0.4.20". (Default: Truffle's installed solc)
       }
   },
    develop: {
      port: 8545
    }
  }
};
