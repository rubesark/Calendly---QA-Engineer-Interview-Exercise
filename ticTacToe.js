//establish variable selenium as the selenium webdriver
const selenium = require("selenium-webdriver");

//establish variable driver as the browser build tool and launches the browser
const driver = new selenium.Builder().forBrowser("chrome").build();

//establish variable url as the page you are trying to connect to
const url = "https://codepen.io/CalendlyQA/full/KKPQLmV";

//accesses the provided url within the launched browser
driver.get(url);

//establishing helper class By from a selenium package
const By = selenium.By;

//establish variable field as the number input using the id locator
const field = driver.findElement(By.id("number"));

//using sendKeys method to send data to the input
field.sendKeys("3");

//establish variable button as the play button using the id locator
const button = driver.findElement(By.id("start"));

//clicking the button to start the game
button.click();

//establishing the variable for the first square in the tic tac toe board
const squareOne = driver.findElement(By.id("0"));

//clicking the first square to get our X
squareOne.click();

//square two element established
const squareTwo = driver.findElement(By.id("1"));

//clicking second square for O
squareTwo.click();

//square three element established
const squareThree = driver.findElement(By.id("2"));

//clicking third square for X
squareThree.click();

//square four element established
const squareFour = driver.findElement(By.id("3"));

//clicking fourth square for O
squareFour.click();

//square five element established
const squareFive = driver.findElement(By.id("4"));

//clicking fifth square for X and getting three in a row
squareFive.click();

//establishing the variable for the congratulations message once the game ends
const successMessage = driver.findElement(By.id("endgame"));

//verifying that the congratulations message is present on screen once the game finishes
successMessage.verifyElementPresent();

//closing the browser
driver.close();
