import React from "react"
// eslint-disable-next-line
import prism from "prismjs"

export const inputGroupBasic = (
  <pre>
    <code className="language-javascript">
      {`
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col
} from "reactstrap"

  class InputGroupBasic extends React.Component {
    render() {
      return (
        <Row>
          <Col lg="4" md="12">
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="Input Group to left" />
            </InputGroup>
          </Col>
          <Col lg="4" md="12">
            <InputGroup>
              <Input placeholder="Input Group to right" />
              <InputGroupAddon addonType="append">
                <InputGroupText>@example.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col lg="4" md="12">
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
          </Col>
        </Row>
      )
    }
  }
  export default InputGroupBasic
  `}
    </code>
  </pre>
)

export const inputGroupCBRadio = (
  <pre>
    <code className="language-javascript">
      {`
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col
} from "reactstrap"
import { Check } from "react-feather"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"

  class InputGroupCBRadio extends React.Component {
    render() {
      return (
        <Row>
          <Col lg="6" md="12">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={12} />}
                    defaultChecked={false}
                    size="vx-checkbox-sm"
                  />
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" />
            </InputGroup>
          </Col>
          <Col lg="6" md="12">
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
          </Col>
        </Row>
      )
    }
  }
  export default InputGroupCBRadio
  `}
    </code>
  </pre>
)

export const inputGroupButtons = (
  <pre>
    <code className="language-javascript">
      {`
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col,
  Button
} from "reactstrap"

  class InputGroupButtons extends React.Component {
    render() {
      return (
        <Row>
          <Col lg="6" md="12">
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <Button color="primary">Go</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col lg="6" md="12">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button color="primary">
                  <Search size={15} />
                </Button>
              </InputGroupAddon>
              <Input type="text" />
              <InputGroupAddon addonType="append">
                <Button color="primary">Search !</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      )
    }
  }
  export default InputGroupButtons
  `}
    </code>
  </pre>
)

export const inputGroupDropdowns = (
  <pre>
    <code className="language-javascript">
      {`
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col,
  Button,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

  class InputGroupDropdowns extends React.Component {
    render() {
      return (
        <Row>
          <Col lg="6" md="12">
            <InputGroup>
              <InputGroupButtonDropdown
                addonType="prepend"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropDown}
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
              <Input />
            </InputGroup>
          </Col>
          <Col lg="6" md="12">
            <InputGroup>
              <InputGroupButtonDropdown
                addonType="prepend"
                isOpen={this.state.dropdownIcon}
                toggle={this.toggleDropdownIcon}
              >
                <DropdownToggle color="primary" caret>
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
          </Col>
        </Row>
      )
    }
  }
  export default InputGroupDropdowns
  `}
    </code>
  </pre>
)

export const inputGroupSizes = (
  <pre>
    <code className="language-javascript">
      {`
import React from "react"
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col,
} from "reactstrap"

  class InputGroupSizes extends React.Component {
    render() {
      return (
        <Row>
          <Col sm="12" className="mb-2">
            <InputGroup size="lg">
              <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
              <Input />
            </InputGroup>
          </Col>
          <Col sm="12" className="mb-2">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                @default
              </InputGroupAddon>
              <Input />
            </InputGroup>
          </Col>
          <Col sm="12" className="mb-2">
            <InputGroup size="sm">
              <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
              <Input />
            </InputGroup>
          </Col>
        </Row>
      )
    }
  }
  export default InputGroupSizes
  `}
    </code>
  </pre>
)
