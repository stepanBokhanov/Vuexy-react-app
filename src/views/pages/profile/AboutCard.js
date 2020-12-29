import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import { MoreHorizontal, Facebook, Instagram, Twitter } from "react-feather"

class AboutCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <MoreHorizontal size={15} className="cursor-pointer" />
        </CardHeader>
        <CardBody>
          <p>
            Tart I love sugar plum I love oat cake. Sweet roll caramels I love
            jujubes. Topping cake wafer.
          </p>
          <div className="mt-1">
            <h6 className="mb-0">Joined:</h6>
            <p>November 15, 2015</p>
          </div>
          <div className="mt-1">
            <h6 className="mb-0">Lives:</h6>
            <p>New York, USA</p>
          </div>
          <div className="mt-1">
            <h6 className="mb-0">Email:</h6>
            <p>bucketful@fiendhead.org</p>
          </div>
          <div className="mt-1">
            <h6 className="mb-0">Website:</h6>
            <p>www.pixinvent.com</p>
          </div>
          <div className="mt-1">
            <Button color="primary" size="sm" className="btn-icon mr-25 p-25">
              <Facebook />
            </Button>
            <Button color="primary" size="sm" className="btn-icon mr-25 p-25">
              <Twitter />
            </Button>
            <Button color="primary" size="sm" className="btn-icon p-25">
              <Instagram />
            </Button>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default AboutCard
