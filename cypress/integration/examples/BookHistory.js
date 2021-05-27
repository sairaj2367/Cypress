import BookingHistory from './PageObjects/BookingHistory'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import Appointment from './PageObjects/Appointment'
import Calendar from './PageObjects/Calendar'

describe('Appointment', () => 
{
    it('Verify search functionality in booking history', () => 
    {
        const b= new BookingHistory()
        const e=new Exception()   
        const login=new LoginPage()
        const details=new LoginDetails()
        login.visit("dev")
        e.except()
        details.loginDetails(1)
        login.Checkcheckbox()
        login.submit()
        b.Appt()
        b.search("provider one","Booked","Today")
        b.clear()
      
    })

    it('Verify no results found message', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const details=new LoginDetails()
        const b= new BookingHistory()
        login.visit("dev")
        e.except()
        details.loginDetails(1)
        login.Checkcheckbox()
        login.submit()
        b.Appt()
        b.search("provider one","Booked","Today")
        b.validation()
    })

    it('Verify if the status can be changed for a patient under booking history', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const details=new LoginDetails()
        const b= new BookingHistory()
        login.visit("dev")
        e.except()
        details.loginDetails(1)
        login.Checkcheckbox()
        login.submit()
        b.Appt()
        b.showentries(25)
        b.saveStatus("Ramendra Naik","Pending")
    })

    it('Verify if the patient can be deleted under booking history', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const details=new LoginDetails()
        const b= new BookingHistory()
        login.visit("dev")
        e.except()
        details.loginDetails(1)
        login.Checkcheckbox()
        login.submit()
        b.Appt()
        b.showentries(25)
        b.del("Testing Agent")
    })

    it('Verify if the patient details can be edited under booking history', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const details=new LoginDetails()
        const b= new BookingHistory()
        const a =new Appointment()
        const c =new Calendar()
        login.visit("dev")
        e.except()
        details.loginDetails(1)
        login.Checkcheckbox()
        login.submit()
        b.Appt()
        b.showentries(25)
        b.edit("Ramendra Naik")
        a.selectProviderResoruceType("provider-option","provider one","zoom")
        a.selectService("This is service")
        a.addApptNote("hello tester")
        b.status("Pending")
        c.selecteditdate("04/03/2021","09:40AM")
    })
})