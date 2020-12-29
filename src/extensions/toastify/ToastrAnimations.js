import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { toast, Slide, Zoom, Flip, Bounce } from "react-toastify"

class Toastr extends React.Component {
  notifyBounce = () => toast.success("Bounce!", { transition: Bounce })
  notifyFlip = () => toast.success("Flip!", { transition: Flip })
  notifyZoom = () => toast.success("Zoom!", { transition: Zoom })
  notifySlide = () => toast.success("Slide!", { transition: Slide })

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Animations</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-inline-block mr-1 mb-1">
            <Button.Ripple color="success" outline onClick={this.notifyBounce}>
              Bounce
            </Button.Ripple>
          </div>
          <div className="d-inline-block mr-1 mb-1">
            <Button.Ripple color="success" outline onClick={this.notifyFlip}>
              Flip
            </Button.Ripple>
          </div>
          <div className="d-inline-block mr-1 mb-1">
            <Button.Ripple color="success" outline onClick={this.notifyZoom}>
              Zoom
            </Button.Ripple>
          </div>
          <div className="d-inline-block mb-1">
            <Button.Ripple color="success" outline onClick={this.notifySlide}>
              Slide
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default Toastr
