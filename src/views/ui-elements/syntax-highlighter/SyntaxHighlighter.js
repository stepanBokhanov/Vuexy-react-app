import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BasicUsage from "./BasicUsage"
import Examples from "./Examples"
import LineNumbers from "./LineNumbers"
import LineHighlight from "./LineHightlight"
import Prism from "prismjs"
class SyntaxHighlighter extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Syntax Highlighter"
          breadCrumbParent="Content"
          breadCrumbActive="Syntax Highlighter"
        />
        <Row>
          <Col sm="12">
            <BasicUsage />
          </Col>
          <Col sm="12">
            <Examples />
          </Col>
          <Col sm="12">
            <LineNumbers />
          </Col>
          <Col sm="12">
            <LineHighlight />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default SyntaxHighlighter
