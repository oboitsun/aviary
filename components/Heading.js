import Image from "next/image";
import React from "react";

export default function Heading({ icon, text }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {icon && (
        <Image layout="fixed" width={24} height={24} className="" src={icon} alt={text} />
      )}
      <p className="font-extrabold text-2xl leading-none">{text}</p>
    </div>
  );
}
