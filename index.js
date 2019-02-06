const { Builder, By, Key } = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome')

const chromeOptions = new Options().addArguments('--kiosk', '--disable-infobars')

new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build()
  .then((driver) => {
    driver.getWindowHandle()
      .then(() => {
        driver.get(process.env.URL)
      })
      .then(() => {
        return driver.findElement(By.id('username'))
      })
      .then((element) => {
        element.sendKeys(process.env.USERNAME)
      })
      .then(() => {
        return driver.findElement(By.id('password'))
      })
      .then((element) => {
        element.sendKeys(process.env.PASSWORD, Key.RETURN)
      })
      .then(() => {
        // driver.manage().window().maximize()
      })
      .catch((ex) => {
        console.log(ex)
      })
  })
  .catch((ex) => {
    console.log(ex)
  })
