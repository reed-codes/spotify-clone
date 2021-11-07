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
  const {charting, hotNewReleases} = useSelector(state => state.musicData)

  let content = [];

  if(slug == "top-tracks")
   {
        content = charting.tracks.data.map(track => {
          return <TrackCard key = {track.id}
                            track = {track} 
                             />
         })
   }
   else if(slug == "top-albums")
   {
        content = charting.albums.data.map(album => {
          return <AlbumCard key = {album.id}
                            album = {album} 
                            />
        })
   }
   else if(slug == "top-playlists")
   {
    content = charting.playlists.data.map(playlist => {
          return <PlaylistCard key = {playlist.id}
                              playlist = {playlist} 
                              />
      })
   }
   else if(slug == "top-artists")
   {
    content = charting.artists.data.map(artist => {
      return <ArtistCard   key = {artist.id}
                           artist = {artist} 
                          />
  })
   }
   else if(slug == "new-releases"){
    content = hotNewReleases.data.map(album => {
      return <AlbumCard   key = {album.id}
                           album = {album} 
                          />
  })
   }
   else if(slug == "episodes-for-you"){
    content =  charting.podcasts.data.map(podcast => {
      return <PodcastCard   key = {podcast.id}
                            podcast = {podcast} 
                          />
  })
   }


console.log(charting, hotNewReleases)

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
