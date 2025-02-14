describe('Disciplina Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Disciplina/home.html"]').click({ force: true });
    });

    it('Deve criar uma Disciplina', () => {
        cy.get('.create-btn').click();
        cy.get('input').clear().type('estatistica');
        cy.get('select').select('1');

        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Disciplina criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Disciplina/home.html');
        });
    });

    it('Deve alterar uma Disciplina', () => {
        cy.get(':nth-child(2) > :nth-child(3) > .button-group > .altera-btn').click();
        cy.get('#nome').clear().type('estatistica 2');
        cy.get('select').select('1');
        cy.get('button').click();
    });

    it('Deve apagar uma Disciplina', () => {
        cy.get(':nth-child(2) > :nth-child(3) > .button-group > .delete-btn').click({ force: true });
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar esta disciplina?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});

it('Barra de pesquisa deve estar visivel', () => {
    cy.get('.search-input').should('be.visible');
   
});

 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});