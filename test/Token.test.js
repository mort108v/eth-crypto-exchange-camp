// const { contracts_build_directory } = require("../truffle-config")

const Token = artifacts.require('./Token')

contract('Token', (accounts) => {
    describe('deployment', () => {
        // Fetch Token from blockchain
        it('tracks the name', async() => {
            // Read token name here
            const token = await Token.new()
                // Token name is 'Some Token'
            const result = token.name()

        })
    })
})