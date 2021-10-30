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
                            url = { `/more/top-tracks?q=098${'&'}type=track` }
                              />
      <ContentSliderSection title = { getTitle( "top-albums" ) } 
                            url = { `/more/top-albums?q=876${'&'}type=album` }
                              />
      <ContentSliderSection title = { getTitle( "top-playlists" ) } 
                            url = { `/more/top-playlists?q=654${'&'}type=playlist` }
                             />
      <ContentSliderSection title = { getTitle( "top-artists" ) } 
                            url = { `/more/top-artists?q=321${'&'}type=artist` }
                              />
      <ContentSliderSection title = { getTitle( `new-releases` ) } 
                            url = { `/more/new-releases?q=632${'&'}type=track` }
                             />
    </Container>
  );

}
