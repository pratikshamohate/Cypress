/// <reference types="cypress" />

describe ('Verify login page of OHRM', () => {
    it('should verify login with valid credentials', () => {
        // Arrange, Act, Assert (AAA)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');

        cy.get('.orangehrm-login-button').click();

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard');
    });
});
