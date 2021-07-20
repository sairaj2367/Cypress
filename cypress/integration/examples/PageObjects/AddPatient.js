class AddPatient
{
    addPatient(value1,value2,value3,value4,value5,value6)
    {
        const clickAdd = cy.get('[role="button"]')
        clickAdd.click()

        const fname= cy.get('[id="first-name"]')
        fname.clear()
        fname.type(value1)

        const lname = cy.get('[id="last-name"]')
        lname.clear()
        lname.type(value2)

        const dob = cy.get('[id="dob"]')
        dob.then(elem => {
            elem.val(value3);
        });

        const gender=cy.get('[id="gender"]')
        gender.select(value4)

        const phone =cy.get('[id="work-phone"]')
        phone.clear()
        phone.type(value5)

        const email = cy.get('[id="email"]')
        email.clear()
        email.type(value6)
    }
    validation()
    {
        const error= cy.get('[id="appointment-error-message"]')
        error.should('have.class', 'error')
    }

    patientmanage(value)
    {
        const patients= cy.get('[class="mdi mdi-baby"]')
        patients.click({force:true})
        const patientmanage=cy.get('[href="/patients/management"]')
        patientmanage.click({force:true})
       

        if(value=="Invite Patients")
        {
            const invite=cy.get('[href="/patients/invitePatients"]')
            invite.click({force:true})
        }
        else if(value=="Import Patients")
        {
            const csvimport=cy.get('[href="/patients/import"] [class="box"]')
            csvimport.click({forec:true})
        }
    }
    invitepatient(value1,value2,value3,value4)
    {
        const fname= cy.get('[id="first-name"]')
        fname.clear()
        fname.type(value1)

        const lname = cy.get('[id="last-name"]')
        lname.clear()
        lname.type(value2)

        const email = cy.get('[id="email"]')
        email.clear()
        email.type(value3)

        const phone =cy.get('[type="tel"]')
        phone.clear()
        phone.type(value4)

        const send=cy.get('[type="submit"]')
        send.click({forec:true})

    }

    importpatients(value)
    {
        const choose=cy.get('[type="file"]')
        const filepath = 'csv/'+ value
        choose.attachFile(filepath)
        choose.click({force:true})
        const save= cy.get('[type="submit"]')
        save.click({force:true})

    }
}
export default AddPatient
//Email already exists. Please use a different one.

