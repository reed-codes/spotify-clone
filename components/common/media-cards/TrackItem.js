import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { WaveSpinner } from "react-spinners-kit";
import moment from 'moment';


const TrackItemWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  height: 60px;
  position: relative;
  padding: 5px 16px;
  display: flex;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TrackNumberWrapper = styled.div`
  height: 100%;
  width: 40px;
`;

const TrackCoverArtWrapper = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  margin-right: 16px;
`;

const TrackDetailsWrapper = styled.div`
  padding-right: 8px;
  height: 100%;
  flex: 1;
  margin-right: 16px;
`;

const TrackTitleWrapper = styled.div`
  color: ${({ isPlaying }) => (isPlaying ? "#1db954" : "#fff")};
  grid-area: title;
  justify-self: start;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: unset;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  text-transform: none;
`;

const TrackArtistWrapper = styled.span`
grid-area: title;
justify-self: start;
display: inline;
white-space: unset;
word-break: break-all;
overflow: hidden;
text-overflow: ellipsis;
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 24px;
text-transform: none;
  color: #b3b3b3;
  font-size: 11px;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const TrackAlbumWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: unset;
  min-width: 250px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const TrackDurationWrapper = styled.div`
  color: rgb(179, 179, 179);
  display: flex;
  font-variant-numeric: tabular-nums;
  align-tems: center;
  width: 40px;
  min-width: 40px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
`;

const TrackItem = ({ hideAlbumColumn, maxWidth780px, track, position }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const duration = moment.utc(track.duration*1000).format('mm:ss');

  const handleLikeBtnClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handlePlayRequest = () => {
       console.log("PLAY REQUEST FOR ",[track])
       setIsPlaying(!isPlaying)
  };

  return (
    <TrackItemWrapper
      className="track-item-wrapper"
      onClick={handlePlayRequest}
    >
      <TrackNumberWrapper className="d-flex align-items-center">
        <span className="track-number-and-wave-animation-wrapper">
          {isPlaying ? (
            <WaveSpinner size={9} color="#1db954" />
          ) : (
            <span className="ms-1">{position}</span>
          )}
        </span>

        <span className="track-play-icon">
          {isPlaying ? (
            <Tooltip title="Pause" placement="top">
              <IconButton style={{ padding: 0 }}>
                <PauseIcon style={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={`Play ${track.title} by ${track.artist.name}`} placement="top">
              <IconButton style={{ padding: 0 }}>
                <PlayArrowIcon style={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          )}
        </span>
      </TrackNumberWrapper>

      <TrackCoverArtWrapper className="d-flex justify-content-center align-items-center">
        <img
          src={track.album.cover_small}
          alt={track.title}
          style={{
            height: "100%",
            width: "100%",
            background: "#000",
            objectFit: "cover",
          }}
        />
      </TrackCoverArtWrapper>

      <TrackDetailsWrapper>
        <TrackTitleWrapper isPlaying={isPlaying}>
        {track.title}
        </TrackTitleWrapper>

        <Link href="/" passHref={true}>
          <a>
            <TrackArtistWrapper>{track.artist.name}</TrackArtistWrapper>
          </a>
        </Link>
      </TrackDetailsWrapper>


      {
        !hideAlbumColumn && (
          !maxWidth780px && <TrackAlbumWrapper>{track.album.title}</TrackAlbumWrapper>
        )
      }

      <span style={{ marginRight: 16 }} onClick={handleLikeBtnClick}>
        {isLiked ? (
          <Tooltip title="Remove from Your Library" placement="top">
            <IconButton>
              <FavoriteOutlinedIcon
                style={{ color: "#1db954", opacity: 1 }}
                id="like-icon"
                className="track-item-show-on-hover-icon"
              />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Save to Your Library" placement="top">
            <IconButton>
              <FavoriteBorderIcon
                style={{ color: "#fff", opacity: 0 }}
                id="liked-icon"
                className="track-item-show-on-hover-icon"
              />
            </IconButton>
          </Tooltip>
        )}
      </span>

      <TrackDurationWrapper>{duration}</TrackDurationWrapper>
    </TrackItemWrapper>
  );
};

export default TrackItem;
