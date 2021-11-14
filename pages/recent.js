import React from "react";
import Box from '@mui/material/Box';
import {SectionHeader, Container} from '../styles/utils'
import { getMediaCardPlaceholders } from "../utils";

export default function Rencent(){

  return (
 
        <Container className = "content-wrapper" >
            <SectionHeader>Recent plays</SectionHeader>

        <Box
              component="div"
              sx={{ display: 'flex', flexWrap:'wrap', gap: 2 }}
            >
                {
                  getMediaCardPlaceholders(30)
                }    
        </Box>

        </Container>

  )
}
