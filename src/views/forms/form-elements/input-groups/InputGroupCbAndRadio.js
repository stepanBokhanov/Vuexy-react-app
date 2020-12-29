import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
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
  NavLink,
  FormGroup
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, Check } from "react-feather"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
import { inputGroupCBRadio } from "./InputGroupSourceCode"

class InputGroupCbAndRadio extends React.Component {
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
          <CardTitle>Input Group Checkbox And Radio</CardTitle>
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
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={12} />}
                            defaultChecked={false}
                            size="sm"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="6" md="12">
                  <FormGroup>
                    <InputGroup>
                      <Input type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <Radio
                            defaultChecked={false}
                            name="exampleRadio"
                            rxSize="vx-radio-sm"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="component-code" tabId="2">
              {inputGroupCBRadio}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}
export default InputGroupCbAndRadio
