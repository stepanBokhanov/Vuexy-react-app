import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import Select from "react-select"

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" }
]

class SelectReact extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>React Select</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            React Select is a flexible and beautiful Select Input control for ReactJS with 
            multiselect, autocomplete, async and creatable support. You can read it's documentation from {" "}
            <a
              className="my-50"
              target="_blank"
              href="https://react-select.com/home"
              rel="noopener noreferrer"
            >
             here
            </a>.
          </p>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Basic</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Clearable</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Loading</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[2]}
                name="loading"
                options={colourOptions}
                isLoading={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Disabled</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[3]}
                name="disabled"
                options={colourOptions}
                isDisabled={true}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default SelectReact
