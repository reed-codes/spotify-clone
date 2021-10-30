import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@material-ui/core";
import Box from '@mui/material/Box';


export default function TrackTitleAndArtist(props){
    const max_width_560px = useMediaQuery("(max-width:560px)")
    const max_width_680px = useMediaQuery("(max-width:650px)")
    const max_width_950px = useMediaQuery("(max-width:950px)")
      
     return (
     <>   
         

              {
                      
                      max_width_680px ? (
                              <>

                              <Marquee style={{ fontSize: 20 }} gradient={false} delay={2}>
                                    {props.title}
                              </Marquee>

                              <div title={ props.artist }>
                                    <Box
                                      style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        display: "block",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        paddingBottom:3
                                      }}
                                    >

                                      <div>{props.artist}</div>
                                      
                                    </Box>
                                  </div>
                                </>
                      )  :  (
                      

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
                        
      
                      <div  style={{
                            fontSize: 14,
                            fontWeight: 700,
                            width:'100%',
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

