import React from "react"
import { FormGroup, Input } from "reactstrap"
import { Menu, Search, Check, Info, Star, Trash } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask
} from "../../../redux/actions/todo/index"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
class TodoList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.app.todo.routeParam !== state.currentLocation) {
      return {
        todos: props.app.todo.todos
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    todos: [],
    handleUpdateTask: null,
    currentLocation: this.props.routerProps.location.pathname,
    value: ""
  }
  async componentDidMount() {
    await this.props.getTodos(this.props.routerProps.match.params)
    this.setState({
      todos: this.props.app.todo.todos,
      handleUpdateTask: this.props.handleUpdateTask
    })
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchTask(e.target.value)
  }

  

  render() {
    const { todos, handleUpdateTask, value } = this.state
    let routerFilter = this.props.routerProps.match.params.filter
    let todosArr = value.length ? this.props.app.todo.filteredTodos : todos
    let renderTodos =
      todosArr.length > 0 ? (
        todosArr.map((todo, i) => {
          return (
            <li
              className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
              key={i}
              onClick={() => {
                handleUpdateTask(todo)
              }}
            >
              <div className="todo-title-wrapper d-flex justify-content-between mb-50">
                <div className="todo-title-area d-flex align-items-center">
                  <div className="title-wrapper d-flex">
                    <Checkbox
                      color="primary"
                      className="user-checkbox"
                      icon={<Check className="vx-icon" size={12} />}
                      label={""}
                      checked={todo.isCompleted}
                      size="sm"
                      onClick={e => {
                        e.stopPropagation()
                        this.props.completeTask(todo)
                      }}
                      onChange={e => e.stopPropagation()}
                    />
                    <h6 className="todo-title mt-50 mx-50">{todo.title}</h6>
                  </div>
                  {todo.tags.length > 0 ? (
                    <div className="chip-wrapper">
                      {todo.tags.map((tag, i) => (
                        <div className="chip mb-0" key={i}>
                          <div className="chip-body">
                            <span className="chip-text">
                              <span
                                className={`bullet bullet-${
                                  tag === "backend"
                                    ? "warning"
                                    : tag === "doc"
                                    ? "success"
                                    : tag === "bug"
                                    ? "danger"
                                    : "primary"
                                } bullet-xs`}
                              />
                              <span className="text-capitalize ml-25">
                                {tag}
                              </span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div
                  className={`todo-item-action d-flex ${
                    routerFilter === "trashed" ? "justify-content-end" : ""
                  }`}
                >
                  <div
                    className={`todo-item-info d-inline-block ${
                      routerFilter === "trashed" ? "mr-1" : "mr-1 mr-sm-0"
                    }`}
                    onClick={e => {
                      e.stopPropagation()
                      this.props.importantTask(todo)
                    }}
                  >
                    <Info
                      size={17}
                      className={`${todo.isImportant ? "text-success" : ""}`}
                    />
                  </div>
                  <div
                    className="todo-item-favorite d-inline-block mr-1 mr-sm-0"
                    onClick={e => {
                      e.stopPropagation()
                      this.props.starTask(todo)
                    }}
                  >
                    <Star
                      size={17}
                      className={`${todo.isStarred ? "text-warning" : ""}`}
                    />
                  </div>
                  {routerFilter !== "trashed" ? (
                    <div
                      className="todo-item-delete d-inline-block mr-1 mr-sm-0"
                      onClick={e => {
                        e.stopPropagation()
                        this.props.trashTask(todo.id)
                      }}
                    >
                      <Trash size={17} />
                    </div>
                  ) : null}
                </div>
              </div>
              {todo.desc.length > 0 ? (
                <p className="todo-desc truncate mb-0">{todo.desc}</p>
              ) : (
                ""
              )}
            </li>
          )
        })
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No tasks at this time
        </p>
      )

    return (
      <div className="content-right">
        <div className="todo-app-area">
          <div className="todo-app-list-wrapper">
            <div className="todo-app-list">
              <div className="app-fixed-search">
                <div
                  className="sidebar-toggle d-inline-block d-lg-none"
                  onClick={() => this.props.mainSidebar(true)}
                >
                  <Menu size={24} />
                </div>
                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={e => this.handleOnChange(e)}
                    value={value}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </div>
              <PerfectScrollbar
                className="todo-task-list"
                options={{
                  wheelPropagation: false
                }}
              >
                <ul className="todo-task-list-wrapper">{renderTodos}</ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    app: state.todoApp
  }
}
export default connect(mapStateToProps, {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask
})(TodoList)
