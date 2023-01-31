describe('Login/Logout Tests', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})
	it('should try to login with invalid data', () => {
		cy.get('#login_form').should('be.visible')
		cy.get('#user_login').type('invalid_name')
		cy.get('#user_password').type('invalid_password')
		cy.contains('Sign in').click()
	})

	it('should display error message', () => {
		cy.get('.alert')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})

	it('should login to application', () => {
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd

			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)
			cy.get('#user_remember_me').click()
			cy.contains('Sign in').click()
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('should logout from application', () => {
		cy.url().should('include', 'bank/account-summary.html')
		cy.get(':nth-child(3) > .dropdown-toggle').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})
