import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import { Eye, Code } from "react-feather"
import classnames from "classnames"
import axios from "axios"
import AutoComplete from "./AutoCompleteComponent"
import { ajaxExample } from "./AutoCompleteSourceCode"

class AutoCompleteAjax extends React.Component {
  state = {
    activeTab: "1",
    suggestions: []
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  componentDidMount() {
    axios
      .get("/api/autocomplete/data")
      .then(response =>
        this.setState({ suggestions: response.data.autoComplete })
      )
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Ajax</CardTitle>
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
                <AutoComplete
                  suggestions={this.state.suggestions}
                  className="form-control"
                  filterKey="title"
                  suggestionLimit={4}
                  placeholder = "Search for any of the top 250 IMDB movies"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {ajaxExample}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AutoCompleteAjax
