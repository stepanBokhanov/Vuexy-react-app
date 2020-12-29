import React from "react"
import { Button, CardBody } from "reactstrap"
import { useAuth0 } from "../../../../authServices/auth0/auth0Service"

const RegisterAuth0 = (props) => {
  let { isAuthenticated, loginWithRedirect } = useAuth0()
    return (
      <React.Fragment>
      <CardBody className="pt-1 pb-3">
        <Button.Ripple
          color="primary"
          className="mt-1"
          onClick={ e => {
            e.preventDefault()

            if (!isAuthenticated){
              loginWithRedirect()
            }
            else{
              console.log('Already Logged In')
            }
          }}
        >
          Register With Auth0
        </Button.Ripple>
      </CardBody>
    </React.Fragment>
    )
}

export default RegisterAuth0
