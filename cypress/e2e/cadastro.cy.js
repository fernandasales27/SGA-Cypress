describe('Cadastro Testes', () => {
  it('Deve cadastrar um usuário válido', () => {
    cy.visit('localhost:8080');

    cy.wait(2000);
    cy.get('.btn-register').click({ force: true });
    cy.url().should('include', '/cadastro.html');

    cy.get('#login').type('usuário');
    cy.get('#password').type('123456');
    cy.get('#confirm-password').type('123456');
    cy.get('select').select('ADMIN');

    cy.intercept('POST', '/api/v1/logins').as('cadastroRequest');
    cy.get('[type="submit"]').click();

    cy.wait('@cadastroRequest').its('response.statusCode').should('eq', 201);
    cy.url().should('include', '/login.html');
  });

  it('Deve exibir erro ao tentar cadastrar um usuário com senhas diferentes', () => {
    cy.visit('localhost:8080');

    cy.wait(2000);
    cy.get('.btn-register').click({ force: true });
    cy.url().should('include', '/cadastro.html');

    cy.get('#login').type('usuario_teste');
    cy.get('#password').type('123456');
    cy.get('#confirm-password').type('diferente');
    cy.get('select').select('ADMIN');
    cy.get('[type="submit"]').click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('As senhas não coincidem');
    });
  });

  // ✅ Agora este teste está no nível correto
  it('Deve voltar à tela de login ao clicar no botão de voltar', () => {
    cy.visit('localhost:8080');

      // Aguarda o botão estar visível antes de clicar
      cy.wait(2000);
      
      // Garante que a página de cadastro é acessada corretamente
      cy.get('.btn-register').click({ force: true });
      cy.url().should('include', '/cadastro.html');

      // Aguarda o botão de voltar estar presente antes de clicar
      cy.get('[type="button"]', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true });


      // Verifica se a URL foi alterada corretamente para a tela de login
      cy.url().should('include', '/login.html');
  });
});
