import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components'
import useImageColor from 'use-image-color'


const CARD_STYLE = {
    display: 'flex', 
    justifyContent:'space-between',
    background: 'rgba(155,155,155,.1)',
    width:247,
    minWidth:247,
    flex:1,
    cursor:'pointer',
    marginBottom:15,
    marginRight:15,
    color:'#fff',
    position:'relative',
    zIndex:10,
    border:'1px rgb(30,30,30,.1) solid',
}

const CardImgWrapper = styled.div`
position: relative ;
background: #333 ;
height: 90px; 
width:90px
`

export default function EditorsPickCard(props) {
 const { colors } = useImageColor( props.cover, { cors: true, colors: 5 })

  return (

            <Card style={CARD_STYLE}
                       className = "editors-pick-card"
                       onMouseEnter = {()=>{
                              const backgrounGradientEffect = document.querySelector('#background-gradient-effect');
                              if(backgrounGradientEffect && colors)
                                 backgrounGradientEffect.style.background = colors[0] ;
                       }}
                       >

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto', padding: '10px !important' }}>
                    <Typography component="div" 
                                variant="h6"
                                style = {{fontSize:'1.1rem', fontWeight:700}}
                                >
                        Live From Space
                    </Typography>

                    <Typography component="small"
                                style = {{
                                          fontSize:13,
                                          opacity:.6
                                    }}
                                >
                        Mac Miller
                    </Typography>
                </CardContent>
                
            </Box>

        <CardImgWrapper>

            <div style = {{
                height:'100%',
                width:'100%',
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'flex-end',
                position:'absolute',
                top:0,
                left:0
            }}>

                  <div className = 'editors-pick-play-icon'>
                    <IconButton aria-label="play/pause" style = {{
                                                                    borderRadius:'50%', 
                                                                    transform: "translate(-10px,-10px)",
                                                                    background:'#1db954'
                                                                    }}>
                                <PlayArrowIcon sx={{ height: 28, width: 28 }} style = {{fontSize:10}}/>
                    </IconButton>
                  </div>

              </div>

            <CardMedia
                component = "img"
                sx = {{ height: 90, width:90 }}
                image = {props.cover}
                alt = "Live from space album cover"
            />
        </CardImgWrapper>
            
            </Card>

  );
}
