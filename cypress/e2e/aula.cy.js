describe('Aula Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Fernanda');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Aula/home.html"]').click({ force: true });
    });

   it('Deve criar uma aula', () => {
        cy.get('.create-btn').click();
        cy.get('form > :nth-child(2) > :nth-child(2)').select('Tcc1');
        cy.get(':nth-child(2) > :nth-child(3) > select').select('Sexta-Feira');
        cy.get(':nth-child(2) > :nth-child(4) > select').select('ADS5');
        cy.get('form > :nth-child(3) > select').select('1');
        cy.get('form > :nth-child(4) > select').select('Laboratório 9');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Aula criada com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Aula/home.html');
        });
    });

    it('Deve alterar uma aula', () => {
        cy.get(':nth-child(5) > :nth-child(10) > .button-group > .altera-btn').click({ force: true });
        cy.get(':nth-child(2) > select').select('Teste De Software');
        cy.get(':nth-child(3) > select').select('Domingo');
        cy.get(':nth-child(4) > select').select('ADS5');
        cy.get(':nth-child(5) > select').select('1');
        cy.get(':nth-child(6) > select').select('Laboratório 9');
        cy.get('button').click();
    });

    it('Deve apagar uma aula', () => {
        cy.get(':nth-child(6) > :nth-child(10) > .button-group > .delete-btn').click({ force: true });
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar esta aula?');
            return true; // Simula um clique em "OK"
        });
    });

    it('Deve entrar na pagina ne filtro', () => {
        
    });



    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});
