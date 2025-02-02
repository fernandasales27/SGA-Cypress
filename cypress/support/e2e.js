// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

describe('Template Spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080'); // URL da sua aplicação
    });
  
    // Escuta o evento uncaught:exception para lidar com exceções não capturadas
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Se a exceção contiver uma mensagem específica, ignore
      if (err.message.includes('Vue is not defined')) {
        return false; // Impede o Cypress de falhar o teste
      }
      // Caso contrário, permite que o Cypress falhe o teste
      return true;
    });
  });
  