package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import support.Utils;




public class HomePage extends Utils {

    WebDriver driver;
    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarAplicacao(){
        driver.get("https://www.qazando.com.br/curso.html");
        esperarElementoEstarPresente(By.id("btn-ver-cursos"),10);
        Assert.assertEquals("Não acessou a aplicação",true,driver.findElement(By.id("btn-ver-cursos")).isDisplayed());
    }

    public void  scrollDown ()throws InterruptedException{
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("window.scroll(0, 15000)");
        Thread.sleep(2000);
    }
    public void preencheEmail (String id_campo_email, String email){

        driver.findElement(By.id(id_campo_email)).sendKeys(email);
    }
    public void clicarEmGanharDesconto(String id){

        driver.findElement(By.id(id)).click();
    }
    public void verificarCupomDesconto (String id_cupom){
        String texto_cupom = driver.findElement(By.cssSelector(id_cupom)).getText();
        Assert.assertEquals("O cupom está errado","QAZANDO15OFF",texto_cupom);
    }
}
