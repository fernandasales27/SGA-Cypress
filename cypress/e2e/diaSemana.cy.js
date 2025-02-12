describe('Dia Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Fernanda');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/DiasSemana/home.html"]').click({ force: true });
    });

    it('Deve criar um DiasSemana', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('DIA');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Dia criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/DiasSemana/home.html');
        });
    });

    it('Deve alterar um DiasSemana', () => {
        cy.get(':nth-child(8) > :nth-child(2) > .button-group > .altera-btn').click();
        cy.get('#diaSemana').clear().type('Dia 2');
        cy.get('button').click();
    });

    it('Deve apagar um DiasSemana', () => {
        cy.get(':nth-child(8) > :nth-child(2) > .button-group > .delete-btn > .fas').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar este dia da Semana?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});