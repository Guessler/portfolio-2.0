import Link from "next/link";
import { SOCIAL_MEDIA } from "./Header";

export default function Footer() {
  return (
    <footer className="max-w-335 mx-auto text-center mt-20 mb-20">
      <h1 className="text-[48px] mb-9">CONTACTS</h1>
      <ul className="flex gap-10 items-center justify-center">
        {SOCIAL_MEDIA.map((media, index) => (
          <Link
            href={media.link}
            key={index}
            style={{ display: "inline-block", width: "80px", height: "80px" }}
          >
            <div className="icon-wrapper" style={{ transform: "scale(1.7)" }}>
              {media.icon}
            </div>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
