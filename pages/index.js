import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Groove</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.png" /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <main
        style={{
          background: `url(./demo-img-4.jpg)`,
          backgroundSize: "cover",
          height: "200vh",
          width: "100%",
        }}
      >



      </main>
    </div>
  );
}

