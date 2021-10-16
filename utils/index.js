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
              case 'new-releases' : 
                    return "Hot new releases"
              default : return id
    }
}