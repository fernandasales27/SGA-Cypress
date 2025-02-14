describe('Curso Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Curso/home.html"]').click({ force: true });
    });

    it('Deve criar um curso', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('Medicina');
        cy.get('select').select('Superior');
       
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Curso criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Curso/home.html');
        });
    });

    it('Deve alterar um curso', () => {
        // Clica no botão de alterar
        cy.get(':nth-child(2) > :nth-child(3) > .button-group > .altera-btn').click();
    
        // Limpa o campo de texto e insere um novo valor
        cy.get('input').clear().type('Sistema de Informação');
    
        // Seleciona uma nova opção no campo de seleção
        cy.get('select').select('Superior');
    
        // Clica no botão de salvar alterações
        cy.get('button').click();
    });
    it('Deve apagar um curso', () => {
        cy.get(':nth-child(2) > :nth-child(3) > .button-group > .delete-btn > .fas').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar este curso?'); // Verifique o texto exato do diálogo
            return true; 
        });

    });

   it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});
