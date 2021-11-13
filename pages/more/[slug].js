import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import PlaylistCard from "../../components/common/PlaylistCard";
import AlbumCard from "../../components/common/AlbumCard";
import ArtistCard from "../../components/common/ArtistCard";
import TrackCard from "../../components/common/TrackCard";
import PodcastCard from "../../components/common/PodcastCard";
import { SectionHeader, Container } from "../../styles/utils";
import { getTitle } from "../../utils";
import { useSelector } from 'react-redux'

const More = () => {
  const router = useRouter();
  const { slug, artist } = router.query;
  const title = artist ? getTitle(slug) + artist : getTitle(slug);
  const {tracks, albums, playlists, artists, podcasts} = useSelector(state => state.musicData)

  let content = [];

  if(slug == "top-tracks")
   {
        content = tracks.map(track => {
          return <TrackCard key = {track.id}
                            track = {track} 
                             />
         })
   }
   else if(slug == "top-albums")
   {
        content = albums.map(album => {
          return <AlbumCard key = {album.id}
                            album = {album} 
                            />
        })
   }
   else if(slug == "top-playlists")
   {
    content = playlists.map(playlist => {
          return <PlaylistCard key = {playlist.id}
                              playlist = {playlist} 
                              />
      })
   }
   else if(slug == "top-artists")
   {
    content = artists.map(artist => {
      return <ArtistCard   key = {artist.id}
                           artist = {artist} 
                          />
  })
   }

   else if(slug == "episodes-for-you"){
    content =  podcasts.map(podcast => {
      return <PodcastCard   key = {podcast.id}
                            podcast = {podcast} 
                          />
  })
   }


  return (
    <Container className = "content-wrapper" >
      <SectionHeader>{title}</SectionHeader>

      <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
           {content.map(mediaItem => mediaItem )}
      </Box>
    </Container>
  );
};

export default More;
