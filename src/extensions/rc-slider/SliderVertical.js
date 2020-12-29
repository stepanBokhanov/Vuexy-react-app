import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap"
import Slider from "rc-slider"

const marks = {
  "-10": "-10°C",
  0: <strong>0°C</strong>,
  26: "26°C",
  37: "37°C",
  50: "50°C",
  100: {
    style: {
      color: "red"
    },
    label: <strong>100°C</strong>
  }
}

const style = {
  float: "left",
  width: 200,
  height: 400,
  marginLeft: 10,
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

class SliderVertical extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vertical</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="3" md="6" sm="12">
              <div style={style}>
                <h5 className="my-1">Basic Vertical</h5>
                <Slider
                  vertical
                  min={-10}
                  marks={marks}
                  step={null}
                  defaultValue={20}
                  reverse={this.props.rtl === "rtl"}
                />
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div style={style}>
                <h5 className="my-1"> Steps And Marks</h5>
                <Slider
                  vertical
                  dots
                  min={-10}
                  marks={marks}
                  step={10}
                  defaultValue={20}
                  reverse={this.props.rtl === "rtl"}
                />
              </div>
            </Col>

            <Col lg="3" md="6" sm="12">
              <div style={style}>
                <h5 className="my-1">Vertical Range</h5>
                <Slider.Range
                  vertical
                  min={-10}
                  marks={marks}
                  defaultValue={[20, 40]}
                  reverse={this.props.rtl === "rtl"}
                />
              </div>
            </Col>

            <Col lg="3" md="6" sm="12">
              <div style={style}>
                <h5 className="my-1"> Range Steps And Marks</h5>
                <Slider.Range
                  vertical
                  min={-10}
                  marks={marks}
                  step={10}
                  defaultValue={[20, 40]}
                  reverse={this.props.rtl === "rtl"}
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default SliderVertical
