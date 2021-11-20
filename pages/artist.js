import React, { useState, useEffect } from "react";
import { SectionHeader, Container } from "../styles/utils";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle, scrollTop } from "../utils";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import TrackList from "../components/common/TrackList";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import useImageColor from "use-image-color";
import axios from 'axios'

import PageMediaPlayerBtn from "../components/common/media-player-btns/PageMediaPlayerBtn";


const MusicHeader = styled.div`
  margin-top: -66px;
  height: 50vh;
  min-height: 320px;
  max-width: none;
  color: #fff;
  display: flex;
  overflow: hidden;
  position: relative;
  cursor: default;
  background-color: #111;
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
  font-size : ${({ smallScreen }) => smallScreen ? '55px' : '96px'};
  line-height: 96px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: none;
`;

const MusicHeaderInnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${({ imageURL }) => imageURL});
  // background-attachment: fixed;
  background-size: contain;
  background-position: top;
  background-color: #111;
  border-right: 5px #111 solid;
`;

const BackdropBanner = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 24px;
background:rgba(0,0,0,.3)
`

export default function Artist(props) {
  const [tracklist, setTracklist] = useState({
    list: [],
    loading: true,
    err: null
  });
  const { colors } = useImageColor(props.data.cover, { cors: true, colors: 5 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const maxWidth750px = useMediaQuery('(max-width:750px)');
  const accentColor = colors ? colors[0] : "transparent";

  const handleLikeBtnClick = () => setIsLiked(!isLiked);
  const initTracklist = (list) => setTracklist(setTracklist)


  return (
    <>
      <MusicHeader imageURL={props.data.cover} accentColor={accentColor}>
        <MusicHeaderInnerWrapper imageURL={props.data.cover}>
          <BackdropBanner>
            <MusicHeaderContentTitle smallScreen={maxWidth750px}>{props.data.artist_name}</MusicHeaderContentTitle>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ fontSize: 14 }}
            >
              <span style={{ color: "rgba(255,255,255,.8)" }}>
                {`${props.data.fan_count} fans`}
              </span>
            </Stack>
          </BackdropBanner>
        </MusicHeaderInnerWrapper>
      </MusicHeader>

      <div
        style={{
          background: `linear-gradient(${accentColor} -25%, rgb(19, 19, 19) 15%, rgb(18, 18, 18) 30%, transparent 50%)`,
        }}
      >
        <Container className="content-wrapper" >
          <div style={{ padding: "15px 0" }}>
            <Stack direction="row" spacing={2} alignItems="center">

              <PageMediaPlayerBtn tracklist = {tracklist.list}/>

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

          <SectionHeader>Popular</SectionHeader>

          <TrackList tracklist_url={props.data.tracklist_url}
            tracklist = {tracklist}
            type={props.data.type}
            setTracklist = {setTracklist}
            initTracklist={initTracklist}
          />

          {/* <div>
            <ContentSliderSection
              title={getTitle("artist-albums") + artist.name}
              url={"/more/artist-albums?q=123&artist=Billie&type=album"}
            />

            <ContentSliderSection
              title={getTitle("similar-artists")}
              url={"/more/similar-artists?q=456&type=artist"}
            />

          </div> */}
        </Container>
      </div>
    </>
  );
}





// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  try {
    const query_id = (context.req.url.split("q="))[1];
    const { data: info } = await axios.get(`https://api.deezer.com/artist/${query_id}`);


    return {
      props: {
        data: {
          cover: info.picture_xl,
          artist_name: info.name,
          type: info.type,
          tracklist_url: info.tracklist,
          fan_count: info.nb_fan,
          data: info,
          query_id
        },
        err: null
      }
    }



  } catch (err) {
    return {
      props: {
        data: null,
        err: err.message
      }
    }
  }


}
