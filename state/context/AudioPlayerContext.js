import { useState, useEffect, createContext } from 'react'


function shuffleArray(tracklist) {
    let newArr = new Array(...tracklist)
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr
}


export const AudioPlayerContext = createContext(null);


export default function AudioPlayerContextProvider({ children }) {
    const [playerRef, setPlayerRef] = useState(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [repeatFlag, setRepeatFlag] = useState(0); // REPEAT-CURRENT, REPEAT-ALL
    const [isShuffling, setIsShuffling] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isPipOn, setIsPipOn] = useState(false);
    const [trackProgress, setTrackProgress] = useState({
        time: 0,
        percentage: 0,
        duration: 0
    })
    const [tracklist, setTracklist] = useState({
        originalList: [],
        shuffledList: [],
        activeList: [],
        isPending: false,
        collectionID: 0
    })
    const repeatType = (repeatFlag == 0) ? "NO-REPEAT" : (repeatFlag == 1) ? "REPEAT-ALL" : "REPEAT-CURRENT";

    useEffect(() => {
        const localStoragePlayStateFlag = localStorage.getItem('player-play-state') ? Boolean(Number(localStorage.getItem('player-play-state'))) : null;
        const localStorageVolume = localStorage.getItem('player-volume') ? Number(localStorage.getItem('player-volume')) : 1;
        const playState = localStoragePlayStateFlag ? true : false;
        const playerVolume = localStorageVolume;
        setIsPlaying(playState)
        setVolume(playerVolume)

    }, [])

    useEffect(() => {
        try {
            if (playerRef && !isPlaying) {
                try {
                    playerRef.pause()
                    localStorage.setItem('player-play-state', 0)
                } catch (err) {
                    console.log("bro had trouble pausing", err.message)
                    setIsPlaying(false)
                    localStorage.setItem('player-play-state', 0)
                }
            }
            else if (playerRef && isPlaying) {
                try {
                    playerRef.play()
                    localStorage.setItem('player-play-state', 1)
                } catch (err) {
                    console.log("bro had trouble initiating play", err.message)
                    setIsPlaying(true)
                    localStorage.setItem('player-play-state', 1)
                }
            }
        } catch (err) {
            console.log(err.message)
        }
    }, [isPlaying])


    useEffect(() => {
        if (isShuffling) {
            setTracklist({
                ...tracklist,
                activeList: tracklist.shuffledList
            })
        } else {
            setTracklist({
                ...tracklist,
                activeList: tracklist.originalList
            })
        }
    }, [isShuffling])


    useEffect(() => {
        if (playerRef) {
            playerRef.load()
            setIsPlaying(true)
        }
    }, [tracklist])


    useEffect(() => {
        localStorage.setItem('player-volume', volume)
        if (playerRef)
            playerRef.volume = volume;
    }, [volume])


    useEffect(() => {
        if (playerRef) {
            try {
                playerRef.load();

                if (isPlaying) {
                    try {
                        playerRef.play()
                        localStorage.setItem('player-play-state', 1)
                    } catch (err) {
                        console.log("bro had trouble initiating play", err.message)
                        setIsPlaying(true)
                        localStorage.setItem('player-play-state', 1)
                    }
                }
                else {
                    try {
                        playerRef.pause()
                        localStorage.setItem('player-play-state', 0)
                    } catch (err) {
                        console.log("bro had trouble pausing", err.message)
                        setIsPlaying(false)
                        localStorage.setItem('player-play-state', 0)
                    }
                }

            } catch (err) {
                console.log(err.message)
            }
        }
    }, [currentTrackIndex])



    //   HANDLERS START 🪓🪓🪓

    const handleTrackListInit = (payload) => {
        if (payload) {
            //IF PLAYING TRACKLIST AND WANTING TO START AT SPECIFIC INDEX, SET 'pointer' TO TRUE
            if (payload.pointer) {

                if (String(payload.collection) === String(tracklist.collectionID)) {
                    const currentIndex = tracklist.activeList.findIndex(track => String(track.id) === String(payload.trackID))
                    setCurrentTrackIndex(currentIndex)
                }
                else {
                    const currentIndex = payload.list.findIndex(track => String(track.id) === String(payload.trackID))
                    setTracklist({
                        originalList: payload.list,
                        shuffledList: shuffleArray(payload.list),
                        activeList: payload.list,
                        isPending: false,
                        collectionID: payload.collection
                    })
                    setCurrentTrackIndex(currentIndex)
                }

            } else {
                // IF JUST WANTING TO PLAY A TRACKLIST FROM BEGINNING
                setTracklist({
                    originalList: payload.list,
                    shuffledList: shuffleArray(payload.list),
                    activeList: payload.list,
                    isPending: false,
                    collectionID: payload.collection
                })
            }

        } else {
            console.log("AN ARRAY WAS NOT PASSED DOWN TO 'handleTrackListInit' : ", handleTrackListInit)
        }

    }

    const handlePlay = () => setIsPlaying(true)

    const handlePause = () => setIsPlaying(false)

    const handleTrackEnd = () => handlePlayNext()

    const handleTrackBuffering = () => setIsLoading(true);

    const handlePipToggle = () => setIsPipOn(!isPipOn);

    const handleVolumeChange = (_, newVolume) => setVolume(newVolume / 100)

    const handleIsLoading = () => {
        setIsLoading(true)
        handlePause();
    }

    const handleCanPlay = () => {
        setIsLoading(false)
        handlePlay()
    }

    const handlePlayNext = () => {
        // IF AT THE END OF TRACKLIST AND REPEAT IS OFF
        if ((currentTrackIndex == (tracklist.activeList.length - 1)) && (repeatType == "NO-REPEAT")) {
            setCurrentTrackIndex(0);
            handlePause()
        }
        else if (currentTrackIndex == (tracklist.activeList.length - 1) && (repeatType != "REPEAT-CURRENT")) {
            setCurrentTrackIndex(0);
        }
        else if (repeatType == "REPEAT-CURRENT") {
            playerRef.load();

            try {
                playerRef.play()
                localStorage.setItem('player-play-state', 1)
            } catch (err) {
                console.log("bro had trouble initiating play", err.message)
                setIsPlaying(true)
                localStorage.setItem('player-play-state', 1)
            }
        }
        else {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    }

    const handlePlayPrev = () => {
        if (currentTrackIndex == 0 && (repeatType == "REPEAT-ALL")) setCurrentTrackIndex(tracklist.activeList.length - 1);
        else if (currentTrackIndex == 0 && (repeatType == "REPEAT-CURRENT")) setCurrentTrackIndex(currentTrackIndex);
        else if (currentTrackIndex != 0) setCurrentTrackIndex(currentTrackIndex - 1);
    }

    const handleToggleRepeat = () => {
        if (repeatFlag != 2) setRepeatFlag(repeatFlag + 1);
        else setRepeatFlag(0)
    }

    const handleToggleShuffle = () => {
        setIsShuffling(!isShuffling)
    }

    const handleFullScreenClick = () => {
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
    const handleTrackTimeUpdateFromAudioElement = (event) => {
        const __this = event.target;
        const currentTime = __this.currentTime ? __this.currentTime : __this.currentTime;
        const duration = __this.duration ? __this.duration : 0;
        const percentProgress = ((currentTime / duration) * 100) ? (currentTime / duration) * 100 : 0;

        const intCurrentTime = parseInt(currentTime);

        if (trackProgress.time !== intCurrentTime)
            setTrackProgress({
                time: intCurrentTime,
                percentage: percentProgress,
                duration
            })
    }


    const handleTrackTimeUpdateFromSlider = (_, newPercentage) => {
        const newTime = (newPercentage / 100) * trackProgress.duration;
        playerRef.currentTime = newTime;

        setTrackProgress({
            ...trackProgress,
            time: parseInt(newTime),
            percentage: newPercentage,
        })
    }

    //   HANDLERS END 🪓🪓🪓



    return (


        <AudioPlayerContext.Provider value={{
            handleTrackListInit,
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
            currentTrack: tracklist.activeList[currentTrackIndex],
            repeatType,
            isPlaying,
            isLoading,
            trackProgress,
            volume,
            repeatFlag,
            isShuffling,
            isPipOn,
            currentCollection: tracklist.collectionID
        }}>

            {children}

            <audio
                ref={setPlayerRef}
                style={{ display: "none" }}
                onLoadStart={handleIsLoading}
                onCanPlay={handleCanPlay}
                onTimeUpdate={handleTrackTimeUpdateFromAudioElement}
                onWaiting={handleTrackBuffering}
                onEnded={handleTrackEnd}
            >
                <source src={tracklist.activeList[currentTrackIndex] ? tracklist.activeList[currentTrackIndex].preview : ""} type="audio/ogg" />
                <source src={tracklist.activeList[currentTrackIndex] ? tracklist.activeList[currentTrackIndex].preview : ""} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        </AudioPlayerContext.Provider>


    )
}

