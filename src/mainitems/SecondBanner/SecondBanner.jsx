import React from 'react'
import './SecondBanner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Swiper from "../../components/Swiper/Swiper";


const imgDatas = [
  {
    id: 1,
    img: "/img/second1.png",
    className: "second-banner-img"
  },
  {
    id: 2,
    img: "/img/second2.png",
    className: "second-banner-img"
  },

]

const SecondBanner = () => {
  return (
    <>
      <Swiper imgDatas={imgDatas} />
      <div className="banner-div"></div>
    </>
  )
}

export default SecondBanner