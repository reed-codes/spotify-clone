import { useRouter } from 'next/router'
import MediaCard from '../components/common/MediaCard'
import {SectionHeader} from '../styles/utils'
import { getTitle } from '../utils'

const More = () => {
  const router = useRouter();
  const title = getTitle(router.query.q);

  return (
 
    <>
        <SectionHeader>{ title }</SectionHeader>

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

export default More