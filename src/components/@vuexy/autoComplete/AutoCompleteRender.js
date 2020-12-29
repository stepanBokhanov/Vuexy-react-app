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
import img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import img6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import { customRenderExample } from "./AutoCompleteSourceCode"

class AutoCompleteRender extends React.Component {
  state = {
    activeTab: "1",
    suggestions: [
      {
        name: "Jake Shelton",
        img: img1
      },
      {
        name: "Edith Baldwin",
        img: img2
      },
      {
        name: "Jennifer Wolfe",
        img: img3
      },
      {
        name: "Emily Washington",
        img: img4
      },
      {
        name: "Heather Green",
        img: img6
      },
      {
        name: "Brian Moore",
        img: img5
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
            <CardTitle>Custom Render</CardTitle>
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
                  filterKey="name"
                  placeholder="Type 'a'"
                  customRender={(
                    suggestion,
                    i,
                    filteredData,
                    activeSuggestion,
                    onSuggestionItemClick,
                    onSuggestionItemHover
                  ) => (
                    <li
                      className={classnames("suggestion-item", {
                        active:
                          filteredData.indexOf(suggestion) === activeSuggestion
                      })}
                      key={i}
                      onMouseEnter={() =>
                        onSuggestionItemHover(filteredData.indexOf(suggestion))
                      }
                      onClick={e => {
                        onSuggestionItemClick(null, e)
                      }}
                    >
                      <img
                        src={suggestion.img}
                        alt={suggestion.name}
                        height="32"
                        width="32"
                        className="mr-1"
                      />
                      <span>{suggestion.name}</span>
                    </li>
                  )}
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {customRenderExample}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AutoCompleteRender
