import React from 'react'
import Title from '../../components/Title/Title'
import Category from '../Items/Category'
import Main from '../Items/Main'
import DataList from "../../components/ItemDatas/DataList";

const newDatas = [
  {
    id: 0,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/men',
    className: "recommendation-item"
  },
  {
    id: 1,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "recommendation-item"
  },
  {
    id: 2,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "recommendation-item"
  },
  {
    id: 3,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "recommendation-item"
  },


]


const Outlet = () => {
  return (
    <>
        <Title content="OUTLET" />
        <Main />
        <Category />
        <Title content="TOP SELLER" />
        <DataList newDatas = {newDatas} />
        <Title content="RECOMMENDATION" />
        <DataList newDatas = {newDatas} />
    </>
  )
}

export default Outlet