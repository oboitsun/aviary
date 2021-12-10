import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "./Socials";
const F = "Footer";
const links = [
  { text: "categories", href: "/categories", icon: "/assets/icons/categories.svg" },
  { text: "food", href: "/food", icon: "/assets/icons/food.svg" },
  { text: "Accessories", href: "/accessories", icon: "/assets/icons/favorite.svg" },
  { text: "blog", href: "/blog", icon: "/assets/icons/blog.svg" },
];
export default function Footer() {
  return (
    <div className={`Footer`}>
      <div className="cont flex items-center justify-between ">
        <Link href="/">
          <a className={`${F}__logo-name`}>
            <Image
              layout="fixed"
              width={74}
              height={37}
              className="logo"
              src="/assets/logo.svg"
              alt="Aviary Marketplace"
            />
            <div className="name">
              <p>Aviary</p>
              <p>Marketplace</p>
            </div>{" "}
          </a>
        </Link>
        <div className={`${F}__about`}>
          <p className="lorem font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="copyright font-medium">
            Copyright © 2021 Aviary Marketplace. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 w-1/4 gap-4">
          {links.map((l, i) => (
            <a href={l.href} key={i} className="flex items-center gap-1">
              <Image
                layout="fixed"
                width={16}
                height={16}
                className="w-4 h-4"
                src={l.icon}
                alt={l.text}
              />
              <p className="text-xs text-white uppercase leading-none">{l.text}</p>
            </a>
          ))}
        </div>
        <div className="text-white">
          <Socials />
        </div>
      </div>
    </div>
  );
}
