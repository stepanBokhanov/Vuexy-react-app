import React from "react"
import {
  Table,
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
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { tableContextual } from "./TableSourceCode"

class TableContextual extends React.Component {
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
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Contextual</CardTitle>
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
            <p>
              Use class <code>.table-*</code> with tr tag for contextual table
              rows.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-active">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="table-primary">
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr className="table-info">
                      <th scope="row">4</th>
                      <td>Adam</td>
                      <td>the adam</td>
                      <td>@adam</td>
                    </tr>
                    <tr className="table-danger">
                      <th scope="row">5</th>
                      <td>Jennifer</td>
                      <td>the jennifer</td>
                      <td>@instagram</td>
                    </tr>
                    <tr className="table-warning">
                      <th scope="row">6</th>
                      <td>Rick</td>
                      <td>the rick</td>
                      <td>@facebook</td>
                    </tr>
                    <tr className="table-light">
                      <th scope="row">7</th>
                      <td>Ellie</td>
                      <td>the ellie</td>
                      <td>@twitter</td>
                    </tr>
                    <tr className="table-dark">
                      <th scope="row">8</th>
                      <td>Lana</td>
                      <td>the lana</td>
                      <td>@instagram</td>
                    </tr>
                  </tbody>
                </Table>
              </TabPane>
               <TabPane className="component-code" tabId="2">{tableContextual}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TableContextual
