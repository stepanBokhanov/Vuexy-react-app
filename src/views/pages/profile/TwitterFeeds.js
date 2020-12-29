import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Badge } from "reactstrap"
import { Check } from "react-feather"
import img1 from "../../../assets/img/portrait/small/avatar-s-12.jpg"

class TwitterFeeds extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Twitter Feeds</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="twitter-feed">
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={img1} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <p className="text-bold-600 mb-0">Tiana Vercetti</p>
                <small>@tiana59</small>
                <Badge
                  color="primary"
                  className="p-0 badge-sm align-middle ml-25"
                  pill
                >
                  <Check size={11} />
                </Badge>
              </div>
            </div>
            <p className="mb-0">
              I love cookie chupa chups sweet tart apple pie chocolate bar.
              Jelly-o oat cake chupa chups.
            </p>
            <p className="text-primary">#js #reactjs</p>
            <small>12 Dec 2018</small>
          </div>
          <div className="twitter-feed mt-2">
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={img1} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <p className="text-bold-600 mb-0">Tiana Vercetti</p>
                <small>@tiana59</small>
                <Badge
                  color="primary"
                  className="p-0 badge-sm align-middle ml-25"
                  pill
                >
                  <Check size={11} />
                </Badge>
              </div>
            </div>
            <p className="mb-0">
              Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan
              cookie lemon drops.
            </p>
            <p className="text-primary">#js #vuejs</p>
            <small>12 Dec 2018</small>
          </div>
          <div className="twitter-feed mt-2">
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={img1} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <p className="text-bold-600 mb-0">Tiana Vercetti</p>
                <small>@tiana59</small>
                <Badge
                  color="primary"
                  className="p-0 badge-sm align-middle ml-25"
                  pill
                >
                  <Check size={11} />
                </Badge>
              </div>
            </div>
            <p className="mb-0">
              I love cookie chupa chups sweet tart apple pie chocolate bar.
              Jelly-o oat cake chupa chups.
            </p>
            <small>12 Dec 2018</small>
          </div>
          <div className="twitter-feed mt-2">
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={img1} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <p className="text-bold-600 mb-0">Tiana Vercetti</p>
                <small>@tiana59</small>
                <Badge
                  color="primary"
                  className="p-0 badge-sm align-middle ml-25"
                  pill
                >
                  <Check size={11} />
                </Badge>
              </div>
            </div>
            <p className="mb-0">
              Muffin candy caramels. I love caramels tiramisu jelly. Pie I love
              wafer. Chocolate cake lollipop tootsie roll cake.
            </p>
            <p className="text-primary">#django #reactjs</p>
            <small>12 Dec 2018</small>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default TwitterFeeds
