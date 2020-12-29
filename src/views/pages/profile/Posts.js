import React from "react"
import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Input,
  Label,
  Button
} from "reactstrap"
import { Heart, MessageSquare } from "react-feather"
import profileImg from "../../../assets/img/profile/user-uploads/user-01.jpg"
import postImg1 from "../../../assets/img/profile/post-media/2.jpg"
import postImg2 from "../../../assets/img/profile/post-media/25.jpg"
import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import person2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import person3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import person4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import person5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import person6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import person7 from "../../../assets/img/portrait/small/avatar-s-7.jpg"

class Posts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-1">
                <img
                  src={profileImg}
                  alt="avtar img holder"
                  height="45"
                  width="45"
                />
              </div>
              <div className="user-page-info">
                <p className="mb-0">Leeanna Alvord</p>
                <span className="font-small-2">12 Dec 2018 at 1:16 AM</span>
              </div>
              <div className="ml-auto user-like">
                <Heart fill="#EA5455" stroke="#EA5455" />
              </div>
            </div>
            <p>
              I love jujubes wafer pie ice cream tiramisu. Chocolate I love
              pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop
              topping I love lemon drops sweet roll bonbon. Brownie donut icing.
            </p>
            <img
              src={postImg1}
              alt="postImg1"
              className="img-fluid rounded-sm mb-2"
            />
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="d-flex align-items-center">
                <Heart size={16} className="mr-50" />
                145
              </div>
              <div className="ml-2">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={person1}
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
                      src={person2}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar14"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar14">
                      Elicia Rieske
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person3}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar15"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar15">
                      Alberto Glotzbach
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person4}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar16"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar16">
                      George Nordic
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person5}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar17"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar17">
                      Vinnie Mostowy
                    </UncontrolledTooltip>
                  </li>
                  <li className="d-flex align-items-center pl-50">
                    <span className="align-middle">+140 more</span>
                  </li>
                </ul>
              </div>
              <p className="ml-auto">
                <MessageSquare size={16} className="mr-50" />
                77
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={person6} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Kitty Allanson</h6>
                <span className="font-small-2">
                  orthoplumbate morningtide naphthaline exarteritis
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <div className="avatar mr-50">
                <img src={person7} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Jeanie Bulgrin</h6>
                <span className="font-small-2">
                  blockiness pandemy metaxylene speckle coppy
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <fieldset className="form-label-group mb-50">
              <Input
                type="textarea"
                rows="3"
                placeholder="Add Comment"
                id="add-comment"
              />
              <Label for="add-comment">Add Comment</Label>
            </fieldset>
            <Button.Ripple size="sm" color="primary">
              Post Comment
            </Button.Ripple>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-1">
                <img
                  src={profileImg}
                  alt="avtar img holder"
                  height="45"
                  width="45"
                />
              </div>
              <div className="user-page-info">
                <p className="mb-0">Leeanna Alvord</p>
                <span className="font-small-2">11 Dec 2018 at 1:35 AM</span>
              </div>
              <div className="ml-auto user-like">
                <Heart />
              </div>
            </div>
            <p>
              Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake
              cake. Cupcake I love wafer cake. Halvah I love powder jelly I love
              cheesecake cotton candy tiramisu brownie.
            </p>
            <img
              src={postImg2}
              alt="postImg2"
              className="img-fluid rounded-sm mb-2"
            />
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="d-flex align-items-center">
                <Heart size={16} className="mr-50" />
                276
              </div>
              <div className="ml-2">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={person1}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar130"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar13">
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
                    <UncontrolledTooltip placement="bottom" target="avatar14">
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
                  <li className="d-flex align-items-center pl-50">
                    <span className="align-middle">+271 more</span>
                  </li>
                </ul>
              </div>
              <p className="ml-auto">
                <MessageSquare size={16} className="mr-50" />
                105
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={person6} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Kitty Allanson</h6>
                <span className="font-small-2">
                  I love cupcake danish jujubes sweet.
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <div className="avatar mr-50">
                <img src={person7} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Jeanie Bulgrin</h6>
                <span className="font-small-2">
                  Wafer I love brownie jelly bonbon tart apple pie
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <fieldset className="form-label-group mb-50">
              <Input
                type="textarea"
                rows="3"
                placeholder="Add Comment"
                id="add-comment"
              />
              <Label for="add-comment">Add Comment</Label>
            </fieldset>
            <Button.Ripple size="sm" color="primary">
              Post Comment
            </Button.Ripple>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-1">
                <img
                  src={profileImg}
                  alt="avtar img holder"
                  height="45"
                  width="45"
                />
              </div>
              <div className="user-page-info">
                <p className="mb-0">Leeanna Alvord</p>
                <span className="font-small-2">10 Dec 2018 at 5:35 AM</span>
              </div>
              <div className="ml-auto user-like">
                <Heart />
              </div>
            </div>
            <p>
              Wafer I love brownie jelly bonbon tart. Candy jelly beans powder
              brownie biscuit. Jelly marzipan oat cake cake.
            </p>
            <iframe
              className="embed-responsive-item w-100 height-250 mb-1"
              src="https://www.youtube.com/embed/xUesKDDcLoQ"
              allowFullScreen
              title="post"
              frameBorder="0"
            />
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="d-flex align-items-center">
                <Heart size={16} className="mr-50" />
                269
              </div>
              <div className="ml-2">
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
                      src={person2}
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
                      src={person3}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar015"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar015">
                      Alberto Glotzbach
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person4}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar016"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar016">
                      George Nordic
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person5}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar017"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar017">
                      Vinnie Mostowy
                    </UncontrolledTooltip>
                  </li>
                  <li className="d-flex align-items-center pl-50">
                    <span className="align-middle">+264 more</span>
                  </li>
                </ul>
              </div>
              <p className="ml-auto">
                <MessageSquare size={16} className="mr-50" />
                98
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={person6} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Kitty Allanson</h6>
                <span className="font-small-2">
                  I love cupcake danish jujubes sweet.
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <div className="avatar mr-50">
                <img src={person7} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Jeanie Bulgrin</h6>
                <span className="font-small-2">
                  Wafer I love brownie jelly bonbon tart apple pie
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <fieldset className="form-label-group mb-50">
              <Input
                type="textarea"
                rows="3"
                placeholder="Add Comment"
                id="add-comment"
              />
              <Label for="add-comment">Add Comment</Label>
            </fieldset>
            <Button.Ripple size="sm" color="primary">
              Post Comment
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default Posts
