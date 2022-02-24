import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import Calendar from './PageObjects/Calendar'
import BookingHistory from './PageObjects/BookingHistory'
import AddPatient from './PageObjects/AddPatient'

describe('Patient Management', () => 
{
    // it('Verify if i can send an invitation form to the patient', () => 
    // {
    //  const e=new Exception()   
    //  const login=new LoginPage()
    //  const a=new Appointment()
    //  const details=new LoginDetails()
    //  const add = new AddPatient()
    //  login.visit("dev")
    //  e.except()
    //  details.loginDetails(1)
    //  login.Checkcheckbox()
    //  login.submit()
    //  a.facilityDropdown("Facility_one")
    //  add.patientmanage("Invite Patients")
    //  add.invitepatient("Sairaj","K","testers3911@gmail.com","7(879)787-8798")
    // })

    it('Verify if i can import patients details from CSV file', () => 
    {
     const e=new Exception()   
     const login=new LoginPage()
     const a=new Appointment()
     const details=new LoginDetails()
     const add = new AddPatient()
     login.visit("dev")
     e.except()
     details.loginDetails(1)
     login.Checkcheckbox()
     login.submit()
     a.facilityDropdown("Facility 1")
     add.patientmanage("Import Patients")
     add.importpatients("Hardik test.csv")
    })

})