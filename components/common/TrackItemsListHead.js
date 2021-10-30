import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const TrackItemWrapper = styled.div`
  border: 1px solid transparent;
  height: 60px;
  padding: 5px 16px;
  margin-bottom:10px;
  display:flex;
  align-items:center; 
  cursor:default;
  border-bottom:1px rgba(225, 225, 255,.1) solid;
`;

const TrackNumberWrapper = styled.div`
  height: 100%;
  width: 35px;
  padding-left:5px;
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
flex:1;
margin-right: 16px;
`

const TrackAlbumWrapper = styled.div`
display: flex;
align-items:center;
white-space: unset;
width:250px;
min-width:250px;
overflow: hidden;
text-overflow: ellipsis;
font-size: 14px;
font-weight: 400;
letter-spacing: normal;
line-height: 16px;
text-transform: none;
margin-right: 16px;
`

const TrackDurationWrapper = styled.div`
color: rgb(179, 179, 179);
display: flex;
font-variant-numeric: tabular-nums;
align-tems:center;
width: 40px;
min-width: 40px;
font-size: 14px;
font-weight: 400;
letter-spacing: normal;
line-height: 16px;
text-transform: none;
`

const TrackItemsListHead = ({hideAlbumColumn, maxWidth780px}) => {
  return (
      <TrackItemWrapper className = 'track-item-wrapper'>
        <TrackNumberWrapper className="d-flex align-items-center">
             #
        </TrackNumberWrapper>

       <TrackCoverArtWrapper/>

        <TrackDetailsWrapper className="d-flex align-items-center">
            Title
        </TrackDetailsWrapper>

        {
            !hideAlbumColumn && (
                !maxWidth780px && (
                    <TrackAlbumWrapper className="d-flex align-items-center">
                      Album
                  </TrackAlbumWrapper>
                )
            )
        }

        <span style = {{ marginRight: 16 }}>
                    <FavoriteOutlinedIcon style={{ opacity : 0 }} /> 
        </span>

        <TrackDurationWrapper >
             <Tooltip title = "duration" placement="top">
              <IconButton>
                <AccessTimeIcon style = {{color :'#fff'}}/>
              </IconButton>
            </Tooltip>
        </TrackDurationWrapper>


      </TrackItemWrapper>
  );
};

export default TrackItemsListHead;
