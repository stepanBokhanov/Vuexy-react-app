import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"

class RadioVuexy extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vuexy Radio</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use Vuexy radio component and pass in label, checked, disabled and
            class as <code>props</code> to create a Vuexy radio.
          </p>
          <div className="d-inline-block mr-1">
            <Radio label="Active" defaultChecked={true} name="exampleRadio" />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Inactive"
              defaultChecked={false}
              name="exampleRadio"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Active - disabled"
              defaultChecked={true}
              disabled={true}
            />
          </div>
          <div className="d-inline-block mr-1">
            <Radio
              label="Inactive - disabled"
              defaultChecked={false}
              disabled={true}
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default RadioVuexy
