import React, { useState, useRef, useContext } from "react";
import Nav from "./nav/Nav";
import AppBar from "./nav/AppBar";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Player from './player/Player'
import { toggleMenuDrawer } from "../state/actions/menu-drawer-actions";
import Head from "./Head";
import {AudioPlayerContext} from "../state/context/AudioPlayerContext";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #000;
  display: flex;
`;

const MainContentContainer = styled.main`
  height: 100%;
  flex: 1;
  background: #101010;
  overflow-y: auto;
  position: relative;
  transform: translate(0, 0);
  padding-bottom: 130px;
`;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const {currentTrack} = useContext(AudioPlayerContext)
  const state = useContext(AudioPlayerContext)
  const mainWrapperRef = useRef(null)
  const [showAppBarBackground, setShowAppBarBackground] = useState(false);

  console.log(state)

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggleMenuDrawer());
  };

  const handleMainContentContainerScroll = (event) => {
    if ((event.target.scrollTop >= 20) && !showAppBarBackground) setShowAppBarBackground(true)
    else if ((event.target.scrollTop < 20) && showAppBarBackground) setShowAppBarBackground(false)
  };

  return (
    <>
      <Head />
      <MainWrapper ref={mainWrapperRef}>
        <Nav toggleDrawer={toggleDrawer} />

        <MainContentContainer
          onScroll={handleMainContentContainerScroll}
          className="main-content-container"
        >
          <AppBar showAppBarBackground={showAppBarBackground} toggleDrawer={toggleDrawer} />

          {children}
        </MainContentContainer>
      </MainWrapper>

     {
         currentTrack && (

          <Player config={{
            constraintsRef: mainWrapperRef
          }} />

         ) 
     }

    </>
  );
};

export default Layout;
