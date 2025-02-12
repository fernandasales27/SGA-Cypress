describe('Home Testes', () => {
    
    beforeEach(() => { 
        // Visita a página inicial
        cy.visit('http://localhost:8080'); 
        
        // Realiza o login
        cy.get('.btn-login').click();
        cy.get('#login').type('Fernanda');
        cy.get('#password').type('123456');
        cy.get('[onclick="login()"]').click();
        
        // Aguarda a URL mudar antes de prosseguir
        cy.url().should('include', '/index2.html');
    });
  
    it('Deve conferir se após clicar no botão de login redirecionou para a página home', () => {
      cy.url().should('include', '/index2.html');
    });
  
    // Lista de links a serem testados dinamicamente
   /* const links = [
        "Aula", "Curso", "DiasSemana", "Disciplina", "Horario",
        "Login", "Modalidade", "Perfil", "Sala", "Periodo","Semestre",
        "TipoSala", "Turno", "Turma"
    ];
  
    links.forEach(link => {
        it(`Deve verificar se o link de ${link} está visível`, () => {
            cy.get(`a[href="config/ADMIN/${link}/home.html"]`).should('exist').and('be.visible');
        });
    });
  */
    it('Deve sair ao clicar no botão sair e ir para a tela de login', () => {
        cy.get('.logout-button').click();
        cy.url().should('eq', 'http://localhost:8080/');
        
    });
  
  });
  