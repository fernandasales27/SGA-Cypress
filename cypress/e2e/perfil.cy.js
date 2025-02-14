describe('Dia Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Perfil/home.html"]').click({ force: true });
    });

   it('Deve criar um Perfil', () => {
        cy.get('.create-btn').click();
        cy.get('input').type('Perfil Exemplo');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Perfil criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Perfil/home.html');
        });
    });

    it('Deve alterar um Perfil', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group > .altera-btn > .fas').click();
        cy.get('#perfil').clear().type('Perfiyyyy');
        cy.get('#perfil').should('have.value', 'Perfiyyyy');
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Perfil alterado com sucesso');
        });
       
    });

    it('Deve apagar um Perfil', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .button-group > .delete-btn')
        .click({ force: true });

    // Captura qualquer variação do texto do alerta
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.match(/Tem certeza que deseja deletar este Perfil\??/i); 
            return true; // Simula clicar em "OK"
        });

    // Aguarda um tempo para garantir que o delete foi processado
        cy.wait(500);

    // Recarrega a página para garantir que a lista seja atualizada
        cy.reload();

    // Verifica se o botão delete **não existe mais**
        cy.get(':nth-child(3) > :nth-child(2) > .button-group > .delete-btn')
            .should('not.exist');
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});