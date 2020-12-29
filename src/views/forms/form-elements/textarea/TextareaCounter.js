import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Input, Label } from "reactstrap"

class TextareaCounter extends React.Component {
  state = {
    value: ""
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="form-label-group mt-2 mb-0">
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows="3"
              value={this.state.value}
              placeholder="Counter"
              onChange={e => this.setState({ value: e.target.value })}
            />
            <Label>Counter</Label>
          </div>
          <small
            className={`counter-value float-right ${
              this.state.value.length > 20 ? "bg-danger" : ""
            }`}
          >
            {`${this.state.value.length}/20`}
          </small>
        </CardBody>
      </Card>
    )
  }
}
export default TextareaCounter
