import React from "react"
import AddEventSidebar from "./AddEventSidebar"
import AddEventButton from "./AddEventButton"
import { Card, CardBody, Button, ButtonGroup } from "reactstrap"
import { Calendar, momentLocalizer } from "react-big-calendar"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import moment from "moment"
import { connect } from "react-redux"
import {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize
} from "../../../redux/actions/calendar/index"
import { ChevronLeft, ChevronRight } from "react-feather"

import "react-big-calendar/lib/addons/dragAndDrop/styles.scss"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "../../../assets/scss/plugins/calendars/react-big-calendar.scss"
const DragAndDropCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment)
const eventColors = {
  business: "bg-success",
  work: "bg-warning",
  personal: "bg-danger",
  others: "bg-primary"
}

class Toolbar extends React.Component {
  render() {
    return (
      <div className="calendar-header mb-2 d-flex justify-content-between flex-wrap">
        <div>
          <AddEventButton />
        </div>
        <div className="text-center view-options mt-1 mt-sm-0 ml-lg-5 ml-0">
          <ButtonGroup>
            <button
              className={`btn ${
                this.props.view === "month"
                  ? "btn-primary"
                  : "btn-outline-primary text-primary"
              }`}
              onClick={() => {
                this.props.onView("month")
              }}
            >
              Month
            </button>
            <button
              className={`btn ${
                this.props.view === "week"
                  ? "btn-primary"
                  : "btn-outline-primary text-primary"
              }`}
              onClick={() => {
                this.props.onView("week")
              }}
            >
              Week
            </button>
            <button
              className={`btn ${
                this.props.view === "day"
                  ? "btn-primary"
                  : "btn-outline-primary text-primary"
              }`}
              onClick={() => {
                this.props.onView("day")
              }}
            >
              Day
            </button>
          </ButtonGroup>
        </div>
        <div className="month-label d-flex flex-column text-center text-md-right mt-1 mt-md-0">
          <div className="calendar-navigation">
            <Button.Ripple
              className="btn-icon rounded-circle"
              size="sm"
              color="primary"
              onClick={() => this.props.onNavigate("PREV")}
            >
              <ChevronLeft size={15} />
            </Button.Ripple>
            <div className="month d-inline-block mx-75 text-bold-500 font-medium-2 align-middle">
              {this.props.label}
            </div>
            <Button.Ripple
              className="btn-icon rounded-circle"
              size="sm"
              color="primary"
              onClick={() => this.props.onNavigate("NEXT")}
            >
              <ChevronRight size={15} />
            </Button.Ripple>
          </div>
          <div className="event-tags d-none d-sm-flex justify-content-end mt-1">
            <div className="tag mr-1">
              <span className="bullet bullet-success bullet-sm mr-50"></span>
              <span>Business</span>
            </div>
            <div className="tag mr-1">
              <span className="bullet bullet-warning bullet-sm mr-50"></span>
              <span>Work</span>
            </div>
            <div className="tag mr-1">
              <span className="bullet bullet-danger bullet-sm mr-50"></span>
              <span>Personal</span>
            </div>
            <div className="tag">
              <span className="bullet bullet-primary bullet-sm mr-50"></span>
              <span>Others</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class CalendarApp extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.app.events.length !== state.events ||
      props.app.sidebar !== state.sidebar ||
      props.app.selectedEvent !== state.eventInfo
    ) {
      let dateToObj = props.app.events.map(event => {
        event.start = new Date(event.start)
        event.end = new Date(event.end)
        return event
      })
      return {
        events: dateToObj,
        sidebar: props.app.sidebar,
        eventInfo: props.app.selectedEvent
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      views: {
        month: true,
        week: true,
        day: true
      },
      eventInfo: null
    }
  }

  async componentDidMount() {
    await this.props.fetchEvents()
  }

  handleEventColors = event => {
    return { className: eventColors[event.label] }
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state
    const idx = events.indexOf(event)
    let allDay = event.allDay
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }
    const updatedEvent = { ...event, start, end, allDay }
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events: nextEvents
    })
    this.props.updateDrag(updatedEvent)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents
    })

    this.props.updateResize({ ...event, start, end })
  }

  handleSelectEvent = event => {
    let filteredState = this.state.events.filter(i => i.id === event.id)
    this.props.handleSidebar(true)
    this.props.handleSelectedEvent(filteredState[0])
    this.setState({
      eventInfo: filteredState[0]
    })
  }

  render() {
    const { events, views, sidebar } = this.state
    return (
      <div className="app-calendar position-relative">
        <div
          className={`app-content-overlay ${sidebar ? "show" : "hidden"}`}
          onClick={() => {
            this.props.handleSidebar(false)
            this.props.handleSelectedEvent(null)
          }}
        ></div>
        <Card>
          <CardBody>
            <DragAndDropCalendar
              localizer={localizer}
              events={events}
              onEventDrop={this.moveEvent}
              onEventResize={this.resizeEvent}
              startAccessor="start"
              endAccessor="end"
              resourceAccessor="url"
              views={views}
              components={{ toolbar: Toolbar }}
              eventPropGetter={this.handleEventColors}
              popup={true}
              onSelectEvent={event => {
                this.handleSelectEvent(event)
              }}
              onSelectSlot={({ start, end }) => {
                this.props.handleSidebar(true)
                this.props.handleSelectedEvent({
                  title: "",
                  label: null,
                  start: new Date(start),
                  end: new Date(end),
                  url: ""
                })
              }}
              selectable={true}
            />
          </CardBody>
        </Card>
        <AddEventSidebar
          sidebar={sidebar}
          handleSidebar={this.props.handleSidebar}
          addEvent={this.props.addEvent}
          events={this.state.events}
          eventInfo={this.state.eventInfo}
          selectedEvent={this.props.handleSelectedEvent}
          updateEvent={this.props.updateEvent}
          resizable
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.calendar
  }
}

export default connect(mapStateToProps, {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize
})(CalendarApp)
