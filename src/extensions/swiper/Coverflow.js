import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-26.jpg"
import img2 from "../../assets/img/slider/banner-39.jpg"
import img3 from "../../assets/img/slider/banner-28.jpg"
import img4 from "../../assets/img/slider/banner-29.jpg"
import img5 from "../../assets/img/slider/banner-30.jpg"
const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
}

class Coverflow extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Coverflow Effect</CardTitle>
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
export default Coverflow
