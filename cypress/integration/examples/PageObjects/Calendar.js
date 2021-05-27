
class Calendar
{
   selectDate(value1,value2,value3)
    {
        const add= cy.get(" [id='appointment-date']")
        //add.click()
        add.then(elem => {
            elem.val(value1);
        });
        
        const add1= cy.get('[name="time"]')
        add1.clear()
        add1.type(value2)

        const s= cy.get('[id="create-appointment"]')
        s.click()
        
        if("booked"==value3)
        {
            const h= cy.get('body > div.sweet-alert.showSweetAlert.visible > h2')
        if(h.contains("Confirmation Required!"))
        {
            cy.get('[class="confirm"]').click()
        }
        }
    }

    selecteditdate(value1,value2,value3)
    {
        const add= cy.get(" [id='appointment-date']") // date
        //add.click()
        add.then(elem => {
            elem.val(value1);
        });
        
        const add1= cy.get('[name="time"]') //time
        add1.clear()
        add1.type(value2)

        const s= cy.get('[type="submit"]') //submit
        s.click()
        
        if("booked"==value3)
        {
            const h= cy.get('body > div.sweet-alert.showSweetAlert.visible > h2')
            if(h.contains("Confirmation Required!"))
            {
                cy.get('[class="confirm"]').click()
            }
        }
    }
/* 
    month(value,value1,value2)
        {
       
            //const p = cy.get('#dtp_KIJoZ > div > div.dtp-date-view > div.dtp-picker > div.dtp-picker-calendar > div')
            const p = cy.contains('March').click()
            const d= cy.get('[class="dtp-date"] [class="right center p10"] [class="dtp-select-month-after"] [class="ti-angle-right"] ')
            //const y =cy.get("#dtp_KIJoZ > div > div.dtp-date-view > div.dtp-date > div:nth-child(3) > div.right.center.p10 > a > i")
            if(p.contains(value1))
            {
                for(var i=1;i<=12;i++)
                {
                    d.click()
                if(i==value)
                {
                     break
                }
                }
            }
            const y = cy.get("div#dtp_KIJoZ div.dtp-actual-year.p80")
            y.click()
            const selectyear=cy.get('[class="year-picker-item"]')
            selectyear.select(value2)
            return this
        }*/
        
    }

export default Calendar