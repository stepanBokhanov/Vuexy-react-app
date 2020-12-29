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
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup
} from "reactstrap"
import { inputGroupSizes } from "./InputGroupSourceCode"
import { Eye, Code } from "react-feather"
import classnames from "classnames"

class InputGroupSizes extends React.Component {
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
          <CardTitle>Input Groups Sizes</CardTitle>
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
                <Col sm="12" className="mb-2">
                  <FormGroup>
                    <InputGroup size="lg">
                      <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-2">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        @default
                      </InputGroupAddon>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-2">
                  <FormGroup>
                    <InputGroup size="sm">
                      <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
             <TabPane className="component-code" tabId="2">{inputGroupSizes}</TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}
export default InputGroupSizes
