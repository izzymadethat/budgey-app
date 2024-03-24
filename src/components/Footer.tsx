import {
  FaDiscord,
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { footerLinks } from "../constants";

const socialLinks = [
  {
    title: "Facebook",
    path: "",
    icon: <FaFacebook className="size-6 lg:size-10" />,
  },
  {
    title: "Twitter",
    path: "",
    icon: <FaSquareXTwitter className="size-6 lg:size-10" />,
  },
  {
    title: "Instagram",
    path: "",
    icon: <FaSquareInstagram className="size-6 lg:size-10" />,
  },
  {
    title: "Youtube",
    path: "",
    icon: <FaYoutube className="size-6 lg:size-10" />,
  },
  {
    title: "Discord",
    path: "",
    icon: <FaDiscord className="size-6 lg:size-10" />,
  },
  {
    title: "Google+",
    path: "",
    icon: <FaGooglePlusG className="size-6 lg:size-10" />,
  },
  {
    title: "LinkedIn",
    path: "",
    icon: <FaLinkedin className="size-6 lg:size-10" />,
  },
];

export default function Footer() {
  const siteLinks = footerLinks[0].siteLinks;
  const legalLinks = footerLinks[1].legalLinks;

  return (
    <footer className="py-6 border-t-green-300 border-t-8 min-h-[150px] bg-green-900 shadow-md text-green-100 ">
      <div className="w-5/6 mx-auto flex items-start justify-between">
        <div>
          <p className="font-semibold underline">Resources</p>
          <ul>
            {siteLinks?.map(
              (link: { title: string; path: string }, index: number) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm font-light hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p className=" font-semibold underline">Legals</p>
          <ul>
            {legalLinks?.map(
              (link: { title: string; path: string }, index: number) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm font-light hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden lg:block">
          <p className=" font-semibold underline">Follow Budge!</p>
          <ul className="grid grid-cols-3 lg:grid-cols-12 gap-px lg:gap-2 mt-4">
            {socialLinks.map((link, index: number) => (
              <li key={index}>
                <a href={link.path}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-4">
        {/* socials mobile version */}
        <div className="flex flex-col justify-center items-center lg:hidden ">
          <p className=" font-semibold underline">Follow Budge!</p>
          <ul className="flex gap-2">
            {socialLinks.map((link, index: number) => (
              <li key={index}>
                <a href={link.path}>{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-80 mx-auto mt-6 lg:mx-0 lg:w-full" />
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center my-4">
          <a href="/">
            <img src="/src/assets/images/logo.svg" alt="" className="w-64" />
          </a>
          <p className="text-[10px] lg:text-sm text-green-300">
            Copyright &copy; {new Date().getFullYear()}. All rights for this
            prototype reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
