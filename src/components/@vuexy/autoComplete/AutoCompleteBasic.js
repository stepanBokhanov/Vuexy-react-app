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
import AutoComplete from "./AutoCompleteComponent"
import { basicExample } from "./AutoCompleteSourceCode"

class AutoCompleteBasic extends React.Component {
  state = {
    activeTab: "1",
    suggestions: [
      {
        title: "React.js"
      },
      {
        title: "Angular.js"
      },
      {
        title: "Javascript"
      },
      {
        title: "Vue.js"
      },
      {
        title: "HTML"
      },
      {
        title: "CSS"
      },
      {
        title: "SCSS"
      },
      {
        title: "PHP"
      },
      {
        title: "Laravel"
      }
    ]
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
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
                  placeholder="Type 'a'"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {basicExample}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AutoCompleteBasic
