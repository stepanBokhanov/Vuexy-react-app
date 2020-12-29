import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import { Play, DollarSign, HelpCircle, FileText, Archive } from "react-feather"
const CenteredSliderStyle1 = () => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 55,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    containerClass: "swiper-container centered-style-1",
    slideToClickedSlide: true
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Centered Slides style-1</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
          <div className="swiper-slide rounded swiper-shadow">
            <Play size="20" />
            <span className="swiper-text pt-md-1 pt-sm-50 d-block">
              Getting Started
            </span>
          </div>
          <div className="swiper-slide rounded swiper-shadow">
            <DollarSign size="20" />
            <span className="swiper-text pt-md-1 pt-sm-50 d-block">
              Pricing & Plans
            </span>
          </div>
          <div className="swiper-slide rounded swiper-shadow">
            <HelpCircle size="20" />
            <span className="swiper-text pt-md-1 pt-sm-50 d-block">
              Sales Questions
            </span>
          </div>
          <div className="swiper-slide rounded swiper-shadow">
            <FileText size="20" />
            <span className="swiper-text pt-md-1 pt-sm-50 d-block">
              User Guides
            </span>
          </div>
          <div className="swiper-slide rounded swiper-shadow">
            <Archive size="20" />
            <span className="swiper-text pt-md-1 pt-sm-50 d-block">
              General Guides
            </span>
          </div>
        </Swiper>
      </CardBody>
    </Card>
  )
}
export default CenteredSliderStyle1
