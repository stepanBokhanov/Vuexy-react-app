import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap"
import Tour, { STATUS } from "react-joyride"

import "../../assets/scss/plugins/extensions/react-tour.scss"

class TourComponent extends React.Component {
  state = {
    isTouropen: false
  }

  startTour = () => {
    this.setState({
      isTouropen: true
    })
  }

  render() {
    const steps = [
      {
        target: ".header-navbar",
        content: "Here is your navbar with the shortcuts and important things.",
        disableBeacon: true
      },
      {
        target: ".nav-link-search svg",
        content: "Search for components from here",
        disableBeacon: true
      },
      {
        target: "[data-tour='user']",
        content: "Click here for user options",
        disableBeacon: true
      }
    ]

    return (
      <React.Fragment>
        <ExtensionsHeader
          title="React Joyride"
          subTitle="Tourist Guide into your React Components With React Joyride"
          link="https://docs.react-joyride.com/"
        />
        <Row>
          <Col sm="12">
            <Tour
              disableOverlay
              steps={steps}
              run={this.state.isTouropen}
              continuous={true}
              showSkipButton={true}
              floaterProps={{ disableAnimation: true }}
              callback={data => {
                if ([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) {
                  this.setState({ isTouropen: false })
                }
              }}
            />
            <Card>
              <CardHeader>
                <CardTitle>Tour</CardTitle>
              </CardHeader>
              <CardBody>
                <Button color="primary" outline onClick={this.startTour}>
                  Start Tour
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default TourComponent
