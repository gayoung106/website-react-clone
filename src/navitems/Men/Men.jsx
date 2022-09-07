import React from 'react'
import Title from '../../components/Title/Title'
import Banner from '../Items/Banner'
import Category from '../Items/Category'
import Main from '../Items/Main'
import PowerBrand from '../Items/PowerBrand'
import DataList from "../../components/ItemDatas/DataList";
import '../Items/Recommendation.css'

const newDatas = [
  {
    id: 0,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/recommendationmen1.jpg',
    path:'/men',
    className: "recommendation-item"
  },
  {
    id: 1,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/recommendationmen1.jpg',
    path:'/',
    className: "recommendation-item"
  },
  {
    id: 2,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/recommendationmen1.jpg',
    path:'/',
    className: "recommendation-item"
  },
  {
    id: 3,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/recommendationmen1.jpg',
    path:'/',
    className: "recommendation-item"
  },


]

const Men = () => {
  return (
    <>
        <Title content="MEN" />
        <Main />
        <Category />
        <Banner />
        <Title content="TOP SELLER" />
        <DataList newDatas = {newDatas} />
        <Title content="POWER BRAND" />
        <PowerBrand />
        <Title content="RECOMMENDATION" />
        <DataList newDatas = {newDatas} />
    </>
  )
}

export default Men