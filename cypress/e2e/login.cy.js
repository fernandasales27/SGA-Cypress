describe('Login Testes', () => {
  it('Deve logar com login válido', () => {
    cy.visit('localhost:8080')

    cy.wait(2000);
    cy.get('.btn-login').click({ force: true });
    cy.url().should('include', '/login.html');
    cy.get('#login').type('Admin')
    cy.get('#password').type('123456')
    cy.get( [onclick="window.location.href='cadastro.html'"])
    cy.get('[onclick="login()"]').click()
    cy.url().should('include', '/index2.html');
  })
})

describe('Login Tests', () => {
  it('Deve falhar ao logar com login inválido', () => {
    cy.visit('localhost:8080'); // Acessa a página inicial

    cy.wait(2000);
    cy.get('.btn-login').click({ force: true }); // Clica no botão de login
    cy.url().should('include', '/login.html'); // Garante que está na página de login

    cy.get('#login').type('usuario_invalido'); // Insere login inválido
    cy.get('#password').type('senha_errada'); // Insere senha inválida

    cy.get('[onclick="login()"]').click(); // Clica no botão de login

    // Verifica que a URL **não mudou** (ou seja, o login falhou)
    cy.url().should('include', '/login.html');

    // Opcional: verifica se uma mensagem de erro aparece
   
    
  });
});
