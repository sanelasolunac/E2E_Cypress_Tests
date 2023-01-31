describe('Currency Conversion Tests', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd

			cy.login(username, password)
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})

	it('should fill conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('h2')
			.should('be.visible')
			.and('contain', 'Purchase foreign currency cash')
		cy.get('#pc_currency').select('China (yuan)')
		cy.get('#pc_amount').type(250)
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})

	it('should display conversion amount', () => {
		cy.get('#pc_conversion_amount').should('be.visible')
		// verificate the content of a message
	})
})
