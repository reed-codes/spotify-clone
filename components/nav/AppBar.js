import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  useMediaQuery,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";


import useImageColor from "use-image-color";

import BackgroundEffect from "../common/BackgroundEffect";

import { useSelector, useDispatch } from "react-redux";
import {
  openMenuDrawer,
  toggleMenuDrawer,
} from "../../state/actions/menu-drawer-actions";

import styled from "styled-components";

import QuickNavigationBtnGroup from "./QuickNavigationBtnGroup";
import { useSnackbar } from 'notistack';
import SpotifyTextLogo from '../common/SpotifyTextLogo'
import { AudioPlayerContext } from '../../state/context/AudioPlayerContext'

const AppBarWrapper = styled.div`
  position: sticky;
  height: 66px;
  width: 100%;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.5s;
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


const NavRoutesContainer = styled.div`
  padding-top: 30px;
`;

const MENU_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 0,
  borderColor: "transparent",
  color: "#fff",
};

const NAV_ROUTE_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  borderColor: "transparent",
  color: "#fff",
  fontWeight: 700
};

const LeftWideScreenNav = styled.nav`
  height: 100%;
  width: ${({ width }) => (width ? width : "300px")};
  min-width: ${({ width }) => (width ? width : "300px")};
`;

export default function ButtonAppBar(props) {
  const dispatch = useDispatch();
  const cover = './cover-2.jpg'
  const { colors } = useImageColor(cover, { cors: true, colors: 5 });
  const { menuDrawerIsOpen } = useSelector((state) => state.menuState);
  const maxWidth600px = useMediaQuery("(max-width:600px)");

  return (
    <AppBarWrapper>
      {props.showAppBarBackground && (
        <BackgroundEffect accentColor={colors ? colors[0] : ''} />
      )}

      <Box sx={{ flexGrow: 1 }}>
        <SwipeableMenuDrawer
          toggleDrawer={props.toggleDrawer}
          menuDrawerIsOpen={menuDrawerIsOpen}
        />

        <AppBar position="static" style={{ background: "none", boxShadow: 'none' }}>
          <Toolbar>
            {maxWidth600px && (
              <Button
                onClick={() => {
                  dispatch(openMenuDrawer());
                }}
                style={{ color: "#fff" }}
              >
                <MenuIcon />
              </Button>
            )}

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={`d-flex ${maxWidth600px && "justify-content-center"}`}
            >
              {maxWidth600px ? (
                <Box
                  style={{
                    height: 35,
                  }}
                >
                  <SpotifyTextLogo />
                </Box>
              ) : (
                <QuickNavigationBtnGroup />
              )}
            </Typography>

            {/* <Button style={{ color: '#fff', fontWeight: 700, background: '#080808' }}>Login</Button> */}

            <a
              href="https://github.com/reed-codes/spotify-clone"
              target="_blank"
            >
              <IconButton
                className="md:opacity-50 hover:opacity-100"
                aria-label="upload picture"
                component="span"
                sx = {{
                  width:'23px',
                  height:'23px',
                  borderRadius:'50% !important',
                }}
              >
                <GitHubIcon />
              </IconButton>
            </a>

          </Toolbar>
        </AppBar>
      </Box>
    </AppBarWrapper>
  );
}

export function SwipeableMenuDrawer({ toggleDrawer, menuDrawerIsOpen }) {
  const { handlePipToggle, currentTrack } = useContext(AudioPlayerContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={menuDrawerIsOpen}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <div
          onKeyDown={toggleDrawer("left", false)}
          style={{
            height: "100vh",
            width: 300,
            background: "#000",
          }}
        >
          <LeftWideScreenNav>
            <NavContentWrapper>
              <LogoContainer>
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={() => dispatch(toggleMenuDrawer())}
                >
                  <SpotifyTextLogo />
                </Box>

              </LogoContainer>

              <Button
                variant="outlined"
                startIcon={<MenuIcon />}
                style={MENU_BTN_STYLE}
                onClick={() => dispatch(toggleMenuDrawer())}
              ></Button>


              <NavRoutesContainer>
                <Link href="/" passHref={true}>
                  <a>
                    <Button
                      variant="outlined"
                      startIcon={<HomeIcon />}
                      style={{
                        ...NAV_ROUTE_BTN_STYLE,
                        color: router.pathname == "/" ? '#fff' : '#b3b3b3',
                        background: router.pathname == "/" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
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
                        color: router.pathname == "/recent" ? '#fff' : '#b3b3b3',
                        background: router.pathname == "/recent" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
                    >
                      Recent plays
                    </Button>
                  </a>
                </Link>

                <Button
                  variant="outlined"
                  startIcon={<EqualizerIcon />}
                  style={{
                    ...NAV_ROUTE_BTN_STYLE,
                    color: '#b3b3b3',
                    background: 'transparent',
                  }}
                  onClick={() => {

                    if (currentTrack) {
                      handlePipToggle()
                    } else {
                      enqueueSnackbar("No currently playing song", {
                        preventDuplicate: true,
                        variant: "warning",
                      });
                    }

                    dispatch(toggleMenuDrawer())

                  }}
                >
                  Now playing
                </Button>

                <Link href="/library" passHref={true}>
                  <a>
                    <Button
                      variant="outlined"
                      startIcon={<LibraryMusicIcon />}
                      style={{
                        ...NAV_ROUTE_BTN_STYLE,
                        color: router.pathname == "/library" ? '#fff' : '#b3b3b3',
                        background: router.pathname == "/library" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
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
                        color: router.pathname == "/liked-songs" ? '#fff' : '#b3b3b3',
                        background: router.pathname == "/liked-songs" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
                    >
                      Liked songs
                    </Button>
                  </a>
                </Link>
              </NavRoutesContainer>
            </NavContentWrapper>
          </LeftWideScreenNav>
        </div>
      </SwipeableDrawer>
    </>
  );
}
