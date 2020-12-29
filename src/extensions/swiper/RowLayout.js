import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-26.jpg"
import img2 from "../../assets/img/slider/banner-39.jpg"
import img3 from "../../assets/img/slider/banner-28.jpg"
import img4 from "../../assets/img/slider/banner-29.jpg"
import img5 from "../../assets/img/slider/banner-30.jpg"
import img6 from "../../assets/img/slider/banner-31.jpg"
import img7 from "../../assets/img/slider/banner-32.jpg"
import img8 from "../../assets/img/slider/banner-33.jpg"
import img9 from "../../assets/img/slider/banner-34.jpg"
import img10 from "../../assets/img/slider/banner-35.jpg"
const params = {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}
class RowLayout extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Row Layout</CardTitle>
        </CardHeader>
        <CardBody>
          <Swiper {...params}>
            <div>
              <img src={img1} alt="swiper 1" className="img-fluid" />
            </div>
            <div>
              <img src={img2} alt="swiper 2" className="img-fluid" />
            </div>
            <div>
              <img src={img3} alt="swiper 3" className="img-fluid" />
            </div>
            <div>
              <img src={img4} alt="swiper 4" className="img-fluid" />
            </div>
            <div>
              <img src={img5} alt="swiper 5" className="img-fluid" />
            </div>
            <div>
              <img src={img6} alt="swiper 6" className="img-fluid" />
            </div>
            <div>
              <img src={img7} alt="swiper 7" className="img-fluid" />
            </div>
            <div>
              <img src={img8} alt="swiper 8" className="img-fluid" />
            </div>
            <div>
              <img src={img9} alt="swiper 9" className="img-fluid" />
            </div>
            <div>
              <img src={img10} alt="swiper 10" className="img-fluid" />
            </div>
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default RowLayout
