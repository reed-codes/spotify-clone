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
  border: "1px rgb(30,30,30,.15) solid",
  paddingRight: 5

};

const CardImgWrapper = styled.div`
  position: relative;
  background: #333;
  height: 100px;
  width: 100px;
`;

function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

export default function EditorsPickCard(props) {
  const router = useRouter()
  const { cover_medium: cover, title, artist, id } = props.album;
  const { colors } = useImageColor(cover, { cors: true, colors: 5 });
  const [showPlayBtn, setShowPlayBtn] = useState(false)


  return (
    <Tooltip title="click to open" placement="bottom" arrow>
      <motion.div>
        <Card
          style={CARD_STYLE}
          className="editors-pick-card"
          onClick={() => {
            router.push(`/album?q=${id}&type=album`)
          }}
          onMouseEnter={() => {
            const backgrounGradientEffect = document.querySelector(
              "#background-gradient-effect"
            );
            if (backgrounGradientEffect && colors)
              backgrounGradientEffect.style.background = colors[0];
              // backgrounGradientEffect.style.background = LightenDarkenColor(colors[0], -70);

            setShowPlayBtn(true)
          }}

          onMouseLeave={() => { setShowPlayBtn(false) }}
        >

          <CardImgWrapper>
            <Box sx={{ boxShadow: 10 }}>
              <CardMedia
                component="img"
                sx={{ height: 100, width: 100, minHeight: 100, minWidth: 100 }}
                image={cover}
                alt={title}
                className = "pointer-events-none"
              />
            </Box>

          </CardImgWrapper>


          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", padding: "10px !important" }}>
              <Typography
                component="div"
                variant="h6"
                style={{ fontSize: "1.00rem", fontWeight: 700 }}
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

          <Box sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60 }}>
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
              {<MediaPlayBtn item={props.album} show={showPlayBtn} />}
            </div>
          </Box>


        </Card>
      </motion.div>
    </Tooltip>
  );
}
