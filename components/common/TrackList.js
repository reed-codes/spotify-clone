import { useState, useEffect } from "react";
import TrackItem from "./TrackItem";
import TrackItemsListHead from "./TrackItemsListHead";
import { useMediaQuery } from "@mui/material";
import axios from 'axios'
import {v4} from 'uuid'
import { getTrackItemPlaceholders } from "../../utils";

const TrackList = ({ hideAlbumColumn, tracklist_url, tracks, type, album }) => {
  const maxWidth780px = useMediaQuery('( max-width : 780px )');
  const [tracklist, setTracklist] = useState( {
    list :tracks ? tracks : [],
    loading : true,
    err : null
  } );

useEffect(() => {

    if(type === "album")
     {

      axios.post("/api/get-album-tracks", {
        url : tracklist_url
      }).then( ({ data }) => {
           let new_list =  data.tracklist.map(track=>{
                 return {
                      ...track,
                      album
                 }
           })
          
           setTracklist({
                 ...tracklist,
                 list : new_list,
                 loading:false
           })
       })
      .catch(err => {
        console.log(err.message)
        setTracklist({
          ...tracklist,
          loading:false,
          err:err
    })
      })

     }

}, [])


  return (
    <div>
      <TrackItemsListHead hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
      {
         ( tracklist.loading && !tracks ) ? (
              getTrackItemPlaceholders(4)
         ) : (

          tracklist.list.map( (track, i) => {
            return (
                  <TrackItem hideAlbumColumn={hideAlbumColumn}
                             maxWidth780px={maxWidth780px}
                             track = {track}
                             position = { (i + 1) } 
                             key = {v4()}
                             />
                 )
            })
         )
      }
     
      </div>
  );
};

export default TrackList;
