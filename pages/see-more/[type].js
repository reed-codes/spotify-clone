import { useRouter } from 'next/router'
import MediaCard from '../../components/common/MediaCard'
import {SectionHeader} from '../../styles/utils'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
 
    <>

    <SectionHeader>Editor's pick</SectionHeader>

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

export default Post