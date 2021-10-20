import {useState} from 'react'
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from "@mui/material/Button";
import Link from 'next/link'

const CardWrapper = styled.a`
width:185px;
min-width:185px;
max-width:185px;
isolation: isolate;
margin-right:1.6%;
margin-bottom:20px;
transition: all .2s; linear;
`;

const Card = styled.div`
-webkit-box-flex: 1;
background: #181818;
border-radius: 4px;
-ms-flex: 1;
flex: 1;
padding: 10px;
position: relative;
width: 100%;
transition: all .2s; linear;
&:hover{
      background: #383838;
      color:#fff
}
`;

const InnerCard = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
  cursor:pointer
`;

const CardCoverImageWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const CardCoverImage = styled.img`
  border-radius: 2px;
  height: 165px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius:50%;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  boxShadow:'0 8px 8px rgb(0 0 0 / 30%)'
};

const ArtistCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikeBtnClick = ()=> setIsLiked(!isLiked)
  
  return (
    <Link href = "/artist">
    <CardWrapper>
    <Card className="media-card">
      <InnerCard>
        <CardCoverImageWrapper>
          <CardCoverImage src={"https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/250x250-000000-80-0-0.jpg"} alt="" />

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
          <CardHeader>Lana del Rey</CardHeader>

          <CardBody>Artist</CardBody>
        </CardContentWrapper>
      </InnerCard>
    </Card>
    </CardWrapper>
    </Link>
  );
};


export default ArtistCard