import { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

type navLink = {
  path: string;
  title: string;
};

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleMobileNavbar() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="py-3 sticky top-0 z-50 border-b backdrop-blur-lg">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <a href="#">
            <img
              src="/src/assets/images/logo.svg"
              alt=""
              className="w-32 lg:w-48 cursor-pointer"
            />
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((link: navLink, index: number) => (
              <li key={index}>
                <a href={link.path} className="text-sm">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="px-4 py-3 border rounded-md font-bold hover:bg-green-600"
            >
              Sign In
            </a>

            <a
              href="#"
              className="px-4 py-3 rounded-md bg-gradient-to-r from-green-600 to-green-900 text-white"
            >
              Start Free!
            </a>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden md:flex flex-col justify-center">
            <button onClick={toggleMobileNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-green-950 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navLinks.map((link: navLink, index: number) => (
                    <li
                      key={index}
                      className="text-green-300/75 font-semibold tracking-wider text-md py-4"
                    >
                      <a href={link.path}>{link.title}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="px-4 py-3 bg-green-300 rounded-md font-bold hover:bg-green-600"
                  >
                    Sign In
                  </a>

                  <a
                    href="#"
                    className="px-4 py-3 rounded-md bg-gradient-to-r from-green-600 to-green-900 text-white"
                  >
                    Start Free!
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
