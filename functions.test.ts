import { Builder, Capabilities, By } from "selenium-webdriver"
const {shuffleArray} = require('./utils')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

let array = ['a','b','c','d']

describe('shuffleArray should', () => {
    // CODE HERE

    beforeEach(async () => {
        driver.get('http://localhost:3000/')
    })
    
    afterAll(async () => {
        driver.quit()
    })
    
    test('return array', async () => {
        expect(shuffleArray.returnShuffleArray().toBe(shuffleArray))

    })

    test('return array length', async () => {
        expect(shuffleArray.length(shuffleArray)).toBe()
    })
    
})


