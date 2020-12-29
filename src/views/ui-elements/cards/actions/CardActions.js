import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Table,
  Collapse,
  Spinner
} from "reactstrap"
import { ChevronDown, RotateCw, X } from "react-feather"
import classnames from "classnames"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"

class CardActions extends React.Component {
  state = {
    collapse: true,
    reload: false,
    isVisible: true,
    status: "Opened",
    isVisibleAll: true,
    reloadAll: false,
    collapseAll: true,
    statusAll: "Opened"
  }

  refreshCard = () => {
    this.setState({ reload: true })
    setTimeout(() => {
      this.setState({ reload: false })
    }, 2000)
  }
  refreshCardAll = () => {
    this.setState({ reloadAll: true })
    setTimeout(() => {
      this.setState({ reloadAll: false })
    }, 2000)
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }
  toggleAll = () => {
    this.setState(state => ({ collapseAll: !state.collapseAll }))
  }
  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onEnteredAll = () => {
    this.setState({ status: "Opened" })
  }

  onEntering = () => {
    this.setState({ status: "Opening..." })
  }
  onEnteringAll = () => {
    this.setState({ statusAll: "Opening..." })
  }

  onEnteredAll = () => {
    this.setState({ statusAll: "Opened" })
  }

  onExited = () => {
    this.setState({ status: "Closed" })
  }

  onExiting = () => {
    this.setState({ status: "Closing..." })
  }

  onExitingAll = () => {
    this.setState({ statusAll: "Closing..." })
  }
  onExitedAll = () => {
    this.setState({ statusAll: "Closed" })
  }

  removeCard = () => {
    this.setState({ isVisible: false })
  }
  removeCardAll = () => {
    this.setState({ isVisibleAll: false })
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Card Actions"
          breadCrumbParent="Card"
          breadCrumbActive="Card Actions"
        />
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Card Actions</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Icon</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Collapse</td>
                      <td className="text-center">
                        <ChevronDown className="collapse-icon" size={15} />
                      </td>
                      <td> Collapse card content using collapse action.</td>
                    </tr>
                    <tr>
                      <td>Refresh Content</td>
                      <td className="text-center">
                        <RotateCw size={15} />
                      </td>
                      <td>Refresh your card content using refresh action.</td>
                    </tr>
                    <tr>
                      <td>Remove Card</td>
                      <td className="text-center">
                        <X size={15} />
                      </td>
                      <td> Remove card from page using remove card action</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" sm="12">
            <Card
              className={classnames("card-action", {
                "card-collapsed": this.state.status === "Closed",
                "card-shown": this.state.status === "Opened",
                closing: this.state.status === "Closing...",
                opening: this.state.status === "Opening..."
              })}
            >
              <CardHeader>
                <CardTitle>Collapsible</CardTitle>
                <ChevronDown
                  className="collapse-icon"
                  size={15}
                  onClick={this.toggle}
                />
              </CardHeader>
              <Collapse
                isOpen={this.state.collapse}
                onExited={this.onExited}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onEntering={this.onEntering}
              >
                <CardBody>
                  <p>
                    You can create collapsible card using reactstrap's collapse
                    component, to create a collapsible card you'll have to
                    manage it's collapse state.
                  </p>
                  <p>
                    Click on <ChevronDown size={15} /> to see card collapse in
                    action
                  </p>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
          <Col md="6" sm="12">
            <Card
              className={classnames("card-reload card-action", {
                refreshing: this.state.reload
              })}
            >
              <CardHeader>
                <CardTitle>Refresh</CardTitle>
                <RotateCw size={15} onClick={this.refreshCard} />
              </CardHeader>
              <CardBody>
                {this.state.reload ? (
                  <Spinner color="primary" className="reload-spinner" />
                ) : (
                  ""
                )}
                <p>
                  You can add refresh content action to card by adding class{" "}
                  <code>.card-reload</code> with your card tag, and add
                  conditional spinner into card body to showp when card is
                  refreshing.
                </p>
                <p>
                  Click on <RotateCw size={15} /> to see card refresh in action
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" sm="12">
            <Card
              className={classnames("card-action", {
                "d-none": this.state.isVisible === false
              })}
            >
              <CardHeader>
                <CardTitle>Remove Card</CardTitle>
                <X size={15} onClick={this.removeCard} />
              </CardHeader>
              <CardBody>
                <p>
                  You can create a removable card by managing state{" "}
                  <code>isVisible</code>, which will add conditional d-none
                  class which clicked on icon to remove your card.
                </p>
                <p>
                  Click on <X size={15} /> to see card refresh in action
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" sm="12">
            <Card
              className={classnames("card-action card-reload", {
                "d-none": this.state.isVisibleAll === false,
                refreshing: this.state.reloadAll,
                "card-collapsed": this.state.statusAll === "Closed",
                closing: this.state.statusAll === "Closing...",
                opening: this.state.statusAll === "Opening..."
              })}
            >
              <CardHeader>
                <CardTitle>All Actions</CardTitle>
                <div className="actions">
                  <ChevronDown
                    className="collapse-icon mr-50"
                    size={15}
                    onClick={this.toggleAll}
                  />
                  <RotateCw
                    className="mr-50"
                    size={15}
                    onClick={this.refreshCardAll}
                  />
                  <X size={15} onClick={this.removeCardAll} />
                </div>
              </CardHeader>
              <Collapse
                isOpen={this.state.collapseAll}
                onExited={this.onExitedAll}
                onEntered={this.onEnteredAll}
                onExiting={this.onExitingAll}
                onEntering={this.onEnteringAll}
              >
                <CardBody>
                  {this.state.reloadAll ? (
                    <Spinner color="primary" className="reload-spinner" />
                  ) : (
                    ""
                  )}
                  You can also add all three action together by managing all
                  three actions's required classes and by managing their states.
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default CardActions
