import styled from "styled-components";
import MediaCard from "./MediaCard";
import ArtistCard from "./ArtistCard";
import Link from 'next/link'
import {SectionHeader} from '../../styles/utils'

const CardRow = styled.div`
  display: flex;
  overflow-y: auto;
  position: relative
`;

const SeeAllLink = styled.div`
font-size: 12px;
font-weight: 700;
letter-spacing: .1em;
line-height: 16px;
text-transform: uppercase;
position:absolute;
right:10px;
top:40px;
color: #b3b3b3;
cursor:pointer;
&:hover{
      text-decoration: underline;
}
`

const ContentSliderSection = ({title, url})=>{
    return (
       <div className = "position-relative">
         <SectionHeader>{title}</SectionHeader>
         
         <Link href = {url} passHref = {true}>
              <SeeAllLink>
                    see all
              </SeeAllLink>
         </Link>
   
         <CardRow>
           <ArtistCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
           <MediaCard />
         </CardRow>
       </div>
    )
 
 }

 export default ContentSliderSection