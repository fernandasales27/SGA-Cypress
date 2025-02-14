describe('Horário Testes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        
        cy.get('.btn-login').click({ force: true });
        cy.get('#login').type('Admin');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        cy.get('[href="config/ADMIN/Horario/home.html"]').click({ force: true });
    });

   it('Deve criar um Horario', () => {
        cy.get('.create-btn').click();
        cy.get(':nth-child(2) > input').type('07:48'); 
        cy.get(':nth-child(3) > input').type('08:48'); 
        cy.get('button').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Horario criado com sucesso');
            cy.url().should('eq', 'http://localhost:8080/config/ADMIN/Horario/home.html');
        });
    });

    it('Deve alterar um Horario', () => {
      // Aguarda a API de horários carregar
      

      // Garante que há pelo menos um horário disponível para alteração
      cy.get(':nth-child(2) > :nth-child(3) > .button-group > .altera-btn')
          .should('be.visible')
          .first()
          .click();

      // Preenche os campos com novos horários
      cy.get('#horaInicio').clear().type('19:48'); 
      cy.get('#horaTermino').clear().type('21:48'); 
      
      // Clica no botão para salvar
      cy.get('button').click({ force: true });
      
      // Valida se o horário foi alterado com sucesso
      cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('Horario alterado com sucesso');
      });
    });

    it('Deve apagar um Horario', () => {
        cy.get(':nth-child(2) > :nth-child(3) > .button-group > .delete-btn').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.contains('Tem certeza que deseja deletar este horário?'); // Verifique o texto exato do diálogo
            return true; 
      
    });
});
    
 
    it('Deve voltar para página de home ao clicar no ícone de home', () => {
        cy.get('li > a').click();
        cy.url().should('include', '/index2.html');
    });
});