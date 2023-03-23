package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/reports/cucumberReport.json","html:target/reports/"},
        features = "src/main/resources/features",
        tags = {"@Desconto"}, //~@ignore para todos os testes com a anotação diferente de ignore
        glue = {"steps"}

)
public class RunCucumberTests {

   public static WebDriver driver;

    @BeforeClass
    public  static void start(){
        driver = new FirefoxDriver();
    }
    @AfterClass
    public  static void stop(){
        driver.quit();
    }

}
