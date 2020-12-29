import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import CreatableSelect from "react-select/creatable"
import chroma from "chroma-js"

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isFixed: true },
  { value: "purple", label: "Purple", color: "#5243AA", isFixed: true },
  { value: "red", label: "Red", color: "#FF5630", isFixed: false },
  { value: "orange", label: "Orange", color: "#FF8B00", isFixed: false },
  { value: "yellow", label: "Yellow", color: "#FFC400", isFixed: false }
]

const groupedOptions = [
  {
    label: "Ice Creams",
    options: [
      { value: "vanilla", label: "Vanilla" },
      { value: "Dark Chocolate", label: "Dark Chocolate" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "salted-caramel", label: "Salted Caramel" }
    ]
  },
  {
    label: "Snacks",
    options: [
      { value: "Pizza", label: "Pizza" },
      { value: "Burger", label: "Burger" },
      { value: "Pasta", label: "Pasta" },
      { value: "Pretzel", label: "Pretzel" },
      { value: "Popcorn", label: "Popcorn" }
    ]
  }
]

const animatedComponents = makeAnimated()

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
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
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  })
}

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 6 }
      : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base
  }
}

const orderOptions = values => {
  if (values.length > 0)
    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
}

const formatGroupLabel = data => (
  <div className="d-flex justify-content-between align-center">
    <strong>
      {" "}
      <span>{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
)

class SelectOptions extends React.Component {
  state = {
    value: orderOptions([colourOptions[0], colourOptions[1], colourOptions[3]])
  }

  handleChange = newValue => {
    colourOptions.concat(newValue)
  }
  handleInputChange = () => {
    console.group("Input Changed")
    console.groupEnd()
  }

  fixedOnChange = (value, { action, removedValue }) => {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return
        }
        break
      case "clear":
        value = colourOptions.filter(v => v.isFixed)
        break
      default:
        return
    }

    value = orderOptions(value)
    this.setState({ value: value })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Options</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Multi Select</h5>
              <Select
                defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={colourOptions}
                className="React"
                classNamePrefix="select"
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Grouped Select</h5>
              <Select
                defaultValue={colourOptions[1]}
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                className="React"
                classNamePrefix="select"
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Animated Select</h5>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[colourOptions[4], colourOptions[5]]}
                isMulti
                options={colourOptions}
                className="React"
                classNamePrefix="select"
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Colored Select</h5>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[colourOptions[0], colourOptions[1]]}
                isMulti
                options={colourOptions}
                styles={colourStyles}
                className="React"
                classNamePrefix="select"
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Creatable Select</h5>
              <CreatableSelect
                isClearable={true}
                options={colourOptions}
                className="React"
                classNamePrefix="select"
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="text-bold-600 my-1">Fixed Options Select</h5>
              <Select
                value={this.state.value}
                isMulti
                styles={styles}
                isClearable={this.state.value.some(v => !v.isFixed)}
                name="colors"
                className="React"
                classNamePrefix="select"
                onChange={this.fixedOnChange}
                options={colourOptions}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default SelectOptions
