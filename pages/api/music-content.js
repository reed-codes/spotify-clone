// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {

  try {
    const { data: pop_resulsts } = await axios.get("https://api.deezer.com/editorial/132/charts?limit=5")
    const { data: rap_resulsts } = await axios.get("https://api.deezer.com/editorial/116/charts?limit=5")
    const { data: r_and_b_resulsts } = await axios.get("https://api.deezer.com/editorial/165/charts?limit=5")
    const { data: alternative_results } = await axios.get("https://api.deezer.com/editorial/85/charts?limit=5")
    const { data: podcast_results } = await axios.get("https://api.deezer.com/chart/0/podcasts?limit=0")

    if (pop_resulsts && rap_resulsts && r_and_b_resulsts && alternative_results && podcast_results) {
      let tracks = [...pop_resulsts.tracks.data, ...rap_resulsts.tracks.data, ...r_and_b_resulsts.tracks.data, ...alternative_results.tracks.data];
      let playlists = [...pop_resulsts.playlists.data, ...rap_resulsts.playlists.data, ...r_and_b_resulsts.playlists.data, ...alternative_results.playlists.data];
      let artists = [...pop_resulsts.artists.data, ...rap_resulsts.artists.data, ...r_and_b_resulsts.artists.data, ...alternative_results.artists.data];
      let albums = [...pop_resulsts.albums.data, ...rap_resulsts.albums.data, ...r_and_b_resulsts.albums.data, ...alternative_results.albums.data];
      let podcasts = podcast_results.data;

      res.status(200).json({
        content: {
          tracks,
          playlists,
          artists,
          albums,
          podcasts,
          err: null
        }
      })

    } else {

      res.status(200).json({
        content: {
          tracks: [],
          playlists: [],
          artists: [],
          albums: [],
          podcasts: [],
          err: "ONE_OR_MORE_RESULTS_WERE_NOT_AS_EXPECTED"
        }
      })

    }


  } catch (err) {

    res.status(200).json({
      content: {
        tracks: [],
        playlists: [],
        artists: [],
        albums: [],
        podcasts: [],
        err: err.message
      }
    })

  }


}
