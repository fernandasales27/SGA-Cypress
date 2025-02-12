describe('Semestre Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Fernanda');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Semestre/home.html"]').click({ force: true });
    });

    /*it('Deve criar um Semestre', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('exemplo');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Semestre criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Sala/home.html');
        });
    });*/

    it('Deve alterar um Semestre', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group > .delete-btn').click();
        cy.get('input').type('exemploss');
        cy.get('button').click();
    });

   /* it('Deve apagar uma Sala', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group >.delete-btn > .fas').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar este Semestre ?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});*/
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});