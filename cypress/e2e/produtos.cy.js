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
    cy.get('.button-variable-item-Green').click()
    cy.get('.button-variable-item-M').click()

    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.wait(3000);

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + '"Ariel Roll Sleeve Sweatshirt"')
  });

  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addprodutos('Aero Daily Fitness Tee', 'M', 'Black', 2 )
    
  });

  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addprodutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5 )
    
  });
});
