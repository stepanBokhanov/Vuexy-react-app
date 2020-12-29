import React from "react"
import { Card, FormGroup, Input, Badge } from "reactstrap"
import { X, Search } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  getChats,
  getContactChats,
  searchContacts,
  markSeenAllMessages
} from "../../../redux/actions/chat/index"
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg"

class ChatSidebar extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.chat.chatContacts.length !== state.chatContacts ||
      props.chat.contacts.length !== state.contacts ||
      props.chat.chats.length !== state.chats ||
      props.chat.status !== state.status
    ) {
      return {
        chatsContacts: props.chat.chatContacts,
        contacts: props.chat.contacts,
        chats: props.chat.chats,
        status: props.chat.status
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    chatsContacts: [],
    contacts: [],
    messages: [],
    status: null,
    value: ""
  }

  getChatContents = () => {
    this.props.getChats()
    this.props.getContactChats()
  }

  async componentDidMount() {
    await this.getChatContents()
    this.setState({
      chatsContacts: this.props.chat.chatContacts,
      contacts: this.props.chat.contacts,
      chats: this.props.chat.chats,
      status: this.props.chat.status
    })
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchContacts(e.target.value)
  }

  render() {
    const { contacts, chatsContacts, chats, status, value } = this.state
    const contactsArr = value.length
      ? this.props.chat.filteredContacts
      : contacts
    const chatsArr = value.length
      ? this.props.chat.filteredChats
      : chatsContacts
    let renderContacts =
      contactsArr.length > 0
        ? contactsArr.map(contact => (
            <li
              key={contact.uid}
              onClick={() => {
                this.props.handleActiveChat(
                  contact.uid,
                  contact,
                  chats[contact.uid]
                )
                this.props.markSeenAllMessages(contact.uid)
                this.props.mainSidebar(false)
              }}
            >
              <div className="pr-1">
                <span className="avatar avatar-md m-0">
                  <img
                    src={contact.photoURL}
                    alt={contact.displayName}
                    height="38"
                    width="38"
                  />
                </span>
              </div>
              <div className="user-chat-info">
                <div className="contact-info">
                  <h5 className="text-bold-600 mb-0">{contact.displayName}</h5>
                  <p className="truncate">{contact.about}</p>
                </div>
              </div>
            </li>
          ))
        : null
    let renderChats =
      chatsArr && Array.isArray(chatsArr)
        ? chatsArr.map(chat => {
            let lastMsg =
                chats[chat.uid] && chats[chat.uid].msg
                  ? chats[chat.uid].msg.slice(-1)[0]
                  : null,
              lastMsgDate = new Date(
                lastMsg && lastMsg.time ? lastMsg.time : null
              ),
              lastMsgMonth = lastMsgDate.toLocaleString("default", {
                month: "short"
              }),
              lastMsgDay = lastMsgDate.getDate()
            let pendingMsg =
              chats[chat.uid] && chats[chat.uid].msg
                ? chats[chat.uid].msg.filter(
                    i => i.isSeen === false && i.isSent !== true
                  ).length
                : null
            let activeID =
              chats[chat.uid] !== undefined ? chats[chat.uid] : null
            return (
              <li
                key={chat.uid}
                onClick={() => {
                  this.props.handleActiveChat(chat.uid, chat, activeID)
                  this.props.mainSidebar(false)
                  this.props.markSeenAllMessages(chat.uid)
                }}
                className={`${
                  this.props.activeChatID === chat.uid ? "active" : ""
                }`}
              >
                <div className="pr-1">
                  <span className="avatar avatar-md m-0">
                    <img
                      src={chat.photoURL}
                      alt={chat.displayName}
                      height="38"
                      width="38"
                    />
                  </span>
                </div>
                <div className="user-chat-info">
                  <div className="contact-info">
                    <h5 className="text-bold-600 mb-0">{chat.displayName}</h5>
                    <p className="truncate">
                      {lastMsg ? lastMsg.textContent : chat.about}
                    </p>
                  </div>
                  <div className="contact-meta d-flex- flex-column">
                    <span className="float-right mb-25">
                      {lastMsgMonth + " " + lastMsgDay}
                    </span>
                    {pendingMsg > 0 ? (
                      <div className="unseen-msg">
                        <Badge
                          className="badge-md float-right"
                          color="primary"
                          pill
                        >
                          {pendingMsg}
                        </Badge>
                      </div>
                    ) : null}
                  </div>
                </div>
              </li>
            )
          })
        : null
    return (
      <Card className="sidebar-content h-100">
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="chat-fixed-search">
          <div className="d-flex align-items-center">
            <div className="sidebar-profile-toggle position-relative d-inline-flex">
              <div
                className="avatar"
                onClick={() => this.props.handleUserSidebar("open")}
              >
                <img src={userImg} alt="User Profile" height="40" width="40" />
                <span
                  className={
                    status === "dnd"
                      ? "avatar-status-busy"
                      : status === "away"
                      ? "avatar-status-away"
                      : status === "offline"
                      ? "avatar-status-offline"
                      : "avatar-status-online"
                  }
                />
              </div>
            </div>
            <FormGroup className="position-relative has-icon-left mx-1 my-0 w-100">
              <Input
                className="round"
                type="text"
                placeholder="Search contact or start a new chat"
                onChange={e => this.handleOnChange(e)}
                value={value}
              />
              <div className="form-control-position">
                <Search size={15} />
              </div>
            </FormGroup>
          </div>
        </div>
        <PerfectScrollbar
          className="chat-user-list list-group"
          options={{
            wheelPropagation: false
          }}
        >
          <h3 className="primary p-1 mb-0">Chats</h3>
          <ul className="chat-users-list-wrapper media-list">{renderChats}</ul>
          <h3 className="primary p-1 mb-0">Contacts</h3>
          <ul className="chat-users-list-wrapper media-list">
            {renderContacts}
          </ul>
        </PerfectScrollbar>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    chat: state.chatApp.chats
  }
}
export default connect(mapStateToProps, {
  getChats,
  getContactChats,
  searchContacts,
  markSeenAllMessages
})(ChatSidebar)
