import React from "react";
import Box from '@mui/material/Box';
import { SectionHeader, Container } from '../styles/utils'
import { getMediaCardPlaceholders } from "../utils";
import { useSelector } from "react-redux";
import AlbumCard from '../components/common/media-cards/AlbumCard'
import TrackCard from '../components/common/media-cards/TrackCard'
import PlaylistCard from '../components/common/media-cards/PlaylistCard'

export default function Rencent() {
  const userData = useSelector(state => state.userData);
  // const sortedAlbums = userData.recentPlays.sort((a, b) => b.timestamp - a.timestamp );
  const content = userData.recentPlays.map(media => {
    if (media.type === "album") {
      return <AlbumCard key={media.id}
        album={media}
      />
    } else if (media.type === "playlist") {
      return <PlaylistCard key={media.id}
        playlist={media}
      />
    }
  })

  const sortedContent = content.sort((a, b) => b.timestamp - a.timestamp)

  return (

    <Container className="content-wrapper" >
      <SectionHeader>Recent plays</SectionHeader>

      <Box
        component="div"
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
      >
        {

          sortedContent.map(media => media)

        }
      </Box>

    </Container>

  )
}
