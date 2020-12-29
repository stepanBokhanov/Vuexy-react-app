const initialState = {
  data: [],
  params: null,
  allData: [],
  totalPages: 0,
  filteredData: [],
  totalRecords: 0,
  sortIndex: []
}

const determinePopularity = val => {
  if (val >= 75) return { popValue: val, color: "success" }
  else if (val < 75 && val >= 55) return { popValue: val, color: "primary" }
  else if (val < 55 && val >= 35) return { popValue: val, color: "warning" }
  else if (val < 35 && val >= 0) return { popValue: val, color: "danger" }
  else return { popValue: 0, color: "danger" }
}

const moveIndex = (arr, from, to) => {
  let el = arr[from]
  arr.splice(from, 1)
  arr.splice(to, 0, el)
}

const getIndex = (arr, arr2, arr3, params = {}) => {
  if (arr2.length > 0) {
    let startIndex = arr.findIndex(i => i.id === arr2[0].id) + 1
    let endIndex = arr.findIndex(i => i.id === arr2[arr2.length - 1].id) + 1
    let finalArr = [startIndex, endIndex]
    return (arr3 = finalArr)
  } else {
    let finalArr = [arr.length - parseInt(params.perPage), arr.length]
    return (arr3 = finalArr)
  }
}

const DataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages,
        params: action.params,
        sortIndex: getIndex(
          state.allData,
          action.data,
          state.sortIndex,
          action.params
        )
      }
    case "GET_ALL_DATA":
      return {
        ...state,
        allData: action.data,
        totalRecords: action.data.length,
        sortIndex: getIndex(action.data, state.data, state.sortIndex)
      }
    case "FILTER_DATA":
      let value = action.value
      let filteredData = []
      if (value.length) {
        filteredData = state.allData
          .filter(item => {
            let startsWithCondition =
              item.name.toLowerCase().startsWith(value.toLowerCase()) ||
              item.category.toLowerCase().startsWith(value.toLowerCase()) ||
              item.price.toLowerCase().startsWith(value.toLowerCase()) ||
              item.order_status.toLowerCase().startsWith(value.toLowerCase())

            let includesCondition =
              item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.category.toLowerCase().includes(value.toLowerCase()) ||
              item.price.toLowerCase().includes(value.toLowerCase()) ||
              item.order_status.toLowerCase().includes(value.toLowerCase())

            if (startsWithCondition) {
              return startsWithCondition
            } else if (!startsWithCondition && includesCondition) {
              return includesCondition
            } else return null
          })
          .slice(state.params.page - 1, state.params.perPage)
        return { ...state, filteredData }
      } else {
        filteredData = state.data
        return { ...state, filteredData }
      }
    case "ADD_DATA":
      let id = state.data.slice(-1)[0].id + 1
      state.data.push({
        ...action.obj,
        id,
        popularity: determinePopularity(action.obj.popularity)
      })
      moveIndex(
        state.data,
        state.data.findIndex(item => item.id === id),
        0
      )
      return {
        ...state,
        data: state.data,
        totalRecords: state.allData.length,
        sortIndex: getIndex(state.allData, state.data, state.sortIndex)
      }
    case "UPDATE_DATA":
      state.data.find(item => {
        if (item.id === action.obj.id) {
          let popularity = determinePopularity(action.obj.popularity.popValue)
          return Object.assign(item, { ...action.obj, popularity })
        } else {
          return item
        }
      })
      return { ...state }
    case "DELETE_DATA":
      let index = state.data.findIndex(item => item.id === action.obj.id)
      let updatedData = [...state.data]
      updatedData.splice(index, 1)
      return {
        ...state,
        data: updatedData,
        totalRecords: state.allData.length,
        sortIndex: getIndex(
          state.allData,
          state.data,
          state.sortIndex,
          state.params
        )
      }
    default:
      return state
  }
}

export default DataListReducer
