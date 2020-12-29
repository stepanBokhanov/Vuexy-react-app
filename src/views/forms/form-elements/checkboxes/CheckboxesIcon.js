import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, MessageSquare, X, Paperclip, Bold } from "react-feather"

class CheckboxIcon extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Icon</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Pass in your desired icon as a <code>icon</code> prop to checkbox
            component to change icon.
          </p>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Primary"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="success"
              icon={<MessageSquare className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Success"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="danger"
              icon={<X className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Danger"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="info"
              icon={<Paperclip className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Info"
            />
          </div>
          <div className="d-inline-block mr-1">
            <Checkbox
              color="warning"
              icon={<Bold className="vx-icon" size={16} />}
              defaultChecked={true}
              label="Warning"
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxIcon
