class Exception
{
    except()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        //   cy.window().document().then(function (doc) {
        //     doc.addEventListener('click', () => {
        //       setTimeout(function () { doc.location.reload() }, 5000)
        //     })
        //   })
    }
}
export default Exception