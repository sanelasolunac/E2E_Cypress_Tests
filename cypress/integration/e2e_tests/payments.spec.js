describe('Payment Test', () => {
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

	it('should send new payment (fake)', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('150')
		cy.get('#sp_date').type('2020-01-10 {enter}')
		cy.get('#sp_description').type('Just a description')
		cy.get('#pay_saved_payees').click()
	})

	it('should show success message', () => {
		cy.get('#alert_container')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted.')
	})
})
