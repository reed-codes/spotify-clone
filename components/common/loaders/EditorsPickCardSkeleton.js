import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { motion } from "framer-motion";
import Skeleton from '@mui/material/Skeleton';

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

export default function EditorsPickCardSkeleton() {
  return (
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 3 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Card
          style={CARD_STYLE}
          className="editors-pick-card"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", padding: "10px !important" }}>

              <Skeleton width={110} height={35}/>
              <Skeleton width={60} height={35}/>

            </CardContent>
          </Box>

          <CardImgWrapper>
          </CardImgWrapper>
        </Card>
      </motion.div>
  );
}
