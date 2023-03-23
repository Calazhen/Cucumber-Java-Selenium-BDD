package steps;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import runner.RunCucumberTests;


public class DescontosStep extends RunCucumberTests {

    HomePage homePage = new HomePage(driver);

    @Dado("^estou no site da qazando$")
    public void acessar_site_qazando() {
      homePage.acessarAplicacao();
    }

    @Quando("^eu preencho meu e-mail$")
    public void eu_preencho_meu_e_mail() throws InterruptedException {
        homePage.scrollDown();
        homePage.preencheEmail("email","hickbaptista@gmail.com");
    }

    @Quando("^clico em ganhar cupom$")
    public void clico_em_ganhar_cupom()  {
        homePage.clicarEmGanharDesconto("button");
    }

    @Entao("^eu vejo o código de desconto$")
    public void eu_vejo_o_código_de_desconto() {
       homePage.verificarCupomDesconto("#cupom>h2>span");
    }



    @Dado("^que eu tenho um cupom gerado$")
    public void que_eu_tenho_um_cupom_gerado()  {
        homePage.preencheEmail("e para falhar","seila@gmail.com");

    }

    @Quando("^eu falho$")
    public void eu_falho() {

    }


}
