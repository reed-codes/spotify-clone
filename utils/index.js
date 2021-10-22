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
              case 'artist-albums' : 
                    return "Albums by "
              case 'featured-playlists' : 
                    return "Featuring "
              case 'similar-artists' : 
                    return "Fans also like "
              default : return id
    }
}

export const scrollTop = ()=>{
      const mainContentComtainer = document.querySelector('.main-content-container');
      if(mainContentComtainer)
        mainContentComtainer.scrollTo(0,0)
} 