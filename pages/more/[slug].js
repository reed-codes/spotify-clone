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

export default function More(){
  const router = useRouter();
  const { slug, artist } = router.query;
  const title = artist ? getTitle(slug) + artist : getTitle(slug);
  const musicData = useSelector(state => state.musicData)

  return (
    <Container className = "content-wrapper" >
      <SectionHeader>{title}</SectionHeader>

      <div style ={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          { renderContent(slug, musicData)}
      </div>

    </Container>
  );
};

const renderContent = (slug, data)=>{
          switch(slug){
            case "top-tracks" : 
   
            return(  data.tracks.map(track => {
             return <TrackCard key = {track.id}
                               track = {track} 
                                />
            })
            )
      
      case "top-albums" : 
      
            return(  data.albums.map(album => {
             return <AlbumCard key = {album.id}
                               album = {album} 
                               />
           })
           )
      
      case "top-playlists" : 
      
        return(  data.playlists.map(playlist => {
             return <PlaylistCard key = {playlist.id}
                                 playlist = {playlist} 
                                 />
         })
         )
      
      case "top-artists" : 
      
        return(  data.artists.map(artist => {
         return <ArtistCard   key = {artist.id}
                              artist = {artist} 
                             />
     })
     )
      
   
      case "episodes-for-you" : 
        return(  data. podcasts.map(podcast => {
         return <PodcastCard   key = {podcast.id}
                               podcast = {podcast} 
                             />
     })
     )
    default : return "EISH"   
          }
  

}
