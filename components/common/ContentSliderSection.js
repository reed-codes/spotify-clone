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
z-index:10;
right:10px;
top:40px;
color: #b3b3b3;
cursor:pointer;
&:hover{
      text-decoration: underline;
}
`

const ScrollShadow = styled.div`
height:100%;
width:10px;
background:rgba(0,0,0,.2);
position:absolute;
right:0;
top:0;
z-index:1;
box-shadow:-5px 2px 25px rgba(0,0,0,.7);
`

const ContentSliderSection = ({title, url})=>{
    return (
       <div style = {{position:'relative', paddingBottom:20, paddingTop:20}}>
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

         <ScrollShadow/>

       </div>
    )
 
 }

 export default ContentSliderSection