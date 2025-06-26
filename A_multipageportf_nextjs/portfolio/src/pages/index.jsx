import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomadtrac</title>
        <meta property="title" content="Nomadtrac" key="title" />
        <meta
          name="description"
          content="Self-driving campers that let you live anywhere you want"
        />
        <meta property="og:title" content="Nomadtrac" key="ogtitle" />
        <meta
          property="og:description"
          content="Self-driving campers that let you live anywhere you want"
          key="ogdescription"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico?v=1" /> {/* force new icon load */}
      </Head>
      <div>
        <h1>Introducing Nomadtrac</h1>
        <h2>The First Self-Driving Camper</h2>
        <h3>Because the Planet is Your Home</h3>
      </div>

      <div className="heroDiv">
        <Image
          priority // This image is important for the initial load
          src="/images/hero.jpg"
          fill
          alt="camper under the stars"
        />
      </div>
      <h2>A Model For Every Lifestyle</h2>

      <div className="thumbnailDiv">
        <Link className="navLink" href="/shuttle">
          <Image src="/images/shuttle.jpg" fill alt="shuttle" />
          <h3>Shuttle</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link className="navLink" href="/electra">
        <Image src="/images/electra.jpg" fill alt="electra" />
        <h3>Electra</h3>
        </Link>
      </div>

      <div className="thumbnailDiv">
        <Link className="navLink" href="/starbase?">
        <Image src="/images/starbase.jpg" fill alt="starbase" />
        <h3>Starbase</h3>
        </Link>
      </div>

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2025 Nomadtrac, Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}
