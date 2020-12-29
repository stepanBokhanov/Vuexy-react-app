import React from "react"
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import img1 from "../../../../assets/img/pages/content-img-1.jpg"
import img2 from "../../../../assets/img/pages/content-img-2.jpg"
import img3 from "../../../../assets/img/pages/content-img-3.jpg"

class BasicCards extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img1}
              alt="card image cap"
            />
            <CardBody>
              <h5>Vuexy Admin</h5>
              <p className="mb-0">By Pixinvent Creative Studio</p>
              <span>Elite Author</span>
              <div className="card-btns d-flex justify-content-between mt-2">
                <Button.Ripple className="gradient-light-primary text-white">
                  Download
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  View All
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardBody>
              <CardImg
                className="img-fluid mb-2"
                src={img2}
                alt="card image cap"
              />
              <h5>Vuexy Admin</h5>
              <p>By Pixinvent Creative Studio</p>
              <hr className="my-1" />
              <div className="card-btns d-flex justify-content-between mt-2">
                <div className="float-left">
                  <p className="font-medium-2 mb-0">$ 4785.78</p>
                  <p>Income</p>
                </div>
                <div className="float-right">
                  <p className="font-medium-2 mb-0">12 June 2020</p>
                  <p>Delivery Date</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card>
            <CardBody>
              <CardImg
                className="img-fluid mb-2"
                src={img3}
                alt="card image cap"
              />
              <h5>Vuexy Admin</h5>
              <div className="d-flex justify-content-between mt-1">
                <small className="float-left font-weight-bold mb-25">
                  $ 5975
                </small>
                <small className="float-left font-weight-bold mb-25">
                  $ 5975
                </small>
              </div>
              <Progress className="box-shadow-6" value="75" />
              <div className="card-btns d-flex justify-content-between mt-2">
                <Button.Ripple className="gradient-light-primary text-white">
                  Download
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  View All
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default BasicCards
