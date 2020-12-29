const initialState = {
  chats: [],
  contacts: [],
  chatContacts: [],
  pinned: [],
  status: "active",
  filteredContacts: [],
  filteredChats: []
}

const chats = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, chats: action.chats, contacts: action.contacts }
    case "GET_CHAT_CONTACTS":
      return { ...state, chatContacts: action.chats }
    case "SEND_MESSAGE":
      let sendMsg,
        newChatContacts,
        oldChatContactsId = state.chatContacts.map(j => j.uid)
      if (state.chats[action.id]) {
        let oldState = state.chats[action.id].msg
        sendMsg = [...oldState, action.msg]
      } else {
        sendMsg = {
          ...state.chats,
          [action.id]: {
            isPinned: action.isPinned,
            msg: [action.msg]
          }
        }
      }
      if (!oldChatContactsId.includes(action.id)) {
        let extractContactInfo = state.contacts.find(k => k.uid === action.id)
        newChatContacts = state.chatContacts.concat(extractContactInfo)
      } else {
        newChatContacts = state.chatContacts
      }
      return { ...state, chats: sendMsg, chatContacts: newChatContacts }
    case "CHANGE_STATUS":
      return { ...state, status: action.status }
    case "MARK_AS_SEEN":
      let marked = state.chats[action.id]
      marked !== undefined &&
        marked.msg.forEach(msg => {
          msg.isSeen = true
        })
      return { ...state }
    case "SEARCH_CONTACTS":
      if (action.query.length) {
        let filteredContacts = state.contacts.filter(contact => {
          return contact.displayName
            .toLowerCase()
            .includes(action.query.toLowerCase())
        })
        let filteredChats = state.chatContacts.filter(chat => {
          return chat.displayName
            .toLowerCase()
            .includes(action.query.toLowerCase())
        })
        return { ...state, filteredContacts, filteredChats }
      } else {
        return { ...state }
      }
    case "SET_PINNED":
      let pinned = state.chats[action.id]
      if (pinned) {
        pinned.isPinned = action.value
        state.chatContacts.sort((a, b) => b.uid - a.uid)
        return { ...state }
      } else {
        return { ...state }
      }
    default:
      return { ...state }
  }
}

export default chats
