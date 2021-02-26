import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
 import Exception from './PageObjects/Exception'
 import LoginDetails from './PageObjects/LoginDetails'
 import Calendar from './PageObjects/Calendar'
describe('Login verification', () => 
{
    it('Verify facility dropdown', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     const cal=new Calendar()
     login.visit()
     e.except()
     details.fillEmailPassword(1)
     login.Checkcheckbox()
     login.submit()
     a.facilityDropdown(102)
     a.searchBox("hari")
     a.appt()
     a.selectPatient("hari")
     a.selectProviderResoruceType("resource-option","Fever")
     a.selectService(183)
     a.addApptNote("hello tester")
     cal.selectDate()
    })
})
