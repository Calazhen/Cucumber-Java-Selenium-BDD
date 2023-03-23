# language: pt
  @Desconto
  Funcionalidade: Receber o cumpom de desconto  da qazando
    Eu como usuário da qazando
    Quero receber um cupom de desconto
    Para compra um curso com valor reduzido

    @gerar-cupom
    Cenario: Visualizar código de desconto
      Dado estou no site da qazando
      Quando eu preencho meu e-mail
      E clico em ganhar cupom
      Entao eu vejo o código de desconto

    @teste-falha
    Cenario: Teste com falha
      Dado que eu tenho um cupom gerado
      Quando eu falho