class LoginPage
{
    visit(value)
    {
        cy.viewport(1366,768)
        if(value=="dev")
        {
            cy.visit("http://app-23191.on-aptible.com/", { timeout: 500000 })
        }
        if(value=="live")
        {
            cy.visit("https://www.calystaproemr.com/", { timeout: 500000 })
            cy.window().then((win) => {
                // ✅ removes it
                win.onbeforeunload = null
              })
        }

      
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
        .wait(3000)
        
    }

    Validationmessage()
    {
        
            cy.contains('Your username or password is incorrect.').should('have.class', 'error')
            .wait(3000)
    }
}
export default LoginPage