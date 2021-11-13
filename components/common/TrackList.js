import TrackItem from "./TrackItem";
import TrackItemsListHead from "./TrackItemsListHead";
import { useMediaQuery } from "@mui/material";

const TrackList = ({ hideAlbumColumn }) => {
  const maxWidth780px = useMediaQuery('( max-width : 780px )')

  return (
    <div>
      <TrackItemsListHead hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
      <TrackItem hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
      <TrackItem hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
      <TrackItem hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
      <TrackItem hideAlbumColumn={hideAlbumColumn} maxWidth780px={maxWidth780px} />
    </div>
  );
};

export default TrackList;
