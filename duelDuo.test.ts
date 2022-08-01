
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
test('Draw button should display bots when clicked',async () => {
    const drawButton = await driver.findElement(By.id("draw"))
    drawButton.click()
   let choices = driver.findElement(By.id("choices"))
   let bots = await choices.isDisplayed()
   expect(bots).toBe(true)
    await driver.sleep(3000)
    
});
test("clicking “Add to Duo” button displays the div with id = “player-duo”", async () =>{
    const drawButton = await driver.findElement(By.id("draw"))
    await drawButton.click()
    const choicesId = await driver.findElement(By.id("choices"))
    const results = await choicesId.isDisplayed()
    expect(results).toBe(true)
    await driver.sleep(3000)

})
