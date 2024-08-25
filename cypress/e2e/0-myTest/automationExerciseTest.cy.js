import '@shelex/cypress-allure-plugin';



describe('US_01', () => {
    it('TC_01', () => {
      cy.allure().feature('Feature Name');
      cy.allure().story('Story Name');
       
        //cy.visit('https://www.automationexercise.com/');
        cy.visit('/')

        cy.get('.material-icons.card_travel').click();
        
        cy.get('.fa.fa-plus-square').first().click();

        cy.get('#quantity').clear().type('2');
        
        cy.get('.btn.btn-default.cart').click();

        cy.wait(2000);

        cy.get('.btn.btn-success.close-modal.btn-block').click();

        //cy.get('.logo.pull-left').click();

        cy.get('.fa.fa-shopping-cart').first().click();

        cy.get('#product-1').should('be.visible');

    });
    
});
        
    
       
 
