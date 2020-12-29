import React from "react"
import InputMask from "react-input-mask"

class InputMaskCreditCard extends React.Component {
  state = {
    value: "",
    mask: "9999-9999-9999-9999"
  }

  onChange = event => {
    var value = event.target.value
    var newState = {
      mask: "9999-9999-9999-9999",
      value: value
    }
    if (/^3[47]/.test(value)) {
      newState.mask = "9999-999999-99999"
    }
    this.setState(newState)
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-bold-600 font-medium-2 my-1">
          Credit Card{" "}
          <small>(autochange to Amex format if starts with 34 or 37)</small>
        </div>
        <InputMask
          className="form-control"
          {...this.state}
          onChange={this.onChange}
          placeholder="Enter Credit Card Number"
        />
      </React.Fragment>
    )
  }
}

export default InputMaskCreditCard
