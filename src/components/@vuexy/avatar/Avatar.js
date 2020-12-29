import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import AvatarDefault from "./AvatarDefault"
import AvatarSizes from "./AvatarSizes"
import AvatarColors from "./AvatarColors"
import AvatarBadges from "./AvatarBadge"
import AvatarIcons from "./AvatarIcons"
import AvatarStatus from "./AvatarStatus"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Avatar extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Avatar"
          breadCrumbParent="Extra Components"
          breadCrumbActive="Avatar"
        />
        <Row className="match-height">
          <Col xl="6" lg="12">
            <AvatarDefault />
          </Col>
          <Col xl="6" lg="12">
            <AvatarSizes />
          </Col>
          <Col xl="6" lg="12">
            <AvatarColors />
          </Col>
          <Col xl="6" lg="12">
            <AvatarBadges />
          </Col>
          <Col xl="6" lg="12">
            <AvatarIcons />
          </Col>
          <Col xl="6" lg="12">
            <AvatarStatus />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Avatar
