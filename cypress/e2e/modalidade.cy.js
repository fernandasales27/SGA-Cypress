describe('Modalidade Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Modalidade/home.html"]').click({ force: true });
    });

    
    it('Deve criar uma Modalidade', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('Modalidade');
        cy.get('button').click();
        
    });

   it('Deve alterar uma Modalidade', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .button-group >  .altera-btn > .fas').click();
        cy.get('#modalidade').clear().type('Modalidade novasss ');
        cy.get('button').click();
    });

    it('Deve apagar uma Modalidade', () => {
        cy.intercept('DELETE', '/api/modalidades/**').as('deletarModalidade');

        // Clica no botão de deletar
        cy.get(':nth-child(1) > :nth-child(2) > .button-group > .delete-btn').click();
    
        // Intercepta o diálogo de confirmação e clica em "OK"
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar esta modalidade?'); // Ajuste o texto conforme necessário
            return true; // Simula um clique em "OK"
        });
    
       
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});