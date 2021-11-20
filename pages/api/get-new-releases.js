// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  try {
      const { data: tracklist } = await axios.get("https://api.deezer.com/editorial/0/releases?limit=25")
      res.status(200).json({ tracklist: tracklist.data })
  }
  catch(err){
      res.status(401).json({ message: err.message, err })
  }

  }
