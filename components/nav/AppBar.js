import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  useMediaQuery,
  Box,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector, useDispatch } from "react-redux";
import {
  openMenuDrawer,
  toggleMenuDrawer,
} from "../../state/actions/menu-drawer-actions";

import styled from "styled-components";

import QuickNavigationBtnGroup from "./QuickNavigationBtnGroup";

const AppBarWrapper = styled.div`
  position: sticky;
  height: 66px;
  width: 100%;
  top: 0;
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

const SeachInputAndIconContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  color: #fff;
`;

const SeachInputContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const SeachIconContainer = styled.div`
  min-width: 60px;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavRoutesContainer = styled.div`
  padding-top: 30px;
  border-top: 1px rgba(225, 225, 225, 0.1) solid;
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
  fontWeight:700
};

const LeftWideScreenNav = styled.nav`
  height: 100%;
  width: ${({ width }) => (width ? width : "300px")};
  min-width: ${({ width }) => (width ? width : "300px")};
`;

export default function ButtonAppBar(props) {
  const dispatch = useDispatch();
  const { menuDrawerIsOpen } = useSelector((state) => state.menuState);
  const maxWidth600px = useMediaQuery("(max-width:600px)");

  return (
    <AppBarWrapper opacity={props.appBarOpacity} className="backdrop-blur">
      <Box sx={{ flexGrow: 1 }}>
        <SwipeableMenuDrawer
          toggleDrawer={props.toggleDrawer}
          menuDrawerIsOpen={menuDrawerIsOpen}
        />

        <AppBar position="static" style={{ background: "none" }}>
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
                <img
                  src={"./logo.png"}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    marginBottom: -3,
                  }}
                />
              ) : (
                <QuickNavigationBtnGroup />
              )}
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </AppBarWrapper>
  );
}

export function SwipeableMenuDrawer({ toggleDrawer, menuDrawerIsOpen }) {
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
                <Link href="/" passHref={true}>
                  <a>
                    <img
                      src={"./logo-and-brand.png"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
                    />
                  </a>
                </Link>
              </LogoContainer>

              <Button
                variant="outlined"
                startIcon={<MenuIcon />}
                style={MENU_BTN_STYLE}
                onClick={() => dispatch(toggleMenuDrawer())}
              ></Button>

              <SeachInputAndIconContainer>
                <SeachInputContainer>
                  <TextField
                    id="search-input"
                    label="Search"
                    variant="filled"
                  />
                </SeachInputContainer>

                <SeachIconContainer>
                  <Button
                    style={{
                      height: "100%",
                      width: "100%",
                      minWidth: "unset",
                      borderRadius: 0,
                      background: "rgba(17,17,17,.5)",
                    }}
                  >
                    <SearchIcon style={{ color: "#fff" }} />
                  </Button>
                </SeachIconContainer>
              </SeachInputAndIconContainer>

              <NavRoutesContainer>
                <Link href="/" passHref={true}>
                  <a>
                    <Button
                      variant="outlined"
                      startIcon={<HomeIcon />}
                      style = {{
                        ...NAV_ROUTE_BTN_STYLE,
                          color : router.pathname == "/" ? '#fff' : '#b3b3b3',
                          background : router.pathname == "/" ? '#282828' : 'transparent',
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
                      style = {{
                        ...NAV_ROUTE_BTN_STYLE,
                          color : router.pathname == "/recent" ? '#fff' : '#b3b3b3',
                          background : router.pathname == "/recent" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
                    >
                      Recent plays
                    </Button>
                  </a>
                </Link>

                <Link href="/now-playing" passHref={true}>
                  <a>
                    <Button
                      variant="outlined"
                      startIcon={<EqualizerIcon />}
                      style = {{
                        ...NAV_ROUTE_BTN_STYLE,
                          color : router.pathname == "now-playing" ? '#fff' : '#b3b3b3',
                          background : router.pathname == "now-playing" ? '#282828' : 'transparent',
                      }}
                      onClick={() => dispatch(toggleMenuDrawer())}
                    >
                      Now playing
                    </Button>
                  </a>
                </Link>

                <Link href="/library" passHref={true}>
                  <a>
                    <Button
                      variant="outlined"
                      startIcon={<LibraryMusicIcon />}
                      style = {{
                        ...NAV_ROUTE_BTN_STYLE,
                          color : router.pathname == "/library" ? '#fff' : '#b3b3b3',
                          background : router.pathname == "/library" ? '#282828' : 'transparent',
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
                      style = {{
                        ...NAV_ROUTE_BTN_STYLE,
                          color : router.pathname == "/liked-songs" ? '#fff' : '#b3b3b3',
                          background : router.pathname == "/liked-songs" ? '#282828' : 'transparent',
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
