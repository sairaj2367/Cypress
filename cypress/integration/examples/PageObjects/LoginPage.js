class LoginPage
{
    visit()
    {
        cy.viewport(1366,768)
        cy.visit("http://app-23191.on-aptible.com/")
    }

    Checkcheckbox()
    {
        const c= cy.get("[for='rememberMe']")
        c.click()
    }

    submit()
    {
        const button=cy.get("[type='submit']")
        button.click()
    }

    Validationmessage()
    {
        
            cy.contains('Your username or password is incorrect.').should('have.class', 'error')
            .wait(3000)
    }
}
export default LoginPage