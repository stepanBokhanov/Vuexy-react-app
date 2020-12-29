import React from "react"
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap"
import Select from "react-select"
import chroma from "chroma-js"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"

const languages = [
  { value: "english", label: "English", color: "#7367f0" },
  { value: "french", label: "French", color: "#7367f0" },
  { value: "spanish", label: "Spanish", color: "#7367f0" },
  { value: "russian", label: "Russian", color: "#7367f0" },
  { value: "italian", label: "Italian", color: "#7367f0" }
]

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? data.color : "#7367f0")
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : "#7367f0"
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color ? data.color : "#7367f0",
      color: "white"
    }
  })
}

class InfoTab extends React.Component {
  state = {
    dob: new Date()
  }

  handleDob = date => {
    this.setState({
      dob: date
    })
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="bio">Bio</Label>
                <Input
                  type="textarea"
                  name="bio"
                  id="bio"
                  rows="3"
                  placeholder="Your bio data here..."
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label className="d-block" for="date">
                  Date
                </Label>
                <Flatpickr
                  className="form-control"
                  options={{ dateFormat: "M \\ d \\, Y" }}
                  value={this.state.dob}
                  onChange={date => this.handleDob(date)}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="country">Country</Label>
                <Input type="select" name="country" id="country">
                  <option>US</option>
                  <option>UK</option>
                  <option>France</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="languages">Favourite Languages</Label>
                <Select
                  isMulti
                  defaultValue={[languages[0], languages[1]]}
                  isClearable={true}
                  styles={colourStyles}
                  options={languages}
                  className="React"
                  classNamePrefix="select"
                  id="languages"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="number">Phone Number</Label>
                <Input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="url">Website URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Website URL"
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <div className="d-inline-block mr-1">
                  <Radio label="Male" defaultChecked={true} name="gender" />
                </div>
                <div className="d-inline-block mr-1">
                  <Radio label="Female" defaultChecked={false} name="gender" />
                </div>
                <div className="d-inline-block">
                  <Radio label="Other" defaultChecked={false} name="gender" />
                </div>
              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Save Changes
              </Button.Ripple>
              <Button.Ripple type="submit" color="danger">
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    )
  }
}
export default InfoTab
