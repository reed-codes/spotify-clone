import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@material-ui/core";
import Box from '@mui/material/Box';
import { AudioPlayerContext } from "../../../state/context/AudioPlayerContext";


export default function TrackTitleAndArtist(props) {
  const { currentTrack } = useContext(AudioPlayerContext);
  const max_width_680px = useMediaQuery("(max-width:650px)")
  const max_width_950px = useMediaQuery("(max-width:950px)")
  let contentRenderArray = [1, 1, 1, 1, 1];

  for (let i = 0; i < 100; i++)
    contentRenderArray[i] = 0;

  return (
    <>

      {
        max_width_950px ? (
          <>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>

              <img
                src={currentTrack ? currentTrack.album.cover_medium : ""}
                style={{ height: '40px', width: "40px", background: '#000', pr: 2 }}
                alt="cover"
                className="pointer-events-none"
              />

              {
                max_width_680px ? (

                  <Box sx={{
                    width: '100%',
                    overflow: 'hidden',
                    boxSizing: 'border-box'
                  }}>
                    <Marquee style={{
                      width: 'fit-content',
                      marginLeft: "10px",
                    }}
                      gradient={false}
                      speed={50}
                    >

                      {
                        contentRenderArray.map((_ , index) => {
                          return (
                            <MarqueeContent 
                                key = {"marquee-"+index}
                                artist={props.artist}
                                title={props.title}
                            />
                          )
                        })
                      }

                    </Marquee>
                  </Box>

                ) : (

                  <MarqueeContent artist={props.artist}
                    title={props.title}
                  />

                )
              }

            </Box>
          </>
        ) : (

          <>

            {
              max_width_950px ? (

                <Box component="div" sx={{ textOverflow: 'ellipsis', fontSize: 18 }}>
                  {props.title}
                </Box>

              ) : (

                <Box component="div" sx={{ textOverflow: 'ellipsis', fontSize: 20 }}>
                  {props.title}
                </Box>

              )

            }

            <div style={{
              fontSize: 14,
              fontWeight: 700,
              width: '100%',
              display: "block",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}>
              {props.artist}
            </div>
          </>

        )

      }

    </>
  )

}



const MarqueeContent = (props) => {
  return (
    <Box sx={{ height: "100%", display: 'flex', alignItems: "center", gap: 2, mr: "1s0px", ml: "10px" }}>

      <Box
        sx={{
          whiteSpace: "nowrap",
          height: '100%',
          alignItems: 'center'
        }}
        className="font-bold block"
      >
        {props.title}
      </Box>

      <Box>
        &bull;
      </Box>

      <Box style={{
        width: '100%',
        whiteSpace: "nowrap",
        height: '100%',
        alignItems: 'center'
      }}
      >
        {props.artist}
      </Box>

    </Box>
  )
}