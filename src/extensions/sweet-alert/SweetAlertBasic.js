import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';

class BasicSweetAlert extends React.Component {
  state = {
   basicAlert : false, 
   titleAlert : false, 
   htmlAlert : false, 
  }

  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }

  render(){
    return (
    <Card>
      <CardHeader>
        <CardTitle>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <p>SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. 
          It's even highly customizable, as you can see below!
        </p>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("basicAlert", true)} outline>Basic</Button>
        <Button className="mr-1 mb-1" color="primary" onClick={() => this.handleAlert("titleAlert", true)} outline>With Title</Button>
        <Button className="mb-1" color="primary" onClick={() => this.handleAlert("htmlAlert", true)} outline>HTML</Button>
        
        <SweetAlert title="Any fool can use a computer" 
          show={this.state.basicAlert}
          onConfirm={() => this.handleAlert("basicAlert", false)}
        >
        </SweetAlert>

        <SweetAlert title="The Internet?," 
          show={this.state.titleAlert} 
          onConfirm={() => this.handleAlert("titleAlert", false)}
        >
            <p className="sweet-alert-text">That thing is still around?</p>
        </SweetAlert>

        <SweetAlert title={<strong>HTML <u>example</u></strong>} 
          show={this.state.htmlAlert} 
          onConfirm={() => this.handleAlert("htmlAlert", false)}
        >
            <p className="sweet-alert-text">You can use bold text,{" "}
              <a href="http://pixinvent.com" target="_blank" rel="noopener noreferrer">links</a> {" "}
              and other HTML tags
            </p>
        </SweetAlert>

      </CardBody>
    </Card>
    )
  }
}

export default BasicSweetAlert