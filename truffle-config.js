require('babel-register');
require('babel-polyfill');
require('dotenv').config();


module.exports = {


    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
    },

    contracts_directory: './src/contracts/',
    contract_build_directory: './src/abis/',

    compilers: {
        // version: "0.8.10+commit.fc410830.Emscripten.clang",
        // version: "0.4.24",
        solc: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}