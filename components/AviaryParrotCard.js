import Image from "next/image";
import React from "react";
const PC = "ParrotCard";
export default function AviaryParrotCard() {
  return (
    <div className={PC}>
      <div className={`${PC}__pic`}>
        <div className="inner-pic">
          <Image layout="fill" objectFit="cover" src="/assets/parrot.jpg" alt="parrot" />
        </div>
      </div>
      <div className={`${PC}__text-part`}>
        <p className="name">Lorem Ipsum (15 Weeks)</p>
        <p className="id">#12452352342</p>
        <button className={`${PC}__button`}>Buy now for $10</button>
      </div>
    </div>
  );
}
