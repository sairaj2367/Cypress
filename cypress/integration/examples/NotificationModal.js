import Appointment from '.bin/cypress/integration/examples/PageObjects/Appointment'
import LoginPage from '.bin/cypress/integration/examples/PageObjects/LoginPage'
import Exception from '.bin/cypress/integration/examples/PageObjects/Exception'
import LoginDetails from '.bin/cypress/integration/examples/PageObjects/LoginDetails'

describe('Notification modal', () => 
{
    it('Verify if user can approve an appointement from notification modal', () => 
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
     a.facilityDropdown("Facility_one")
     a.icon()
     a.approve("SAI RAJ")
    })

    it('Verify if user can view the product details from the notification modal', () => 
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
     a.facilityDropdown("Facility_one")
     a.icon()
     a.view("Taletstest")
     
    })

    it('Verify if user can mark the product messages as read on the notification modal', () => 
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
     a.facilityDropdown("Facility_one")
     a.icon()
     a.mark("Taletstest")
     
    })

    it('Verify if user can mark all the messages as read on the notification modal', () => 
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
     a.facilityDropdown("Facility 1")
     a.icon()
     a.markall()
    })
})