// import tracks from '../../mocks/tracks'

const tracks = []

const player_state = {
    originalTracks : tracks,
    shuffledTracks : tracks,
    trackList : tracks,
    currentTrack : null,
    currentTrackIndex : 0,
    volume : 1, 
    trackTime:0, 
    trackProgress:0, //percentage
    trackDuration:0, //percentage
    miniPlayerPipOn : false,
    isPlaying : false,
    isLooping : false,
    isShuffling : false,
    isLoading : false,
    audioElementRef : null,
 }

 const reducer = ( state = player_state , action)=>{
   
          switch(action.type){

              case "SET_TRACK_TIME": 

                    let currentTime = action.payload;
                    let progress = parseInt( ( currentTime / state.trackDuration ) * 100 );
                        progress = progress ? progress : 0  
              
                    return { 
                             ...state,
                             trackTime : action.payload,
                             trackProgress : progress
                           }

              case "SET_TRACK_DURATION": 
                    return { 
                             ...state,
                             trackDuration : action.payload,
                           }

              case "SET_TRACK_VOLUME": 
                    return { 
                             ...state,
                             volume : action.payload
                           }


              case "SET_TRACK_LOADING": 
                    return { 
                             ...state,
                             isLoading : action.payload
                           }


              case "SET_IS_PLAYING": 
                    return { 
                             ...state,
                             isPlaying : action.payload
                           }


              case "INITIALIZE_AUDIO_REF": 
                    return { 
                             ...state,
                             audioElementRef : action.payload,
                             currentTrack : state.trackList[0]
                           }

              case "CHANGE_SONG_IN_CURRENT_LIST": 
                    let isFirstSongInList = ( state.currentTrackIndex == 0 )
                    let isLastSongInList = ( state.currentTrackIndex == ( state.trackList.length - 1 ) )
                    let newCurrentTrackIndex ;

                    if( (action.payload == 'NEXT') && isLastSongInList && state.isLooping ) 
                       {
                            newCurrentTrackIndex = 0;

                            if(state.audioElementRef)
                                state.audioElementRef.play();
                       }


                    else if( (action.payload == 'NEXT') && isLastSongInList && !state.isLooping ) 
                       {
                           newCurrentTrackIndex = 0

                           if(state.audioElementRef)
                                state.audioElementRef.pause();
                       }


                    else if( (action.payload == 'NEXT') && !isLastSongInList )
                            newCurrentTrackIndex = state.currentTrackIndex + 1

                       
                    else if( (action.payload == 'PREV') && isFirstSongInList && state.isLooping ) 
                            newCurrentTrackIndex = state.trackList.length - 1 


                    else if( (action.payload == 'PREV') && isFirstSongInList && !state.isLooping ) 
                            newCurrentTrackIndex = 0


                    else if( (action.payload == 'PREV') && !isLastSongInList)
                            newCurrentTrackIndex = state.currentTrackIndex - 1

                    return { 
                             ...state,
                             currentTrackIndex : newCurrentTrackIndex,
                             currentTrack : state.trackList[newCurrentTrackIndex]
                           }

              default : 
                    return state
          }
 }

 export default reducer;