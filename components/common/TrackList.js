import TrackItem from "./TrackItem";
import TrackItemsListHead from "./TrackItemsListHead";

const TrackList = ({hideAlbumColumn}) => {
    
  return (
    <div>
        <TrackItemsListHead hideAlbumColumn = {hideAlbumColumn}/>
        <TrackItem hideAlbumColumn = {hideAlbumColumn}/>
        <TrackItem hideAlbumColumn = {hideAlbumColumn}/>
        <TrackItem hideAlbumColumn = {hideAlbumColumn}/>
        <TrackItem hideAlbumColumn = {hideAlbumColumn}/>
    </div>
  );
};

export default TrackList;
