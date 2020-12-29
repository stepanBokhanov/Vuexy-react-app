const initialState = {
  todos: [],
  routeParam: null,
  filteredTodos: []
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.todos, routeParam: action.routeParams }
    case "UPDATE_TODOS":
      let todo = action.todo
      let updatedState = { ...state.todos, [todo.id]: { ...todo } }
      return { ...state, todos: updatedState }

    case "COMPLETE_TASK":
      state.todos.find(i => i.id === action.id).isCompleted = !action.value
      return { ...state }

    case "STAR_TASK":
      state.todos.find(i => i.id === action.id).isStarred = !action.value
      return { ...state }

    case "IMPORTANT_TASK":
      state.todos.find(i => i.id === action.id).isImportant = !action.value
      return { ...state }

    case "TRASH_TASK":
      state.todos.find(i => i.id === action.id).isTrashed = true
      return { ...state }

    case "UPDATE_LABEL":
      let taskToUpdate = state.todos.find(i => i.id === action.id).tags
      if (!taskToUpdate.includes(action.label)) taskToUpdate.push(action.label)
      else taskToUpdate.splice(taskToUpdate.indexOf(action.label), 1)
      return { ...state }

    case "UPDATE_TASK":
      let todoToUpdate = state.todos.find(i => i.id === action.id)
      todoToUpdate.title = action.title
      todoToUpdate.desc = action.desc
      return { ...state }

    case "ADD_TASK":
      return { ...state }

    case "SEARCH_TASK":
      if (action.val.length) {
        let filteredTodos = state.todos.filter(query => {
          return (
            query.title.toLowerCase().includes(action.val) ||
            query.desc.toLowerCase().includes(action.val)
          )
        })
        return { ...state, filteredTodos }
      } else {
        return { ...state }
      }

    case "CHANGE_FILTER":
      state.routeParam = action.filter
      return { ...state }

    default:
      return state
  }
}

export default todo
