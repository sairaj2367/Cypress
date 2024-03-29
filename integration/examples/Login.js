
 import LoginPage from './PageObjects/LoginPage'
 import Exception from './PageObjects/Exception'
 import LoginDetails from './PageObjects/LoginDetails'
describe('Login verification', () => 
{
    it('Verify login with valid credentials', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit("live") //login.visit("dev")
     e.except()
     details.loginDetails(4)
     login.Checkcheckbox()
     login.submit()
    })

    it('Verify login with invalid username', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit("live") 
     e.except()
     details.loginDetails(2)
     login.Checkcheckbox()
     login.submit()
     login.Validationmessage()
    })

    it('Verify login with invalid password', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const details = new LoginDetails()
     login.visit("live") 
     e.except()
     details.loginDetails(3)
     login.Checkcheckbox()
     login.submit()
     login.Validationmessage()
    })

  })