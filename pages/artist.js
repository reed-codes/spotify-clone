
import { useEffect, useState } from "react";
import { SectionHeader, Container } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TrackList from "../components/common/TrackList";
import styled from "styled-components";
import useImageColor from 'use-image-color'

const MusicHeader = styled.div`
  height: 20vh;
  max-height: 500px;
  min-height: 320px;
  color: #fff;
  display: flex;
  max-width: none;
  overflow: hidden;
  position: relative;
  cursor:default;
  background-color: #111;
`;

const MusicHeaderContentTitle = styled.h1`
  overflow: hidden;
  text-align: left;
  width: 100%;
  word-break: break-word;
  user-select: none;
  padding: 0.08em 0px;
  visibility: visible;
  width: 100%;
  font-size: 96px;
  line-height: 96px;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: none;
`;

const ArtistLink = styled.div`
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const MusicHeaderInnerWrapper = styled.div`
height: 100%;
width:100%;
display: flex;
flex-direction:column;
justify-content: flex-end;
background-color:rgba(0,0,0,.4);
padding:24px;
background-image: url('https://e-cdns-images.dzcdn.net/images/artist/3a58adf62c522732a6d3a7f8806de0c3/1000x1000-000000-80-0-0.jpg');
background-attachment:fixed;
background-size:cover;
background-position:canter;
background-color:#111;
border-right:5px #111 solid;
`

export default function album() {
  let cover = "./cover.jpg";
  const { colors } = useImageColor( cover, { cors: true, colors: 5 })
  const accentColor = colors ? colors[0] : 'green';
  const [similarArtistConfig, setSimilarArtistConfig ] = useState({
      link:'',
      titile:''
  });
  
  const artist = {
    name : 'MARINA',
    id : 4576879024
  } 
 

  useEffect(()=>{
    const contentSliderSectionHeader = "More like "+artist.name; 
    const similarArtistsQueryStringValue = btoa( artist.id + 'darth-vader' + contentSliderSectionHeader );
    const similarArtistsLink = "/similar-artists?q=" + similarArtistsQueryStringValue ;

          setSimilarArtistConfig({
            title : contentSliderSectionHeader,
            link : similarArtistsLink,
          })

  },[])

  return (
    <>
      <MusicHeader accentColor = {accentColor}>
        <MusicHeaderInnerWrapper>

        <MusicHeaderContentTitle>All In</MusicHeaderContentTitle>

        <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        style={{ fontSize: 14 }}
        >
        <span style={{ color: "rgba(255,255,255,.8)" }}>1003 451 monthly listeners</span>
        </Stack>
            
        </MusicHeaderInnerWrapper>

      </MusicHeader>

        <Container>
            <TrackList />

            <div style = {{
                position:'relative',
                width:'100%'
                }}>
                <ContentSliderSection
                title = {similarArtistConfig.title}
                url = {similarArtistConfig.link}
                />
            </div>
        </Container>

    </>
  );
}
