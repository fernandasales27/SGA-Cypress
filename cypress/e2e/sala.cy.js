describe('Sala Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Sala/home.html"]').click({ force: true });
    });

    it('Deve criar uma Sala', () => {
        cy.get('.create-btn').click();
        cy.get('#numero').type('11');
        cy.get('#capacidade').type('30');
        cy.get('#tipoSala').select('1');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Sala criada com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Sala/home.html');
        });
    });

    it('Deve alterar uma Sala', () => {
        cy.get(':nth-child(2) > :nth-child(4) > .button-group > .altera-btn > .fas').click();
        cy.get(':nth-child(2) > input').type('13');
        cy.get(':nth-child(3) > input').clear().type('30');
        cy.get('select').select('2');
        cy.get('button').click();

        cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Sala alterada com sucesso');
    });
    });

    it(':Deve apagar uma Sala', () => {
        cy.get(':nth-child(2) > :nth-child(4) > .button-group > .delete-btn').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja excluir esta sala?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});