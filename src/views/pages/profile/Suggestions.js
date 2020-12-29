import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import { MoreHorizontal, UserPlus, Plus } from "react-feather"
import img1 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import img2 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import img3 from "../../../assets/img/portrait/small/avatar-s-7.jpg"
import img4 from "../../../assets/img/portrait/small/avatar-s-8.jpg"
import img5 from "../../../assets/img/portrait/small/avatar-s-9.jpg"
import img6 from "../../../assets/img/portrait/small/avatar-s-10.jpg"
import img7 from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import img8 from "../../../assets/img/portrait/small/avatar-s-12.jpg"

class Suggestions extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Suggestions</CardTitle>
          <MoreHorizontal className="cursor-pointer" size={15} />
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img1} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Carissa Dolle</h6>
                <span className="font-small-2">6 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img2} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Liliana Pecor</h6>
                <span className="font-small-2">3 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img3} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Isidra Strunk</h6>
                <span className="font-small-2">2 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img4} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Gerald Licea</h6>
                <span className="font-small-2">1 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img5} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Kelle Herrick</h6>
                <span className="font-small-2">1 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img6} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Cesar Lee</h6>
                <span className="font-small-2">1 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img7} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">John Doe</h6>
                <span className="font-small-2">1 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon ml-auto">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="user-info d-flex align-items-center">
              <div className="avatar mr-50">
                <img src={img8} alt="avtar img holder" height="35" width="35" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">Tonia Seabold</h6>
                <span className="font-small-2">1 Mutual Friends</span>
              </div>
            </div>
            <Button.Ripple color="primary" className="btn-icon">
              <UserPlus size={17} />
            </Button.Ripple>
          </div>
          <Button.Ripple color="primary" className="btn-block">
            <Plus size={15} className="mr-25" />
            <span className="align-middle">Load More</span>
          </Button.Ripple>
        </CardBody>
      </Card>
    )
  }
}
export default Suggestions
