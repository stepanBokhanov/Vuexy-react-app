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
import { sectionExample } from "./AutoCompleteSourceCode"

class AutoCompleteSections extends React.Component {
  state = {
    activeTab: "1",
    suggestions: [
      {
        groupTitle: "1970s",
        data: [
          {
            title: "C"
          }
        ]
      },
      {
        groupTitle: "1980s",
        data: [
          {
            title: "C++"
          },
          {
            title: "Perl"
          }
        ]
      },
      {
        groupTitle: "1990s",
        data: [
          {
            title: "Haskell"
          },
          {
            title: "Python"
          },
          {
            title: "Java"
          },
          {
            title: "Javascript"
          },
          {
            title: "PHP"
          },
          {
            title: "Ruby"
          }
        ]
      },
      {
        groupTitle: "2000s",
        data: [
          {
            title: "C#"
          },
          {
            title: "Scala"
          },
          {
            title: "Clojure"
          },
          {
            title: "Go"
          }
        ]
      },
      {
        groupTitle: "2010s",
        data: [
          {
            title: "Elm"
          }
        ]
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
            <CardTitle>Sections</CardTitle>
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
                  filterHeaderKey="groupTitle"
                  grouped={true}
                  placeholder="Type 'c'"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {sectionExample}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AutoCompleteSections
