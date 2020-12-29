import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import { Star, Briefcase } from "react-feather"
import avatarImg from "../../../../assets/img/portrait/small/avatar-s-12.jpg"
import avatarImg2 from "../../../../assets/img/portrait/small/avatar-s-1.jpg"

class ProfileCards extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardHeader className="mx-auto">
              <div className="avatar mr-1 avatar-xl">
                <img src={avatarImg} alt="avatarImg" />
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <h4>Zoila Legore</h4>
              <p>Backend Dev</p>
              <div className="card-btns d-flex justify-content-between">
                <Button.Ripple className="gradient-light-primary">
                  Follow
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  Message
                </Button.Ripple>
              </div>
              <hr className="my-2" />
              <div className="card-btns d-flex justify-content-between">
                <div className="float-left">
                  <Star size="15" className="warning" />
                  <span className="ml-50 align-middle">4.9</span>
                </div>
                <div className="float-right">
                  <Briefcase size="15" className="primary" />
                  <span className="ml-50 align-middle">Projects</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardHeader className="mx-auto flex-column">
              <h4>Zoila Legore</h4>
              <p>Backend Dev</p>
            </CardHeader>
            <CardBody className="text-center pt-0">
              <div className="avatar mr-1 avatar-xl">
                <img src={avatarImg} alt="avatarImg" />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="uploads">
                  <p className="font-weight-bold font-medium-2 mb-0">568</p>
                  <span>Uploads</span>
                </div>
                <div className="followers">
                  <p className="font-weight-bold font-medium-2 mb-0">76.8k</p>
                  <span>Followers</span>
                </div>
                <div className="following">
                  <p className="font-weight-bold font-medium-2 mb-0">112</p>
                  <span>Following</span>
                </div>
              </div>
              <Button.Ripple className="btn-block gradient-light-primary mt-2">
                Follow
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card>
            <CardHeader className="mx-auto">
              <div className="avatar mr-1 avatar-xl">
                <img src={avatarImg2} alt="avatarImg" />
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <h4>Jonell Binion</h4>
              <p>Designer</p>
              <div className="d-flex justify-content-between mt-1">
                <small className="float-left font-weight-bold mb-25">
                  720 Points
                </small>
                <small className="float-left font-weight-bold mb-25">
                  1000
                </small>
              </div>
              <Progress className="box-shadow-6" value="75" />
              <div className="card-btns d-flex justify-content-between">
                <Button.Ripple className="gradient-light-primary">
                  Follow
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  Message
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ProfileCards
