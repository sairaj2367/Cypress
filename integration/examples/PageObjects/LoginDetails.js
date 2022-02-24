class LoginDetails
{
    loginDetails(value)
    {
        switch (value) {
            case 0:
                const d=cy.get("[name='username']")
                d.clear()
                d.type("admin_1")
                const i=cy.get("[name='password']")
                i.clear()
                i.type("password123")
              break;
            case 1:
                const l=cy.get("[name='username']")
                l.clear()
                l.type("admin1")
                const f=cy.get("[name='password']")
                f.clear()
                f.type("password123")
                break;

                case 2:
                const v=cy.get("[name='username']")
                v.clear()
                v.type("ea")
                const u=cy.get("[name='password']")
                u.clear()
                u.type("password123")
                break;

                case 3:
                const b=cy.get("[name='username']")
                b.clear()
                b.type("admin1")
                const x=cy.get("[name='password']")
                x.clear()
                x.type("password12")
                break;

                case 4:
                const ba=cy.get("[name='username']")
                ba.clear()
                ba.type("sairaj_one")
                const xs=cy.get("[name='password']")
                xs.clear()
                xs.type("12345678Q@z")
                break;
          }
          return this
    }
}
export default LoginDetails