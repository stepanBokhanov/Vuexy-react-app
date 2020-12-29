import React from "react"
import {
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardBody,
  Row,
  Col
} from "reactstrap"
import ChatWidget from "../../../../components/@vuexy/chatWidget/ChatWidget"
import { CloudSnow } from "react-feather"
import overlayImg1 from "../../../../assets/img/pages/card-image-6.jpg"
import overlayImg2 from "../../../../assets/img/pages/card-image-5.jpg"

class OverlayAndChatCards extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" md="6" sm="12">
          <Card className="text-white overlay-img-card">
            <CardImg src={overlayImg1} alt="overlay img" />
            <CardImgOverlay className="overlay-black d-flex flex-column justify-content-between">
              <CardTitle className="text-white">Beautiful Overlay</CardTitle>
              <p>
                Cake sesame snaps cupcake gingerbread danish I love gingerbread.
                Apple pie pie jujubes chupa chups muffin halvah lollipop.
              </p>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card className="text-white overlay-img-card">
            <CardImg src={overlayImg2} alt="overlay img" />
            <CardImgOverlay className="overlay-black">
              <h5 className="font-medium-5 text-white text-center mt-5">
                Snowy
              </h5>
              <p className="text-white text-center">New York</p>
              <div className="d-flex justify-content-around mt-2">
                <div className="icon">
                  <CloudSnow size="90" />
                </div>
                <div className="temprature mt-3">
                  <p className="font-large-3">
                    {" "}
                    -6 <span className="mt-1">°</span>
                  </p>
                </div>
              </div>
              <CardBody>
                <div className="d-flex justify-content-between mt-5">
                  <div className="precipitation">
                    <span className="font-medium-3">Precipitation</span>
                  </div>
                  <div className="degree">
                    <span className="font-medium-3">48%</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div className="humidity">
                    <span className="font-medium-3">Humidity</span>
                  </div>
                  <div className="degree">
                    <span className="font-medium-3">60%</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div className="wind">
                    <span className="font-medium-3">Wind</span>
                  </div>
                  <div className="degree">
                    <span className="font-medium-3">23 km/h</span>
                  </div>
                </div>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <ChatWidget />
        </Col>
      </Row>
    )
  }
}
export default OverlayAndChatCards
