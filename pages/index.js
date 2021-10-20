import { SectionHeader } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";

export default function Home() {
  return (
    <div style = {{padding:'0 24px'}}>
      <SectionHeader>Editor's pick</SectionHeader>
      <EditorsPickGrid/>

      <ContentSliderSection title = { getTitle( "top-tracks" ) } 
                            url = "/more?q=top-tracks"
                              />
      <ContentSliderSection title = { getTitle( "top-albums" ) } 
                            url = "/more?q=top-albums"
                              />
      <ContentSliderSection title = { getTitle( "top-playlists" ) } 
                            url = "/more?q=top-playlists"
                             />
      <ContentSliderSection title = { getTitle( "top-artists" ) } 
                            url = "/more?q=top-artists"
                              />
      <ContentSliderSection title = { getTitle( "new-releases" ) } 
                            url = "/more?q=new-releases"
                             />
    </div>
  );

}
