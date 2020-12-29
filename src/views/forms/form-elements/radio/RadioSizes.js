import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"

class RadioSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>size=[sm/lg]</code> prop to change size of radio.
          </p>
          <Radio
            label="Small"
            color="primary"
            defaultChecked={true}
            name="exampleRadioSizes"
            size="sm"
            className="py-50"
          />
          <Radio
            label="Default"
            color="primary"
            defaultChecked={false}
            name="exampleRadioSizes"
            className="py-50"
          />
          <Radio
            label="large"
            color="primary"
            defaultChecked={false}
            name="exampleRadioSizes"
            size="lg"
            className="py-50"
          />
        </CardBody>
      </Card>
    )
  }
}
export default RadioSizes
