import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';
// import alertImg from "../../assets/img/slider/04.jpg"

class SweetAlertOptions extends React.Component {
  state = {
   imgAlert : false, 
   timerAlert : false, 
   outsideClickAlert : false, 
   overlayAlert : false,
   inputAlert : false
  }

  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }

  render(){
    return (
    <Card>
      <CardHeader>
        <CardTitle>Options</CardTitle>
      </CardHeader>
      <CardBody>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("imgAlert", true)} outline>Image</Button>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("timerAlert", true)} outline>Timeout</Button>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("overlayAlert", true)} outline>Overlay</Button>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("outsideClickAlert", true)} outline>Outside Click</Button>
        <Button className="mb-1" color="primary" onClick={() => this.handleAlert("inputAlert", true)} outline>Input Alert</Button>
        

        <SweetAlert title="Sweet!"  
          custom
          show={this.state.imgAlert}
          customIcon="https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg"
          onConfirm={() => this.handleAlert("imgAlert", false)}
        >
            <p className="sweet-alert-text">Sweet Alert with an image.</p>
        </SweetAlert>

        <SweetAlert title="Auto close alert!"
          timeout={2000}
          show={this.state.timerAlert} 
          onConfirm={() => this.handleAlert("timerAlert", false)}
          onCancel={() => this.handleAlert("timerAlert", false)}
        >
            <p className="sweet-alert-text">
              I will close in 2 seconds.
            </p>
        </SweetAlert>

        <SweetAlert title="Click outside to close!"
          closeOnClickOutside
          show={this.state.outsideClickAlert} 
          onConfirm={() => this.handleAlert("outsideClickAlert", false)}
          onCancel={() => this.handleAlert("outsideClickAlert", false)}
        >
            <p className="sweet-alert-text">
              You clicked the button!
            </p>
        </SweetAlert>

        <SweetAlert title="No Overlay"
          hideOverlay
          show={this.state.overlayAlert} 
          onConfirm={() => this.handleAlert("overlayAlert", false)}
        >
            <p className="sweet-alert-text">
              You clicked the button!
            </p>
        </SweetAlert>

        <SweetAlert title="An input!"
          input
          show={this.state.inputAlert}
          placeHolder="Write something" 
          onConfirm={() => this.handleAlert("inputAlert", false)}
        >
            <p className="sweet-alert-text">
              Write something interesting:
            </p>
        </SweetAlert>

      </CardBody>
    </Card>
    )
  }
}

export default SweetAlertOptions