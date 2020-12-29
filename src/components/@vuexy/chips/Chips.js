import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import ChipsDefault from "./ChipsDefault"
import ChipsColors from "./ChipsColors"
import ChipsAvatarColors from "./ChipsAvatarColors"
import ChipsIcons from "./ChipsIcons"
import ChipsClosable from "./ChipsClosable"
import ChipsClosableIcons from "./ClosableIcons"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Chips extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Chips"
          breadCrumbParent="Extra Components"
          breadCrumbActive="Chips"
        />
        <Row>
          <Col sm="12">
            <ChipsDefault />
          </Col>
          <Col sm="12">
            <ChipsColors />
          </Col>
          <Col sm="12">
            <ChipsAvatarColors />
          </Col>
          <Col sm="12">
            <ChipsIcons />
          </Col>
          <Col sm="12">
            <ChipsClosable />
          </Col>
          <Col sm="12">
            <ChipsClosableIcons />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Chips
