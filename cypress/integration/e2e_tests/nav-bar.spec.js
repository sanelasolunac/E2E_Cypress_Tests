describe('Navbar Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('should display online bancking content', () => {
		cy.get('#onlineBankingMenu').click()
		cy.get('h1').contains('Online Banking')
		cy.url().should('eq', 'http://zero.webappsecurity.com/online-banking.html')
	})
	it('should display feedback content', () => {
		cy.get('#feedback').click()
		cy.get('h3').contains('Feedback')
		cy.url().should('eq', 'http://zero.webappsecurity.com/feedback.html')
	})
	it('should display homepage content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
	})
})
