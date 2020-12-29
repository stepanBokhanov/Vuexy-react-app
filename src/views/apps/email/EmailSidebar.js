import React from "react"
import { FormGroup, Button, ListGroup, ListGroupItem } from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import { X, Edit, Mail, Send, Edit2, Star, Info, Trash } from "react-feather"
import { changeFilter } from "../../../redux/actions/email/index"
import { connect } from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../../../assets/scss/plugins/extensions/editor.scss"
class EmailSidebar extends React.Component {
  state = {
    modal: false
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={18} />
        </div>
        <div className="email-app-menu">
          <FormGroup className="form-group-compose text-center compose-btn">
            <Button.Ripple
              block
              className="my-2 btn-block"
              color="primary"
              onClick={() => {
                this.props.handleComposeSidebar("open")
                this.props.mainSidebar(false)
              }}
            >
              <Edit size={14} />
              <span className="align-middle ml-50">Compose</span>
            </Button.Ripple>
          </FormGroup>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false
            }}
          >
            <ListGroup className="list-group-messages font-medium-1">
              <ListGroupItem
                onClick={() => this.props.changeFilter("inbox")}
                active={ "/email/inbox" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer pt-0"
              >
                <Mail size={21} />
                <span className="align-middle ml-1">Inbox</span>
                <div className="badge badge-pill badge-primary mt-25 float-right">
                  <span className="align-middle">3</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("sent")}
                active={ "/email/sent" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer"
              >
                <Send size={21} />
                <span className="align-middle ml-1">Sent</span>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("draft")}
                active={ "/email/draft" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer"
              >
                <Edit2 size={21} />
                <span className="align-middle ml-1">Draft</span>
                <div className="badge badge-pill badge-warning mt-25 float-right">
                  <span className="align-middle">4</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => {
                  this.props.changeFilter("starred")
                }}
                active={ "/email/starred" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer"
              >
                <Star size={21} />
                <span className="align-middle ml-1">Starred</span>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("spam")}
                active={ "/email/spam" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer"
              >
                <Info size={21} />
                <span className="align-middle ml-1">Spam</span>
                <div className="badge badge-pill badge-danger mt-25 float-right">
                  <span className="align-middle">3</span>
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("trash")}
                active={ "/email/trash" === this.props.routerProps.location.pathname }
                className="border-0 cursor-pointer"
              >
                <Trash size={21} />
                <span className="align-middle ml-1">Trash</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h5 className="my-2 pt-25">Labels</h5>
            <ListGroup className="list-group-labels font-medium-1">
              <ListGroupItem
                className="border-0 d-flex align-items-center cursor-pointer"
                onClick={() => this.props.changeFilter("personal")}
                active={ "/email/personal" === this.props.routerProps.location.pathname }
              >
                <span className="bullet bullet-success bullet-bordered mr-1" />
                <span>Personal</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0 d-flex align-items-center cursor-pointer"
                onClick={() => this.props.changeFilter("company")}
                active={ "/email/company" === this.props.routerProps.location.pathname }
              >
                <span className="bullet bullet-primary bullet-bordered mr-1" />
                <span>Company</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0 d-flex align-items-center cursor-pointer"
                onClick={() => this.props.changeFilter("important")}
                active={ "/email/important" === this.props.routerProps.location.pathname }
              >
                <span className="bullet bullet-warning bullet-bordered mr-1" />
                <span>Important</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0 d-flex align-items-center cursor-pointer"
                onClick={() => this.props.changeFilter("private")}
                active={ "/email/private" === this.props.routerProps.location.pathname }
              >
                <span className="bullet bullet-danger bullet-bordered mr-1" />
                <span>Private</span>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { changeFilter })(EmailSidebar)
