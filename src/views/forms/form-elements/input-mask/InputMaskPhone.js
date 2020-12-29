import React from "react"
import InputMask from "react-input-mask"

const InputMaskPhone = () => {
  return (
    <React.Fragment>
      <div className="text-bold-600 font-medium-2 my-1">
        Phone <small>+19 999 999 999</small>
      </div>
      <InputMask
        className="form-control"
        mask="+19 999 999 999"
        placeholder="Enter Phone Number"
      />
    </React.Fragment>
  )
}

export default InputMaskPhone
