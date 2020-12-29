import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-31.jpg"
import img2 from "../../assets/img/slider/banner-32.jpg"
import img3 from "../../assets/img/slider/banner-33.jpg"
import img4 from "../../assets/img/slider/banner-34.jpg"
import img5 from "../../assets/img/slider/banner-35.jpg"
const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}
class MultiSlides extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Multi Slides Per View</CardTitle>
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
          </Swiper>
        </CardBody>
      </Card>
    )
  }
}
export default MultiSlides
