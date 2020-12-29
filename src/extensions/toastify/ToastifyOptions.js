import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { toast } from "react-toastify"

class Toastr extends React.Component {
  notifyDelay = () =>
    toast.error("My closing time is delayed.", {
      autoClose: 10000
    })
  notifyAutoClose = () =>
    toast.error("I won't auto close.", { autoClose: false })

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Options</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mr-1 mb-1">
            <Button.Ripple color="success" outline onClick={this.notifyDelay}>
              Delay
            </Button.Ripple>
          </div>
          <div className="d-inline-block mb-1">
            <Button.Ripple
              color="success"
              outline
              onClick={this.notifyAutoClose}
            >
              AutoClose
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Toastr
