class Appointment
{
    
    facilityDropdown(value)
    {
        const field = cy.get("#global-facility")
        if(value==102)
        {
            field.select("102").should('have.value','102')
            return this
        }
        else (value==101)
        {
            field.select("101").should('have.value','101')
            return this
        }
      
        
    }
    appt()
    {
        //const d=cy.get(".ti-menu")
        //d.click()
        const Appointment=cy.get("[class='mdi mdi-calendar-clock']")
        Appointment.click()
        .wait(4000)
        const add_appt=cy.get("[href='/appointments/add']")
        add_appt.click()
        cy.get("[data-time='09:00:00']").click()

    }    
    searchBox(value)
    {
        const g = cy.get("[title='Select Patient']")
        g.click()
        const y=cy.get("[type='search']")
        y.type(value)
        y.type("{enter}")
        return this
    }

    selectPatient(value)
        {
            const select_patient=cy.get("#select2-patient-id-container")
            select_patient.click()
            select_patient.type(value)
            select_patient.type("{enter}")
            return this
        }
    
    selectProviderResoruceType(value1,value2)
    {
        const select_resource=cy.get("[id='resource-type']")
        if(value1=="provider-option")
        {
            select_resource.select("provider-option").should('have.value','provider-option')
            const select_provider=cy.get("[id='select2-provider-id-container']")
            select_provider.click()
            const select_provider_type= cy.get("body > span > span > span.select2-search.select2-search--dropdown > input")
            select_provider_type.click()
            select_provider_type.type(value2)
            select_provider_type.type("{enter}")
            return this
        }
        else (value1=="resource-option")
        {
            select_resource.select("resource-option").should('have.value','resource-option')
            const select_resource_option=cy.get("[id='select2-resource-id-container']")
            select_resource_option.click()
            const select_resource_type= cy.get("body > span > span > span.select2-search.select2-search--dropdown > input")
            select_resource_type.click()
            select_resource_type.type(value2)
            select_resource_type.type("{enter}")
            return this
        }

    }

   selectService(value)
    {
        const field = cy.get("[class='input select required'] [id='service_0']")
        if(value==183)
        {
            field.select("183").should('have.value','183')
            return this
        }
        else (value==101)
        {
            field.select("101").should('have.value','101')
            return this
        }
    
    }
       
    addApptNote(value)
    {
        const note =cy.get(" [placeholder='Add appointments Note']")
        note.type(value)
    }

    selectDate(value)
    {
        const add= cy.get(" [id='appointment-date']")
        add.click()
    }
       
}
export default Appointment