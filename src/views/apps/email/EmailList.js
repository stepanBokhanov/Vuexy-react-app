import React from "react"
import {
  FormGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Media
} from "reactstrap"
import {
  Search,
  Check,
  Folder,
  Edit2,
  Info,
  Trash,
  Tag,
  Mail,
  Star,
  Menu
} from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  getEmails,
  StarEmail,
  searchMail,
  moveMail,
  selectMail,
  selectAllMails,
  deselectAllMails,
  unreadMails,
  setLabel
} from "../../../redux/actions/email/index"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import EmailDetails from "./EmailDetails"

class EmailList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.email.params !== state.currentFilter) {
      return {
        mails: props.email.mails
      }
    }
    // Return null if the state hasn't changed
    return null
  }
  state = {
    mails: [],
    emailDetailsVisibility: false,
    selectAll: false,
    currentEmail: [],
    value: "",
    currentFilter: this.props.routerProps.match.params.filter
  }

  async componentDidMount() {
    await this.props.getEmails(this.props.routerProps.match.params)
    this.setState({
      mails: this.props.email.mails
    })
  }

  handleEmailDetails = (status, mail) => {
    if (status === "open")
      this.setState({ emailDetailsVisibility: true, currentEmail: mail })
    else this.setState({ emailDetailsVisibility: false })
  }

  handleNextMail = () => {
    let mails = this.state.mails
    if (mails.length) {
      let getIndex = mails.find(i => i.id === this.state.currentEmail.id)
      let currentEmail = mails[mails.indexOf(getIndex) + 1]

      if (currentEmail !== undefined) {
        this.setState({ currentEmail })
      }
    }
  }

  handlePreviousMail = () => {
    let mails = this.state.mails
    if (mails.length) {
      let getIndex = mails.find(i => i.id === this.state.currentEmail.id)
      let currentEmail = mails[mails.indexOf(getIndex) - 1]

      if (currentEmail !== undefined) {
        this.setState({ currentEmail })
      }
    }
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchMail(e.target.value)
  }

  render() {
    const { mails, currentFilter, value } = this.state
    const mailsArr = value.length ? this.props.email.filteredMails : mails
    const renderMails =
      mailsArr.length > 0 ? (
        mailsArr.map(mail => {
          return (
            <Media
              tag="li"
              key={mail.id}
              className={mail.unread === false ? "mail-read" : "mail-unread"}
              onClick={() => {
                this.handleEmailDetails("open", mail)
              }}
            >
              <Media className="pr-50" tag="div" left>
                <div className="avatar">
                  <Media object src={mail.img} />
                </div>
                <div className="user-action">
                  <Checkbox
                    color="primary"
                    className="user-checkbox"
                    icon={<Check className="vx-icon" size={12} />}
                    label={""}
                    checked={this.props.email.selectedEmails.includes(mail.id)}
                    size="sm"
                    onClick={e => {
                      this.props.selectMail(mail.id)
                      e.stopPropagation()
                    }}
                    onChange={e => e.stopPropagation()}
                  />
                  <div className="favorite">
                    <Star
                      size={18}
                      fill={mail.isStarred ? "#FF9F43" : "transparent"}
                      stroke={mail.isStarred ? "#FF9F43" : "#626262"}
                      onClick={e => {
                        this.props.StarEmail(mail.id)
                        e.stopPropagation()
                      }}
                    />
                  </div>
                </div>
              </Media>
              <Media body>
                <div className="user-details flex-wrap">
                  <div className="mail-items">
                    <h5 className="text-bold-600 mb-25 ">{mail.sender_name}</h5>
                    <span className="text-truncate">{mail.subject}</span>
                  </div>
                  <div className="mail-meta">
                    <span className="float-right">
                      {Array.isArray(mail.labels) ? (
                        <React.Fragment>
                          {mail.labels.map(label => {
                            return (
                              <span
                                className={`bullet bullet-${
                                  label === "important"
                                    ? "warning"
                                    : label === "personal"
                                    ? "success"
                                    : label === "private"
                                    ? "danger"
                                    : "primary"
                                } bullet-sm d-none d-md-inline-block mr-1`}
                                key={label}
                              />
                            )
                          })}
                        </React.Fragment>
                      ) : (
                        <span
                          className={`bullet ${mail.labels} bullet-sm mr-1`}
                        />
                      )}
                      <span className="mail-date">{mail.day}</span>
                    </span>
                  </div>
                </div>
                <div className="mail-message">
                  <p className="list-group-item-text truncate mb-0">
                    {mail.message}
                  </p>
                </div>
              </Media>
            </Media>
          )
        })
      ) : (
        <div className="no-results show">
          <h5>No Items Found</h5>
        </div>
      )

    return (
      <div className="content-right">
        <div className="email-app-area">
          <div className="email-app-list-wrapper">
            <div className="email-app-list">
              <div className="app-fixed-search">
                <div
                  className="d-lg-none sidebar-toggle"
                  onClick={() => this.props.mainSidebar(true)}
                >
                  <Menu size={24} />
                </div>
                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                  <Input
                    placeholder="Search Emails"
                    onChange={e => {
                      this.handleOnChange(e)
                    }}
                    value={value}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </div>
              <div className="app-action">
                <div className="action-left">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Select All"
                    checked={
                      this.props.email.selectedEmails.length ? true : false
                    }
                    onChange={e => e.stopPropagation()}
                    onClick={e => {
                      e.target.checked
                        ? this.props.selectAllMails()
                        : this.props.deselectAllMails()
                    }}
                  />
                </div>
                <div className="action-right">
                  <ul className="list-inline m-0">
                    <li className="list-inline-item">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="div">
                          <Folder size={22} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            onClick={() => {
                              if (currentFilter === "inbox")
                                this.props.moveMail("draft")
                              else this.props.moveMail("inbox")
                            }}
                          >
                            <Edit2 size={18} className="mr-50" />
                            <span className="align-middle font-medium-1">
                              {currentFilter === "inbox" ? "Draft" : "Inbox"}
                            </span>
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              this.props.moveMail("spam")
                            }}
                          >
                            <Info size={18} className="mr-50" />
                            <span className="align-middle font-medium-1">
                              Spam
                            </span>
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              this.props.moveMail("trash")
                            }}
                          >
                            <Trash size={18} className="mr-50" />
                            <span className="align-middle font-medium-1">
                              Trash
                            </span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="list-inline-item">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="div">
                          <Tag size={22} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            className="font-medium-1"
                            onClick={() => this.props.setLabel("personal")}
                          >
                            <span className="bullet bullet-success bullet-sm mr-1" />
                            <span className="align-middle">Personal</span>
                          </DropdownItem>
                          <DropdownItem
                            className="font-medium-1"
                            onClick={() => this.props.setLabel("company")}
                          >
                            <span className="bullet bullet-primary bullet-sm mr-1" />
                            <span className="align-middle">Company</span>
                          </DropdownItem>
                          <DropdownItem
                            className="font-medium-1"
                            onClick={() => this.props.setLabel("important")}
                          >
                            <span className="bullet bullet-warning bullet-sm mr-1" />
                            <span className="align-middle">Important</span>
                          </DropdownItem>
                          <DropdownItem
                            className="font-medium-1"
                            onClick={() => this.props.setLabel("private")}
                          >
                            <span className="bullet bullet-danger bullet-sm mr-1" />
                            <span className="align-middle">Private</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li
                      className="list-inline-item mail-unread"
                      onClick={() => this.props.unreadMails(true)}
                    >
                      <span className="action-icon">
                        <Mail size={22} />
                      </span>
                    </li>
                    <li
                      className="list-inline-item mail-delete"
                      onClick={() => {
                        this.props.moveMail("trash")
                      }}
                    >
                      <span className="action-icon">
                        <Trash size={22} />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <PerfectScrollbar
                className="email-user-list list-group"
                options={{
                  wheelPropagation: false
                }}
              >
                <ul className="users-list-wrapper media-list">{renderMails}</ul>
              </PerfectScrollbar>
            </div>
          </div>
          <EmailDetails
            handleEmailDetails={this.handleEmailDetails}
            currentStatus={this.state.emailDetailsVisibility}
            currentEmail={this.state.currentEmail}
            toggleStarred={this.props.StarEmail}
            setLabel={this.props.setLabel}
            unreadMails={this.props.unreadMails}
            currentParam={this.props.routerProps.match.params}
            moveMail={this.props.moveMail}
            handleNextMail={this.handleNextMail}
            handlePreviousMail={this.handlePreviousMail}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    email: state.emailApp.mails,
    starred: state.emailApp.starred
  }
}
export default connect(mapStateToProps, {
  getEmails,
  StarEmail,
  searchMail,
  moveMail,
  selectMail,
  selectAllMails,
  deselectAllMails,
  unreadMails,
  setLabel
})(EmailList)
