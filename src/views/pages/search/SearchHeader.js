import React from "react"
import {
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import { Search } from "react-feather"

class SearchHeader extends React.Component {
  state = {
    value: "Modern Admin"
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-bar">
          <Form>
            <FormGroup className="position-relative has-icon-left">
              <Input
                type="text"
                className="round"
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
              />
              <div className="form-control-position px-1">
                <Search size={15} />
              </div>
            </FormGroup>
          </Form>
        </div>
        <Row className="search-menu">
          <Col md="8">
            <div className="search-filter d-inline-block round mr-1 mb-1">
              All
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              Images
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              Video
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              Maps
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              News
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              <UncontrolledDropdown>
                <DropdownToggle tag="div">More</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Shopping</DropdownItem>
                  <DropdownItem>Books</DropdownItem>
                  <DropdownItem>Flight</DropdownItem>
                  <DropdownItem>Finance</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
          <Col md="4" className="text-md-right text-left">
            <div className="search-filter d-inline-block round mr-1 mb-1">
              <UncontrolledDropdown>
                <DropdownToggle tag="div">Settings</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Search Settings</DropdownItem>
                  <DropdownItem>Langauge</DropdownItem>
                  <DropdownItem>Turn on SafeSearch</DropdownItem>
                  <DropdownItem>Hide Private Results</DropdownItem>
                  <DropdownItem>Advanced Search</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="search-filter d-inline-block round mr-1 mb-1">
              Tools
            </div>
          </Col>
        </Row>

        <Row className="search-result-info mt-2 mb-1">
          <Col sm="8">
            <p className="mt-1">Approx 84,00,00,000 results (0.35s)</p>
          </Col>
          <Col sm="4" className="text-sm-right">
            <div className="btn-group">
              <UncontrolledDropdown className="mr-1">
                <DropdownToggle className="cursor-pointer" caret tag="div">
                  Any Time
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Any Time</DropdownItem>
                  <DropdownItem>Past Hour</DropdownItem>
                  <DropdownItem>Past 24 Hours</DropdownItem>
                  <DropdownItem>Past Week</DropdownItem>
                  <DropdownItem>Past Month</DropdownItem>
                  <DropdownItem>Past Year</DropdownItem>
                  <DropdownItem>Custom Period</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
                <DropdownToggle className="cursor-pointer" tag="div" caret>
                  All Result
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>All Result</DropdownItem>
                  <DropdownItem>Verbatim</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default SearchHeader
