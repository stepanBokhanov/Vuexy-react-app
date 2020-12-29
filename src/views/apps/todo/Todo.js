import React from "react"
import Sidebar from "react-sidebar"
import { ContextLayout } from "../../../utility/context/Layout"
import TodoSidebar from "./TodoSidebar"
import TodoList from "./TodoList"
import TaskSidebar from "./TaskSidebar"
import "../../../assets/scss/pages/app-todo.scss"
const mql = window.matchMedia(`(min-width: 992px)`)

class TODO extends React.Component {
  state = {
    addTask: false,
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    taskToUpdate: null,
    prevState: null
  }
  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  handleAddTask = status => {
    status === "open"
      ? this.setState({ addTask: true })
      : this.setState({ addTask: false, taskToUpdate: null })
  }
  handleUpdateTask = todo => {
    if (todo !== undefined) {
      this.setState({ addTask: true, taskToUpdate: todo })
    } else {
      this.setState({ taskToUpdate: null })
    }
  }

  handleUndoChanges = arr => {
    this.setState({
      prevState: arr
    })
  }

  render() {
    return (
      <div className="todo-application position-relative">
        <div
          className={`app-content-overlay ${
            this.state.addTask || this.state.sidebarOpen ? "show" : ""
          }`}
          onClick={() => {
            this.handleAddTask("close")
            this.onSetSidebarOpen(false)
          }}
        />
        <ContextLayout.Consumer>
          {context => (
            <Sidebar
              sidebar={
                <TodoSidebar
                  routerProps={this.props}
                  addTask={this.handleAddTask}
                  mainSidebar={this.onSetSidebarOpen}
                />
              }
              docked={this.state.sidebarDocked}
              open={this.state.sidebarOpen}
              sidebarClassName="sidebar-content todo-sidebar d-flex"
              touch={false}
              contentClassName="sidebar-children d-none"
              pullRight={context.state.direction === "rtl"}>
              ""
            </Sidebar>
          )}
        </ContextLayout.Consumer>
        <TodoList
          routerProps={this.props}
          handleUpdateTask={this.handleUpdateTask}
          mainSidebar={this.onSetSidebarOpen}
          prevState={this.state.prevState}
        />
        <TaskSidebar
          addTask={this.handleAddTask}
          addTaskState={this.state.addTask}
          taskToUpdate={this.state.taskToUpdate}
          newTask={this.state.newTask}
          mainSidebar={this.onSetSidebarOpen}
          handleUndoChanges={this.handleUndoChanges}
        />
      </div>
    )
  }
}

export default TODO
