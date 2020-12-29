import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Input } from "reactstrap"

class TextareaDefault extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            To create a Textarea use <code>type="textarea"</code> with reactstrap Input tag.
          </p>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            rows="3"
            placeholder="Textarea"
          />
        </CardBody>
      </Card>
    )
  }
}
export default TextareaDefault
