import React from "react";
import Link from "next/link";
const H = "Header";
const links = [
  { text: "categories", href: "/categories", icon: "/assets/icons/categories.svg" },
  { text: "food", href: "/food", icon: "/assets/icons/food.svg" },
  { text: "Accessories", href: "/accessories", icon: "/assets/icons/favorite.svg" },
  { text: "blog", href: "/blog", icon: "/assets/icons/blog.svg" },
];
export default function Header() {
  return (
    <div className="Header">
      <div className="cont flex justify-between items-center">
        <Link href="/">
          <a className={`${H}__logo-name`}>
            <img className="logo" src="/assets/logo.svg" alt="Aviary Marketplace" />
            <div className="name">
              <p>Aviary</p>
              <p>Marketplace</p>
            </div>{" "}
          </a>
        </Link>
        <div className="ml-auto flex ">
          {links.map((link, i) => (
            <div key={i} className="flex items-center">
              <Link href={link.href}>
                <a className={`${H}__link`}>
                  <img className="icon" src={link.icon} alt={link.text} />
                  <span className="text">{link.text}</span>
                </a>
              </Link>
              {i < links.length - 1 && (
                <div className="h-full w-0.5 bg-white opacity-10 mx-8"></div>
              )}
            </div>
          ))}
          <button className={`${H}__cart-button`}>
            <img className="mr-1" src="/assets/icons/cart.svg" alt="cart" />{" "}
            <span className="uppercase font-bold">cart (5)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
