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
}
export default AddPatient
//Email already exists. Please use a different one.

