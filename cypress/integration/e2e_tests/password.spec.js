describe('Password Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('should click on the sign in button', () => {
		cy.get('#signin_button').click()
	})

	it('should click on forgoten your password link', () => {
		cy.url().should('eq', 'http://zero.webappsecurity.com/login.html')
		cy.contains('Forgot your password ?').click()
	})

	it('should fill email form', () => {
		cy.url().should('eq', 'http://zero.webappsecurity.com/forgot-password.html')
		cy.get('#user_email').type('test_email@email.com')
	})

	it('should submit the form', () => {
		cy.contains('Send Password').click()
	})
})
