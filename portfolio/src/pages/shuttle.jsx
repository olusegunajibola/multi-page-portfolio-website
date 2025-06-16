
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

// Here, we remove anything in the layout file to avoid repeat Content
// these include: Head, footer
export default function Shuttle() {
  return (
    <>
      {/* <Head>
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
        {/* <link rel="icon" href="/favicon.ico?v=1" /> force new icon load */}
      {/*</Head> */}
      <Layout>
      <div>
        {/* <h1>Introducing Nomadtrac</h1> */}
        <h2>Shuttle</h2>
        <h3>Perfect for Quick Get-aways</h3>
      </div>

      <div className="heroDiv">
        <Image
          priority // This image is important for the initial load
          src="/images/shuttle.jpg"
          fill
          alt="shuttle"
        />
      </div>

      <div className="specDiv">
        <p>Fuel type: Gasoline</p>
        <p>Seating Capacity: 6</p>
        <p>Sleeping Capacity: 3</p>
        <p>MSRP: US$45,000</p>
      </div>
              <Link className="navLink" href="/">
        &lt;&lt;&lt;&nbsp;Back to Homepage
        </Link>
        </Layout>
      {/* <div className="footer">
        <hr />
        <p>Copyrights (C) 2025 Nomadtrac, Ltd. All Rights Reserved.</p>
      </div> */}
    </>
  );
}
