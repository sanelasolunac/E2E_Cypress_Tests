describe('Feedback Form Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
		cy.contains('Feedback').click()
	})

	it('should load feedback form', () => {
		cy.url().should('include', 'feedback.html')
		cy.get('form').should('be.visible')
	})

	it('should fill feedback form', () => {
		cy.get('#name').type('Sima Simic')
		cy.get('#email').type('simasimic@email.com')
		cy.get('#subject').type('Opening an account')
		cy.get('#comment').type('Can you please help me with opening an account?')
	})

	it('should submit the form', () => {
		cy.contains('Send Message').click()
	})

	it('should verify the proper content', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
