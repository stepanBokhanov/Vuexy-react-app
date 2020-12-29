import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"

class RadioColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Color Options</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use prop <code>color=[primary/success/danger/info/warning]</code> to
            change radio color.
          </p>
          <div className="d-inline-block mr-1">
            <Radio
              label="Primary"
              color="primary"
              defaultChecked={true}
              name="exampleRadioColors"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Success"
              color="success"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Danger"
              color="danger"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Info"
              color="info"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>{" "}
          <div className="d-inline-block mr-1">
            <Radio
              label="Warning"
              color="warning"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default RadioColors
