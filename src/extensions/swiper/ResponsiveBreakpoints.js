import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-31.jpg"
import img2 from "../../assets/img/slider/banner-32.jpg"
import img3 from "../../assets/img/slider/banner-33.jpg"
import img4 from "../../assets/img/slider/banner-34.jpg"
import img5 from "../../assets/img/slider/banner-35.jpg"
import img6 from "../../assets/img/slider/banner-36.jpg"
import img7 from "../../assets/img/slider/banner-37.jpg"
import img8 from "../../assets/img/slider/banner-38.jpg"
const params = {
  slidesPerView: 5,
  spaceBetween: 50,
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
class ResponsiveBreakpoints extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Responsive Breakpoints</CardTitle>
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
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default ResponsiveBreakpoints
