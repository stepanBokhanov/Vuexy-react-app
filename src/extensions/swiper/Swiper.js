import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import DefaultSwiper from "./Default"
import NavigationSwiper from "./Navigation"
import PaginationSwiper from "./Pagination"
import ProgressSwiper from "./Progress"
import MultiSlides from "./MultiSlides"
import RowLayout from "./RowLayout"
import FadeEffect from "./FadeEffect"
import ThreeDEffect from "./3DEffect"
import Coverflow from "./Coverflow"
import Autoplay from "./Autoplay"
import Gallery from "./Gallery"
import Parallax from "./Parallax"
import Lazyloading from "./Lazyloading"
import CenteredStyle1 from "./CenteredSlidesStyle1"
import CenteredStyle2 from "./CenteredSlidesStyle2"
import ResponsiveBreakpoints from "./ResponsiveBreakpoints"
import "swiper/css/swiper.css"
import "../../assets/scss/plugins/extensions/swiper.scss"
class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="Swiper"
          subTitle="A library to use idangerous Swiper as a ReactJS component which allows Swiper's modules custom build"
          link="https://github.com/kidjp85/react-id-swiper"
        />
        <Row>
          <Col sm="12">
            <DefaultSwiper />
          </Col>
          <Col sm="12">
            <NavigationSwiper />
          </Col>
          <Col sm="12">
            <PaginationSwiper />
          </Col>
          <Col sm="12">
            <ProgressSwiper />
          </Col>
          <Col sm="12">
            <MultiSlides />
          </Col>
          <Col sm="12">
            <RowLayout />
          </Col>
          <Col sm="12">
            <CenteredStyle1 />
          </Col>
          <Col sm="12">
            <CenteredStyle2 />
          </Col>
          <Col sm="12">
            <FadeEffect />
          </Col>
          <Col sm="12">
            <ThreeDEffect />
          </Col>
          <Col sm="12">
            <Coverflow />
          </Col>
          <Col sm="12">
            <Autoplay />
          </Col>
          <Col sm="12">
            <Gallery />
          </Col>
          <Col sm="12">
            <Parallax />
          </Col>
          <Col sm="12">
            <Lazyloading />
          </Col>
          <Col sm="12">
            <ResponsiveBreakpoints />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Slider
