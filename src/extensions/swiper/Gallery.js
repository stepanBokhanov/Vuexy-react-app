import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../assets/img/slider/banner-11.jpg"
import img2 from "../../assets/img/slider/banner-12.jpg"
import img3 from "../../assets/img/slider/banner-13.jpg"
import img4 from "../../assets/img/slider/banner-14.jpg"
import img5 from "../../assets/img/slider/banner-15.jpg"
const Gallery = () => {
  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }
  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true
  }
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }, [gallerySwiper, thumbnailSwiper])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gallery</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="swiper-gallery">
          <Swiper {...gallerySwiperParams}>
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
          </Swiper>
          <Swiper {...thumbnailSwiperParams}>
            <div
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
            <div
              style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            />
          </Swiper>
        </div>
      </CardBody>
    </Card>
  )
}

export default Gallery
