import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isFacts, setIsFacts] = useState(false);
  const hiddenPath = ["/login", "/signup", "/join"];
  return (
    <div
      className={`sticky top-[4rem] hidden h-[calc(100vh-4rem)] w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] md:flex md:shrink-0 md:flex-col md:justify-between bg-hcl-primary ${
        hiddenPath.includes(pathname) && "md:hidden"
      }`}
    >
      <div className="text-white">
        <ul className="mt-28 space-y-12 ml-8 xl:ml-10 2xl:ml-14">
          <li>
            <Link
              className={`text-lg  text-gray-400 hover:text-white w-full block ${
                pathname === "/" && "active-side-nav"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`text-lg  text-gray-400 hover:text-white w-full block ${
                pathname === "/shared-gallery" && "active-side-nav"
              }`}
              to="/shared-gallery"
            >
              Shared Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg  text-gray-400 hover:text-white w-full block ${
                pathname === "/networking" && "active-side-nav"
              }`}
              to="/networking"
            >
              Networking
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg  text-gray-400 hover:text-white w-full block ${
                pathname === "/contact" && "active-side-nav"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <p
              onClick={() => setIsFacts(!isFacts)}
              className={`text-lg cursor-pointer  text-gray-400 hover:text-white w-full flex items-center gap-2 ${
                isFacts && "text-white"
              }`}
            >
              <span>Facts</span>
              {isFacts ? (
                <RiArrowUpSLine className="relative right-1.5 top-0.5" />
              ) : (
                <RiArrowDownSLine className="relative right-1.5 top-0.5" />
              )}
            </p>
            {isFacts && (
              <ul className="ml-0 mt-6 space-y-6">
                <li>
                  <Link
                    className={`text-lg  text-gray-400 hover:text-white w-full block ${
                      pathname === "/facts/privacy-policy" && "active-side-nav"
                    }`}
                    to="/facts/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-lg  text-gray-400 hover:text-white w-full block ${
                      pathname === "/facts/about-us" && "active-side-nav"
                    }`}
                    to="/facts/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-lg  text-gray-400 hover:text-white w-full block ${
                      pathname === "/facts/faqs" && "active-side-nav"
                    }`}
                    to="/facts/faqs"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-lg  text-gray-400 hover:text-white w-full block ${
                      pathname === "/facts/email-now" && "active-side-nav"
                    }`}
                    to="/facts/email-now"
                  >
                    Email Now
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="flex justify-center items-center gap-4 mt-10 text-xl">
          <a
            className="hover:text-hcl-blue transition-colors duration-300"
            href="#"
          >
            <TbWorld />
          </a>
          <a
            className="hover:text-hcl-blue transition-colors duration-300"
            href="#"
          >
            <FaXTwitter />
          </a>
          <a
            className="hover:text-hcl-blue transition-colors duration-300"
            href="#"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-hcl-blue transition-colors duration-300"
            href="#"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-hcl-blue transition-colors duration-300"
            href="#"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}
