import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MediaCard from '../components/common/MediaCard'
import {SectionHeader} from '../styles/utils'

const SimilarArtists = () => {
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
 
    <>
        <SectionHeader>{pageInfo.title}</SectionHeader>

        <div className="d-flex flex-wrap">
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
        </div>
    </>


  )
}

export default SimilarArtists