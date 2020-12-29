import React from "react"
import {
  Input,
  Button,
  FormGroup,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap"
import { X, Info, Star, Tag, Check } from "react-feather"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  starTask,
  completeTask,
  importantTask,
  updateTask,
  updateLabel,
  addNewTask
} from "../../../redux/actions/todo/index"
class TaskSidebar extends React.Component {

  // static getDerivedStateFromProps (props, state){
  //   if (
  //    ( props.taskToUpdate !== null &&
  //     props.taskToUpdate.title !== state.taskTitle) ||
  //     (props.taskToUpdate !== null && props.taskToUpdate.isCompleted !== state.newTask.isCompleted)
  //   ) {
  //     let todosArr = props.app.todo.todos
  //     let receivedTask =
  //       props.taskToUpdate !== null ? props.taskToUpdate : 1
  //     let filteredTask = todosArr.filter(i => i.id === receivedTask.id)
  //     let taskToUpdate, taskTitle, taskDesc
  //     filteredTask.map(task => {
  //       return (
  //         (taskToUpdate = task),
  //         (taskTitle = task.title),
  //         (taskDesc = task.desc)
  //       )
  //     })
  //     return {
  //       taskToUpdate,
  //       taskTitle,
  //       taskDesc
  //     }
  //   }
  //   return null
  // }

  state = {
    taskToUpdate: null,
    taskTitle: "",
    taskDesc: "",
    taskStatus : false,
    taskStarred : false,
    taskImportant  : false,
    newTask: {
      title: "",
      desc: "",
      tags: [],
      isCompleted: false,
      isImportant: false,
      isStarred: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(
      (this.props.taskToUpdate !== null && this.state.taskToUpdate !== this.props.taskToUpdate) || 
      (this.props.taskToUpdate !== null && this.state.taskStatus !== this.props.taskToUpdate.isCompleted) ||
      (this.props.taskToUpdate !== null && this.state.taskStarred !== this.props.taskToUpdate.isStarred) ||
      (this.props.taskToUpdate !== null && this.state.taskImportant !== this.props.taskToUpdate.isImportant) 
      ){
      this.setState({ 
        taskToUpdate : this.props.taskToUpdate, 
        taskTitle :  this.props.taskToUpdate.title,
        taskDesc :  this.props.taskToUpdate.desc,
        taskStatus : this.props.taskToUpdate.isCompleted,
        taskStarred : this.props.taskToUpdate.isStarred,
        taskImportant : this.props.taskToUpdate.isImportant
      })
    }
    else{
      return 
    }
  }
  


  handleNewTaskTags = tag => {
    let tagsArr = this.state.newTask.tags
    if (tagsArr.includes(tag)) {
      tagsArr.splice(tagsArr.indexOf(tag), 1)
    } else {
      tagsArr.push(tag)
    }
    this.setState({
      ...this.state.newTask,
      tags: tag
    })
  }

  renderTags = taskArr => {
    return taskArr.map((tag, i) => (
      <div className="chip mb-0 mr-50" key={i}>
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
            <span className="text-capitalize ml-25">{tag}</span>
          </span>
        </div>
      </div>
    ))
  }

  render() {
    const { taskToUpdate, taskTitle, taskDesc, newTask, taskStatus } = this.state

    return (
      <div
        className={`task-sidebar ${
          this.props.addTaskState === true ? "show" : ""
        }`}
      >
        <div className="task-header">
          <div className="d-flex justify-content-between">
            <div className="task-type-title text-bold-600">
              <h3>
                {this.props.taskToUpdate && this.props.taskToUpdate.id
                  ? "Update Task"
                  : "Add Task"}
              </h3>
            </div>
            <div className="close-icon">
              <X
                className="cursor-pointer"
                size={20}
                onClick={() => this.props.addTask("close")}
              />
            </div>
          </div>
        </div>
        <PerfectScrollbar>
          <div className="task-body">
            <div className="d-flex justify-content-between mb-2">
              <div className="mark-complete">
                {this.props.taskToUpdate && this.props.taskToUpdate.id && <Checkbox
                  color="primary"
                  className="user-checkbox"
                  icon={<Check className="vx-icon" size={15} />}
                  label={""}
                  checked={ taskStatus }                  
                  onChange={e =>  {
                    this.props.completeTask(this.props.taskToUpdate)
                  }}
                />}
              </div>
              <div className="task-actions">
                <Info
                  size={20}
                  className={`mr-50 ${
                      (this.props.taskToUpdate !== null && this.state.taskImportant) ||
                      newTask.isImportant 
                      ? "text-success"
                      : ""
                  }`}
                  onClick={() => {
                    if (this.props.taskToUpdate !== null){
                      this.props.importantTask(this.props.taskToUpdate)
                    }
                    else{
                      this.setState({
                        newTask : {
                          ...this.state.newTask,
                          isImportant : !this.state.newTask.isImportant
                        }
                      })
                    }
                      
                  }}
                />
                <Star
                  size={20}
                  className={`mr-50 ${
                      (this.props.taskToUpdate !== null  && this.state.taskStarred) ||
                      newTask.isStarred 
                      ? "text-warning"
                      : ""
                  }`}
                  onClick={() => {
                    if (this.props.taskToUpdate !== null){
                      this.props.starTask(this.props.taskToUpdate)
                    }
                    else{
                      this.setState({
                        newTask : {
                          ...this.state.newTask,
                          isStarred : !this.state.newTask.isStarred
                        }
                      })
                    }
                    
                  }}
                />
                <UncontrolledDropdown className="d-inline-block">
                  <DropdownToggle tag="span">
                    <Tag className="mr-50" size={20} />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" right>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Frontend"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("frontend") )||
                            (newTask.tags.includes("frontend"))
                            ? true
                            : false
                        }
                        size="sm"
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "frontend")
                          else this.handleNewTaskTags("frontend")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Backend"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("backend"))||
                            (newTask.tags.includes("backend"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "backend")
                            else this.handleNewTaskTags("backend")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Doc"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("doc"))||
                            (newTask.tags.includes("doc"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "doc")
                          else this.handleNewTaskTags("doc")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Bug"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("bug"))||
                            (newTask.tags.includes("bug"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "bug")
                          else this.handleNewTaskTags("bug")
                        }}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <FormGroup>
              <Input
                type="text"
                placeholder="Title"
                value={
                  this.props.taskToUpdate !== null ? taskTitle : newTask.title
                }
                onChange={e => {
                  if (this.props.taskToUpdate !== null) {
                    this.setState({
                      taskTitle : e.target.value
                    })
                  }else{
                    this.setState({ newTask : {
                      ...this.state.newTask,
                      title : e.target.value
                    } })
                  }
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                placeholder="Description"
                rows="5"
                value={
                  this.props.taskToUpdate !== null ? taskDesc : newTask.desc
                }
                onChange={e => {
                  if (this.props.taskToUpdate !== null){
                    this.setState({
                      taskDesc: e.target.value
                    })
                  }
                  else{
                    this.setState({ newTask : {
                      ...this.state.newTask,
                      desc : e.target.value
                    } })
                  }
                }}
              />
            </FormGroup>
            <div className="chip-wrapper my-1 d-flex flex-wrap">
              {this.props.taskToUpdate !== null &&
              this.props.taskToUpdate.tags &&
              this.props.taskToUpdate.tags.length > 0
                ? this.renderTags(this.props.taskToUpdate.tags)
                : null}
            </div>

            <hr className="my-2" />
            <div className="d-flex justify-content-end">
              <Button.Ripple
                className="mr-50"
                color="primary"
                onClick={() => {
                  if (this.props.taskToUpdate !== null) {
                    this.props.updateTask(taskToUpdate.id, taskTitle, taskDesc)
                  } else {
                    this.props.addNewTask(this.state.newTask)
                  }
                  this.props.addTask("close")
                  this.setState({
                    newTask: {
                      title: "",
                      desc: "",
                      tags: [],
                      isCompleted: false,
                      isImportant: false,
                      isStarred: false
                    }
                  })
                }}
                disabled={
                  taskTitle.length > 0 || newTask.title.length > 0
                    ? false
                    : true
                }
              >
                {taskToUpdate &&
                taskToUpdate.id &&
                this.props.taskToUpdate !== null
                  ? "Update"
                  : "Add"}
              </Button.Ripple>
              <Button.Ripple
                color="light"
                outline
                onClick={() => {
                  this.props.addTask("close")
                  this.setState({
                    newTask: {
                      title: "",
                      desc: "",
                      tags: [],
                      isCompleted: false,
                      isImportant: false,
                      isStarred: false
                    }
                  })
                }}
              >
                Cancel
              </Button.Ripple>
            </div> 
          </div>
        </PerfectScrollbar>
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
  completeTask,
  importantTask,
  starTask,
  updateTask,
  updateLabel,
  addNewTask
})(TaskSidebar)
