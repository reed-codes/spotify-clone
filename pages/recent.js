import RenderTrackCards from '../components/common/RenderTrackCards'
import {SectionHeader, Container} from '../styles/utils'

const rencent = () => {

  return (
 
    <>
        <Container>
            <SectionHeader>Recent plays</SectionHeader>
        </Container>

        <Container className="d-flex flex-wrap">
                 <RenderTrackCards/>         
        </Container>
    </>


  )
}

export default rencent