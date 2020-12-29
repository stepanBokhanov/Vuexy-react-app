import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ContextualColors from "./ContextualColors"
import TextAlignment from "./TextAlignment"
import TextTransform from "./TextTransform"
import TextOptions from "./TextOptions"
import Prism from "prismjs"
class TextUtilities extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Text Utilities"
          breadCrumbParent="Content"
          breadCrumbActive="Text Utilities"
        />
        <Row>
          <Col sm="12">
            <ContextualColors />
          </Col>
          <Col sm="12">
            <TextAlignment />
          </Col>
          <Col sm="12">
            <TextTransform />
          </Col>
          <Col sm="12">
            <TextOptions />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default TextUtilities
