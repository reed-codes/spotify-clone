import React from 'react'
import styled from 'styled-components'
import EditorsPickCard from "./EditorsPickCard";
import Box from '@mui/material/Box';
import {useMediaQuery} from '@material-ui/core'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const BackgroundAccentColorGradientEffect = styled.main`
padding:10px 24px 100px 24px;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 60%;
background: #555;
z-index: 0;
box-shadow: -16px -200px 100px -31px #101010 inset;
-webkit-box-shadow: -16px -200px 100px -31px #101010 inset;
-moz-box-shadow: -16px -200px 100px -31px #101010 inset;
transition: all 1s linear; 
`

const EditorsPickGrid = () => {
  const editorialState = useSelector(state => state.musicData.editorial)
  const maxWidth1095px = useMediaQuery('(max-width:1095px)');
  const maxWidth950px = useMediaQuery('(max-width:950px)');
  const maxWidth650px = useMediaQuery('(max-width:650px)');
  const albums = editorialState.albums.data ? editorialState.albums.data : [];
  const albumsPickedByEditors = albums.slice(0,6);
  
    return (
      <>

      <BackgroundAccentColorGradientEffect id ="background-gradient-effect"/>
      
      <Box
          sx={{
            display: 'grid',
            gap:2,
            gridTemplateColumns: `repeat(${ maxWidth650px ? 1 : (maxWidth1095px && maxWidth950px) ? 2 : (maxWidth1095px && !maxWidth950px) ? 2 : 3 }, 1fr)`,
          }}
        >
 
        {
          albumsPickedByEditors.map( album =>{
                  return (
                    <EditorsPickCard  
                           key = {uuidv4()}
                           album = {album}
                          />
                  )
          })
           
        }
  
     </Box>

      </>
    )
}

export default EditorsPickGrid
