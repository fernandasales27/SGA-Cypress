describe('Semestre Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Semestre/home.html"]').click({ force: true });
    });

   it('Deve criar um Semestre', () => {
       
        cy.get('.create-btn').click();
        cy.get('input').type('Exemplo');
        cy.get('button').click(); // Usa um seletor mais específico
  
    });

    it('Deve alterar um Semestre', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group > .altera-btn').click();
        cy.get('input').clear().type('exemploss');
        cy.get('button').click();
    });

    it('Deve apagar uma Semestre', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group >.delete-btn > .fas').click();
        
      
    });

    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});