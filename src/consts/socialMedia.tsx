import Image from "next/image"
import vk from "../../public/vk.png"
import telegram from "../../public/telegram.png"
import gmail from "../../public/gmail.png"
import github from "../../public/github.png"



export const SOCIAL_MEDIA = [
  { icon: <Image src={vk} alt={`${vk}`} />, link: "https://vk.com/" },
  { icon: <Image src={telegram} alt={`${telegram}`} />, link: "https://mail.google.com/mail/u/0/" },
  { icon: <Image src={gmail} alt={`${gmail}`} />, link: "https://web.telegram.org/" },
  { icon: <Image src={github} alt={`${github}`} />, link: "https://github.com/Guessler" },
];