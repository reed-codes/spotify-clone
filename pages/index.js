import React from "react";
import { SectionHeader } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";
import {Container} from '../styles/utils'

export default function Home() {
  return (
    <Container className = "content-wrapper" >
      <SectionHeader>Editor's pick</SectionHeader>
      <EditorsPickGrid/>

      <ContentSliderSection title = { getTitle( "top-tracks" ) } 
                            url = { "/more/top-tracks?type=track&q=098" }
                              />
      <ContentSliderSection title = { getTitle( "top-albums" ) } 
                            url = { "/more/top-albums?type=album&q=876" }
                              />
      <ContentSliderSection title = { getTitle( "top-playlists" ) } 
                            url = { "/more/top-playlists?type=playlist&q=654" }
                             />
      <ContentSliderSection title = { getTitle( "top-artists" ) } 
                            url = { "/more/top-artists?type=playlist&q=321" }
                              />
      <ContentSliderSection title = { getTitle( `new-releases` ) } 
                            url = { "/more/new-releases?type=playlist&q=632" }
                             />
    </Container>
  );

}
