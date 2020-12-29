import React from "react"
import { Button } from "reactstrap"
import { Plus } from "react-feather"
import { connect } from "react-redux"
import {
  handleSidebar,
  handleSelectedEvent
} from "../../../redux/actions/calendar/index"
const AddEventButton = props => {
  return (
    <Button.Ripple
      color="primary"
      onClick={() => {
        props.handleSidebar(true)
        props.handleSelectedEvent(null)
      }}
      className="d-sm-block d-none"
    >
      {" "}
      <Plus size={15} /> <span className="align-middle">Add</span>
    </Button.Ripple>
  )
}

export default connect(null, { handleSidebar, handleSelectedEvent })(
  AddEventButton
)
