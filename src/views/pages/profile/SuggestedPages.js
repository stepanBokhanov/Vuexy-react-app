import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Star } from "react-feather"
import rockRose from "../../../assets/img/profile/pages/page-09.jpg"
import theDevils from "../../../assets/img/profile/pages/page-08.jpg"
import theMagician from "../../../assets/img/profile/pages/page-03.jpg"
import acDc from "../../../assets/img/profile/pages/page-02.jpg"
import eatHard from "../../../assets/img/profile/pages/page-07.jpg"
import b4B from "../../../assets/img/profile/pages/page-04.jpg"
import kylieJenner from "../../../assets/img/profile/pages/page-05.jpg"
import rDJ from "../../../assets/img/profile/pages/page-01.jpg"
import taylorSwift from "../../../assets/img/profile/pages/page-06.jpg"

class SuggestedPages extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Suggested Pages</CardTitle>
        </CardHeader>
        <CardBody className="suggested-block">
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={rockRose}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>Rockose</p>
              <span className="font-small-2">Company</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={theDevils}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>The Devil's</p>
              <span className="font-small-2">Clothing Store</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={theMagician}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>The Magician</p>
              <span className="font-small-2">Public Figure</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img src={acDc} alt="avtar img holder" height="35" width="35" />
            </div>
            <div className="user-page-info">
              <p>AC/DC</p>
              <span className="font-small-2">Music</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={eatHard}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>Eat Hard</p>
              <span className="font-small-2">Restaurant / Bar</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img src={b4B} alt="avtar img holder" height="35" width="35" />
            </div>
            <div className="user-page-info">
              <p>B4B</p>
              <span className="font-small-2">Beauty Store</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={kylieJenner}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>Kylie Jenner</p>
              <span className="font-small-2">Public Figure</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img src={rDJ} alt="avtar img holder" height="35" width="35" />
            </div>
            <div className="user-page-info">
              <p>RDJ</p>
              <span className="font-small-2">Actor</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
              <img
                src={taylorSwift}
                alt="avtar img holder"
                height="35"
                width="35"
              />
            </div>
            <div className="user-page-info">
              <p>Taylor Swift</p>
              <span className="font-small-2">Music</span>
            </div>
            <div className="ml-auto">
              <Star size={14} />
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SuggestedPages
