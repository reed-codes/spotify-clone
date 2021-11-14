import CardSkeleton from "../components/common/CardSkeleton"
import TrackItemSkeleton from "../components/common/TrackItemSkeleton"


export const getTitle = (id)=>{
    switch(id){
              case 'top-tracks' : 
                    return "Trending tracks"
              case 'top-albums' : 
                    return "Popular albums"
              case 'top-playlists' : 
                    return "Top playlists"
              case 'top-artists' : 
                    return "Popular artists"
              case 'artist-albums' : 
                    return "Albums by "
              case 'featured-playlists' : 
                    return "Featuring "
              case 'similar-artists' : 
                    return "Fans also like "
              case 'episodes-for-you' : 
                    return "Episodes for you "
              default : return id
    }
}

export const scrollTop = ()=>{
      const mainContentComtainer = document.querySelector('.main-content-container');
      if(mainContentComtainer)
        mainContentComtainer.scrollTo(0,0)
} 

export const trimText = (txt, limit = 35)=>{
          if(!txt) return txt
           
          if(txt.length > 45) return txt.substring(0, limit )+"..."
          else return txt
}

export const getMediaCardPlaceholders = (count = 6) => {
       let demo_arr = []
       for(let i = 0; i < count; i++) demo_arr = [...demo_arr, i]

       return demo_arr.map( (_, i) => <CardSkeleton key = {i}/>)
}


export const getTrackItemPlaceholders = (count = 6) => {
      let demo_arr = []
      for(let i = 0; i < count; i++) demo_arr = [...demo_arr, i]

      return demo_arr.map( (_, i) => <TrackItemSkeleton key = {i}/>)
}