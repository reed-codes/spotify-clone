import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';


export default function EditorsPickCard() {

  return (

            <Card style={{ 
                            display: 'flex', 
                            background:'none',
                            width:247,
                            minWidth:247,
                            cursor:'pointer',
                            marginBottom:15,
                            marginRight:15,
                            color:'#fff',
                            position:'relative',
                            zIndex:10
                       }}
                       className = "backdrop-blur"
                       >

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto', padding: '10px !important' }}>
                    <Typography component="div" 
                                variant="h6"
                                style = {{fontSize:'1.1rem'}}
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
                
                {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                 
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                   
                </Box> */}
            </Box>

        <div style = {{
            position:'relative',
            background:'gold',
            height: 90, 
            width:90
        }}>

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
            
                    <IconButton aria-label="play/pause" style = {{
                                                                    borderRadius:'50%', 
                                                                    background:'limegreen',
                                                                    transform: "translate(-5px,-5px)"
                                                                    }}>
                                <PlayArrowIcon sx={{ height: 28, width: 28 }} style = {{fontSize:10}}/>
                    </IconButton>
              </div>

            <CardMedia
                component="img"
                sx={{ height: 90, width:90 }}
                image="./cover-4.jpg"
                alt="Live from space album cover"
            />
        </div>
            
            </Card>

  );
}
