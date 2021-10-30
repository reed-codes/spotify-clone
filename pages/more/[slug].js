import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import RenderPlaylists from "../../components/common/RenderPlaylists";
import RenderAlbums from "../../components/common/RenderAlbums";
import RenderArtists from "../../components/common/RenderArtists";
import RenderTrackCards from "../../components/common/RenderTrackCards";
import { SectionHeader, Container } from "../../styles/utils";
import { getTitle } from "../../utils";

const More = () => {
  const router = useRouter();
  const { slug, q, artist, type } = router.query;
  const title = artist ? getTitle(slug) + artist : getTitle(slug);

  return (
    <Container className = "content-wrapper" >
      <SectionHeader>{title}</SectionHeader>

      <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {type == "track" && <RenderTrackCards />}
        {type == "album" && <RenderAlbums />}
        {type == "playlist" && <RenderPlaylists />}
        {type == "artist" && <RenderArtists />}
      </Box>
    </Container>
  );
};

export default More;
