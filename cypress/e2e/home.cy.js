describe('Home Testes', () => {
    
  beforeEach(() => { // Antes de cada teste, faz login e garante que está na Home
      cy.visit('http://localhost:8080'); 
      
      // Realiza o login
      cy.get('.btn-login').click();
      cy.get('#login').type('Fernanda');
      cy.get('#password').type('123456');
      cy.get('[onclick="login()"]').click();
      
     
  });

  it('Deve achar o botão de filtro', () => {
      cy.get('.filter-button').should('be.visible');
  });

  it('Deve verificar se o link de Aula está visível', () => {
      cy.get('a[href="config/ADMIN/Aula/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Curso está visível', () => {
      cy.get('a[href="config/ADMIN/Curso/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de DiasSemana está visível', () => {
      cy.get('a[href="config/ADMIN/DiasSemana/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Disciplina está visível', () => {
      cy.get('a[href="config/ADMIN/Disciplina/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Horario está visível', () => {
      cy.get('a[href="config/ADMIN/Horario/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Login está visível', () => {
      cy.get('a[href="config/ADMIN/Login/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Modalidade está visível', () => {
      cy.get('a[href="config/ADMIN/Modalidade/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Perfil está visível', () => {
      cy.get('a[href="config/ADMIN/Perfil/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Sala está visível', () => {
      cy.get('a[href="config/ADMIN/Sala/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Semestre está visível', () => {
      cy.get('a[href="config/ADMIN/Semestre/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de TipoSala está visível', () => {
      cy.get('a[href="config/ADMIN/TipoSala/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Turno está visível', () => {
      cy.get('a[href="config/ADMIN/Turno/home.html"]').should('be.visible');
  });

  it('Deve verificar se o link de Turma está visível', () => {
      cy.get('a[href="config/ADMIN/Turma/home.html"]').should('be.visible');
  });

  it('Deve sair ao clicar no botão sair e ir pra tela de login', () => {
      cy.get('.logout-button').click();
      
  });

});

