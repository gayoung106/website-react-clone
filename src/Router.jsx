import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBanner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Women from './navitems/Women/Women';
import Men from './navitems/Men/Men';
import Outlet from './navitems/Outlet/Outlet';
import ShinwonMall from './navitems/ShinwonMall/ShinwonMall';
import PlanEvent from './navitems/PlanEvent/PlanEvent';
import Event from './navitems/Event/Event';
import Brand from './navitems/Brand/Brand';
import Best from './navitems/Best/Best';
import Home from './headeritems/Home/Home';
import Search from './headeritems/Search/Search';
import Join from './headeritems/Join/Join';
import Login from './headeritems/Login/Login';
import Cart from './headeritems/Cart/Cart';

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <TopBanner />
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/shinwonmall" element={<ShinwonMall />} />
      <Route path="/planevent" element={<PlanEvent />} />
      <Route path="/event" element={<Event />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/best" element={<Best />} />

      
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default Router