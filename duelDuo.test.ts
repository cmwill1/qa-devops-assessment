
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000);
});
// test('“Add to Duo” button displays the div with id = “player-duo”',async () => {
//     const duoButton = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
//     await duoButton.click()
//     await driver.sleep(3000)

//     const playerId = await driver.findElement(By.id('player-duo'))
//     const duoResults = await playerId.isDisplayed()
   
//     expect(duoResults).toBe(true)
//     await driver.sleep(3000)
    
// });
test("draw button displays id=choices", async () =>{
    const drawButton = await driver.findElement(By.id("draw"))
    await drawButton.click()
    const choicesId = await driver.findElement(By.id("choices"))
    const results = await choicesId.isDisplayed()
    expect(results).toBe(true)
    await driver.sleep(3000)

})
