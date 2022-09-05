import React from 'react'
import MainSwiper from '../../mainitems/MainSwiper/MainSwiper'
import NewItem from '../../mainitems/NewItem/NewItem'
import OnlineOnly from '../../mainitems/OnlineOnly/OnlineOnly'
import Title from '../../components/Title/Title'
import SecondBanner from '../../mainitems/SecondBanner/SecondBanner'
import SpecialIssue from '../../mainitems/SpecialIssue/SpecialIssue'
import PlanEvent from '../../mainitems/PlanEvent/PlanEvent'

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