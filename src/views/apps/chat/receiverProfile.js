import React from "react"
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
class ReceiverProfile extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.activeUser !== state.activeUser) {
      return {
        activeUser: props.activeUser
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    activeUser: null
  }

  render() {
    const { activeUser } = this.state
    return (
      <div
        className={`user-profile-sidebar ${
          this.props.receiverProfile ? "show" : null
        }`}
      >
        <header className="user-profile-header">
          <span
            className="close-icon"
            onClick={() => this.props.handleReceiverSidebar("close")}
          >
            <X size={24} />
          </span>
          <div className="header-profile-sidebar">
            <div className="avatar">
              <img
                src={activeUser !== null ? activeUser.photoURL : null}
                alt={activeUser !== null ? activeUser.displayName : null}
                height="66"
                width="66"
              />
              <span
                className={`${
                  activeUser !== null && activeUser.status === "do not disturb"
                    ? "avatar-status-busy"
                    : activeUser !== null && activeUser.status === "away"
                    ? "avatar-status-away"
                    : activeUser !== null && activeUser.status === "offline"
                    ? "avatar-status-offline"
                    : "avatar-status-online"
                } avatar-status-lg`}
              />
            </div>
            <h4 className="chat-user-name">
              {activeUser !== null ? activeUser.displayName : null}
            </h4>
          </div>
        </header>
        <PerfectScrollbar
          className="user-profile-sidebar-area p-2"
          options={{
            wheelPropagation: false
          }}
        >
          <h6>About</h6>
          <p>{activeUser !== null ? activeUser.about : null}</p>
        </PerfectScrollbar>
      </div>
    )
  }
}
export default ReceiverProfile
