import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RenderPlaylists from '../../components/common/RenderPlaylists'
import RenderAlbums from '../../components/common/RenderAlbums'
import RenderArtists from '../../components/common/RenderArtists'
import RenderTrackCards from '../../components/common/RenderTrackCards'
import {SectionHeader, Container} from '../../styles/utils'
import {getTitle} from '../../utils'

const More = () => {
  const router = useRouter();
  const {slug , q, artist, type} = router.query;
  const title = artist ? getTitle(slug) + artist : getTitle(slug) ;

  


  return (
 
    <>
        <Container>
            <SectionHeader>{ title }</SectionHeader>
        </Container>

        <Container className="d-flex flex-wrap">

            {  (type == 'track') && <RenderTrackCards/>          } 
            {  (type == 'album') && <RenderAlbums/>          } 
            {  (type == 'playlist') && <RenderPlaylists/>    } 
            {  (type == 'artist') && <RenderArtists/>        } 

            
        </Container>
    </>


  )
}

export default More