import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  Label
} from "reactstrap"

class TextareaFloatingLabel extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Floating label</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use <code>.form-label-group</code> as a wrapper to add a Floating
            Label with Textarea
          </p>
          <div className="form-label-group mt-2">
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows="3"
              placeholder="Floating Label"
            />
            <Label>Floating Label</Label>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default TextareaFloatingLabel
