/// <reference types="cypress" />

const { faker, PersonModule } = require("@faker-js/faker");

describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos")
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains ('Ariel Roll Sleeve Sweatshirt').click()
  });

  it('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 3
    cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Purple').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .text-skin').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + '"Ariel Roll Sleeve Sweatshirt"')
  });
});
