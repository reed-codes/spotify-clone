import React from 'react'
import Head from "next/head";

const HeadElement = () => {
  return (
    <Head>
      <title>Spotify Clone – by Reedemer</title>
      <meta name="description" content="Spotify clone by Reedemer is a digital music service that gives you access to millions of songs." />
      <meta property="og:title" content="Spotify - Web Player: Music for everyone" />
      <meta property="og:description" content="Spotify is a digital music service that gives you access to millions of songs." />
      <meta property="og:url" content="https://open.spotify.com/" />
      <meta property="og:image" content="https://open.scdn.co/cdn/images/og-image.860da0d8.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Spotify" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
      ></link>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <link rel="icon" sizes="32x32" type="image/png" href="https://open.scdn.co/cdn/images/favicon32.8e66b099.png" />
      <link rel="icon" sizes="16x16" type="image/png" href="https://open.scdn.co/cdn/images/favicon16.c498a969.png" />
      <link rel="icon" href="https://open.scdn.co/cdn/images/favicon.5cb2bd30.ico"/>
      {/* <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32" /> */}
    </Head>
  )
}

export default HeadElement
