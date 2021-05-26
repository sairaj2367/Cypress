import BookingHistory from './PageObjects/BookingHistory'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
describe('Appointment', () => 
{
    // it('Verify search functionality in booking history', () => 
    // {
    //     const b= new BookingHistory()
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const details=new LoginDetails()
    //     login.visit("dev")
    //     e.except()
    //     details.loginDetails(1)
    //     login.Checkcheckbox()
    //     login.submit()
    //     b.Appt()
    //     b.search("provider one","Booked","Today")
    //     b.clear()
      
    // })

    // it('Verify no results found message', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const details=new LoginDetails()
    //     const b= new BookingHistory()
    //     login.visit("dev")
    //     e.except()
    //     details.loginDetails(1)
    //     login.Checkcheckbox()
    //     login.submit()
    //     b.Appt()
    //     b.search("provider one","Booked","Today")
    //     b.validation()
    // })

    it('Verify if status can be changed for a patient under booking history', () => 
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
        b.saveStatus("SAI RAJ","Booked")
    })
})