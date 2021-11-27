import axios from "axios";
import CardSkeleton from "../components/common/loaders/CardSkeleton"
import TrackItemSkeleton from "../components/common/loaders/TrackItemSkeleton"
import EditorsPickCardSkeleton from "../components/common/loaders/EditorsPickCardSkeleton"


export const getTitle = (id) => {
      switch (id) {
            case 'top-tracks':
                  return "Trending tracks";
            case 'top-albums':
                  return "Popular albums";
            case 'top-playlists':
                  return "Top playlists";
            case 'top-artists':
                  return "Popular artists";
            case 'artist-albums':
                  return "Albums by ";
            case 'featured-playlists':
                  return "Featuring ";
            case 'similar-artists':
                  return "Fans also like ";
            case 'episodes-for-you':
                  return "Episodes for you ";
            case 'new-releases':
                  return "Popular new releases ";
            default: return id
      }
}

export const scrollTop = () => {
      const mainContentComtainer = document.querySelector('.main-content-container');
      if (mainContentComtainer)
            mainContentComtainer.scrollTo(0, 0)
}

export const trimText = (txt, limit) => {
      if (!txt || txt.length <= limit) return txt;
      else return (txt.length > limit) ? txt.substring(0, limit) + "..." : txt;
}

export const getMediaCardPlaceholders = (count = 6) => {
      let demo_arr = [];
      for (let i = 0; i < count; i++) demo_arr = [...demo_arr, i];

      return demo_arr.map((_, i) => <CardSkeleton key={i} />)
}


export const getTrackItemPlaceholders = (count = 6) => {
      let demo_arr = []
      for (let i = 0; i < count; i++) demo_arr = [...demo_arr, i];

      return demo_arr.map((_, i) => <TrackItemSkeleton key={i} />);
}


export const getEditorsPickCardSkeletons = (count = 6) => {
      let demo_arr = []
      for (let i = 0; i < count; i++) demo_arr = [...demo_arr, i];

      return demo_arr.map((_, i) => <EditorsPickCardSkeleton key={i} />);
}

export const removeObjectDuplicates = (arr) => (
      arr.filter((obj, index, self) => (
            index === self.findIndex(curObj => (obj.title == curObj.title))
      ))
)

export const getTracklist = async (url) =>{
      try{
            const { data } = await axios.post("/api/get-tracklist", { url });
            return data.tracklist
      }catch(err){
            console.log(err.message)
            return []
      }
}