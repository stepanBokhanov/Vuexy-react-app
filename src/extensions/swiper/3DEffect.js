import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-31.jpg"
import img2 from "../../assets/img/slider/banner-22.jpg"
import img3 from "../../assets/img/slider/banner-23.jpg"
import img4 from "../../assets/img/slider/banner-24.jpg"
import img5 from "../../assets/img/slider/banner-25.jpg"

const params = {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: ".swiper-pagination"
  }
}
class ThreeDSwiper extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>3-D cube Effect</CardTitle>
        </CardHeader>
        <CardBody>
          <Swiper {...params}>
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "contain"
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "contain"
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "contain"
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: "contain"
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: "contain"
              }}
            ></div>
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default ThreeDSwiper
