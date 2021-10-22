import React from "react";
import styled from "styled-components";
import { Button, useMediaQuery } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HistoryIcon from "@mui/icons-material/History";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";

import TextField from "@mui/material/TextField";

import Link from "next/link";

const LeftWideScreenNav = styled.nav`
  height: 100%;
  width: ${({ width }) => (width ? width : "300px")};
  min-width: ${({ width }) => (width ? width : "300px")};

  
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
  color: "#fff",
};

const NAV_ROUTE_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  color: "#fff",
};

const SMALLSCREEN_NAV_ROUTE_BTN_STYLE = {
  width: "100%",
  justifyContent: "flex-start",
  paddingTop: 10,
  paddingBottom: 10,
  color: "#fff",
  minWidth: "unset",
};

const Nav = () => {  
  const maxWidth890px = useMediaQuery('(max-width:890px)');

  return (
        <>
         {
                maxWidth890px ? (
                        <SmallScreenNav maxWidth890px = {maxWidth890px}  />
                ) : (
                        <WideScreenNav maxWidth890px = {maxWidth890px} />
                )
         }
        </>
  )
 
};

export default Nav;

export const WideScreenNav = () => {
  return (
    <LeftWideScreenNav>
      <NavContentWrapper>
        <LogoContainer>
          <img
            src={"./logo-and-brand.png"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </LogoContainer>

        <Button
          variant="outlined"
          startIcon={<MenuIcon />}
          style={MENU_BTN_STYLE}
        ></Button>

        <SeachInputAndIconContainer>
          <SeachInputContainer>
            <TextField id="search-input" label="Filled" variant="filled" />
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
                style={NAV_ROUTE_BTN_STYLE}
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
                style={NAV_ROUTE_BTN_STYLE}
              >
                Recent plays
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<EqualizerIcon />}
                style={NAV_ROUTE_BTN_STYLE}
              >
                Now playing
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<LibraryMusicIcon />}
                style={NAV_ROUTE_BTN_STYLE}
              >
                Your library
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button
                variant="outlined"
                startIcon={<FavoriteIcon />}
                style={NAV_ROUTE_BTN_STYLE}
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

export const SmallScreenNav = () => {
  return (
    <LeftWideScreenNav width={"65px"}>
      <NavContentWrapper>
        <LogoContainer>
          <img
            src={"./logo.png"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </LogoContainer>

        <Button
          variant="outlined"
          startIcon={<MenuIcon />}
          style={{
            ...MENU_BTN_STYLE,
            marginLeft: -2,
            minWidth: "unset",
          }}
        ></Button>

        <NavRoutesContainer>
          <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
            <SearchIcon style={{ color: "#fff", fontSize: 25 }} />
          </Button>

          <Link href="/" passHref={true}>
            <a>
              <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
                <HomeIcon />
              </Button>
            </a>
          </Link>

          <Link href="/recent" passHref={true}>
            <a>
              <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
                <HistoryIcon />
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
                <EqualizerIcon />
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
                <LibraryMusicIcon />
              </Button>
            </a>
          </Link>

          <Link href="/" passHref={true}>
            <a>
              <Button style={SMALLSCREEN_NAV_ROUTE_BTN_STYLE}>
                <FavoriteIcon />
              </Button>
            </a>
          </Link>
        </NavRoutesContainer>
      </NavContentWrapper>
    </LeftWideScreenNav>
  );
};
