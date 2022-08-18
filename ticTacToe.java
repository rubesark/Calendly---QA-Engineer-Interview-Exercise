//Install libraries
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>ticTacToe</artifactId>
  <version>4.0.0</version>
</dependency>

//Install drivers
WebDriver driver = new ChromeDriver();

//Launch the tic tac toe game on codepen
driver.get("https://codepen.io/CalendlyQA/full/KKPQLmV");

//Find elements and set them as variables
WebElement numberInput = driver.findElement(By.id("number"));
WebElement playButton = driver.findElement(By.id("start"));
WebElement squareOne = driver.findElement(By.id("0"));
WebElement squareTwo = driver.findElement(By.id("1"));
WebElement squareThree = driver.findElement(By.id("2"));
WebElement squareFour = driver.findElement(By.id("3"));
WebElement squareFive = driver.findElement(By.id("4"));
WebElement successMessage = driver.findElement(By.id("endgame"));

//Entering a number
numberInput.setText("3");

//Starting the game
playButton.click();

//Making selections
squareOne.click();
squareOne.verifyTextPresent("X");
squareTwo.click();
squareTwo.verifyTextPresent("O");
squareThree.click();
squareThree.verifyTextPresent("X");
squareFour.click();
squareFour.verifyTextPresent("O");
squareFive.click();
squareFive.verifyTextPresent("X");

//End of the game
successMessage.verifyElementPresent();
driver.verifyTextPresent("Congratulations player X! You've won. Refresh to play again!")
driver.navigate().refresh();
successMessage.verifyElementNotPresent();
squareOne.verifyElementNotPresent();
