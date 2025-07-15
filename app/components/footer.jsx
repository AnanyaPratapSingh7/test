import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#DF4836] text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-3 sm:gap-0">
            {/* Left side: Copyright */}
            <p className="text-white font-light text-center sm:text-left">© 2025 by Dr. Sandeep K Verma.</p>

            {/* Right side: Social Icons */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-white font-light hidden xs:inline">Follow us:</span>

                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
                </a>
                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                    aria-label="Twitter"
                >
                    <FontAwesomeIcon icon={faTwitter} className="text-sm" />
                </a>
                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
