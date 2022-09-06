import React from 'react'
import './NewItem.css'
import DataList from "../../components/ItemDatas/DataList";

const newDatas = [
  {
    id: 0,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/men',
    className: "new-item"
  },
  {
    id: 1,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "new-item"
  },
  {
    id: 2,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "new-item"
  },
  {
    id: 3,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "new-item"
  },
  {
    id: 4,
    brand: 'SI #씨',
    title: '체크 패턴 라운드넥 니트 베스트',
    price: '47,700원',
    img: '/img/newitem.jpg',
    path:'/',
    className: "new-item"
  },


]

const NewItem = () => {


  return (
    <>
      <DataList newDatas = {newDatas} />
      <DataList newDatas = {newDatas} />
      <DataList newDatas = {newDatas} />
    </>

)
}

export default NewItem