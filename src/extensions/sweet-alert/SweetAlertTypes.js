import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';

class SweetAlertTypes extends React.Component {
  state = {
   successAlert : false, 
   errorAlert : false, 
   infoAlert : false, 
   warningAlert : false
  }

  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }

  render(){
    return (
    <Card>
      <CardHeader>
        <CardTitle>Types</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". 
        </p>
        <Button className="mr-1 mb-1" color="success" onClick={() => this.handleAlert("successAlert", true)} outline>Success</Button>
        <Button className="mr-1 mb-1" color="danger" onClick={() => this.handleAlert("errorAlert", true)} outline>Error</Button>
        <Button className="mr-1 mb-1" color="warning" onClick={() => this.handleAlert("warningAlert", true)} outline>Warning</Button>
        <Button className="mb-1" color="info" onClick={() => this.handleAlert("infoAlert", true)} outline>Info</Button>
        

        <SweetAlert success title="Success"
          show={this.state.successAlert} 
          onConfirm={() => this.handleAlert("successAlert", false)}
        >
            <p className="sweet-alert-text">You clicked the button!</p>
        </SweetAlert>

        <SweetAlert error title="Error"
          show={this.state.errorAlert} 
          onConfirm={() => this.handleAlert("errorAlert", false)}
        >
            <p className="sweet-alert-text">
              You clicked the button!
            </p>
        </SweetAlert>

        <SweetAlert info title="Info!"
          show={this.state.infoAlert} 
          onConfirm={() => this.handleAlert("infoAlert", false)}
        >
            <p className="sweet-alert-text">
              You clicked the button!
            </p>
        </SweetAlert>

        <SweetAlert warning title="Warning"
          show={this.state.warningAlert} 
          onConfirm={() => this.handleAlert("warningAlert", false)}
        >
            <p className="sweet-alert-text">
              You clicked the button!
            </p>
        </SweetAlert>

      </CardBody>
    </Card>
    )
  }
}

export default SweetAlertTypes