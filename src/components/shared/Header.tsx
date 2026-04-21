import Link from "next/link";
import {
  GitHubSocial,
  Gmail,
  Telegram,
  // Russia,
  Burger,
  Britain,
  VK,
} from "../../../public/svg";
const NAV_ITEMS = ["experience", "skills", "portfolio", "contacts"];
export const SOCIAL_MEDIA = [
  { icon: <VK />, link: "https://vk.com/" },
  { icon: <Gmail />, link: "https://mail.google.com/mail/u/0/" },
  { icon: <Telegram />, link: "https://web.telegram.org/" },
  { icon: <GitHubSocial />, link: "https://github.com/Guessler" },
];

export default function Header() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 lg:top-5 w-full lg:max-w-335 lg:w-[calc(100%-40px)] flex items-center justify-between py-[15px] lg:py-5 px-2.5 lg:px-11.5 rounded-b-[10px] lg:rounded-[80px] bg-white shadow-[0_6.4px_67.92px_0_rgba(0,0,0,0.2)] z-50">
      <h2 className="text-[24px] lg:text-[33.5px]">PORTFOLIO</h2>

      <ul className="hidden lg:flex gap-12">
        {NAV_ITEMS.map((item, index) => (
          <Link key={index} href="#">
            <li className="text-[22px] text-black/60">{item}</li>
          </Link>
        ))}
      </ul>

      <ul className="hidden lg:flex gap-4">
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

        <div className="block lg:hidden">
          <Burger />
        </div>
      </div>
    </nav>
  );
}
