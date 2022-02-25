import Appointment from './PageObjects/Appointment'
import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import PatientDash from './PageObjects/PatientDash'

describe('Patient Dashboard', () => 
{
    // it('Verify Add Patient Package CTA functionality', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.addPatientPackage("free")
    // })

    // it('Verify Add Service to Patient CTA functionality ', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.addservicetopatient()
    //     dash.service("Dermo")
    //     dash.save()
    // })

    // it('Verify Add received date CTA functionality', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.addreceiveddate("free service","08/11/2021")
    // })
    
    // it('Verify if i can sign the consent form', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.signConsentForm("free service","testing")
        
    // })

    // it('Verify if i can view the consent form', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.viewConsentForm("free service")
    // })

    // it('Verify if i can add an encounter for a service', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.addEncounter("free service")
    //     dash.selectprovider("Tom Provider one (02-12-1989)")
    //     dash.selectencounter("Consultation")
    // })

    // it('Verify if i can add the followup note', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.addfollowup("check","N","TEST","TEST","checkt")
    // })

    // it('Verify if i can view the followupnote', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.viewfollowup("check")
    // })

    // it('Verify if i can view the encounter', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.viewencounter("check")
    // })

    // it('Verify if i can edit the encounter', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.editencounter("check")// need to add custom encounter form
    // })

    // it('Verify if i can edit the followupnote and delete them', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.editfollowup("check","check","Y","TESTT","TESTT","TESTT")
    // })

    // it('Verify if i can send the pre and post instructions', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.instructions("check","Logs")
    // })

    // it('Verify if the encounter can be deleted and also the service listed', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()
    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_four(QA)")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Services")
    //     dash.deletion("delete test")
    // })

    // it('Verify Add image CTA functionality', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Images")
    //     dash.addimage("test","test")
    // })

    // it('Verify if i can edit the images', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Images")
    //     dash.editImage("test","check")
    // })


    // it('Verify search, compare, delete and select functionality for images', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Images")
    //     dash.searchImage("test","check")//#images > div > div:nth-child(1) > img
    // })

    // it('Verify the functionalities under Patient Document sub-module', () => 
    // {
    //     const e=new Exception()   
    //     const login=new LoginPage()
    //     const a=new Appointment()
    //     const details=new LoginDetails()
    //     const dash=new PatientDash()

    //     login.visit("live")
    //     e.except()
    //     details.loginDetails(4)
    //     login.Checkcheckbox()
    //     login.submit()
    //     //a.facilityDropdown("Facility_one")
    //     a.searchBox(" Tester check ")
    //     dash.patientdashboard("Patient Documents")
    //     dash.patientDocument("check","test","testedit")
        
    // })

    it('Verify the functionalities under Patient Packages sub-module', () => 
    {
        const e=new Exception()   
        const login=new LoginPage()
        const a=new Appointment()
        const details=new LoginDetails()
        const dash=new PatientDash()

        login.visit("live")
        e.except()
        details.loginDetails(4)
        login.Checkcheckbox()
        login.submit()
        //a.facilityDropdown("Facility_one")
        a.searchBox(" Tester check ")
        dash.patientdashboard("Patient Packages")
        dash.patientPackage("free","hammer","11/08/2022","Tom Provider one","2","22")
        
    })
})
//"pageLoadTimeout": 500000,
//"viewportHeight" : 768,
//"viewportWidth" : 1366