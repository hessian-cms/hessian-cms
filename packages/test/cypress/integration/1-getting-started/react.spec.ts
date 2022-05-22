describe('React App test', () => {
  it('Does check if true is true', () => {
    cy.visit("http://localhost:3000");
    cy.get("p#test").contains("Hallo Welt!");
  })
})
