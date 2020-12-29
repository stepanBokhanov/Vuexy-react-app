import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Spinner
} from "reactstrap"
import { Treebeard, decorators } from "react-treebeard"
import Prism from "prismjs"
import { connect } from "react-redux"
import * as filters from "./Filter"
import NodeViewer from "./NodeViewer"
import { data } from "./Data"
import { styleLight, styleDark } from "./Styles"
const Loading = props => {
  return (
    <div style={props.style.wrapper}>
      <Spinner size="sm" color="primary" style={props.style.arrow} />
    </div>
  )
}

class TreeView extends React.Component {
  state = {
    data
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  onToggle = (node, toggled) => {
    const { cursor, data } = this.state

    if (cursor) {
      this.setState(() => ({ cursor, active: false }))
    }

    node.active = !node.active
    if (node.children) {
      node.toggled = toggled
    }
    this.setState(() => ({ cursor: node, data: Object.assign({}, data) }))
  }

  onFilterMouseUp = ({ target: { value } }) => {
    const filter = value.trim()
    if (!filter) {
      return this.setState(() => ({ data }))
    }
    let filtered = filters.filterTree(data, filter)
    filtered = filters.expandFilteredNodes(filtered, filter)
    this.setState(() => ({ data: filtered }))
  }

  render() {
    const { data, cursor } = this.state
    decorators.Loading = Loading

    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Treebeard"
          subTitle="Data-Driven, Fast, Efficient and Customisable tree view component. "
          link="https://github.com/storybookjs/react-treebeard"
        />
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Default</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="6" lg="12">
                    <input
                      type="text"
                      className="form-control mb-1"
                      onKeyUp={this.onFilterMouseUp}
                    />
                    <Treebeard
                      data={data}
                      onToggle={this.onToggle}
                      style={
                        this.props.theme === "light" ||
                        this.props.theme === "semi-dark"
                          ? styleLight
                          : styleDark
                      }
                      decorators={decorators}
                      animations={false}
                    />
                  </Col>
                  <Col xl="6" lg="12" className="mt-2 mt-xl-0">
                    <NodeViewer node={cursor} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    theme: state.customizer.customizer.theme
  }
}

export default connect(mapStateToProps)(TreeView)
