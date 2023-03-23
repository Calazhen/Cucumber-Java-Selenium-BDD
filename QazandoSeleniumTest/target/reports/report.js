$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Receber o cumpom de desconto  da qazando",
  "description": "Eu como usuário da qazando\r\nQuero receber um cupom de desconto\r\nPara compra um curso com valor reduzido",
  "id": "receber-o-cumpom-de-desconto--da-qazando",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Desconto"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-o-cumpom-de-desconto--da-qazando;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@gerar-cupom"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "estou no site da qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu preencho meu e-mail",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "eu vejo o código de desconto",
  "keyword": "Entao "
});
formatter.match({
  "location": "DescontosStep.acessar_site_qazando()"
});
formatter.result({
  "duration": 3039625100,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_e_mail()"
});
formatter.result({
  "duration": 2078744300,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 237812500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_vejo_o_código_de_desconto()"
});
formatter.result({
  "duration": 10942000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Teste com falha",
  "description": "",
  "id": "receber-o-cumpom-de-desconto--da-qazando;teste-com-falha",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@teste-falha"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que eu tenho um cupom gerado",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "eu falho",
  "keyword": "Quando "
});
formatter.match({
  "location": "DescontosStep.que_eu_tenho_um_cupom_gerado()"
});
formatter.result({
  "duration": 18261400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #e\\ para\\ falhar\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CALAZANSH\u0027, ip: \u0027192.168.10.4\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 111.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20230309232128, moz:geckodriverVersion: 0.32.0, moz:headless: false, moz:platformVersion: 10.0, moz:processID: 3120, moz:profile: C:\\Users\\calaz\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 17838a0d-c712-4486-8b48-4016bf9be690\n*** Element info: {Using\u003did, value\u003de para falhar}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.HomePage.preencheEmail(HomePage.java:32)\r\n\tat steps.DescontosStep.que_eu_tenho_um_cupom_gerado(DescontosStep.java:38)\r\n\tat ✽.Dado que eu tenho um cupom gerado(desconto.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DescontosStep.eu_falho()"
});
formatter.result({
  "status": "skipped"
});
});