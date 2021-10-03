import {useState, useEffect, createContext} from 'react'
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import PlayerBackgroundEffect from './components/PlayerBackgroundEffect'
import WideScreenPlayer from './components/players/WideScreenPlayer'
import SmallScreenPlayer from './components/players/SmallScreenDefaultPlayer'
import PipPlayer from './components/players/PipPlayer'

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  cursor: default; 
  user-select: none;
`;



function shuffleArray(trackList) {
      let newArr = new Array(...trackList)
      for (let i = newArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr
}


export const PlayerContext = createContext(null);


export default function Player(props){
        const max_width_950px = useMediaQuery("(max-width:950px)");
        const [playerRef, setPlayerRef] = useState(null);
        const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
        const [repeatFlag, setRepeatFlag] = useState(0); // REPEAT-CURRENT, REPEAT-ALL
        const [isShuffling, setIsShuffling] = useState(false);
        const [isPlaying, setIsPlaying] = useState(false);
        const [isLoading, setIsLoading] = useState(false);
        const [volume, setVolume] = useState(1);
        const [isPipOn, setIsPipOn] = useState(false);
        const [trackProgress, setTrackProgress] = useState({
                                                             time : 0,
                                                             percentage : 0 ,
                                                             duration : 0   
                                                           })
       const [tracks, setTracks] = useState({
                  list : [],
                  shuffledList : [],
                  activeList : [],
                  isPending : false
       })
       const repeatType =  (repeatFlag == 0) ? "NO-REPEAT" : (repeatFlag == 1) ? "REPEAT-ALL" : "REPEAT-CURRENT";


        useEffect(()=>{
              try{
                    if(playerRef && !isPlaying)  playerRef.pause()
                    else if(playerRef && isPlaying) playerRef.play()
              }catch(err){
                    console.log(err.message)
              }
        },[isPlaying])



        useEffect(()=>{
                if(playerRef)
                   playerRef.volume = volume;
        },[volume])


        

        useEffect(()=>{
                if(playerRef){
                      try{
                              playerRef.load();

                              if(isPlaying) playerRef.play();
                              else playerRef.pause();

                        }catch(err){
                              console.log(err.message)
                        }
                  }
        },[currentTrackIndex])





      //   HANDLERS START 🪓🪓🪓

                  const handlePlay = ()=> setIsPlaying(true)

                  const handlePause = ()=> setIsPlaying(false)

                  const handleTrackEnd = ()=> handlePlayNext()

                  const handleTrackBuffering = (e)=> setIsLoading(true);

                  const handlePipToggle = ()=> setIsPipOn(!isPipOn);

                  const handleVolumeChange = (event, newVolume)=> setVolume( newVolume/100 )

                  const handleIsLoading = ()=> {
                         setIsLoading(true)
                         handlePause();
                  }

                  const handleCanPlay = (event)=> {
                        setIsLoading(false)
                        handlePlay()
                  } 

                  const handlePlayNext = ()=>{
                        if( (currentTrackIndex == (trackList.length - 1)) && ( repeatType == "NO-REPEAT" ) ) {
                              setCurrentTrackIndex( 0 ) ;
                              handlePause()
                        }
                        else if( currentTrackIndex == (trackList.length - 1) && (repeatType != "REPEAT-CURRENT") ) 
                              setCurrentTrackIndex( 0 ) ;
                        else if( repeatType == "REPEAT-CURRENT"  )
                              {
                                  playerRef.load();
                                  playerRef.play();
                              }
                        else {
                              setCurrentTrackIndex( currentTrackIndex + 1) ;
                        }
                  }
                  
                  const handlePlayPrev = ()=>{
                        if( currentTrackIndex == 0 && ( repeatType == "REPEAT-ALL" ) ) setCurrentTrackIndex( trackList.length - 1 ) ;
                        else if( currentTrackIndex == 0 && ( repeatType == "REPEAT-CURRENT") )  setCurrentTrackIndex( currentTrackIndex ) ;
                        else if( currentTrackIndex != 0) setCurrentTrackIndex( currentTrackIndex - 1) ;
                  }
                   
                  const handleToggleRepeat = ()=>{
                            if(repeatFlag != 2) setRepeatFlag(repeatFlag + 1);
                            else setRepeatFlag(0)
                  }
                   
                  const handleToggleShuffle = ()=>{
                         setIsShuffling(!isShuffling)
                  }

                  const handleFullScreenClick = ()=>{
                         const elem = document.documentElement;
                        /* View in fullscreen */
                          if (elem.requestFullscreen) 
                              elem.requestFullscreen();

                          else if (elem.webkitRequestFullscreen)
                              elem.webkitRequestFullscreen();

                          else if (elem.msRequestFullscreen)
                              elem.msRequestFullscreen();
                  }


                  //ADD TRACK PROGRESS TO STATE
                  const handleTrackTimeUpdateFromAudioElement = (event)=>{
                              const __this = event.target;
                              const currentTime = __this.currentTime ? __this.currentTime : __this.currentTime;
                              const duration = __this.duration ? __this.duration : 0;
                              const percentProgress = ((currentTime/duration) * 100) ? (currentTime/duration) * 100 : 0;
                              
                              const intCurrentTime = parseInt( currentTime );
                  
                              if(trackProgress.time !== intCurrentTime )
                              setTrackProgress({
                                                time : intCurrentTime ,
                                                percentage : percentProgress ,
                                                duration   
                                          })
                  }


                  const handleTrackTimeUpdateFromSlider = (event, newPercentage)=>{
                              const newTime = (newPercentage/100) * trackProgress.duration;
                                    playerRef.currentTime = newTime;

                              setTrackProgress({
                                    ...trackProgress,
                                    time : parseInt( newTime ) ,
                                    percentage : newPercentage ,
                              })
                  }

      //   HANDLERS END 🪓🪓🪓

              
      if(max_width_950px && isPipOn) 
        handlePipToggle() 




        return (

              
      <PlayerContext.Provider value = {{
            handlePlay,
            handlePause,
            handlePlayNext,
            handlePlayPrev,
            handleVolumeChange,
            handleToggleRepeat,
            handleTrackTimeUpdateFromSlider,
            handleToggleShuffle,
            handleFullScreenClick,
            handlePipToggle,
            currentTrackIndex,
            currentTrack: trackList[currentTrackIndex],
            repeatType,
            isPlaying,
            isLoading,
            trackProgress,
            volume,
            repeatFlag,
            isShuffling,
            isPipOn
      }}>
            <PlayerWrapper>

                  <PipPlayer isPipOn = {isPipOn} /> 

                  <PlayerBackgroundEffect cover = {"./demo-img-5.jpg"} />
                  {max_width_950px ? <SmallScreenPlayer/> : <WideScreenPlayer/>}

                  <audio 
                        ref = {setPlayerRef}
                        style = {{display:"none"}}
                        onLoadStart = {handleIsLoading}
                        onCanPlay = {handleCanPlay}
                        onTimeUpdate = {handleTrackTimeUpdateFromAudioElement}
                        onWaiting = {handleTrackBuffering}
                        onEnded = {handleTrackEnd}
                        >
                              <source src={ trackList[currentTrackIndex].preview } type="audio/ogg" />
                              <source src={ trackList[currentTrackIndex].preview } type="audio/mpeg"/>
                              Your browser does not support the audio element.
                  </audio>

            </PlayerWrapper>
      </PlayerContext.Provider>


        )
} 








const trackList = [
    {
       id : "17347961",
       readable : true,
       title: "Over My Dead Body",
       title_short: "Over My Dead Body",
       isrc: "USCM51100544",
       link: "https://www.deezer.com/track/17347961",
       duration: "272",
       track_position: 1,
       disk_number: 1,
       rank: "512899",
       explicit_lyrics: true,
       explicit_content_lyrics: 1,
       explicit_content_cover: 1,
       preview: "https://cdns-preview-0.dzcdn.net/stream/c-023d2dcb81507d8c83144bd3400663d2-9.mp3",
       md5_image: "6e7a6c8f36669dcd11abe7e7c3222e91",
       artist: {
        id: "246791",
        name: "Drake",
        tracklist: "https://api.deezer.com/artist/246791/top?limit=50",
        type: "artist"
      },
      type: "track"
    },
    {
      id: "17347963",
      readable: true,
      title: "Shot For Me",
      title_short: "Shot For Me",
      title_version: "",
      isrc: "USCM51100545",
      link: "https://www.deezer.com/track/17347963",
    duration: "224",
      track_position: 2,
      disk_number: 1,
      rank: "573411",
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview: "https://cdns-preview-a.dzcdn.net/stream/c-aac3d4b4a1b4b502b4d4384f55036d2d-9.mp3",
      md5_image: "6e7a6c8f36669dcd11abe7e7c3222e91",
      artist: {
        id: "246791",
        name: "Drake",
        tracklist: "https://api.deezer.com/artist/246791/top?limit=50",
        type: "artist"
      },
      type: "track"
    },
    {
      id: "17347964",
      readable: true,
      title: "Headlines",
      title_short: "Headlines",
      title_version: "",
      isrc: "USCM51100290",
      link: "https://www.deezer.com/track/17347964",
      duration: "235",
      track_position: 3,
      disk_number: 1,
      rank: "763188",
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview: "https://cdns-preview-1.dzcdn.net/stream/c-11a7f035ddf2da5e5d4f4a213eb27a4b-10.mp3",
      md5_image: "6e7a6c8f36669dcd11abe7e7c3222e91",
      artist: {
        id: "246791",
        name: "Drake",
        tracklist: "https://api.deezer.com/artist/246791/top?limit=50",
        type: "artist"
      },
      type: "track"
    }
]

