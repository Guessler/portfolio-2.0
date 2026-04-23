"use client";
import Link from "next/link";
import { Burger, Britain } from "../../../public/svg";
import { SOCIAL_MEDIA } from "@/consts/socialMedia";
import { NAV_ITEMS } from "@/consts/headerInfo";
import { MobileMenu } from "../ui/modals/MobileMenu";
import { createPortal } from "react-dom";
import { useState, useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Header() {
  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const [visible, setVisible] = useState(false)

  const toggleVisability = () => {
    setVisible(prev => !prev)
  }

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 xl:top-5 w-full xl:max-w-335 xl:w-[calc(100%-40px)] flex items-center justify-between py-[15px] xl:py-5 px-2.5 xl:px-11.5 rounded-b-[10px] xl:rounded-[80px] bg-white shadow-[0_6.4px_67.92px_0_rgba(0,0,0,0.2)] z-50">
      <h2 className="text-[20px] xl:text-[33.5px]">PORTFOLIO</h2>

      <ul className="hidden xl:flex gap-12">
        {NAV_ITEMS.map((item, index) => (
          <Link key={index} href="#">
            <li className="text-[22px] text-black/60">{item}</li>
          </Link>
        ))}
      </ul>

      <ul className="hidden xl:flex gap-4">
        {SOCIAL_MEDIA.map((media, index) => (
          <Link href={media.link} key={index}>
            {media.icon}
          </Link>
        ))}
      </ul>

      <div className="flex gap-5 items-center">
        <button className="flex cursor-pointer">
          <Britain />
        </button>

        <div onClick={toggleVisability} className="block xl:hidden">
          <Burger />
        </div>
      </div>

      {visible && isMounted ? createPortal(<MobileMenu />, document.body) : null}
    </nav>
  );
}
