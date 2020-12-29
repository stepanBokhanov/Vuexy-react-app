import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { inputGroupBasic } from "./InputGroupSourceCode"
class InputGroupBasic extends React.Component {
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
          <CardTitle>Basic Input Groups</CardTitle>
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
                <Col lg="4" md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                      <Input placeholder="Input Group to left" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" md="12">
                  <FormGroup>
                    <InputGroup>
                      <Input placeholder="Input Group to right" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>@example.com</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="4" md="12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input
                        placeholder="On both sides"
                        min={0}
                        max={100}
                        type="number"
                        step="1"
                      />
                      <InputGroupAddon addonType="append">.00</InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
             <TabPane className="component-code" tabId="2">{inputGroupBasic}</TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}
export default InputGroupBasic
