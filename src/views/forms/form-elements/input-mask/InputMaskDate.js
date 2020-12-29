import React from "react"
import InputMask from "react-input-mask"

const InputMaskDate = () => {
  return (
    <React.Fragment>
      <div className="text-bold-600 font-medium-2 my-1">
        Date Mask <small>dd/mm/yyyy</small>
      </div>
      <InputMask
        className="form-control"
        mask="99/99/9999"
        placeholder="Enter birthdate"
      />
    </React.Fragment>
  )
}

export default InputMaskDate
