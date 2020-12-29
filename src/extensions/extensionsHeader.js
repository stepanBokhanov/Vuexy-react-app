import React from "react"
import { Row, Col } from "reactstrap"
// import { Star } from "react-feather"

class ExtensionsHeader extends React.Component {
  render() {
    return (
      <Row className="mb-2">
        <Col sm="12" className="ml-50">
          <p
            className="font-medium-5 mt-1 extension-title"
            data-tour="extension-title"
          >
            {this.props.title}
          </p>
          {this.props.link ? <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            {this.props.subTitle}
          </a> : <p className="text-primary">{this.props.subTitle}</p> 
          }
        </Col>
      </Row>
    )
  }
}
export default ExtensionsHeader
