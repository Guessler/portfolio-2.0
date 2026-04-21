import Link from "next/link";
import { SOCIAL_MEDIA } from "./Header";

export default function Footer() {
  return (
    <footer className="max-w-335 mx-auto text-center mb-20">
      <h1 className="text-[24px] lg:text-[48px] mb-9">CONTACTS</h1>
      <ul className="flex gap-6 items-center justify-center">
        {SOCIAL_MEDIA.map((media, index) => (
          <Link
            href={media.link}
            key={index}
            style={{ display: "inline-block", width: "80px", height: "80px" }}
          >
            <div className="icon-wrapper" style={{ transform: "scale(1.2)" }}>
              {media.icon}
            </div>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
