describe('Filter Transsactions Test', () => {
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
	it('should filter transactions', () => {
		// we can filter transactions by attributes we give
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
		cy.get('button[type = "submit"]').click()
	})

	it('should display the results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr').its('length').should('be.gt', 0)
	})
})
