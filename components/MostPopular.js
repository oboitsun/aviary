import Image from "next/image";
import React from "react";
import AviaryParrotCard from "./AviaryParrotCard";
import Heading from "./Heading";
const parrots = new Array(15).fill("");
export default function MostPopular() {
  return (
    <div className="cont ">
      <Heading icon="/assets/icons/favorite.svg" text="Most Popular Aviary" />
      <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {parrots.map((p, i) => (
          <AviaryParrotCard key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center py-8">
        <button className={`MostPopular__button`}>
          <Image
            layout="fixed"
            width={20}
            height={20}
            className="mr-2"
            src="/assets/icons/load_more.svg"
            alt="cart"
          />{" "}
          <span className="uppercase font-bold">Load More</span>
        </button>
      </div>
    </div>
  );
}
