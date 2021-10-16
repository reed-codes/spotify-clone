// import { SectionHeader } from "../styles/utils";
// import EditorsPickGrid from "../components/EditorsPickGrid";
// import ContentSliderSection from "../components/common/ContentSliderSection";
// import { getTitle } from "../utils";

// export default function Home() {
//   return (
//     <>
//       <SectionHeader>Editor's pick</SectionHeader>
//       <EditorsPickGrid/>

//       <ContentSliderSection title = { getTitle( "top-tracks" ) } q = "top-tracks" />
//       <ContentSliderSection title = { getTitle( "top-albums" ) } q = "top-albums" />
//       <ContentSliderSection title = { getTitle( "top-playlists" ) } q = "top-playlists"/>
//       <ContentSliderSection title = { getTitle( "top-artists" ) } q = "top-artists" />
//       <ContentSliderSection title = { getTitle( "new-releases" ) } q = "new-releases"/>
//     </>
//   );

// }

import { SectionHeader } from "../styles/utils";
import EditorsPickGrid from "../components/EditorsPickGrid";
import ContentSliderSection from "../components/common/ContentSliderSection";
import { getTitle } from "../utils";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import TrackList from "../components/common/TrackList";
import styled from "styled-components";

const MusicHeader = styled.div`
  height: 20vh;
  max-height: 500px;
  min-height: 320px;

  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: none;
  overflow: hidden;
  padding-bottom: 24px;
  position: relative;
  // background-color: rgb(48, 56, 56);
`;

const CoverImage = styled.div`
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center;
  user-select: none;
  -ms-flex-item-align: end;
  -webkit-margin-end: 24px;
  align-self: flex-end;
  height: 192px;
  margin-inline-end: 24px;
  min-width: 192px;
  width: 192px;
`;

const HeaderDetailsWrapper = styled.div`
  -webkit-box-flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-flow: column;
  flex-flow: column;
  justify-content: flex-end;
  z-index: 0;
`;

const MusicHeaderContentTypeText = styled.h2`
  font-weight: 700;
  font-size: 12px;
  margin-top: 4px;
  text-transform: uppercase;
  line-height: 16px;
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

const MusicHeaderLeftGridWrapper = styled.div`
height: 100%;
display: flex;
align-items: flex-end;
`

const MusicHeaderRightGridWrapper = styled.div`
height: 100% ;
flex: 1;
display: flex ;
align-items: flex-end ;
`

export default function album() {
  return (
    <div>
      <MusicHeader>
        <MusicHeaderLeftGridWrapper>
          <CoverImage url={"./cover.jpg"} className="music-header-cover-img" />
        </MusicHeaderLeftGridWrapper>

        <MusicHeaderRightGridWrapper >
          <HeaderDetailsWrapper>
            <MusicHeaderContentTypeText>album</MusicHeaderContentTypeText>

            <MusicHeaderContentTitle>All In</MusicHeaderContentTitle>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ fontSize: 14 }}
            >
              <Avatar
                alt="Remy Sharp"
                src={"./cover-5.jpg"}
                sx={{ width: 24, height: 24 }}
              />

              <Link href="/" passHref = {true}>
                <ArtistLink>Skepta</ArtistLink>
              </Link>

              <span>&bull;</span>

              <span style={{ color: "rgba(255,255,255,.7)" }}>5 songs</span>
            </Stack>
          </HeaderDetailsWrapper>
        </MusicHeaderRightGridWrapper>


      </MusicHeader>

      <TrackList />

      <div style = {{
        position:'relative',
        width:'100%'
      }}>
        <ContentSliderSection
          title={"More like Skepta"}
          q="similar-artists-hvjvetyiu2y34bn"
        />
      </div>
    </div>
  );
}
