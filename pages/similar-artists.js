import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import {SectionHeader, Container} from '../styles/utils'
import { getMediaCardPlaceholders } from '../utils';

export default function SimilarArtists(props){
  console.log(props)
  
  const router = useRouter();
  const q = router.query.q;
  const [pageInfo, setPageInfo] = useState({
         id : '',
         title : '',
         artists: [],
         isPending: true
       }); 


  useEffect(()=>{
       if(q)
       { 
            const id = atob(q).split('darth-vader')[0];
            const title = atob(q).split('darth-vader')[1];
            
            setPageInfo({
                id,
                title
            })
         
       }else{
           router.push('/')
       }  
      
  },[])

  return (

<Container className = "content-wrapper" >
<SectionHeader>{pageInfo.title}</SectionHeader>

<Box
  component="div"
  sx={{ display: 'flex', flexWrap:'wrap', gap: 2 }}
>

  {getMediaCardPlaceholders(20)}
  
</Box>

</Container>


  )
}

