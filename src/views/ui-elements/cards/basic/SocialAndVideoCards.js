import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import {
  MoreVertical,
  ThumbsDown,
  ThumbsUp,
  MessageSquare
} from "react-feather"
import cardImg from "../../../../assets/img/pages/content-img-4.jpg"

class SocialAndVideoCards extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" sm="12">
          <Card>
            <CardHeader className="justify-content-between">
              <div className="card-heading">
                <CardTitle className="w-100">Vuexy Admin</CardTitle>
                <p>by Pixinvent Creative Studio</p>
              </div>
              <div className="icon mb-5">
                <MoreVertical className="float-right" size="20" />
              </div>
            </CardHeader>
            <CardBody>
              <img src={cardImg} alt="Social Card" className="img-fluid" />
              <div className="d-flex justify-content-start mt-2">
                <div className="icon-like mr-2">
                  <ThumbsUp className="success" size={22} />
                  <span className="align-middle ml-50">368</span>
                </div>
                <div className="icon-comment mr-2">
                  <MessageSquare className="primary" size={22} />
                  <span className="align-middle ml-50">341</span>
                </div>
                <div className="icon-dislike">
                  <ThumbsDown className="danger" size={22} />
                  <span className="align-middle ml-50">53</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="8" sm="12">
          <Card className="overflow-hidden">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mcixldqDIEQ"
                frameBorder="0"
                allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                allowFullScreen
                title="video"
              />
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default SocialAndVideoCards
