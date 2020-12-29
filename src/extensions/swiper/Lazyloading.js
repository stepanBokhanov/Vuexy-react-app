import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-1.jpg"
import img2 from "../../assets/img/slider/banner-2.jpg"
import img3 from "../../assets/img/slider/banner-3.jpg"
import img4 from "../../assets/img/slider/banner-4.jpg"
import img5 from "../../assets/img/slider/banner-5.jpg"

const params = {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}

class Lazyloading extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lazy Loading</CardTitle>
        </CardHeader>
        <CardBody>
          <Swiper {...params}>
            <div>
              <img
                className="swiper-lazy img-fluid"
                src={img1}
                alt="swiper 1"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </div>
            <div>
              <img
                className="swiper-lazy img-fluid"
                src={img2}
                alt="swiper 2"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </div>
            <div>
              <img
                className="swiper-lazy img-fluid"
                src={img3}
                alt="swiper 3"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </div>
            <div>
              <img
                className="swiper-lazy img-fluid"
                src={img4}
                alt="swiper 4"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </div>
            <div>
              <img
                className="swiper-lazy img-fluid"
                src={img5}
                alt="swiper 5"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </div>
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default Lazyloading
