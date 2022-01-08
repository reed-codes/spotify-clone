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
  min-height: 100px;
  min-width: 100px;
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
          <CardImgWrapper/>
          
          <Box sx={{ display: "flex", flexDirection: "column", width:'100%' }}>
            <CardContent sx={{ flex: "1 !important", padding: "10px !important" }}>
                  <Skeleton width={"100%"} height={35}/>
                  <Skeleton width={60} height={35}/>
            </CardContent>
          </Box>
        </Card>
      </motion.div>
  );
}
