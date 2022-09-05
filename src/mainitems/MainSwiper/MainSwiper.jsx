import React from 'react'
import './MainSwiper.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiper from "../../components/Swiper/Swiper";

const imgDatas = [
  {
    id: 1,
    img: "/img/main1.png",
    className: "swiper-img"
  },
  {
    id: 2,
    img: "/img/main2.jpg",
    className: "swiper-img"
  },
  {
    id: 3,
    img: "/img/main3.png",
    className: "swiper-img"
  },
]

const MainSwiper = () => {

  return (
      <>
          <Swiper imgDatas={imgDatas} />
      </>
  )
}

export default MainSwiper