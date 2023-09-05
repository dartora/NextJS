describe("Login", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  });
  it("test", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").click().type("rodolfo.dartora");

    cy.get("#password").click().type("password123");

    cy.get(".bg-blue-500").click();
  });
});
