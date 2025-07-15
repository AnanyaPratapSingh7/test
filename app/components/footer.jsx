import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#DF4836] text-white px-6 py-3 flex justify-between items-center text-sm">
            {/* Left side: Copyright */}
            <p className="text-white font-light">© 2025 by Dr. Sandeep K Verma.</p>

            {/* Right side: Social Icons */}
            <div className="flex items-center gap-2">
                <span className="text-white font-light">Follow us:</span>

                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                >
                    <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
                </a>
                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                >
                    <FontAwesomeIcon icon={faTwitter} className="text-sm" />
                </a>
                <a
                    href="#"
                    className="w-9 h-9 p-2.5 flex items-center justify-center bg-white text-[#DF4836] rounded-full hover:scale-110 transition"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                </a>


            </div>
        </div>
    );
};

export default Footer;
