import styled from 'styled-components'
import EditorsPickCard from '../components/EditorsPickCard'

const SectionHeader = styled.h2`
    color: #fff;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.04em;
    line-height: 36px;
    text-transform: none;
    margin-top: 35px;
    margin-bottom: 16px;
`

const CardRow = styled.div`
display: flex;
overflow-y: auto;
`

const Card = styled.div`
-webkit-box-flex: 1;
background: #181818;
border-radius: 4px;
-ms-flex: 1;
flex: 1;
width:185px;
min-width:185px;
isolation: isolate;
padding: 10px;
margin-right:24px;
margin-bottom:20px;
position: relative;
-webkit-transition: background-color .3s ease;
transition: background-color .3s ease;
width: 100%;`

const InnerCard = styled.div`
height: 100%;
`

const CardCoverImageWrapper = styled.div`
margin-bottom: 16px;
position: relative;
`

const CardCoverImage = styled.img`
border-radius: 2px;
height: 165px;
width: 100%;
object-fit : cover;
object-position: center
`
const CardContentWrapper = styled.div`
min-height: 62px;
` 
const CardHeader = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 16px;
font-weight: 700;
letter-spacing: normal;
line-height: 24px;
text-transform: none;
`

const CardBody = styled.div`
color: rgb(179, 179, 179);
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
display: -webkit-box;
margin-top: 4px;
overflow: hidden;
text-overflow: ellipsis;
white-space: wrap;
font-size: 14px;
font-weight: 400;
letter-spacing: normal;
line-height: 16px;
text-transform: none;
`

export default function Home() {

  return (

        <>

              <SectionHeader>
                    Editor's choice
              </SectionHeader>

              <div style = {{
                display:'flex',
                flexWrap:'wrap',
              }}>
                <EditorsPickCard cover = {'./cover.jpg'}/>
                <EditorsPickCard cover = {'./demo-img-1.jpg'}/>
                <EditorsPickCard cover = {'./cover-2.jpg'}/>
                <EditorsPickCard cover = {'./cover-3.jpg'}/>
                <EditorsPickCard cover = {'./cover-4.jpg'}/>
                <EditorsPickCard cover = {'./cover-5.jpg'}/>
              </div>

        
        
              <SectionHeader>
                    Editor's choice
              </SectionHeader>

              <CardRow>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
              </CardRow>
                    
        
              <SectionHeader>
                    Editor's choice
              </SectionHeader>

              <CardRow>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
                        <MediaCard/>
              </CardRow>
                    

      </>

  );
}



const MediaCard = ()=>{
     return (
      <Card>
      <InnerCard>
            <CardCoverImageWrapper>
                 <CardCoverImage src = {'./demo-img-1.jpg'}
                                 alt = ""
                                 />
            </CardCoverImageWrapper>

                  <CardContentWrapper>

                          <CardHeader>
                            Daily Mix 1
                          </CardHeader>

                          <CardBody>
                              Doja Cat, Billie Eilish, MARINA and more
                          </CardBody>
                          
                  </CardContentWrapper>

      </InnerCard>
    </Card>
     )
}