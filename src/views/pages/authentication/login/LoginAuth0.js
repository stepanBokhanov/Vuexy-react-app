import React from "react"
import { CardBody, Button } from "reactstrap"
import { useAuth0 } from "../../../../authServices/auth0/auth0Service"

const LoginAuth0 = props => {
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
          Login With Auth0
        </Button.Ripple>
      </CardBody>
    </React.Fragment>
  )
}
export default LoginAuth0


