import React from "react";
import Box from '@mui/material/Box';
import RenderTrackCards from '../components/common/RenderTrackCards'
import {SectionHeader, Container} from '../styles/utils'

export default function Rencent(){

  return (
 
        <Container className = "content-wrapper" >
            <SectionHeader>Recent plays</SectionHeader>

        <Box
              component="div"
              sx={{ display: 'flex', flexWrap:'wrap', gap: 2 }}
            >
                 <RenderTrackCards/>         
        </Box>

        </Container>

  )
}
