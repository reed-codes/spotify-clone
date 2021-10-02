import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@material-ui/core";


export default function TrackTitleAndArtist(props){
    const max_width_560px = useMediaQuery("(max-width:560px)")
    const max_width_680px = useMediaQuery("(max-width:650px)")
    const max_width_950px = useMediaQuery("(max-width:950px)")
      
     return (
     <>   
         

              {
                      
                      max_width_680px ? (
                              <>

                              <Marquee style={{ fontSize: 17 }} gradient={false} delay={2}>
                                    {props.title}
                              </Marquee>

                              <div title={ props.artist }>
                                    <Marquee
                                      style={{
                                        fontSize: 14,
                                        fontWeight: 700,
                                        display: "block",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                      }}
                                      gradient={false}
                                      loop={max_width_560px ? 100 : 1 }
                                      speed={max_width_560px ? 35 :  25}
                                      delay={max_width_560px ? 0 : 2}
                                    >

                                      <div>{props.artist}</div>
                                      
                                    </Marquee>
                                  </div>
                                </>
                      )  :  (
                      

                    <>

                      {
                          max_width_950px ? (

                            <div style={{ fontSize: 17 }}>
                                {props.title}
                            </div>

                          ) : (

                            <Marquee style={{ fontSize: 17 }} gradient={false} delay={2}>
                            {props.title}
                           </Marquee>

                          )
                           
                      }
                        
      
                      <div  style={{
                            fontSize: 14,
                            fontWeight: 700,
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

