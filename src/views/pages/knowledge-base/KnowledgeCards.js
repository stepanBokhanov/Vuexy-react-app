import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import { data } from "./cardData"

class KnowledgeCards extends React.Component {
  renderCards = () => {
    let result = data.map(item => {
      if (this.props.value.length < 1) {
        return (
          <Col md="4" sm="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                <Link to="/pages/knowledge-base/category">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="180"
                  />
                  <h4>{item.title.toUpperCase()}</h4>
                  <small className="text-dark">{item.text}</small>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )
      } else if (item.title.includes(this.props.value)) {
        return (
          <Col md="4" sm="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                <Link to="/pages/knowledge-base/category">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="180"
                  />
                  <h4>{item.title.toUpperCase()}</h4>
                  <small className="text-dark">{item.text}</small>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )
      }
      return ""
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}</Row>
  }
}
export default KnowledgeCards
