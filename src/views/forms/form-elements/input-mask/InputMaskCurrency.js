import React from "react"
import InputMask from "react-input-mask"

const InputMaskCurrency = () => {
  return (
    <React.Fragment>
      <div className="text-bold-600 font-medium-2 my-1">
        Currency Mask <small>$9999</small>
      </div>
      <InputMask
        className="form-control"
        mask="$9999"
        placeholder="Enter Currency In USD"
      />
    </React.Fragment>
  )
}

export default InputMaskCurrency
