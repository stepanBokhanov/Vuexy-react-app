import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup
} from "reactstrap"
import { Search, Eye, Code } from "react-feather"
import classnames from "classnames"
import { inputGroupButtons } from "./InputGroupSourceCode"

class InputGroupButtons extends React.Component {
  state = {
    activeTab: "1"
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
          <CardTitle>Input Group Buttons</CardTitle>
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
                      <Input />
                      <InputGroupAddon addonType="append">
                        <Button.Ripple color="primary">Go</Button.Ripple>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="6" md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button.Ripple color="primary">
                          <Search size={15} />
                        </Button.Ripple>
                      </InputGroupAddon>
                      <Input type="text" />
                      <InputGroupAddon addonType="append">
                        <Button.Ripple color="primary">Search !</Button.Ripple>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="component-code" tabId="2">
              {inputGroupButtons}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}
export default InputGroupButtons
