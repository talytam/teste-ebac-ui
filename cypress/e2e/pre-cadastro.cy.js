/// <reference types="cypress" />
const { faker, PersonModule } = require('@faker-js/faker');


describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email()
        let passwordFaker = faker.internet.password()

        cy.get('#reg_email').type(emailFaker) 
        cy.get('#reg_password').type(passwordFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        

    });

    it('Deve completar pre-cadastro com sucesso - Usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
    
        cy.precadastro(emailFaker2, 'senhafoda', 'Talyta', 'Moy')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    })