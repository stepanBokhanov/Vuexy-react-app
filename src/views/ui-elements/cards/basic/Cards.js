import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BasicCards from "./BasicCards"
import ProfileCards from "./ProfileCards"
import OverlayCards from "./OverlayAndChatCards"
import SocialAndVideoCards from "./SocialAndVideoCards"
import TimelineCards from "./TimelineCards"

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Basic Cards"
          breadCrumbParent="Card"
          breadCrumbActive="Basic Cards"
        />
        <Row>
          <Col sm="12">
            <BasicCards />
          </Col>
          <Col sm="12">
            <ProfileCards />
          </Col>
          <Col sm="12">
            <OverlayCards />
          </Col>
          <Col sm="12">
            <SocialAndVideoCards />
          </Col>
          <Col sm="12">
            <TimelineCards />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Cards
