import React from "react"
import { X } from "react-feather"
import { Input } from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import { changeStatus } from "../../../redux/actions/chat/index"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg"
class UserSidebar extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.chat.status !== state.status) {
      return {
        status: props.chat.status
      }
    }
    // Return null if the state hasn't changed
    return null
  }

  state = {
    value:
      "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
    status: null
  }

  render() {
    const status = this.state.status
    return (
      <div
        className={`chat-profile-sidebar ${
          this.props.userProfile ? "show" : null
        }`}
      >
        <header className="chat-profile-header">
          <div
            className="close-icon"
            onClick={() => this.props.handleUserSidebar("close")}
          >
            <X size={24} />
          </div>
          <div className="header-profile-sidebar">
            <div className="avatar">
              <img src={userImg} alt="User Profile" height="66" width="66" />
              <span
                className={`${
                  status === "offline"
                    ? "avatar-status-offline"
                    : status === "dnd"
                    ? "avatar-status-busy"
                    : status === "away"
                    ? "avatar-status-away"
                    : "avatar-status-online"
                } avatar-status-lg`}
              />
            </div>
            <h4 className="chat-user-name">John Doe</h4>
          </div>
        </header>
        <div className="profile-sidebar-area">
          <PerfectScrollbar
            className="scroll-area"
            options={{
              wheelPropagation: false
            }}
          >
            <h6>About</h6>
            <div className="about-user">
              <Input
                type="textarea"
                name="text"
                id="userAbout"
                rows="5"
                value={this.state.value}
                maxLength="120"
                onChange={e => this.setState({ value: e.target.value })}
              />
              <small className="counter-value float-right">
                {`${this.state.value.length} / 120`}
              </small>
            </div>
            <h3 className="mt-3">Status</h3>
            <ul className="list-unstyled user-status mb-0">
              <li className="pb-50">
                <Radio
                  label="Active"
                  color="success"
                  defaultChecked={true}
                  name="userStatus"
                  onClick={() => this.props.changeStatus("active")}
                />
              </li>
              <li className="pb-50">
                <Radio
                  label="Do Not Disturb"
                  color="danger"
                  defaultChecked={false}
                  name="userStatus"
                  onClick={() => this.props.changeStatus("dnd")}
                />
              </li>
              <li className="pb-50">
                <Radio
                  label="Away"
                  color="warning"
                  defaultChecked={false}
                  name="userStatus"
                  onClick={() => this.props.changeStatus("away")}
                />
              </li>
              <li className="pb-50">
                <Radio
                  label="Offline"
                  color="secondary"
                  defaultChecked={false}
                  name="userStatus"
                  onClick={() => this.props.changeStatus("offline")}
                />
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    chat: state.chatApp.chats
  }
}
export default connect(mapStateToProps, { changeStatus })(UserSidebar)
