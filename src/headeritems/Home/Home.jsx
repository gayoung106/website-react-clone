import React from 'react'
import MainSwiper from '../../components/MainSwiper/MainSwiper'
import NewItem from '../../components/NewItem/NewItem'
import OnlineOnly from '../../components/OnlineOnly/OnlineOnly'
import Title from '../../components/Title/Title'
import SecondBanner from '../../components/SecondBanner/SecondBanner'
import SpecialIssue from '../../components/SpecialIssue/SpecialIssue'
import PlanEvent from '../../components/PlanEvent/PlanEvent'

const Home = () => {
  return (
    <>
    <MainSwiper />
    <Title content="NEW ITEM" />
    <NewItem />
    <Title content="ONLINE ONLY" />
    <OnlineOnly />
    <SecondBanner />
    <Title content="SPECIAL ISSUE" />
    <SpecialIssue />
    <Title content="기획전" />
    <PlanEvent />
    </>
  )
}

export default Home