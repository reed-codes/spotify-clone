import React, { useEffect } from "react";
import axios from "axios";
import { SectionHeader, Container } from "../styles/utils";
import { getTitle, getMediaCardPlaceholders } from "../utils";
import { intiMusic, endLoading } from "../state/actions/music-data-actions";
import EditorsPickGridSection from "../components/EditorsPickSection";
import { useSelector, useDispatch } from "react-redux";
import ContentSliderSection from "../components/common/ContentSliderSection";
import TrackCard from '../components/common/media-cards/TrackCard'
import AlbumCard from '../components/common/media-cards/AlbumCard'
import PodcastCard from '../components/common/media-cards/PodcastCard'
import PlaylistCard from '../components/common/media-cards/PlaylistCard'
import ArtistCard from '../components/common/media-cards/ArtistCard'

export default function Home(props) {
  const dispatch = useDispatch()
  const {
    albums_top_six,
    tracks_top_six,
    playlists_top_six,
    artists_top_six,
    podcasts_top_six,
    new_releases_top_six,
    loading
  } = useSelector(state => state.musicData);

  useEffect(() => {

    if (!albums_top_six.length) {

      axios.get('/api/get-app-content')
        .then((res) => {
          if (!props.err) {
            dispatch(intiMusic(res.data.content))
          }
          dispatch(endLoading())
        })
        .catch(err => {
          dispatch(endLoading())
          console.log(err.message)
          alert("ERR : " + err.message)
        })

    } else {
      dispatch(endLoading())
    }

  }, [])


  return (
    <Container className="content-wrapper" >
      <SectionHeader>Good afternoon </SectionHeader>
      <EditorsPickGridSection data={albums_top_six} />

      <ContentSliderSection title={getTitle("top-tracks")}
        url={"/more/top-tracks"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            tracks_top_six.map(track => {
              return <TrackCard key={track.id}
                track={track}
              />
            })
          )
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-playlists")}
        url={"/more/top-playlists"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            playlists_top_six.map(playlist => {
              return <PlaylistCard key={playlist.id}
                playlist={playlist}
              />
            })
          )
        }

      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-albums")}
        url={"/more/top-albums"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            albums_top_six.map(album => {
              return <AlbumCard key={album.id}
                album={album}
              />
            })
          )
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-artists")}
        url={"/more/top-artists"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            artists_top_six.map(artist => {
              return <ArtistCard key={artist.id}
                artist={artist}
              />
            })
          )
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle(`episodes-for-you`)}
        url={"/more/episodes-for-you"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            podcasts_top_six.map(podcast => {
              return <PodcastCard key={podcast.id}
                podcast={podcast}
              />
            })
          )
        }
      </ContentSliderSection>



      <ContentSliderSection title={getTitle("new-releases")}
        url={"/more/new-releases"}
      >
        {
          loading ? (
            getMediaCardPlaceholders(6)
          ) : (
            new_releases_top_six.map(album => {
              return <AlbumCard key={album.id}
                album={album}
              />
            })
          )
        }
      </ContentSliderSection>


    </Container>
  );

}
