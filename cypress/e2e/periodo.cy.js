describe('Periodo Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Periodo/home.html"]').click({ force: true });
    });

   it('Deve criar um Periodo', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('Sétimo');

        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Periodo criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Periodo/home.html');
        });
    });

    it('Deve alterar uma Periodo', () => {
        cy.get(':nth-child(7) > :nth-child(2) > .button-group > .altera-btn > .fas').click();
        cy.get('#periodo').clear().type('PERIODOS');
        cy.get('button').click();
    });

    it('Deve apagar uma Periodo', () => {
        cy.get(':nth-child(7) > :nth-child(2) > .button-group > .delete-btn').click({ force: true });
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar este período?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});

 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});