package support;

import org.openqa.selenium.By;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTests;


public class Utils extends RunCucumberTests {
    public void esperarElementoEstarPresente(By elemento ,int tempo){
        WebDriverWait wait = new WebDriverWait(driver,tempo);
        wait.until(ExpectedConditions.elementToBeClickable (elemento));
    }
}
