import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import upload1 from "../../../assets/img/profile/user-uploads/user-01.jpg"
import upload2 from "../../../assets/img/profile/user-uploads/user-02.jpg"
import upload3 from "../../../assets/img/profile/user-uploads/user-03.jpg"
import upload4 from "../../../assets/img/profile/user-uploads/user-04.jpg"
import upload5 from "../../../assets/img/profile/user-uploads/user-05.jpg"
import upload6 from "../../../assets/img/profile/user-uploads/user-06.jpg"
import upload7 from "../../../assets/img/profile/user-uploads/user-07.jpg"
import upload8 from "../../../assets/img/profile/user-uploads/user-08.jpg"
import upload9 from "../../../assets/img/profile/user-uploads/user-09.jpg"

class LatestPhotos extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Latest Photos</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload1}
                alt="upload1"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload2}
                alt="upload2"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload3}
                alt="upload3"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload4}
                alt="upload4"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload5}
                alt="upload5"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload6}
                alt="upload6"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload7}
                alt="upload7"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload8}
                alt="upload8"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
            <Col md="4" sm="6" className="user-latest-img">
              <img
                src={upload9}
                alt="upload9"
                className="img-fluid rounded-sm mb-1"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default LatestPhotos
