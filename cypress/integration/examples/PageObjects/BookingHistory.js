class BookingHistory
{
    Appt()
    {
        const Appointment=cy.get("[class='mdi mdi-calendar-clock']")
        Appointment.click()
        const BookingHistory = cy.get("[id='booking-history']")
        BookingHistory.click()
    }

    search(value1,value2,value3)
    {
        const selectprovider = cy.get('[id="select2-provider-id-container"]')
        selectprovider.click()
        const textbox = cy.get('[type="search"]')
        textbox.type(value1).type("{enter}")

        const status2 = cy.get("#main-wrapper > div.page-wrapper > div > div:nth-child(1) > div > div > div.card-body > form > div.form-body > div > div:nth-child(2) > div > div #status")
        status2.select(value2,{force:true})
       
        const date2=cy.get("#date-range")
        date2.select(value3,{force:true})

        const button = cy.get("#main-wrapper > div.page-wrapper > div > div:nth-child(1) > div > div > div.card-body > form > div.form-actions > button")
        button.click()

    }

    validation()
    {
        cy.get('[class="alert alert-danger"]').contains("No results found !")
    }

    clear()
    {
        const clear=cy.get('[href="/appointments"]')
        clear.click()
    }

    saveStatus(value1)
    {
        const patient = cy.get('#main-wrapper > div.page-wrapper > div > div:nth-child(2) > div > div > div.card-body')

        if(patient.contains(value1))
        {
            cy.click(' [class="fa fa-trash text-danger m-r-10"]')
        }
    }
}
export default BookingHistory