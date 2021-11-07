import React, {useEffect} from "react";
import { SectionHeader } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";
import {Container} from '../styles/utils'
import axios from "axios";
import { useDispatch } from "react-redux";
import { intiMusic } from "../state/actions/music-data-actions";
import TrackCard from '../components/common/TrackCard'
import AlbumCard from '../components/common/AlbumCard'
import PodcastCard from '../components/common/PodcastCard'
import PlaylistCard from '../components/common/PlaylistCard'
import ArtistCard from '../components/common/ArtistCard'

export default function Home(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    if(props.charting && props.editorial) dispatch( intiMusic(props) )
  }, [])

  let top6Charting = {
        tracks : props.charting ? props.charting.tracks.data.slice(0,6) : [],  
        albums : props.charting ? props.charting.albums.data.slice(0,6) : [],  
        playlists : props.charting ? props.charting.playlists.data.slice(0,6) : [],  
        artists : props.charting ? props.charting.artists.data.slice(0,6) : [],  
        newReleases : props.hotNewReleases ? props.hotNewReleases.data.slice(0,6) : [],  
        podcasts : props.charting ? props.charting.podcasts.data.slice(0,6) : [],  
  }

  return (
    <Container className = "content-wrapper" >
      <SectionHeader>Editor's pick</SectionHeader>
      <EditorsPickGrid/>

      <ContentSliderSection title = { getTitle( "top-tracks" ) } 
                            url = { "/more/top-tracks?type=track&q=098" }
                            >
                          {
                              top6Charting.tracks.map(track => {
                                  return <TrackCard key = {track.id}
                                                    track = {track} 
                                                     />
                              })
                          }

      </ContentSliderSection>


      <ContentSliderSection title = { getTitle( "top-albums" ) } 
                            url = { "/more/top-albums?type=album&q=876" }
                            >
                          {
                              top6Charting.albums.map(album => {
                                  return <AlbumCard key = {album.id}
                                                    album = {album} 
                                                     />
                              })
                          }
      </ContentSliderSection>


      <ContentSliderSection title = { getTitle( "top-playlists" ) } 
                            url = { "/more/top-playlists?type=playlist&q=654" }
                            >
                          {
                              top6Charting.playlists.map(playlist => {
                                  return <PlaylistCard key = {playlist.id}
                                                       playlist = {playlist} 
                                                      />
                              })
                          }

      </ContentSliderSection>


      <ContentSliderSection title = { getTitle( "top-artists" ) } 
                            url = { "/more/top-artists?type=playlist&q=321" }
                            >
                          {
                              top6Charting.artists.map(artist => {
                                  return <ArtistCard   key = {artist.id}
                                                       artist = {artist} 
                                                      />
                              })
                          }
      </ContentSliderSection>



      <ContentSliderSection title = { getTitle( `new-releases` ) } 
                            url = { "/more/new-releases?type=album&q=632" }
                            >
                          {
                              top6Charting.newReleases.map(album => {
                                  return <AlbumCard   key = {album.id}
                                                       album = {album} 
                                                      />
                              })
                          }
      </ContentSliderSection>


      <ContentSliderSection title = { getTitle( `episodes-for-you` ) } 
                            url = { "/more/episodes-for-you?type=album&q=632" }
                            >
                          {
                              top6Charting.podcasts.map(podcast => {
                                  return <PodcastCard   key = {podcast.id}
                                                        podcast = {podcast} 
                                                      />
                              })
                          }
      </ContentSliderSection>


      {/* <ContentSliderSection title = { getTitle( "top-playlists" ) } 
                            url = { "/more/top-playlists?type=playlist&q=654" } */}
                             {/* /> */}
      {/* <ContentSliderSection title = { getTitle( "top-artists" ) } 
                            url = { "/more/top-artists?type=playlist&q=321" }
                              /> */}
      {/* <ContentSliderSection title = { getTitle( `new-releases` ) } 
                            url = { "/more/new-releases?type=playlist&q=632" }
                             /> */}
    </Container>
  );

}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  try{
    const {data : charting} = await axios.get('https://api.deezer.com/chart')
    const {data: editorial} = await axios.get('https://api.deezer.com/editorial/0/charts')
    const {data: hotNewReleases} = await axios.get('https://api.deezer.com/editorial/0/releases')

    
    return { props: { charting, editorial, hotNewReleases } }

  }catch(err){
    console.log(err.message)
    return { 
          props: { 
            charting: null,
            editorial : null,
            hotNewReleases : null
          }
       }
  }

}
