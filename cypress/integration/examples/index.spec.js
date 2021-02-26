
 import LoginPage from './PageObjects/LoginPage'
 import Exception from './PageObjects/Exception'
 import LoginDetails from './PageObjects/LoginDetails'
describe('Login verification', () => 
{
    it('Verify valid login', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit()
     e.except()
     cy.title().should('be.equal','Login')
     details.fillEmailPassword(0)
     login.Checkcheckbox()
     login.submit()
    })

    it('Verify login with invalid username', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit()
     e.except()
     details.fillEmailPassword(2)
     login.Checkcheckbox()
     login.submit()
     login.Validationmessage()
    })

    it('Verify login with invalid password', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit()
     e.except()
     details.fillEmailPassword(3)
     login.Checkcheckbox()
     login.submit()
     login.Validationmessage()
    })

  })