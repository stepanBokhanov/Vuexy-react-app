import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Progress,
  UncontrolledTooltip
} from "reactstrap"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import person2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import person3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import person4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import person5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import person6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import person7 from "../../../assets/img/portrait/small/avatar-s-7.jpg"
class Polls extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Polls</CardTitle>
        </CardHeader>
        <CardBody>
          <h6>Who is the best actor in Marvel Cinematic Universe?</h6>
          <div className="polls-info mt-1">
            <div className="d-flex justify-content-between">
              <Radio label="RDJ" name="pollsRadio" />
              <div>21%</div>
            </div>
            <Progress className="my-50" value="21" />
            <ul className="list-unstyled users-list m-0 d-flex">
              <li className="avatar pull-up">
                <img
                  src={person1}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar103"
                />
                <UncontrolledTooltip placement="bottom" target="avatar103">
                  Lai Lewandowski
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person2}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar104"
                />
                <UncontrolledTooltip placement="bottom" target="avatar104">
                  Elicia Rieske
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person3}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar105"
                />
                <UncontrolledTooltip placement="bottom" target="avatar105">
                  Alberto Glotzbach
                </UncontrolledTooltip>
              </li>
            </ul>
            <div className="d-flex justify-content-between mt-1">
              <Radio label="Tom Hiddleston" name="pollsRadio" />
              <div>25%</div>
            </div>
            <Progress className="my-50" value="25" />
            <ul className="list-unstyled users-list m-0 d-flex">
              <li className="avatar pull-up">
                <img
                  src={person1}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar130"
                />
                <UncontrolledTooltip placement="bottom" target="avatar130">
                  Lai Lewandowski
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person2}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar140"
                />
                <UncontrolledTooltip placement="bottom" target="avatar140">
                  Elicia Rieske
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person3}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar150"
                />
                <UncontrolledTooltip placement="bottom" target="avatar150">
                  Alberto Glotzbach
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person4}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar160"
                />
                <UncontrolledTooltip placement="bottom" target="avatar160">
                  George Nordic
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person5}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar170"
                />
                <UncontrolledTooltip placement="bottom" target="avatar170">
                  Vinnie Mostowy
                </UncontrolledTooltip>
              </li>
            </ul>
            <div className="d-flex justify-content-between mt-1">
              <Radio label="Chris Hemsworth" name="pollsRadio" />
              <div>18%</div>
            </div>
            <Progress className="my-50" value="18" />
            <ul className="list-unstyled users-list m-0 d-flex">
              <li className="avatar pull-up">
                <img
                  src={person1}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar013"
                />
                <UncontrolledTooltip placement="bottom" target="avatar013">
                  Lai Lewandowski
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person6}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar014"
                />
                <UncontrolledTooltip placement="bottom" target="avatar014">
                  Elicia Rieske
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person7}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar015"
                />
                <UncontrolledTooltip placement="bottom" target="avatar015">
                  Alberto Glotzbach
                </UncontrolledTooltip>
              </li>
            </ul>
            <div className="d-flex justify-content-between mt-1">
              <Radio label="Chris Evans" name="pollsRadio" />
              <div>20%</div>
            </div>
            <Progress className="my-50" value="20" />
            <ul className="list-unstyled users-list m-0 d-flex">
              <li className="avatar pull-up">
                <img
                  src={person5}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar0130"
                />
                <UncontrolledTooltip placement="bottom" target="avatar0130">
                  Lai Lewandowski
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person2}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar0140"
                />
                <UncontrolledTooltip placement="bottom" target="avatar0140">
                  Elicia Rieske
                </UncontrolledTooltip>
              </li>
              <li className="avatar pull-up">
                <img
                  src={person7}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatar0150"
                />
                <UncontrolledTooltip placement="bottom" target="avatar0150">
                  Alberto Glotzbach
                </UncontrolledTooltip>
              </li>
            </ul>
            <div className="d-flex justify-content-between mt-1">
              <Radio label="Mark Ruffalo" name="pollsRadio" />
              <div>16%</div>
            </div>
            <Progress className="my-50" value="16" />
            <ul className="list-unstyled users-list m-0 d-flex">
              <li className="avatar pull-up">
                <img
                  src={person5}
                  alt="avatar"
                  height="30"
                  width="30"
                  id="avatarPoll"
                />
                <UncontrolledTooltip placement="bottom" target="avatarPoll">
                  Lai Lewandowski
                </UncontrolledTooltip>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Polls
