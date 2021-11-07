import styled from "styled-components";
import ArtistCard from "./ArtistCard";
import Link from "next/link";
import Box from "@mui/material/Box";
import { SectionHeader } from "../../styles/utils";

const SeeAllLink = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 16px;
  text-transform: uppercase;
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 35px;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ContentSliderSection = ({ title, url, children }) => {
  return (
    <Box sx = {{ position:'relative', mt: 3 }}>
      <SectionHeader>{title}</SectionHeader>

      <Link href={url} passHref={true}>
        <SeeAllLink>see all</SeeAllLink>
      </Link>

      <Box
        component="div"
        sx={{ overflow: "auto", my: 2, display: "flex", gap: 2, marginBottom:'10px', alignItems:'stretch' }}
      >
        {/* <ArtistCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard /> */}

        { children }

      </Box>
    </Box>
  );
};

export default ContentSliderSection;
