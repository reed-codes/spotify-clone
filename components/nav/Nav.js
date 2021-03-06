import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button, useMediaQuery } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HistoryIcon from "@mui/icons-material/History";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from "react-redux";
import {
  openMenuDrawer,
} from "../../state/actions/menu-drawer-actions";
import { withSnackbar } from 'notistack';
import Link from "next/link";
import SpotifyTextLogo from '../common/SpotifyTextLogo'

const LeftWideScreenNav = styled.nav`
  height: 100%;
  resize : horizontal;
  width: ${({ width }) => (width ? width : "270px")};
  min-width: ${({ width }) => (width ? width : "270px")};
  display: ${({ hide }) => (hide ? "none" : "block")};
  overflow:auto;
`;

const NavContentWrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

const LogoContainer = styled.div`
  height: 75px;
  width: 100%;
  padding: 15px 0;
`;

// const SeachInputAndIconContainer = styled.div`
//   width: 100%;
//   height: 56px;
//   display: flex;
//   color: #fff;
// `;

// const SeachInputContainer = styled.div`
//   flex: 1;
//   height: 100%;
// `;

// const SeachIconContainer = styled.div`
//   min-width: 60px;
//   width: 60px;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const NavRoutesContainer = styled.div`
  padding-top: 10px;
`;

const MENU_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 0,
  color: "#fff",
};

const NAV_ROUTE_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  color: "#fff",
  fontWeight: 700,
};

const SMALLSCREEN_NAV_ROUTE_BTN_STYLE = {
  width: "95%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  color: "#fff",
  minWidth: "unset",
};

const Nav = (props) => {
  const minWidth890px = useMediaQuery("(min-width:890px)");
  const [viewSmallScreenNav, setViewSmallScreenNav] = useState(false);

  const toggleViewedNav = () => setViewSmallScreenNav(!viewSmallScreenNav);

  return (
    <>{getMenu(minWidth890px, viewSmallScreenNav, toggleViewedNav, props)}</>
  );
};

export default withSnackbar(Nav);

const getMenu = (minWidth890px, viewSmallScreenNav, toggleViewedNav, props) => {
  if (!minWidth890px)
    return (
      <SmallScreenNav
        {...props}
        minWidth890px={minWidth890px}
        toggleViewedNav={toggleViewedNav}
      />
    );
  else if (minWidth890px && viewSmallScreenNav)
    return (
      <SmallScreenNav
        {...props}
        minWidth890px={minWidth890px}
        toggleViewedNav={toggleViewedNav}
      />
    );
  else if (minWidth890px && !viewSmallScreenNav)
    return <WideScreenNav toggleViewedNav={toggleViewedNav} enqueueSnackbar={props.enqueueSnackbar} />;
  else return <WideScreenNav toggleViewedNav={toggleViewedNav} enqueueSnackbar={props.enqueueSnackbar} />;
};

export const WideScreenNav = ({ toggleViewedNav, enqueueSnackbar }) => {
  const router = useRouter();

  return (
    <LeftWideScreenNav>
      <NavContentWrapper>
        <LogoContainer>
          <SpotifyTextLogo />
        </LogoContainer>

        <Button
          variant="outlined"
          startIcon={<MenuIcon />}
          style={MENU_BTN_STYLE}
          onClick={() => toggleViewedNav()}
        ></Button>

        <NavRoutesContainer>
          <Link href="/" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<HomeIcon />}
                style={{
                  ...NAV_ROUTE_BTN_STYLE,
                  color: router.pathname == "/" ? "#fff" : "#b3b3b3",
                  background:
                    router.pathname == "/" ? "#282828" : "transparent",
                }}
              >
                Home
              </Button>
            </a>
          </Link>

          <Link href="/recent" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<HistoryIcon />}
                style={{
                  ...NAV_ROUTE_BTN_STYLE,
                  color: router.pathname == "/recent" ? "#fff" : "#b3b3b3",
                  background:
                    router.pathname == "/recent" ? "#282828" : "transparent",
                }}
              >
                Recent plays
              </Button>
            </a>
          </Link>

          {/* <Link href="/now-playing" passHref={true}> */}
          {/* <div> */}
          <Button
            variant="outlined"
            startIcon={<EqualizerIcon />}
            style={{
              ...NAV_ROUTE_BTN_STYLE,
              background: "transparent",
              color: "#b3b3b3",
            }}
            onClick={() => {
              const playerPIPToggleBtn = document.querySelector("#player-pip-toggle-btn")
              if (playerPIPToggleBtn) {
                playerPIPToggleBtn.click()
              } else {
                enqueueSnackbar("No currently playing song", {
                  preventDuplicate: true,
                  variant: "warning",
                });
              }
            }}
          >
            Now playing
          </Button>
          {/* </div> */}
          {/* </Link> */}

          <Link href="/library" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<LibraryMusicIcon />}
                style={{
                  ...NAV_ROUTE_BTN_STYLE,
                  color: router.pathname == "/library" ? "#fff" : "#b3b3b3",
                  background:
                    router.pathname == "/library" ? "#282828" : "transparent",
                }}
              >
                Your library
              </Button>
            </a>
          </Link>

          <Link href="/liked-songs" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<FavoriteIcon />}
                style={{
                  ...NAV_ROUTE_BTN_STYLE,
                  color: router.pathname == "/liked-songs" ? "#fff" : "#b3b3b3",
                  background:
                    router.pathname == "/liked-songs"
                      ? "#282828"
                      : "transparent",
                }}
              >
                Liked songs
              </Button>
            </a>
          </Link>
        </NavRoutesContainer>
      </NavContentWrapper>
    </LeftWideScreenNav>
  );
};

export const SmallScreenNav = ({ toggleViewedNav, minWidth890px }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const maxWidth600px = useMediaQuery("(max-width:600px)");

  return (
    <LeftWideScreenNav width={"65px"} hide={maxWidth600px}>
      <NavContentWrapper>
        <LogoContainer>
          <Link href="/" passHref={true}>
            <a>
              <img
                src={"https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: 'left'
                }}
              />
            </a>
          </Link>
        </LogoContainer>

        <Button
          variant="outlined"
          startIcon={<MenuIcon />}
          style={{
            ...MENU_BTN_STYLE,
            marginLeft: -2,
            minWidth: "unset",
            color: "#fff",
          }}
          onClick={() => {
            if (!minWidth890px) dispatch(openMenuDrawer());
            else toggleViewedNav();
          }}
        ></Button>

        <NavRoutesContainer>
          {/* <Tooltip title="SEARCH">
          <Button
            style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}
            onClick={() => dispatch(openMenuDrawerForSearch())}
          >
            <SearchIcon style={{ color: "#fff", fontSize: 25 }} />
          </Button>
          </Tooltip> */}

          <Link href="/" passHref={true}>
            <a>
              <Tooltip title="HOME">
                <Button
                  style={{
                    ...SMALLSCREEN_NAV_ROUTE_BTN_STYLE,
                    color: router.pathname == "/" ? "#fff" : "#b3b3b3",
                    background:
                      router.pathname == "/" ? "#282828" : "transparent",
                  }}
                >
                  <HomeIcon />
                </Button>
              </Tooltip>
            </a>
          </Link>

          <Link href="/recent" passHref={true}>
            <a>
              <Tooltip title="RECENTS">
                <Button
                  style={{
                    ...SMALLSCREEN_NAV_ROUTE_BTN_STYLE,
                    color: router.pathname == "/recent" ? "#fff" : "#b3b3b3",
                    background:
                      router.pathname == "/recent" ? "#282828" : "transparent",
                  }}
                >
                  <HistoryIcon />
                </Button>
              </Tooltip>
            </a>
          </Link>

          <Tooltip title="NOW-PLAYING">
            <Button
              style={{
                ...SMALLSCREEN_NAV_ROUTE_BTN_STYLE,
                color: "#b3b3b3",
                background: "transparent",
              }}
              onClick={() => {
                const playerPIPToggleBtn = document.querySelector("#player-pip-toggle-btn")
                if (playerPIPToggleBtn) {
                  playerPIPToggleBtn.click()
                } else {
                  enqueueSnackbar("No currently playing song", {
                    preventDuplicate: true,
                    variant: "warning",
                  });
                }
              }}
            >
              <EqualizerIcon />
            </Button>
          </Tooltip>

          <Link href="/library" passHref={true}>
            <a>
              <Tooltip title="YOUR LIBRARY">
                <Button
                  style={{
                    ...SMALLSCREEN_NAV_ROUTE_BTN_STYLE,
                    color: router.pathname == "/library" ? "#fff" : "#b3b3b3",
                    background:
                      router.pathname == "/library" ? "#282828" : "transparent",
                  }}
                >
                  <LibraryMusicIcon />
                </Button>
              </Tooltip>
            </a>
          </Link>

          <Link href="/liked-songs" passHref={true}>
            <a>
              <Tooltip title="LIKED SONGS">
                <Button
                  style={{
                    ...SMALLSCREEN_NAV_ROUTE_BTN_STYLE,
                    color: router.pathname == "/liked-songs" ? "#fff" : "#b3b3b3",
                    background:
                      router.pathname == "/liked-songs"
                        ? "#282828"
                        : "transparent",
                  }}
                >
                  <FavoriteIcon />
                </Button>
              </Tooltip>
            </a>
          </Link>
        </NavRoutesContainer>
      </NavContentWrapper>
    </LeftWideScreenNav>
  );
};
