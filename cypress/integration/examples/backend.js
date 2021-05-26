import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
describe('Appointment', () => 
{
    it('Verify booking appointment for existing patient', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     login.visit("dev")
     e.except()
     details.loginDetails(1)
     login.Checkcheckbox()
     login.submit()
     a.payment("Y",10,"testing")
     a.officedate("SUN","N","2:00","24:00")
     a.selectAvailableProvider("provider one")
    })
})