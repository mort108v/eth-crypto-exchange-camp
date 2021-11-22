/* eslint-disable no-undef */
// const { contracts_build_directory } = require("../truffle-config")

const Token = artifacts.require('./Token')

require('chai').use(require('chai-as-promised')).should()


contract('Token', (accounts) => {

    const name = 'S1X Token'
    const symbol = 'S1X'
    const decimals = '18'
    const totalSupply = '1000000000000000000'
    let token

    beforeEach(async() => {
        token = await Token.new()
    })

    describe('deployment', () => {
        // Fetch Token from blockchain
        it('tracks the name', async() => {

            // Token name is 'Some Token'
            const result = await token.name()
            result.should.equal(name)
            it('tracks the symbol', async() => {
                const result = await token.symbol()
                result.should.equal(symbol)
            })
            it('tracks the decimals', async() => {
                const result = await token.decimals()
                result.toString().should.equal(decimals)
            })
            it('tracks the supply', async() => {
                const result = await token.totalSupply()
                result.toString().should.equal(totalSupply)
            })
        })
    })
})