import React from "react"
import {
  Card,
  CardHeader,
  Progress,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap"
import { Check, Edit2, Trash } from "react-feather"

class Tasks extends React.Component {
  state = {
    isVisible: false
  }
  handleHover = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    return (
      <Card>
        <CardHeader className="border-bottom pb-1">
          <div className="tasks-info">
            <p className="mb-75">
              <strong>2 task completed </strong>out of 10
            </p>
            <Progress value="20" />
          </div>
          <p>Sat, 16, Feb</p>
        </CardHeader>
        <ListGroup className="analytics-list">
          <ListGroupItem
            className="d-lg-flex justify-content-between align-items-center py-1 border-0"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div className="float-left">
              <p className="text-bold-600 font-medium-2 mb-0 mt-25">
                Refactor button component
              </p>
              <small>16 Feb 2020 - 2 hrs</small>
            </div>
            <div className="float-right">
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Check />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Edit2 />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Trash />
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem
            className="d-lg-flex justify-content-between align-items-center py-1 border-0"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div className="float-left">
              <p className="text-bold-600 font-medium-2 mb-0 mt-25">
                Submit report to admin
              </p>
              <small>16 Feb 2020 - 2 hrs</small>
            </div>
            <div className="float-right">
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Check />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Edit2 />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Trash />
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem
            className="d-lg-flex justify-content-between align-items-center py-1 border-0"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div className="float-left">
              <p className="text-bold-600 font-medium-2 mb-0 mt-25">
                Prepare presentation
              </p>
              <small>16 Feb 2020 - 2 hrs</small>
            </div>
            <div className="float-right">
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Check />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Edit2 />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Trash />
              </Button>
            </div>
          </ListGroupItem>
          <ListGroupItem
            className="d-lg-flex justify-content-between align-items-center py-1 border-0"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div className="float-left">
              <p className="text-bold-600 font-medium-2 mb-0 mt-25">
                Calculate monthly income
              </p>
              <small>16 Feb 2020 - 2 hrs</small>
            </div>
            <div className="float-right">
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Check />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Edit2 />
              </Button>
              <Button
                color="primary"
                outline
                className="btn-icon rounded-circle mr-50"
                size="sm"
              >
                <Trash />
              </Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}
export default Tasks
