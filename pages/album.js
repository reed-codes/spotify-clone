
import React, { useState } from "react";
import { Container } from "../styles/utils";
import ContentSliderSection from "../components/common/ContentSliderSection";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
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
import axios from 'axios'


const MusicHeader = styled.div`
  height: ${({ smallScreen }) => smallScreen ? '40vh' : '20vh'};
  max-height: ${({ smallScreen }) => smallScreen ? '700px' : '500px'};
  min-height: 320px;
  color: #fff;
  display: flex;
  flex-direction : ${({ smallScreen }) => smallScreen ? 'column' : 'row'};
  text-align : ${({ smallScreen }) => smallScreen ? 'center' : 'left'};
  max-width: none;
  overflow: hidden;
  position: relative;
  cursor:default;
  background-color: ${({ accentColor }) => accentColor};
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
  height: ${({ smallScreen }) => smallScreen ? '120px' : '192px'};
  width: ${({ smallScreen }) => smallScreen ? '120px' : '192px'};
  min-width: ${({ smallScreen }) => smallScreen ? '120px' : '192px'};
  margin-inline-end: ${({ smallScreen }) => smallScreen ? '0' : '24px'};
`;

const HeaderDetailsWrapper = styled.div`
  display: flex;
  flex: 1;
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
  text-align: ${({ smallScreen }) => smallScreen ? 'text' : 'left'};
  width: 100%;
  word-break: break-word;
  user-select: none;
  padding: 0.08em 0px;
  visibility: visible;
  width: 100%;
  line-height : ${({ smallScreen }) => smallScreen ? 'unset' : '96px'};
  font-size : ${({ smallScreen }) => smallScreen ? '40px' : '60px'};
  font-weight: 700;
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
width: ${({ smallScreen }) => smallScreen ? '100%' : 'unset'};
justify-content: ${({ smallScreen }) => smallScreen ? 'center' : 'flex-start'};
justify-items: ${({ smallScreen }) => smallScreen ? 'center' : 'flex-start'};
align-items: flex-end;
background-color:rgba(0,0,0,.4);
padding-bottom: ${({ smallScreen }) => smallScreen ? '0' : '24px'};
padding-left: ${({ smallScreen }) => smallScreen ? '0' : '24px'};
`

const MusicHeaderRightGridWrapper = styled.div`
height: 100% ;
width: ${({ smallScreen }) => smallScreen ? '100%' : 'unset'};
justify-content: ${({ smallScreen }) => smallScreen ? 'center' : 'flex-start'};
justify-items: ${({ smallScreen }) => smallScreen ? 'center' : 'flex-start'};
flex: 1;
display: flex ;
align-items: flex-end ;
background-color:rgba(0,0,0,.4);
padding-bottom:24px;
`



export default function Album(props) {
  const { colors } = useImageColor(props.data.cover, { cors: true, colors: 5 })
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const maxWidth750px = useMediaQuery('(max-width:750px)');
  const accentColor = colors ? colors[0] : 'transparent';

  const handlePlayRequest = () => setIsPlaying(!isPlaying);
  const handleLikeBtnClick = () => setIsLiked(!isLiked);

  return (
    <>
      <MusicHeader smallScreen={maxWidth750px} accentColor={accentColor}>
        <MusicHeaderLeftGridWrapper smallScreen={maxWidth750px}>
          <CoverImage url={props.data.cover} smallScreen={maxWidth750px} className="music-header-cover-img" />
        </MusicHeaderLeftGridWrapper>

        <MusicHeaderRightGridWrapper smallScreen={maxWidth750px}>
          <HeaderDetailsWrapper>
            <MusicHeaderContentTypeText>{props.data.type}</MusicHeaderContentTypeText>

            <MusicHeaderContentTitle smallScreen={maxWidth750px}>{props.data.title}</MusicHeaderContentTitle>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={maxWidth750px ? "center" : 'left'}
              style={{ fontSize: 14 }}
            >

              {
                (props.data.type !== "playlist" && (
                  <>
                    <Avatar
                      alt={props.data.artist_name}
                      src={props.data.artist_image}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Link href={`artist?q=${props.data.artist_id}`} passHref={true}>
                      <a>
                        <ArtistLink>{props.data.artist_name}</ArtistLink>
                      </a>
                    </Link>

                    <span>&bull;</span>
                  </>
                ))
              }
              <span style={{ color: "rgba(255,255,255,.8)" }}>{`${props.data.track_count} songs`} </span>

              <span>&bull;</span>

              <span style={{ color: "rgba(255,255,255,.8)" }}>{props.data.release_date} </span>
            </Stack>
          </HeaderDetailsWrapper>
        </MusicHeaderRightGridWrapper>


      </MusicHeader>

      <Container className="content-wrapper" >

        <div style={{ padding: "15px 0" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <span onClick={handlePlayRequest}>
              {isPlaying ? (
                <IconButton>
                  <PauseIcon style={{ color: "#1db954", fontSize: 66, cursor: 'pointer' }} />
                </IconButton>
              ) : (
                <PlayCircleIcon style={{ color: "#1db954", fontSize: 66, cursor: 'pointer' }} />
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

        <TrackList hideAlbumColumn={true}
          tracklist_url={props.data.tracklist_url}
          tracks={props.data.tracks}
          type={props.data.type}
          album={(props.data.type == "album") ? props.data.data : null}
        />

        <div>

          {/* <ContentSliderSection
            title = {'More by ' + props.data.artist_name}
            url = {"/more/artist-albums?q=123&artist=Billie&type=album"}
          /> */}

        </div>

      </Container>

    </>
  );
}



// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  try {
    const url = context.req.url;
    const queried_type = (url.split("&type="))[1];
    const query_id = (((url.split("&type="))[0]).split("q="))[1];
    const { data: info } = await axios.get(`https://api.deezer.com/${queried_type}/${query_id}`);

    if (info.type === "album") {

      return {
        props: {
          data: {
            cover: info.cover_medium,
            title: info.title,
            type: info.type,
            artist_name: info.artist.name,
            artist_image: info.artist.picture_small,
            artist_id:info.artist.id,
            tracklist_url: info.tracklist,
            track_count: info.tracks.data.length,
            type: info.type,
            data: info,
            release_date: info.release_date,
            query_id
          },
          err: null
        }
      }

    } else if (info.type === "playlist") {

      return {
        props: {
          data: {
            cover: info.picture_medium,
            title: info.title,
            type: info.type,
            artist_name: info.creator.name,
            track_count: info.nb_tracks,
            tracks: info.tracks.data,
            type: info.type,
            release_date: info.creation_date,
            data: info,
            query_id
          },
          err: null
        }
      }

    } else {


      return {
        props: {
          data: {
            cover: info.album.cover_medium,
            title: info.title,
            type: info.type,
            artist_name: info.artist.name,
            artist_image: info.artist.picture_small,
            artist_id:info.artist.id,
            tracklist_url: info.album.tracklist,
            track_count: 1,
            tracks: [info],
            type: info.type,
            data: info,
            release_date: info.release_date,
            query_id
          },
          err: null
        }
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
