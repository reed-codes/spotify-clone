import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SectionHeader, Container } from "../styles/utils";
import { getTitle, removeObjectDuplicates } from "../utils";
import { intiMusic } from "../state/actions/music-data-actions";
import EditorsPickGridSection from "../components/EditorsPickSection";
import { useSelector } from "react-redux";
import ContentSliderSection from "../components/common/ContentSliderSection";
import TrackCard from '../components/common/media-cards/TrackCard'
import AlbumCard from '../components/common/media-cards/AlbumCard'
import PodcastCard from '../components/common/media-cards/PodcastCard'
import PlaylistCard from '../components/common/media-cards/PlaylistCard'
import ArtistCard from '../components/common/media-cards/ArtistCard'

export default function Home(props) {
  const dispatch = useDispatch()
  const musicContent = useSelector(state => state.musicData)

  useEffect(() => {

    axios.get('/api/get-new-releases')
      .then((res) => {
        if (!props.err) {
          let new_releases = removeObjectDuplicates(res.data.tracklist)
          let content = {
            ...props,
            new_releases,
            new_releases_top_six: new_releases.slice(0, 6)
          }
          dispatch(intiMusic(content))
        }
      })
      .catch(err => {
        console.log(err.message)
        alert("ERR : " + err.message)
      })

  }, [])


  return (
    <Container className="content-wrapper" >
      <SectionHeader>Good afternoon </SectionHeader>
      <EditorsPickGridSection data={musicContent.albums_top_six} />


      <ContentSliderSection title={getTitle("top-tracks")}
        url={"/more/top-tracks"}
      >
        {
          musicContent.tracks_top_six.map(track => {
            return <TrackCard key={track.id}
              track={track}
            />
          })
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-playlists")}
        url={"/more/top-playlists"}
      >
        {
          musicContent.playlists_top_six.map(playlist => {
            return <PlaylistCard key={playlist.id}
              playlist={playlist}
            />
          })
        }

      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-albums")}
        url={"/more/top-albums"}
      >
        {
          musicContent.albums_top_six.map(album => {
            return <AlbumCard key={album.id}
              album={album}
            />
          })
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle("top-artists")}
        url={"/more/top-artists"}
      >
        {
          musicContent.artists_top_six.map(artist => {
            return <ArtistCard key={artist.id}
              artist={artist}
            />
          })
        }
      </ContentSliderSection>


      <ContentSliderSection title={getTitle(`episodes-for-you`)}
        url={"/more/episodes-for-you"}
      >
        {
          musicContent.podcasts_top_six.map(podcast => {
            return <PodcastCard key={podcast.id}
              podcast={podcast}
            />
          })
        }
      </ContentSliderSection>



      <ContentSliderSection title={getTitle("new-releases")}
        url={"/more/new-releases"}
      >
        {
          musicContent.new_releases_top_six.map(album => {
            return <AlbumCard key={album.id}
              album={album}
            />
          })
        }
      </ContentSliderSection>


    </Container>
  );

}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  try {
    const { data: pop_resulsts } = await axios.get("https://api.deezer.com/editorial/132/charts?limit=7")
    const { data: rap_resulsts } = await axios.get("https://api.deezer.com/editorial/116/charts?limit=7")
    const { data: r_and_b_resulsts } = await axios.get("https://api.deezer.com/editorial/165/charts?limit=7")
    const { data: alternative_results } = await axios.get("https://api.deezer.com/editorial/85/charts?limit=7")
    const { data: podcast_results } = await axios.get("https://api.deezer.com/chart/0/podcasts?limit=0")

    if (pop_resulsts && rap_resulsts && r_and_b_resulsts && alternative_results && podcast_results) {
      let tracks = [...pop_resulsts.tracks.data, ...rap_resulsts.tracks.data, ...r_and_b_resulsts.tracks.data, ...alternative_results.tracks.data];
      let playlists = [...pop_resulsts.playlists.data, ...rap_resulsts.playlists.data, ...r_and_b_resulsts.playlists.data, ...alternative_results.playlists.data];
      let artists = [...pop_resulsts.artists.data, ...rap_resulsts.artists.data, ...r_and_b_resulsts.artists.data, ...alternative_results.artists.data];
      let albums = [...pop_resulsts.albums.data, ...rap_resulsts.albums.data, ...r_and_b_resulsts.albums.data, ...alternative_results.albums.data];
      let podcasts = podcast_results.data;

      return {
        props: {
          tracks: removeObjectDuplicates(tracks),
          playlists: removeObjectDuplicates(playlists),
          albums: removeObjectDuplicates(albums),
          podcasts: removeObjectDuplicates(podcasts),
          artists: artists,
          err: null
        }
      }

    } else {

      return {
        props: {
          tracks: [],
          playlists: [],
          artists: [],
          albums: [],
          podcasts: [],
          err: "ONE_OR_MORE_RESULTS_WERE_NOT_AS_EXPECTED"
        }
      }

    }


  } catch (err) {
    return {
      props: {
        tracks: [],
        playlists: [],
        artists: [],
        albums: [],
        podcasts: [],
        err: err.message
      }
    }

  }

}
