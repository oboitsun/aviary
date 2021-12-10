import Head from "next/head";
import Image from "next/image";
import DealsCarousel from "../components/DealsCarousel";
import MostPopular from "../components/MostPopular";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Aviary Marketplace</title>
        <meta name="description" content="Aviary marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DealsCarousel />
      <MostPopular />
    </div>
  );
}
