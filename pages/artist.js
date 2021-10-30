import React,{ useState, useEffect } from "react";
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
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";
import useImageColor from "use-image-color";

const MusicHeader = styled.div`
  height: 20vh;
  max-height: 500px;
  min-height: 320px;
  color: #fff;
  display: flex;
  max-width: none;
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
  font-size : ${({smallScreen}) => smallScreen ? '55px' : '96px'  };
  line-height: 96px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: none;
`;

const MusicHeaderInnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px;
  background-image: url(${({ imageURL }) => imageURL});
  background-attachment: fixed;
  background-size: cover;
  background-position: canter;
  background-color: #111;
  border-right: 5px #111 solid;
`;

export default function Artist() {
  let cover = "./cover.jpg";
  const { colors } = useImageColor(cover, { cors: true, colors: 5 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const maxWidth750px = useMediaQuery('(max-width:750px)');
  const accentColor = colors ? colors[0] : "transparent";

  const artist = {
    name: "MARINA",
    id: 4576879024,
  };

  const handlePlayRequest = () => setIsPlaying(!isPlaying);
  const handleLikeBtnClick = () => setIsLiked(!isLiked);

  const imageURL =
    "https://e-cdns-images.dzcdn.net/images/artist/3a58adf62c522732a6d3a7f8806de0c3/1000x1000-000000-80-0-0.jpg";

  // useEffect(()=>{
  //     scrollTop()
  // },[])

  return (
    <>
      <MusicHeader accentColor={accentColor}>
        <MusicHeaderInnerWrapper imageURL={imageURL}>
          <MusicHeaderContentTitle smallScreen = {maxWidth750px}>All In</MusicHeaderContentTitle>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            style={{ fontSize: 14 }}
          >
            <span style={{ color: "rgba(255,255,255,.8)" }}>
              103 451 monthly listeners
            </span>
          </Stack>
        </MusicHeaderInnerWrapper>
      </MusicHeader>

      <div
        style={{
          background: `linear-gradient(${accentColor} -25%, rgb(19, 19, 19) 15%, rgb(18, 18, 18) 30%, transparent 50%)`,
        }}
      >
        <Container className = "content-wrapper" >
          <div style={{ padding: "15px 0" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <span onClick={handlePlayRequest}>
                {isPlaying ? (
                  <IconButton>
                    <PauseIcon style={{ color: "#1db954", fontSize: 66 }} />
                  </IconButton>
                ) : (
                  <PlayCircleIcon style={{ color: "#1db954", fontSize: 66 }} />
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

          <SectionHeader>Popular</SectionHeader>

          <TrackList />

          <div>
            <ContentSliderSection
              title={getTitle("artist-albums") + artist.name}
              url={"/more/artist-albums?q=123&artist=Billie&type=album"}
            />

            <ContentSliderSection
              title={getTitle("similar-artists")}
              url={"/more/similar-artists?q=456&type=artist"}
            />

          </div>
        </Container>
      </div>
    </>
  );
}
