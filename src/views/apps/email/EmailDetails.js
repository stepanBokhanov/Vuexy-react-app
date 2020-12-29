import React from "react"
import {
  ArrowLeft,
  Star,
  Folder,
  Tag,
  ChevronsLeft,
  ChevronsRight,
  Edit2,
  Info,
  Trash,
  Mail,
  ChevronDown,
  Paperclip
} from "react-feather"
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"

class EmailDetails extends React.Component {
  state = {
    showReplies: false
  }

  handleReplies = bool => {
    this.setState({
      showReplies: bool
    })
  }

  renderReplies = replies => {
    let reply
    if (replies && replies.length > 0) {
      reply = replies
        .map(reply => {
          return (
            <Card key={reply.id} className="px-1">
              <CardHeader className="email-detail-head ml-75">
                <div className="user-details d-flex justify-content-between align-items-center flex-wrap">
                  <div className="avatar mr-75">
                    <img
                      src={reply.img}
                      alt="User Img"
                      height="61"
                      width="61"
                    />
                  </div>
                  <div className="mail-items">
                    <h4 className="mb-0">{reply.sender_name}</h4>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="div"
                        className="font-small-3 cursor-pointer"
                      >
                        <span className="align-middle">{reply.sender}</span>
                        <ChevronDown size={10} />
                      </DropdownToggle>
                      <DropdownMenu tag="ul" right className="p-50">
                        <DropdownItem tag="li" className="px-25">
                          From : <strong> {reply.sender} </strong>
                        </DropdownItem>
                        <DropdownItem tag="li" className="px-25">
                          to :{" "}
                          <strong className="text-truncate"> {reply.to}</strong>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
                <div className="mail-meta-item">
                  <div className="mail-time mb-1">{reply.time}</div>
                  <div className="mail-date mb-1">
                    {reply.day} {reply.year}
                  </div>
                </div>
              </CardHeader>
              <CardBody className="mail-message-wrapper pt-2 mb-0">
                <div className="mail-message">
                  <p>{reply.message}</p>
                </div>
                <div className="mail-attachements d-flex">
                  <Paperclip size={22} />
                  <span className="ml-50">Attachements</span>
                </div>
              </CardBody>
              {reply.attachments ? (
                <React.Fragment>
                  <div className="mail-files py-2">
                    <div className="chip chip-primary">
                      <div className="chip-body py-50">
                        <span className="chip-text">{reply.attachments}</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </Card>
          )
        })
        .reverse()
    } else {
      return null
    }
    return reply
  }
  render() {
    let currentMail = this.props.currentEmail
    return (
      <div
        className={`email-app-details ${
          this.props.currentStatus ? "show" : ""
        }`}
      >
        <div className="email-detail-header">
          <div className="email-header-left d-flex align-items-center mb-1">
            <ArrowLeft
              size={20}
              className="mr-1 cursor-pointer"
              onClick={() => {
                this.props.handleEmailDetails("close")
                this.handleReplies(false)
              }}
            />
            <h4 className="mb-0">{currentMail.subject}</h4>
          </div>
          <div className="email-header-right mb-1 ml-2 pl-1">
            <ul className="list-inline m-0">
              <li className="list-inline-item mr-1">
                <span
                  className="action-icon favorite"
                  onClick={() => this.props.toggleStarred(currentMail.id)}
                >
                  <Star
                    size={22}
                    fill={currentMail.isStarred ? "#FF9F43" : "transparent"}
                    stroke={currentMail.isStarred ? "#FF9F43" : "#626262"}
                  />
                </span>
              </li>
              <li className="list-inline-item mr-1">
                <UncontrolledDropdown className="folder-droppdown">
                  <DropdownToggle tag="div">
                    <Folder size={22} />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" right>
                    <DropdownItem
                      tag="li"
                      className={`${
                        "inbox" === this.props.currentParam.filter
                          ? "d-none"
                          : ""
                      }`}
                      onClick={() => {
                        this.props.handleEmailDetails("close")
                        this.props.moveMail("inbox", currentMail.id)
                      }}
                    >
                      <Mail size={18} className="mr-50" />
                      <span className="align-middle font-medium-1">Inbox</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className={`${
                        "draft" === this.props.currentParam.filter
                          ? "d-none"
                          : ""
                      }`}
                      onClick={() => {
                        this.props.handleEmailDetails("close")
                        this.props.moveMail("draft", currentMail.id)
                      }}
                    >
                      <Edit2 size={18} className="mr-50" />
                      <span className="align-middle font-medium-1">Draft</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className={`${
                        "spam" === this.props.currentParam.filter
                          ? "d-none"
                          : ""
                      }`}
                      onClick={() => {
                        this.props.handleEmailDetails("close")
                        this.props.moveMail("spam", currentMail.id)
                      }}
                    >
                      <Info size={18} className="mr-50" />
                      <span className="align-middle font-medium-1">Spam</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className={`${
                        "trash" === this.props.currentParam.filter
                          ? "d-none"
                          : ""
                      }`}
                      onClick={() => {
                        this.props.handleEmailDetails("close")
                        this.props.moveMail("trash", currentMail.id)
                      }}
                    >
                      <Trash size={18} className="mr-50" />
                      <span className="align-middle font-medium-1">Trash</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li className="list-inline-item mr-1">
                <UncontrolledDropdown className="filter-droppdown">
                  <DropdownToggle tag="div">
                    <Tag size={22} />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" right>
                    <DropdownItem
                      tag="li"
                      className="font-medium-1"
                      onClick={() => this.props.setLabel("personal")}
                    >
                      <span className="bullet bullet-success bullet-sm mr-1" />
                      <span className="align-middle">Personal</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className="font-medium-1"
                      onClick={() => this.props.setLabel("company")}
                    >
                      <span className="bullet bullet-primary bullet-sm mr-1" />
                      <span className="align-middle">Company</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className="font-medium-1"
                      onClick={() => this.props.setLabel("important")}
                    >
                      <span className="bullet bullet-warning bullet-sm mr-1" />
                      <span className="align-middle">Important</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                      className="font-medium-1 w-100"
                      onClick={() => this.props.setLabel("private")}
                    >
                      <span className="bullet bullet-danger bullet-sm mr-1" />
                      <span className="align-middle">Private</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li
                className="list-inline-item mr-1 mail-unread"
                onClick={() => {
                  this.props.handleEmailDetails("close")
                  this.props.unreadMails(true)
                }}
              >
                <span className="action-icon">
                  <Mail size={22} />
                </span>
              </li>
              <li className="list-inline-item mr-1 mail-delete">
                <span className="action-icon">
                  <Trash size={22} />
                </span>
              </li>
              <li
                className="list-inline-item mr-1"
                onClick={this.props.handlePreviousMail}
              >
                <span className="action-icon">
                  <ChevronsLeft size={22} />
                </span>
              </li>
              <li
                className="list-inline-item"
                onClick={this.props.handleNextMail}
              >
                <span className="action-icon">
                  <ChevronsRight size={22} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <PerfectScrollbar
          className="email-scroll-area"
          options={{
            wheelPropagation: false
          }}
        >
          <Row>
            <Col sm="12">
              <div className="email-label ml-2 my-2 pl-1">
                {Array.isArray(currentMail.labels) ? (
                  currentMail.labels.map(item => {
                    return (
                      <React.Fragment key={item}>
                        <span
                          className={`mr-50 bullet bullet-${
                            item === "important"
                              ? "warning"
                              : item === "personal"
                              ? "success"
                              : item === "private"
                              ? "danger"
                              : "primary"
                          } bullet-sm`}
                        />
                        <small className="mail-label mr-1 text-capitalize">
                          {item}
                        </small>
                      </React.Fragment>
                    )
                  })
                ) : (
                  <React.Fragment>
                    <span
                      className={`mr-50 bullet bullet-${
                        currentMail.labels === "important"
                          ? "warning"
                          : currentMail.labels === "personal"
                          ? "success"
                          : currentMail.labels === "private"
                          ? "danger"
                          : "primary"
                      } bullet-sm`}
                    />
                    <small className="mail-label text-capitalize">
                      {currentMail.labels}
                    </small>
                  </React.Fragment>
                )}
              </div>
            </Col>
            <Col
              sm="12"
              className={`mb-1 ${
                currentMail.replies && currentMail.replies.length < 1
                  ? "d-none"
                  : ""
              }`}
            >
              <span
                className={`text-primary text-bold-500 ml-2 pl-1 cursor-pointer
                  ${this.state.showReplies ? "d-none" : "d-block"}
                `}
                onClick={() => this.handleReplies(true)}
              >
                {`${
                  currentMail.replies && currentMail.replies.length > 1
                    ? currentMail.replies.length
                    : ""
                } Earlier Messages`}
              </span>
              <div
                className={`earlier-replies ${
                  this.state.showReplies === false ? "d-none" : "d-block"
                }`}
              >
                {this.renderReplies(currentMail.replies)}
              </div>
            </Col>
            <Col sm="12">
              <Card className="px-1">
                <CardHeader className="email-detail-head ml-75">
                  <div className="user-details d-flex justify-content-between align-items-center flex-wrap">
                    <div className="avatar mr-75">
                      <img
                        src={currentMail.img}
                        alt="User Img"
                        height="61"
                        width="61"
                      />
                    </div>
                    <div className="mail-items">
                      <h4 className="mb-0">{currentMail.sender_name}</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          tag="div"
                          className="font-small-3 cursor-pointer"
                        >
                          <span className="align-middle">
                            {currentMail.sender}
                          </span>
                          <ChevronDown size={10} />
                        </DropdownToggle>
                        <DropdownMenu tag="ul" right className="p-50">
                          <DropdownItem tag="li" className="px-25">
                            From : <strong> {currentMail.sender} </strong>
                          </DropdownItem>
                          <DropdownItem tag="li" className="px-25">
                            to :{" "}
                            <strong className="text-truncate">
                              {" "}
                              {currentMail.to}
                            </strong>
                          </DropdownItem>
                          <DropdownItem tag="li" className="px-25">
                            Date :{" "}
                            <strong className="text-truncate">
                              {" "}
                              {currentMail.day} {currentMail.year}
                            </strong>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                  <div className="mail-meta-item">
                    <div className="mail-time mb-1">{currentMail.time}</div>
                    <div className="mail-date mb-1">
                      {currentMail.day} {currentMail.year}
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="mail-message-wrapper pt-2 mb-0">
                  <div className="mail-message">
                    <p>{currentMail.message}</p>
                    <div className="mail-attachements d-flex">
                      <Paperclip size={22} />
                      <span className="ml-50">Attachements</span>
                    </div>
                  </div>
                </CardBody>
                {currentMail.attachments ? (
                  <React.Fragment>
                    <div className="mail-files py-2">
                      <div className="chip chip-primary">
                        <div className="chip-body py-50">
                          <span className="chip-text">
                            {currentMail.attachments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardBody className="pt-2">
                  <div className="d-flex justify-content-between">
                    <span className="font-medium-1">
                      Click here to{" "}
                      <span className="primary cursor-pointer">
                        <strong>Reply</strong>
                      </span>{" "}
                      or{" "}
                      <span className="primary  cursor-pointer">
                        <strong>Forward</strong>
                      </span>
                    </span>
                    <Paperclip size={20} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </PerfectScrollbar>
      </div>
    )
  }
}

export default EmailDetails
