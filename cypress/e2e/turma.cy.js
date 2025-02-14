describe('Turma Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Turma/home.html"]').click({ force: true });
    });

    it('Deve criar uma Turma', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('turma7');
    
        // Aguarda os selects estarem visíveis antes de interagir
        cy.get(':nth-child(3) > select').should('be.visible').select('Primeiro');
        cy.get(':nth-child(4) > select').should('be.visible').select('2');
        cy.get(':nth-child(5) > select').should('be.visible').select('1');
        cy.get(':nth-child(6) > select').should('be.visible').select('2');
    
        cy.get('button').click();
    
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Turma criada com sucesso');
        });
    
        // Garante que a URL está correta após a criação
        cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Turma/home.html');
    });

    it('Deve alterar uma Turma', () => {
        cy.get(':nth-child(2) > :nth-child(6) > .button-group > .altera-btn > .fas').click();
        cy.get('input').type('TURMA4');
         cy.get(':nth-child(3) > select').should('be.visible').select('Primeiro');
        cy.get(':nth-child(4) > select').should('be.visible').select('2');
        cy.get(':nth-child(5) > select').should('be.visible').select('1');
        cy.get(':nth-child(6) > select').should('be.visible').select('2');
        cy.get('button').click();
    });

    it('Deve apagar uma Turma', () => {
        cy.get(':nth-child(2) > :nth-child(6) > .button-group > .delete-btn > .fas').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar esta turma?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});