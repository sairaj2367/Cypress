import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import Calendar from './PageObjects/Calendar'
import AddPatient from './PageObjects/AddPatient'
describe('Appointment', () => 
{
    it('Verify booking appointment for existing patient', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     const cal=new Calendar()
     login.visit("dev")
     e.except()
     details.loginDetails(1)
     login.Checkcheckbox()
     login.submit()
     a.facilityDropdown("Facility_one ...")
     a.searchBox("sai")
     a.appt()
     a.selectPatient("sai")
     a.selectProviderResoruceType("resource-option","Fever test")
     a.selectService("Blood site")
     a.addApptNote("hello tester")
     cal.selectDate("04/03/2021","09:40AM","booked")
    })

    it('Verify booking appointment for new patient', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     const cal=new Calendar()
     const add = new AddPatient()
     login.visit("dev")
     e.except()
     details.loginDetails(1)
     login.Checkcheckbox()
     login.submit()
     a.facilityDropdown("Facility_one ...")
     a.appt()
     add.addPatient("Tester","check","11/08/1997","Male","11111111122","h12@mailnator.com")
     a.selectProviderResoruceType("resource-option","Fever test")
     a.selectService("Blood site")
     a.addApptNote("hello tester")
     cal.selectDate("01/03/2021","09:40AM","booked")
    })

    it('Verify unique email id and phone number fields on calendar schedule', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     const cal=new Calendar()
     const add = new AddPatient()
     login.visit("dev")
     e.except()
     details.loginDetails(1)
     login.Checkcheckbox()
     login.submit()
     a.facilityDropdown("Facility_one ...")
     a.appt()
     add.addPatient("Tester","check","11/08/1997","Male","11111111122","tes105521@gmail.com")
     a.selectProviderResoruceType("resource-option","Fever test")
     a.selectService("Blood site")
     a.addApptNote("hello tester")
     cal.selectDate("01/03/2021","09:40AM","booked")
     add.validation()
    })
})
