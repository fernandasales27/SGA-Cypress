/*describe('Cadastro Testes', () => {
    it('Deve cadastrar um usuário válido', () => {
      cy.visit('localhost:8080'); // Acessa a página inicial

      cy.wait(2000);
      cy.get('.btn-register').click({ force: true }); // Clica no botão de cadastro
      cy.url().should('include', '/cadastro.html'); // Confirma que está na página de cadastro

      // Preenche os campos
      cy.get('#login').type('claudia');
      cy.get('#password').type('123456');
      cy.get('#confirm-password').type('123456');
      cy.get('select').select('ADMIN');

      // Intercepta a requisição de cadastro para garantir que foi processada corretamente
      cy.intercept('POST', '/api/v1/logins').as('cadastroRequest');
      
      cy.get('[type="submit"]').click(); // Clica no botão de cadastro

      // Aguarda a requisição ser concluída e verifica se foi bem-sucedida
      cy.wait('@cadastroRequest').its('response.statusCode').should('eq', 201);

      // Verifica se foi redirecionado para a tela de login
      cy.url().should('include', '/login.html');
    });
});
*/
describe('Cadastro Testes', () => {
    it('Deve exibir erro ao tentar cadastrar um usuário com senhas diferentes', () => {
      cy.visit('localhost:8080');
      
      cy.wait(2000);
      cy.get('.btn-register').click({ force: true });
      cy.url().should('include', '/cadastro.html');
  
      // Preenche campos de cadastro
      cy.get('#login').type('usuario_teste');
      cy.get('#password').type('123456');
      cy.get('#confirm-password').type('diferente'); // Senhas diferentes
      cy.get('select').select('ADMIN');
      // Clica no botão de enviar
      cy.get('[type="submit"]').click();
  
        
      // Espera e intercepta o alert (pop-up)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('As senhas não coincidem');


      });
    });
  });
  


