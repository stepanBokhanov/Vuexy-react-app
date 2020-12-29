import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Progress
} from "reactstrap"
import avatar1 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import avatar2 from "../../../assets/img/portrait/small/avatar-s-7.jpg"
import avatar3 from "../../../assets/img/portrait/small/avatar-s-10.jpg"
import avatar4 from "../../../assets/img/portrait/small/avatar-s-8.jpg"
import avatar5 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import avatar6 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import avatar7 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import avatar8 from "../../../assets/img/portrait/small/avatar-s-4.jpg"

class DispatchedOrders extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dispatched Orders</CardTitle>
        </CardHeader>
        <Table
          responsive
          className="dashboard-table table-hover-animation mb-0 mt-1"
        >
          <thead>
            <tr>
              <th>ORDER</th>
              <th>STATUS</th>
              <th>OPERATORS</th>
              <th>LOCATION</th>
              <th>DISTANCE</th>
              <th>START DATE</th>
              <th>EST DEL. DT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#879985</td>
              <td>
                <div
                  className="bg-success"
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px"
                  }}
                />
                <span>Moving</span>
              </td>
              <td className="p-1">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={avatar1}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar1"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar1">
                      Vinnie Mostowy
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar2}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar2"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar2">
                      Elicia Rieske
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar3}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar3"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar3">
                      Julee Rossignol
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar4}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar4"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar4">
                      Darcey Nooner
                    </UncontrolledTooltip>
                  </li>
                </ul>
              </td>
              <td>Anniston, Alabama</td>
              <td>
                <span>130 km</span>
                <Progress className="mb-0 mt-1" color="success" value="80" />
              </td>
              <td>14:58 26/07/2018</td>
              <td>28/07/2018</td>
            </tr>
            <tr>
              <td>#156897</td>
              <td>
                <div
                  className="bg-warning"
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px"
                  }}
                />
                <span>Pending</span>
              </td>
              <td className="p-1">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={avatar5}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar5"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar5">
                      Trina Lynes
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar6}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar6"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar6">
                      Lilian Nenez
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar7}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar7"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar7">
                      Alberto Glotzbach
                    </UncontrolledTooltip>
                  </li>
                </ul>
              </td>
              <td>Cordova, Alaska </td>
              <td>
                <span>234 km</span>
                <Progress className="mb-0 mt-1" color="warning" value="60" />
              </td>
              <td>14:58 26/07/2018 </td>
              <td>28/07/2018</td>
            </tr>
            <tr>
              <td>#568975</td>
              <td>
                <div
                  className="bg-success"
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px"
                  }}
                />
                <span>Moving</span>
              </td>
              <td className="p-1">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={avatar8}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar8"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar8">
                      Lai Lewandowski
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar1}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar12"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar12">
                      Elicia Rieske
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar2}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar9"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar9">
                      Darcey Nooner
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar3}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar10"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar10">
                      Darcey Nooner
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar4}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar11"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar11">
                      Darcey Nooner
                    </UncontrolledTooltip>
                  </li>
                </ul>
              </td>
              <td>Florence, Alabama </td>
              <td>
                <span>168 km</span>
                <Progress className="mb-0 mt-1" color="success" value="70" />
              </td>
              <td>14:58 26/07/2018 </td>
              <td>28/07/2018</td>
            </tr>
            <tr>
              <td>#245689</td>
              <td>
                <div
                  className="bg-danger"
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px"
                  }}
                />
                <span>Canceled</span>
              </td>
              <td className="p-1">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={avatar1}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar13"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar13">
                      Lai Lewandowski
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={avatar2}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar14"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar14">
                      Elicia Rieske
                    </UncontrolledTooltip>
                  </li>
                </ul>
              </td>
              <td>Clifton, Arizona </td>
              <td>
                <span>125 km</span>
                <Progress className="mb-0 mt-1" color="danger" value="90" />
              </td>
              <td>14:58 26/07/2018 </td>
              <td>28/07/2018</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    )
  }
}
export default DispatchedOrders
