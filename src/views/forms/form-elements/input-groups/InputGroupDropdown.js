import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  Input,
  Row,
  Col,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup
} from "reactstrap"
import { Eye, Code, Edit } from "react-feather"
import classnames from "classnames"
import { inputGroupDropdowns } from "./InputGroupSourceCode"

class InputGroupDropdowns extends React.Component {
  state = {
    dropdownOpen: false,
    dropdownIcon: false,
    dropdownRight: false,
    activeTab: "1"
  }
  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  toggleDropdownIcon = () => {
    this.setState({
      dropdownIcon: !this.state.dropdownIcon
    })
  }
  toggleDropDownRight = () => {
    this.setState({
      dropdownRight: !this.state.dropdownRight
    })
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }
  render() {
    return (
      <Card>
        <CardHeader className="mb-2">
          <CardTitle>Input Group Dropdown</CardTitle>
          <div className="views">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1")
                  }}
                >
                  <Eye size={15} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleTab("2")
                  }}
                >
                  <Code size={15} />
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col lg="6" md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupButtonDropdown
                        addonType="prepend"
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropDown}
                      >
                        <DropdownToggle color="primary">Action</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action 1</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </InputGroupButtonDropdown>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="6" md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupButtonDropdown
                        addonType="prepend"
                        isOpen={this.state.dropdownIcon}
                        toggle={this.toggleDropdownIcon}
                      >
                        <DropdownToggle color="primary">
                          <Edit size={15} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action 1</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </InputGroupButtonDropdown>
                      <Input />
                      <InputGroupButtonDropdown
                        addonType="append"
                        isOpen={this.state.dropdownRight}
                        toggle={this.toggleDropDownRight}
                      >
                        <DropdownToggle color="primary" caret>
                          Action
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action 1</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </InputGroupButtonDropdown>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
             <TabPane className="component-code" tabId="2">{inputGroupDropdowns}</TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}
export default InputGroupDropdowns
