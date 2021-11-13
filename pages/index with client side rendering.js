import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SectionHeader, Container } from "../styles/utils";
import { getTitle } from "../utils";
import { intiMusic } from "../state/actions/music-data-actions";
import EditorsPickGridSection from "../components/EditorsPickSection";
import { useSelector } from "react-redux";
import ContentSliderSection from "../components/common/ContentSliderSection";
import TrackCard from '../components/common/TrackCard'
import AlbumCard from '../components/common/AlbumCard'
import PodcastCard from '../components/common/PodcastCard'
import PlaylistCard from '../components/common/PlaylistCard'
import ArtistCard from '../components/common/ArtistCard'
import useSWR from 'swr'
import { getMediaCardPlaceholders } from "../utils";


const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Home(props) {
  const dispatch = useDispatch()
  const musicContent = useSelector(state => state.musicData)
  const { data, error } = useSWR('/api/music-content', fetcher)

  useEffect(() => {

    if (data) {
      if (!data.content.err) dispatch(intiMusic(data.content))
      else console.lot(data.content.err)
    } else {
      if (error) console.log(error)
    }

  }, [data])


  return (
    <Container className="content-wrapper" >
      <SectionHeader>Good afternoon </SectionHeader>
      <EditorsPickGridSection data={musicContent.albums_top_six} />

      <ContentSliderSection title={getTitle("top-tracks")}
        url={"/more/top-tracks"}
      >

        {
          data ? (
            musicContent.tracks_top_six.map(track => {
              return <TrackCard key={track.id}
                track={track}
              />
            })
          )
            : (
              getMediaCardPlaceholders(6)
            )
        }

      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-albums")}
        url={"/more/top-albums"}
      >

        {
          data ? (
            musicContent.albums_top_six.map(album => {
              return <AlbumCard key={album.id}
                album={album}
              />
            })
          )
            : (
              getMediaCardPlaceholders(6)
            )
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-playlists")}
        url={"/more/top-playlists"}
      >

        {
          data ? (
            musicContent.playlists_top_six.map(playlist => {
              return <PlaylistCard key={playlist.id}
                playlist={playlist}
              />
            })
          )
            : (
              getMediaCardPlaceholders(6)
            )
        }

      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-artists")}
        url={"/more/top-artists"}
      >

        {
          data ? (
            musicContent.artists_top_six.map(artist => {
              return <ArtistCard key={artist.id}
                artist={artist}
              />
            })
          )
            : (
              getMediaCardPlaceholders(6)
            )
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle(`episodes-for-you`)}
        url={"/more/episodes-for-you"}
      >

        {
          data ? (
            musicContent.podcasts_top_six.map(podcast => {
              return <PodcastCard key={podcast.id}
                podcast={podcast}
              />
            })
          )
            : (
              getMediaCardPlaceholders(6)
            )
        }
      </ContentSliderSection>


    </Container>
  );

}
