
import { useEffect, useState } from "react";
import { SectionHeader, Container } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Avatar from "@mui/material/Avatar";
import TrackList from "../components/common/TrackList";
import styled from "styled-components";
import useImageColor from 'use-image-color'
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";

const MusicHeader = styled.div`
  height: 20vh;
  max-height: 500px;
  min-height: 320px;
  color: #fff;
  display: flex;
  max-width: none;
  overflow: hidden;
  position: relative;
  cursor:default;
  background-color: ${({accentColor})=> accentColor};
`;

const CoverImage = styled.div`
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  background-image: url(${({ url }) => url});
  background-color:#111;
  background-size: contain;
  background-position: center;
  user-select: none;
  -ms-flex-item-align: end;
  -webkit-margin-end: 24px;
  align-self: flex-end;
  height: 192px;
  margin-inline-end: 24px;
  min-width: 192px;
  width: 192px;
`;

const HeaderDetailsWrapper = styled.div`
  -webkit-box-flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-flow: column;
  flex-flow: column;
  justify-content: flex-end;
  z-index: 0;
`;

const MusicHeaderContentTypeText = styled.h2`
  font-weight: 700;
  font-size: 12px;
  margin-top: 4px;
  text-transform: uppercase;
  line-height: 16px;
`;

const MusicHeaderContentTitle = styled.h1`
  overflow: hidden;
  text-align: left;
  width: 100%;
  word-break: break-word;
  user-select: none;
  padding: 0.08em 0px;
  visibility: visible;
  width: 100%;
  font-size: 96px;
  line-height: 96px;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: none;
`;

const ArtistLink = styled.div`
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const MusicHeaderLeftGridWrapper = styled.div`
height: 100%;
display: flex;
align-items: flex-end;
background-color:rgba(0,0,0,.4);
padding-bottom:24px;
padding-left:24px;
`

const MusicHeaderRightGridWrapper = styled.div`
height: 100% ;
flex: 1;
display: flex ;
align-items: flex-end ;
background-color:rgba(0,0,0,.4);
padding-bottom:24px;
`

export default function album() {
  let cover = "./cover.jpg";
  const { colors } = useImageColor( cover, { cors: true, colors: 5 })
  const accentColor = colors ? colors[0] : 'transparent';
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const artist = {
    name : 'MARINA',
    id : 4576879024
  } 
 
  const handlePlayRequest = () => setIsPlaying(!isPlaying);
  const handleLikeBtnClick = () => setIsLiked(!isLiked);


  return (
    <>
      <MusicHeader accentColor = {accentColor}>
        <MusicHeaderLeftGridWrapper>
          <CoverImage url={"./cover.jpg"} className="music-header-cover-img" />
        </MusicHeaderLeftGridWrapper>

        <MusicHeaderRightGridWrapper >
          <HeaderDetailsWrapper>
            <MusicHeaderContentTypeText>album</MusicHeaderContentTypeText>

            <MusicHeaderContentTitle>All In</MusicHeaderContentTitle>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ fontSize: 14 }}
            >
              <Avatar
                alt="Remy Sharp"
                src={"./cover-5.jpg"}
                sx={{ width: 24, height: 24 }}
              />

              <Link href="/" passHref = {true}>
                <ArtistLink>Skepta</ArtistLink>
              </Link>

              <span>&bull;</span>

              <span style={{ color: "rgba(255,255,255,.8)" }}>5 songs</span>
            </Stack>
          </HeaderDetailsWrapper>
        </MusicHeaderRightGridWrapper>


      </MusicHeader>

        <Container>

        <div style={{ padding: "15px 0" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <span onClick={handlePlayRequest}>
                {isPlaying ? (
                  <IconButton>
                    <PauseIcon style={{ color: "#1db954", fontSize: 66, cursor:'pointer' }} />
                  </IconButton>
                ) : (
                  <PlayCircleIcon style={{ color: "#1db954", fontSize: 66, cursor:'pointer' }} />
                )}
              </span>

              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                }}
                className="d-flex justify-content-center align-items-center"
                onClick={handleLikeBtnClick}
              >
                {isLiked ? (
                  <Tooltip
                    title={`Remove Billie from Your Library`}
                    placement="top"
                  >
                    <IconButton>
                      <FavoriteOutlinedIcon
                        style={{ color: "#1db954" }}
                        id="like-icon"
                        className="track-item-show-on-hover-icon"
                      />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add to Your Library" placement="top">
                    <IconButton>
                      <FavoriteBorderIcon
                        style={{ color: "#fff" }}
                        id="liked-icon"
                        className="track-item-show-on-hover-icon"
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </span>
            </Stack>
          </div>

            <TrackList hideAlbumColumn = {true}/>

            <div>

                <ContentSliderSection
                  title={'More Albums by ' + artist.name}
                  url={"/more/artist-albums?q=123&artist=Billie&type=album"}
                />

            </div>

        </Container>

    </>
  );
}
