import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
};

const Swiper = (props) => {
    const { imgDatas } = props;

    return (
        <div className="swiper">
            <Slider {...settings}>
                {imgDatas.map((imgData) => {
                    return (
                        <div key={imgData.id} >
                            <img className={imgData.className} src={imgData.img} />
                        </div>
                    )
                }) }
            </Slider>
        </div>
    )
}

export default Swiper;