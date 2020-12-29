import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import { Play, DollarSign, HelpCircle, FileText, Archive } from "react-feather"
const params = {
  slidesPerView: "auto",
  spaceBetween: 55,
  centeredSlides: true,
  containerClass: "swiper-container centered-style-2",
  slideToClickedSlide: true
}
class CenteredSliderStyle2 extends React.Component {
  render() {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Centered Slides style-2</CardTitle>
        </CardHeader>
        <CardBody>
          <Swiper {...params}>
            <div className="swiper-slide rounded swiper-shadow">
              <Play size="15" />
              <span className="swiper-text align-middle ml-50 pt-md-1 pt-sm-50">
                Getting Started
              </span>
            </div>
            <div className="swiper-slide rounded swiper-shadow">
              <DollarSign size="15" />
              <span className="swiper-text align-middle ml-50 pt-md-1 pt-sm-50">
                Pricing & Plans
              </span>
            </div>
            <div className="swiper-slide rounded swiper-shadow">
              <HelpCircle size="15" />
              <span className="swiper-text align-middle ml-50 pt-md-1 pt-sm-50">
                Sales Questions
              </span>
            </div>
            <div className="swiper-slide rounded swiper-shadow">
              <FileText size="15" />
              <span className="swiper-text align-middle ml-50 pt-md-1 pt-sm-50">
                User Guides
              </span>
            </div>
            <div className="swiper-slide rounded swiper-shadow">
              <Archive size="15" />
              <span className="swiper-text align-middle ml-50 pt-md-1 pt-sm-50">
                General Guides
              </span>
            </div>
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default CenteredSliderStyle2
