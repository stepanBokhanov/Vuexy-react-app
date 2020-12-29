import React from "react"
import InputMask from "react-input-mask"

const InputMaskDecimal = () => {
  return (
    <React.Fragment>
      <div className="text-bold-600 font-medium-2 my-1">
        Decimal <small>99.99</small>
      </div>
      <InputMask
        className="form-control"
        mask="99.99"
        placeholder="Enter Digits"
      />
    </React.Fragment>
  )
}

export default InputMaskDecimal
