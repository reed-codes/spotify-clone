import {useState} from 'react'
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from "@mui/material/Button";
import Link from 'next/link'
import Box from '@mui/material/Box';


const Card = styled.div`
background: #181818;
border-radius: 4px;
flex: 1;
padding: 20px 15px;
position: relative;
width: 100%;
transition: all .2s linear;
box-shadow: 0 8px 24px rgb(0 0 0 / 10%);
&:hover{
      background: #383838;
      color:#fff
}
`;


const CardCoverImageWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const CardCoverImage = styled.img`
 background-color: #333;
  border-radius: 2px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height:130px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
`;
const CardContentWrapper = styled.div`
  min-height: 62px;
`;
const CardHeader = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 24px;
  text-transform: none;
`;

const CardBody = styled.div`
  color: rgb(179, 179, 179);
  display: -webkit-box;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
`;

const MediaCardOnHoverBtnWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
`;

const MEDIA_CARD_BTN = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  width: 40,
  borderRadius: "50%",
  margin: 3,
  minWidth: "unset",
  background: "#1db954",
  cursor: "default",
  boxShadow:'5px 5px 5px rgba(0,0,0,.4)'
};

const MediaCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeBtnClick = ()=> setIsLiked(!isLiked)
  
  return (
    <Link href = "/album">
        <a>
      <Box  className = "media-card-wrapper" >

    <Card className="media-card">
      <Box sx = {{
          height: '100%',
          position: 'relative',
          zIndex: 1,
          cursor:'pointer'
      }}>
        <CardCoverImageWrapper>
          <CardCoverImage src={"https://e-cdns-images.dzcdn.net/images/cover/63af28b4e046c59293eaf313be13f8f7/250x250-000000-80-0-0.jpg"} alt="" />

          <MediaCardOnHoverBtnWrapper className="media-card-on-hover-btn-wrapper">
            <Button
              style={MEDIA_CARD_BTN}
            >
              <PlayArrowIcon style={{ color: "#fff" }} />
            </Button>

            <Button
              style={MEDIA_CARD_BTN}
              className="media-card-on-hover-like-btn"
              onClick = {handleLikeBtnClick}
            >

              {
                isLiked ? <FavoriteOutlinedIcon style={{ color: "#1db954" }} />  : <FavoriteBorderIcon style={{ color: "#fff" }} />
              }

            </Button>
          </MediaCardOnHoverBtnWrapper>
        </CardCoverImageWrapper>

        <CardContentWrapper>
          <CardHeader>Daily Mix 1</CardHeader>

          <CardBody>Doja Cat, Billie Eilish, MARINA and more</CardBody>
        </CardContentWrapper>
      </Box>
    </Card>
        </Box>
        </a>
        </Link>
  );
};


export default MediaCard