
class Appointment
{
    
    facilityDropdown(value)
    {
        const field = cy.get("#global-facility")
            //field.contains(value)
            field.select(value,{force:true})
            return this        
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
        .wait(2000)

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
    
    selectProviderResoruceType(value1,value2,value3)
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
            if(value3=="zoom")
            {
                const zoom=cy.get('[type="checkbox"]')
                zoom.check({force:true})
            }
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
        const field = cy.get("#service-section > div > div.col-md-4 > div [id='service_0']")
        field.select(value,{force:true})
        return this
        
    }
    addmoreservice(value)
    {
        const s=cy.get('[id="add-more-appointment-services"]')
        s.click()
    }
       
    addApptNote(value)
    {
        const note =cy.get('[name="appointment_notes"]')
        note.type(value)
    }

    payment(value1,value2,value3)
    {
        const backend=cy.get('[href="#"] [class="mdi mdi-message-settings-variant"]')
        backend.click()
        cy.get('[href="/appointments/setting"]').click()
        const acceptpayment=cy.get('[class="lever"]')
        if(value1=="Y")
        {
            acceptpayment.click()
            cy.get('[id="appointment-payment-amount"]').clear()
            cy.get('[id="appointment-payment-amount"]').type(value2)
        }
        if(value1=="N")
        {
            acceptpayment
        }
        cy.get('[id="appointment-message"]').clear()
        cy.get('[id="appointment-message"]').type(value3)
    }
    officedate(day,value1,value2,value3)
    {
        switch (day) {
            case "MON":
                const mon= cy.get('[id="md_checkbox_0"]')
                if(value1=="Y")
                {
                    mon.check({ force: true })
                }
                if(value1=="N")
                {
                    mon.uncheck({ force: true })
                    const starttime=cy.get('form#appointment-settings div:nth-child(7) > div:nth-child(3) > select')
                    starttime.select(value2)
                    const endtime=cy.get('form#appointment-settings div:nth-child(7) > div:nth-child(4) > select')
                    endtime.select(value3)
                }
              break;
              case "TUE":
                const tue= cy.get('[id="md_checkbox_1"]')
                if(value1=="Y")
                {
                    tue.check({ force: true })
                }
                if(value1=="N")
                {
                    tue.uncheck({ force: true })
                    const tstarttime=cy.get('form#appointment-settings div:nth-child(9) > div:nth-child(3) > select')
                    tstarttime.select(value2)
                    const tendtime=cy.get('form#appointment-settings div:nth-child(9) > div:nth-child(4) > select')
                    tendtime.select(value3)
                }
              break;
              case "WED":
                const wed= cy.get('[id="md_checkbox_2"]')
                if(value1=="Y")
                {
                    wed.check({ force: true })
                }
                if(value1=="N")
                {
                    wed.uncheck({ force: true })
                    const wstarttime=cy.get('form#appointment-settings div:nth-child(11) > div:nth-child(3) > select')
                    wstarttime.select(value2)
                    const wendtime=cy.get('form#appointment-settings div:nth-child(11) > div:nth-child(4) > select')
                    wendtime.select(value3)
                }
              break;
              case "THU":
                const thu= cy.get('[id="md_checkbox_3"]')
                if(value1=="Y")
                {
                    thu.check({ force: true })
                }
                if(value1=="N")
                {
                    thu.uncheck({ force: true })
                    const thstarttime=cy.get('form#appointment-settings div:nth-child(13) > div:nth-child(3) > select')
                    thstarttime.select(value2)
                    const thendtime=cy.get('form#appointment-settings div:nth-child(13) > div:nth-child(4) > select')
                    thendtime.select(value3)
                }
              break;
              case "FRI":
                const fri= cy.get('[id="md_checkbox_4"]')
                if(value1=="Y")
                {
                    fri.check({ force: true })
                }
                if(value1=="N")
                {
                    fri.uncheck({ force: true })
                    const fstarttime=cy.get('form#appointment-settings div:nth-child(15) > div:nth-child(3) > select')
                    fstarttime.select(value2)
                    const fendtime=cy.get('form#appointment-settings div:nth-child(15) > div:nth-child(4) > select')
                    fendtime.select(value3)
                }
              break;
              case "SAT":
                const sat= cy.get('[id="md_checkbox_5"]')
                if(value1=="Y")
                {
                    sat.check({ force: true })
                }
                if(value1=="N")
                {
                    sat.uncheck({ force: true })
                    const sstarttime=cy.get('form#appointment-settings div:nth-child(17) > div:nth-child(3) > select')
                    sstarttime.select(value2)
                    const sendtime=cy.get('form#appointment-settings div:nth-child(17) > div:nth-child(4) > select')
                    sendtime.select(value3)
                }
              break;
              case "SUN":
                const sun= cy.get('[id="md_checkbox_6"]')
                if(value1=="Y")
                {
                    sun.check({ force: true })
                }
                if(value1=="N")
                {
                    sun.uncheck({ force: true })
                    const sustarttime=cy.get('form#appointment-settings div:nth-child(19) > div:nth-child(3) > select')
                    sustarttime.select(value2)
                    const suendtime=cy.get('form#appointment-settings div:nth-child(19) > div:nth-child(4) > select')
                    suendtime.select(value3)
                }
              break;
        }
    }
    
    selectAvailableProvider(value)
    {
        const provider= cy.get('#appointment-settings > div.form-body > div.row.mb-3 > div > span > span.selection > span')
        cy.get('select')
        .invoke('provider one', '')
        .trigger('change')
        provider.type(value).click()
    }  
}
export default Appointment