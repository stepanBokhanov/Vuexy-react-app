import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import AutoCompleteBasic from "./AutoCompleteBasic"
import AutoCompleteAjax from "./AutoCompleteAjax"
import AutoCompleteSections from "./AutoCompleteSections"
import AutoCompleteRender from "./AutoCompleteRender"
import AutoCompleteSuggestions from "./AutoCompleteSuggestions"
import AutoCompleteSearchLimit from "./AutoCompleteLimit"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class AutoComplete extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Auto Complete"
          breadCrumbParent="Extra Components"
          breadCrumbActive="Auto Complete"
        />
        <Row>
          <Col xl="6" lg="12">
            <AutoCompleteBasic />
          </Col>
          <Col xl="6" lg="12">
            <AutoCompleteSections />
          </Col>
          <Col xl="6" lg="12">
            <AutoCompleteAjax />
          </Col>
          <Col xl="6" lg="12">
            <AutoCompleteRender />
          </Col>
          <Col xl="6" lg="12">
            <AutoCompleteSuggestions />
          </Col>
          <Col xl="6" lg="12">
            <AutoCompleteSearchLimit />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default AutoComplete
