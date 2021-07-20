import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import PatientDash from './PageObjects/PatientDash'

describe('Patient Dashboard', () => 
{
    it('Verify Add Patient Package CTA functionality ', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const a=new Appointment()
        const details=new LoginDetails()
        const dash=new PatientDash()
    })
    


})