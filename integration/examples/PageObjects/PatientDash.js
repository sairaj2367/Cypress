class PatientDash
{
    patientdashboard(value)
   {
       const patients= cy.get('[class="mdi mdi-baby"]')
       patients.click({force:true})
       const dash=cy.get('[id="demography"]')
       dash.click({force:true})

       if(value=="Patient Services")
       {
           const service=cy.get('[id="patient-services"]')
           service.click({force:true})
       }

       if(value=="Patient Images")
       {
           const service=cy.get('[id="patient-images"]')
           service.click({force:true})
       }

       if(value=="Patient Documents")
       {
         cy.get('[id="document"]').click({force:true})
       }

       if(value=="Patient Packages")
       {
          cy.get('[id="patient-packages"]').click({force:true})
       }
    }

    addPatientPackage(value)
   {
      const addpatientpackage=cy.get('[data-original-title="Add Patient Packages"]')
      addpatientpackage.click({force:true})
       
      const packagename=cy.get('[name="service_packages_id"]')
      packagename.select(value,{force:true})  

      const add= cy.get(' [class="form-actions packages"] [class="btn btn-success"]') 
      add.click({force:true})
      cy.contains('The patient package has been saved.').should('have.class', 'success')

      // const dropdown = cy.get('[name="page_filter"]')
      // for (let i = 0; i <=4; i++) {
      //    let j=1
      //    if (j==1||j==2||j==5||j===10||j==20)
      //    {
      //       value1=value1*j
      //       dropdown.select(value1)
      //    }
      //    j++
      // }

    }

    addservicetopatient()
   {
      const addservicetopatient=cy.get('[data-original-title="Add Service to Patient"]')
      addservicetopatient.click({force:true})
      const button=cy.get('[id="add-patient-service-button"]')
      button.click({force:true})
      
    }

    service(value)
   {
      const name=cy.get('#patient-services-section [name="service_ids[]"]')
      name.select(value,{force:true})
    }

    save()
   {
      
      cy.window().document().then(function (doc) {
         doc.addEventListener('click', () => {
           setTimeout(function () { doc.location.reload() }, 5000)
         })
         cy.get('[type="submit"]').click({force:true}) //The services have been added to the patient.
       })
      
      cy.contains('The services have been added to the patient.').should('have.class', 'success')
      this.cancelcta()
      // cancel.click({force:true})
    }

    addreceiveddate(value,value1)
   {
      const adddate=cy.get('[data-name="'+value+'"]')
      adddate.click({force:true})

      const close=cy.get('#myModal > div > div > div > button')
      close.click({force:true})

      adddate.click({force:true})
      const closebutton = cy.get('#myModal > div > div > form > div.modal-footer > button.btn.btn-default')
      closebutton.click({force:true})

      adddate.click({force:true})
      const add= cy.get(" [id='service-taken-date']")
        //add.click()
        add.then(elem => {
            elem.val(value1);
        });
      const save = cy.get('[id="save-taken-date"]')
      save.click({force:true})//Service taken date has been updated successfully.
      
      cy.contains('Service taken date has been updated successfully.').should('have.class', 'success')
    }

    signConsentForm(value,value1,value2)
   {
      cy.get("td:nth-child(1)").each(($e1,index,$list) => {
         const text = $e1.text();
         if (text.includes(value)) {
           cy.get("td:nth-child(1)").eq(index);
           const sign=cy.get('[id="sign-consent-form"]')
           sign.eq(index).click({force:true})
         }
       });

       const selecttemplate=cy.get('[id="template-type"]')
       selecttemplate.select(value1,{force:true})

      //  const save=cy.get('[id="submit-consent-form-template-selection"]')
      //  save.click({forec:true}) removed
      //  cy.contains('Template assigned successfully!').should('have.class', 'success')

       const pad=cy.get('[id="sign-pad"]')
       pad.click().trigger('mousedown',{button:0})
       //cy.get('[href="#clear"]').click({force:true})
       //pad.click({force:true})
      //  cy.get('[id="confirm-signature"]').click({force:true})

        if(value2=="email")
       {
         cy.get('[id="patient-send-button"]').click()
       }

       else if(value2=="phone")
       {
         cy.get('[id="patient-send-button-mobile"]').click()
       }
       else{
         const submit=cy.get('[id="confirm-signature"]')
         submit.click({force:true})//Consent form signed successfully.
         cy.contains('Consent form signed successfully.').should('have.class', 'success')
        }
    }

    viewConsentForm(value,value1)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              const sign=cy.get('[id="sign-consent-form"]')
              sign.eq(index).click({force:true})
              const view= cy.get('[class="fa fa-eye text-success m-r-10"]')
              view.click()
            }
          });
          cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value1)) {
              cy.get("td:nth-child(1)").eq(index);
              const sign=cy.get('[id="sign-consent-form"]')
              sign.eq(index).click({force:true})
              const view= cy.get('[class="fa fa-eye text-success m-r-10"]')
              view.click()
            }
          });
          cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 9000)
            })
            cy.get('[class="fa fa-cloud-download"]').click({force:true})
          })
          
          cy.get('[class="btn btn-block btn-inverse"]').click({force:true}) 
    }

    addEncounter(value)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              const sign=cy.get('[data-original-title="Add Encounter"]  ')
              sign.eq(index).click({force:true})
            }
          });
    }

    selectprovider(value)
      {
         const select=cy.get('[id="provider-id"]')
         select.select(value,{force:true})
         cy.get('[id="provider-submit"]').click()
    }

    selectencounter(value)
      {
         const select=cy.get('[id="encounter-type"]')
         select.select(value,{force:true})
         cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get('#encounter-type-submit').dblclick({force:true})
          })
         
         //cy.wait(90000)
    }

    addfollowup(value,value1,value2,value3,value4)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[data-original-title="Add follow-up"]').click({force:true})
            }
          });
         
          this.followupForm(value1,value2,value3,value4)
          cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get('[type="submit"]').click({force:true})// Follow up note has been saved
            cy.contains('Follow up note has been saved').should('have.class', 'success')
          })
         
         
      
    }

    followupForm(value1,value2,value3,value4)
      {
         const radio= cy.get("[value="+ value1 +"]")
         radio.click({force:true})

         const concern= cy.get('[id="patient-concerns"]')
         concern.type(value2)

         const treatmentreq= cy.get('[id="treatment-performed"]')
         treatmentreq.type(value3)

         const notes=cy.get('[id="additional-notes"]')
         notes.type(value4)
         cy.wait(5000)

    }

    viewfollowup(value)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[data-original-title="View follow-up notes"]').click({force:true})
              cy.get('[id="save-encounter"]').click({force:true})
            }
          });
    }

    viewencounter(value)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[data-original-title="View Encounter"]').click({force:true})
              cy.get('[id="save-encounter"]').click({force:true})
            }
          });
    }

    editencounter(value)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[data-original-title="Edit Encounter"]').click({force:true})
              //cy.get('#edit-custom-encounter-form > button').click({force:true})
            }
          });
    }

    editfollowup(value,date,value1,value2,value3,value4)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[data-original-title="View follow-up notes"]').click({force:true})
              cy.get("td:nth-child(4)").each(($e1,index,$list) => {
               const text = $e1.text();
               if (text.includes(date)) {
                 cy.get("td:nth-child(4)").eq(index);
                 cy.get('[class="fa fa-pencil text-inverse m-r-10"]').eq(index).click({force:true})
                 this.followupForm(value1,value2,value3,value4)
                 cy.get('[id="save-encounter"]').click({force:true})
                 cy.get('[class="fa fa-times text-inverse m-r-10"]').click({force:true}) 
               }
            });
            }
          });
    }

    instructions(value,value1)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[class="ti-hand-point-left"]').eq(index).click({force:true})
              cy.get('[title="Send pre instruction to Email"]').eq(index).click({force:true})//Instruction sent to
              cy.contains('Instruction sent to').should('have.class', 'success')
            }
            
          });
          cy.reload()

          cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[class="ti-hand-point-right"]').eq(index).click({force:true})
              cy.get('[title="Send post instruction to Email"]').eq(index).click({force:true})//Instruction sent to
              cy.contains('Instruction sent to').should('have.class', 'success')
            }
            
          });
          this.administration(value1)
            cy.contains("A pre instruction for check has been sent to").should('be.visible')
            cy.contains("A post instruction for check has been sent to").should('be.visible')
    }

    administration(value)
      {
         const d=cy.get('[class="mdi mdi-airplay"]')
         d.click({force:true})
         const ad = cy.get('#sidebarnav > li.active')
         ad.contains(value).click({force:true})
    }

    deletion(value)
      {
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[class="fa fa-trash text-danger ml-2"]').eq(index).click({force:true}) 
            }
          });// need to have a service with an encounter

          cy.get("td:nth-child(1)").each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
              cy.get("td:nth-child(1)").eq(index);
              cy.get('[class="fa fa-trash text-danger m-r-10"]').eq(index).click({force:true})
               
            }
          });
    }

    addimage(value1,value2)
      {
         const add = cy.get('[class="btn btn-danger float-right btn-sm"]')
         add.click({force:true})

         const tagadd= cy.get('[id="title"]')
         tagadd.select(value1,{force:true})

         const filepath = 'image/test.jpg'
         cy.get('input[type="file"]').attachFile(filepath)
         cy.get('[id="date-format"]').click({force:true})
         const ok=cy.get('[class="dtp-btn-ok btn btn-success"]')

         for(let i =0; i<=2; i++)
         {
            ok.click({force:true})
         }
         
         if(value2=="inactive")
         {
            cy.get('[class="lever"]').click({force:true})
         }
         cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get('[id="save-patient-image"]', { timeout: 10000 }).should('be.visible').dblclick({force:true})
            cy.contains(" The patient image has been saved.").should('be.visible')
            
          })
          this.cancelcta()
         //cy.get('[data-test=submitIsVisible]', { timeout: 10000 }).should('be.visible');
         
    }

    searchImage(value,value1)
      {
         //Search 
         this.searchByTag(value)

         //Image Editor
         const firstimage= cy.get('#images > div > div:nth-child(1) > img')
         firstimage.click({force:true})
         const zoomin=cy.get('[class="viewer-zoom-in"]')
         zoomin.dblclick({force:true})
         const zoomout=cy.get('[class="viewer-zoom-out"]')
         zoomout.dblclick({force:true})
         const onetone=cy.get('[class="viewer-one-to-one"]')
         onetone.dblclick({force:true})
         const reset=cy.get('[class="viewer-reset"]')
         reset.dblclick({force:true})
         const fullview=cy.get('[class="viewer-play viewer-large"]')
         fullview.dblclick({force:true})
         const viewnext=cy.get('[class="viewer-next"]')
         viewnext.dblclick({force:true})
         const prev=cy.get('[class="viewer-prev"]')
         prev.dblclick({force:true})
         const left=cy.get('[class="viewer-rotate-left"]')
         left.dblclick({force:true})
         const right=cy.get('[class="viewer-rotate-right"]')
         right.dblclick({force:true})
         const horizontal=cy.get('[class="viewer-flip-horizontal"]')
         horizontal.dblclick({force:true})
         const vertical=cy.get('[class="viewer-flip-vertical"]')
         vertical.dblclick({force:true})
         const closeeditor=cy.get('[class="viewer-button viewer-close"]')
         closeeditor.dblclick({force:true})

         //Image selection, uncheck and compare
         const checked =cy.get('[type="checkbox"]')
         checked.check({force:true})
         cy.get('[id="uncheck-all"]').click({force:true})
         cy.get('[type="checkbox"]').check({force:true})
         const compare = cy.get('[id="compare"]')
         compare.click({force:true})
         const closeicon= cy.get(' [class="modal-dialog modal-xl"] [class="modal-header"] [type="button"] ')
         closeicon.dblclick({force:true})
         cy.get('[id="compare"]').click({force:true})
         const close= cy.get(' [class="modal-dialog modal-xl"] [class="modal-footer"] [type="button"] ')
         close.dblclick({force:true})

         //delete
         cy.get('[class="single-image-div"]').each(($e1,index,$list) => {
            const text = $e1.text();
            cy.window().document().then(function (doc) {
               doc.addEventListener('click', () => {
                 setTimeout(function () { doc.location.reload() }, 5000)
               })
              
             })
            if (text.includes(value1)) {
              cy.get('[class="single-image-div"]').eq(index);
              cy.get('[data-original-title="Deactivate"]').eq(index).dblclick({force:true})
              //cy.contains(" The Patient Image has been De-Activated.").should('be.visible') 
              //cy.get('#edit-custom-encounter-form > button').click({force:true})
            }
          });


    }

    editImage(value,value1,value2)
      {
         cy.get('[class="single-image-div"]').each(($e1,index,$list) => {
            const text = $e1.text();
            if (text.includes(value)) {
               cy.get('[class="single-image-div"]').eq(index);
               cy.get('[data-original-title="Edit"]').eq(index).click({force:true})
                
               const tagadd= cy.get('[name="title[]"]')
               tagadd.select(value1,{force:true})

               const filepath = 'image/test.jpg'
               cy.get('input[type="file"]').attachFile(filepath)
               cy.get('[id="taken-date-input"]').click({force:true})
               const ok=cy.get('[class="dtp-btn-ok btn btn-success"]')

               for(let i =0; i<=2; i++)
               {
                  ok.click({force:true})
               }
         
               if(value2=="inactive")
               {
                  cy.get('[class="lever"]').click({force:true})
               }

               cy.window().document().then(function (doc) {
                  doc.addEventListener('click', () => {
                    setTimeout(function () { doc.location.reload() }, 5000)
                  })
                  cy.get('[type="submit"]').dblclick({force:true})
                  cy.contains(" The patient image has been saved.").should('be.visible')
                  
                })
                this.cancelcta()

            }
          });
    }

    cancelcta()
      {
         cy.get('[class="btn btn-inverse"]').click({force:true})
    }
    patientDocument(value,value1,value2)
    {
        //Add document
        cy.get('[class="btn btn-danger m-r-10"]').click({force:true})
        this.patientdocument()
        cy.get('[id="date-format"]').click({force:true})
        const ok=cy.get('[class="dtp-btn-ok btn btn-success"]')//during document add
        for(let i =0; i<=2; i++)
         {
            ok.click({force:true})
         }
        this.patientForm(value,value1)
        cy.contains(' The patient document has been saved.').should('have.class','success')

        //edit document
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            const edit=cy.get('[class="fa fa-pencil text-inverse m-r-10"]')
            edit.eq(index).click({force:true})
          }
        });
        this.patientdocument()
        cy.get('[id="taken-date-input"]').click({force:true})
        const ok1=cy.get('[class="dtp-btn-ok btn btn-success"]')//during document edit
        for(let i =0; i<=2; i++)
         {
            ok1.click({force:true})
         }
        this.patientForm(value2,value1)
        cy.contains('The patient document has been updated.').should('have.class','success')

        //search fucntionality
        this.searchByTag(value1)

        //view document
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value2)) {
            cy.get("td:nth-child(1)").eq(index);
            const view=cy.get('[target="_blank"]')
            view.eq(index).click({force:true})
          }
        });

        //delete document
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value2)) {
            cy.get("td:nth-child(1)").eq(index);
            const del=cy.get('[class="fa fa-close text-inverse m-r-10"]')
            del.eq(index).click({force:true})
          }
        });
        cy.contains('The Patient Document has been Deleted.').should('have.class','success')

        //view consent document
        cy.get('[data-original-title="View list"]').click({force:true})
    }
    patientForm(value,value1)
    {
        const name=cy.get('[name="document_name"]')
        name.clear()
        name.type(value)
        const tag = cy.get('[class="form-control tags-name select2-hidden-accessible"]')//during document add
        tag.select(value1,{force:true})
        cy.get('[class="lever"]').dblclick({force:true}) 
        cy.get('[class="btn btn-info"]').click({force:true})
    }

    patientdocument()
    {
      const filepath = 'document/test.pdf'
      cy.get('input[type="file"]').attachFile(filepath)
    }
    searchByTag(value1)
    {
      const tag=cy.get('[id="search"]')
      tag.select(value1,{force:true})
      cy.get('[id="select2-search-container"]').click({force:true})
      const search = cy.get('[type="search"]')
      search.type(value1,{force:true})
      search.type("{enter}")
      const date = cy.get('[class="input text"]')
      date.click({force:true})
      cy.get('[class="dtp-btn-ok btn btn-success"]').click({force:true})
      cy.get('[class="input-group-btn"] [type="submit"]').click({force:true})
      cy.get('[class="btn btn-warning"]').click({force:true})
    }

    patientPackage(value,value1,value2,value3,value4,value5)
    {
        this.addPatientPackage(value)

        //view services
        this.viewService(value)

        //Add taken date
        this.addTakenDate(value1)
        cy.get('#myModal > div > div > div > button').click({force:true})
        this.addTakenDate(value1)
        cy.get('[class="form-material"] [class="btn btn-default"]').click({force:true})
        this.addTakenDate(value1)
        cy.get('[id="service-taken-date"]').type(value2,{force:true})

        cy.window().document().then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
          })
          cy.get('[id="save-taken-date"]').click({force:true})
        })

        cy.contains('Tester check has taken a service. You can generate the invoice now.').should('have.class',"success")
        cy.get('[class="btn btn-inverse"]').dblclick({force:true})

         //Payment toggle 
         this.patientdashboard("Patient Packages")
         cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            const toggle=cy.get('[class="lever"]')
            toggle.eq(index).dblclick({force:true})
          }
        });

        //Invoice add
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            const add=cy.get('[class="fa fa-plus text-inverse m-r-10 js-check-services-on-invoice-icon"]')
            add.eq(index).dblclick({force:true})
          }
        });
        cy.get('[id="custom-discount"]').type(value5,{force:true})
        cy.get('[class="form-actions"] [class="btn btn-success"]').click({force:true})
        cy.get('[class="form-group"] [class="text-danger select-provider-warning"]').should('have.text','Please select a provider')
        cy.get('#add-patient-package-invoice-form > div.form-body > p.text-danger.select-provider-warning').should('have.text','Please select a provider')
        cy.get('[id="package-invoive-error"]').should('have.text',"Discount can't be more than total amount.")
        this.packageForm(value3,value4)

        //View Invoice
        this.viewInvoice(value)
        
        //cy.get('[onclick="printPage()"]').click({force:true})//printpage
        
        cy.window().document().then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 8000)
          })
          cy.get('[data-original-title="Export PDF"]').click({force:true})//exportpdf
        })        
        const pay=cy.get('[id="make-authorize-payment"]')
        pay.click({force:true})//pay
        cy.get('[id="confirm-payment"]').click({force:true})//modal pay
        cy.get('[class="modal-header"] [type="button"]').click({force:true})//close modal(icon)
        pay.click({force:true})//pay
        cy.get('[class="btn btn-default"]').click({force:true})//cancel modal
        cy.window().document().then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 8000)
          })
          cy.get('[data-original-title="Send Payment Link to email"]').click({force:true})//send payment link
        })
        cy.contains('Payment link has been sent to patient.').should('have.class','success')
        cy.window().document().then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 8000)
          })
          cy.get('[data-original-title="Send Email"]').click({force:true})//send email
        })
        
        cy.get('#print-invoice > a.btn.btn-inverse').click({force:true})//back cta
        cy.reload()

        //Send payment link
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            cy.window().document().then(function (doc) {
              doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 8000)
              })
              cy.get('[class="fa fa-envelope text-success m-r-10"]').eq(index).click({force:true})
            })
          }
        });
        cy.contains('Payment link has been sent to patient.').should('have.class','success')

        //Edit package
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            const edit=cy.get('[class="fa fa-edit text-inverse m-r-10"]')
            edit.eq(index).dblclick({force:true})
          }
        });
        cy.get('[name="provider_id"]').select(value3,{force:true})
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value1)) {
            cy.get("td:nth-child(1)").eq(index);
            const edit=cy.get('[id="cost"]')
            edit.eq(index).clear({force:true})
            edit.eq(index).type(value4,{force:true})
          }
        });
        cy.get('[class="form-actions"] [class="btn btn-success"]').click({force:true})

        //Delete Package
        cy.get("td:nth-child(1)").each(($e1,index,$list) => {
          const text = $e1.text();
          if (text.includes(value)) {
            cy.get("td:nth-child(1)").eq(index);
            cy.window().document().then(function (doc) {
              doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 5000)
              })
              cy.get('[class="fa fa-trash text-danger m-r-10"]').eq(index).click({force:true})
            })
          }
        });
        cy.contains(' The patient package has been deleted.').should('have.class','success')
    }

    addTakenDate(value)
    {
      cy.get("td:nth-child(1)").each(($e1,index,$list) => {
        const text = $e1.text();
        if (text.includes(value)) {
          cy.get("td:nth-child(1)").eq(index);
          const date=cy.get('[class="btn btn-primary btn-sm js-add-date-taken"]')
          date.eq(index).click({force:true})
        }//#myModal > div > div > div > button
      });
    }
    viewService(value)
    {
      cy.get("td:nth-child(1)").each(($e1,index,$list) => {
        const text = $e1.text();
        if (text.includes(value)) {
          cy.get("td:nth-child(1)").eq(index);
          const view=cy.get('[class="view-service-btn m-r-10"]')
          view.eq(index).click({force:true})
        }
      });
    }
    invoiceId()
    {
      cy.get('[name="inovice_number"]').then(function(text2){
        text2.text()
      })

    }
    viewInvoice(value)
    {
      cy.get("td:nth-child(1)").each(($e1,index,$list) => {
        const text = $e1.text();
        if (text.includes(value)) {
          cy.get("td:nth-child(1)").eq(index);
          const view=cy.get('[class="fa fa-eye text-inverse m-r-10"]')
          view.eq(index).dblclick({force:true})
        }
      });
    }

    packageForm(value3,value4)
    {
      cy.get('[name="provider_id"]').select(value3,{force:true})
      cy.get('[id="custom-discount"]').clear({force:true})
      cy.get('[id="custom-discount"]').type(value4,{force:true})
      cy.get('[class="lever"]').dblclick({force:true},{multiple:true})
      cy.get('[class="form-actions"] [class="btn btn-success"]').click({force:true})
    }
}
export default PatientDash
