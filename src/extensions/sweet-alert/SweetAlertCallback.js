import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';

class BasicSweetCallback extends React.Component {
  state = {
   defaultAlert : false, 
   confirmAlert : false, 
   cancelAlert : false, 
  }

  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }

  render(){
    return (
    <Card>
      <CardHeader>
        <CardTitle>Callback</CardTitle>
      </CardHeader>
      <CardBody>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("defaultAlert", true)} outline>Callback</Button>
        
        <SweetAlert title="Are you sure?" 
          warning
          show={this.state.defaultAlert}
          showCancel
          reverseButtons
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          onConfirm={() => {
            this.handleAlert("basicAlert", false)
            this.handleAlert("confirmAlert", true)
          }}
          onCancel={() => {
            this.handleAlert("basicAlert", false)
            this.handleAlert("cancelAlert", true)
          }}
        >
          You won't be able to revert this!
        </SweetAlert>

        <SweetAlert success title="Deleted!" 
          confirmBtnBsStyle="success"
          show={this.state.confirmAlert} 
          onConfirm={() => {
            this.handleAlert("defaultAlert", false)
            this.handleAlert("confirmAlert", false)
          }}
        >
            <p className="sweet-alert-text">Your file has been deleted.</p>
        </SweetAlert>

        <SweetAlert error title="Cancelled" 
          confirmBtnBsStyle="success"
          show={this.state.cancelAlert} 
          onConfirm={() =>{
            this.handleAlert("defaultAlert", false)
            this.handleAlert("cancelAlert", false)
          }}
        >
            <p className="sweet-alert-text">
              Your imaginary file is safe :)
            </p>
        </SweetAlert>

      </CardBody>
    </Card>
    )
  }
}

export default BasicSweetCallback