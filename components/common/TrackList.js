import { useEffect, useContext } from "react";
import TrackItem from "./media-cards/TrackItem";
import TrackItemsListHead from "./TrackItemsListHead";
import { useMediaQuery } from "@mui/material";
import axios from 'axios'
import { v4 } from 'uuid'
import { getTrackItemPlaceholders } from "../../utils";
import { AudioPlayerContext } from "../../state/context/AudioPlayerContext";

const TrackList = (props) => {
  const {
    currentTrack,
    isPlaying,
    handleTrackListInit,
    handlePause,
    handlePlay,
    currentCollection
  } = useContext(AudioPlayerContext)
  const maxWidth780px = useMediaQuery('( max-width : 780px )');

  useEffect(() => {

    if (props.type === "album" || props.type === "artist") {

      axios.post("/api/get-tracklist", {
        url: props.tracklist_url
      }).then(({ data }) => {

        if (props.type === "album") {
          let new_list = data.tracklist.map(track => {
            return {
              ...track,
              album: props.album
            }
          })

          props.setTracklist({
            ...props.tracklist,
            list: new_list,
            loading: false
          })
        }
        else if (props.type === "artist") {

          props.setTracklist({
            ...props.tracklist,
            list: data.tracklist,
            loading: false
          })
        }
      })
        .catch(err => {
          console.log(err.message)
          props.setTracklist({
            ...props.tracklist,
            loading: false,
            err: err
          })
        })

    }

  }, [])

  const handlePlayRequest = (trackID) => {

    if ((String(currentCollection) === String(props.id)) && (currentTrack.id === trackID)) {
      if (isPlaying) handlePause()
      else handlePlay()
    }
    else {
      const payload = {
        collection: props.id,
        trackID,
        list: props.tracklist.list,
        pointer: true
      }
      handleTrackListInit(payload)

    }
  }


  return (
    <div>
      <TrackItemsListHead hideAlbumColumn={props.hideAlbumColumn} maxWidth780px={maxWidth780px} />
      {
        (props.tracklist.loading && !props.tracks) ? (
          getTrackItemPlaceholders(4)
        ) : (

          props.tracklist.list.map((track, i) => {
            const isCurrentPlaying = currentTrack ? (String(currentTrack.id) === String(track.id)) : false

            return (
              <TrackItem hideAlbumColumn={props.hideAlbumColumn}
                maxWidth780px={maxWidth780px}
                track={track}
                position={(i + 1)}
                isPlaying={isPlaying} //IS ANY TRACK PLAYING
                isCurrentPlaying={isCurrentPlaying} //IF SO IT THIS THE TRACK THATS PLAYING
                handlePlayRequest={handlePlayRequest}
                key={v4()}
              />
            )
          })
        )
      }

    </div>
  );
};

export default TrackList;
