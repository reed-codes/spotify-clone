import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import useImageColor from "use-image-color";
import MediaPlayBtn from "./common/media-player-btns/MediaPlayBtn";
import { motion } from "framer-motion";
import { trimText } from "../utils";

const CARD_STYLE = {
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(155,155,155,.1)",
  minWidth: 247,
  cursor: "pointer",
  margin: 0,
  color: "#fff",
  position: "relative",
  zIndex: 10,
  border: "1px rgb(30,30,30,.1) solid",
};

const CardImgWrapper = styled.div`
  position: relative;
  background: #333;
  height: 100px;
  width: 100px;
`;

export default function EditorsPickCard(props) {
  const router = useRouter()
  const { cover_medium: cover, title, artist, id, tracklist } = props.album;
  const { colors } = useImageColor(cover, { cors: true, colors: 5 });
  const [showPlayBtn, setShowPlayBtn] = useState(false)

  return (
    <Tooltip title="click to open" placement="bottom" arrow>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 3 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Card
          style={CARD_STYLE}
          className="editors-pick-card"
          onClick = {()=>{
              router.push(`/album?q=${id}&type=album`)
          }}
          onMouseEnter = {() => {
            const backgrounGradientEffect = document.querySelector(
              "#background-gradient-effect"
            );
            if (backgrounGradientEffect && colors)
              backgrounGradientEffect.style.background = colors[0];

            setShowPlayBtn(true)
          }}

          onMouseLeave = {() => { setShowPlayBtn(false) }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", padding: "10px !important" }}>
              <Typography
                component="div"
                variant="h6"
                style={{ fontSize: "1.1rem", fontWeight: 700 }}
              >
                {trimText(title, 30)}
              </Typography>

              <Typography
                component="small"
                style={{
                  fontSize: 13,
                  opacity: 0.6,
                }}
              >
                {trimText(artist.name, 30)}
              </Typography>
            </CardContent>
          </Box>

          <CardImgWrapper>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "absolute",
                top: 0,
                left: 0,
              }}

            >
              {showPlayBtn && <MediaPlayBtn item = {props.album}/>}
            </div>

            <CardMedia
              component="img"
              sx={{ height: 100, width: 100 }}
              image={cover}
              alt={title}
            />
          </CardImgWrapper>
        </Card>
      </motion.div>
    </Tooltip>
  );
}
