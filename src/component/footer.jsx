import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & About */}
          <div className="pr-4 border-r border-white last:border-none">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Car className="h-8 w-8 text-[#2380D9] animate-pulse" />
              <span className="text-2xl font-bold text-white tracking-wide">
                We24 Seven
              </span>
            </Link>
            <p className="text-base text-white leading-relaxed mb-6">
              India's most trusted platform for buying and selling pre-owned
              cars with complete transparency and a hassle-free experience.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:scale-110 transition-transform text-white hover:text-[#2380D9] cursor-pointer" />
              <Twitter className="h-6 w-6 hover:scale-110 transition-transform text-white hover:text-sky-400 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:scale-110 transition-transform text-white hover:text-pink-500 cursor-pointer" />
              <Youtube className="h-6 w-6 hover:scale-110 transition-transform text-white hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="pr-4 border-r border-white last:border-none">
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/buy-cars"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Buy Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/sell-cars"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Sell Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/finance"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Car Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="pr-4 border-r border-white last:border-none">
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Company
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#2380D9] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#2380D9] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2380D9] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#2380D9]">
              Contact Info
            </h4>
            <div className="space-y-4 text-base text-white">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3" />
                <span>+91-8791153542</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3" />
                <span>prakhar.shukla@we24seven.in</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-14 w-14 text-white mr-3 " />
                <span>
                  JMD Megapolis C29Q+RCH, Badshahpur Sohna Rd Hwy, Sector 48,
                  Gurugram, Haryana 122018
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
          <p>&copy; 2024 We24 Seven. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            <Link to="/" className="hover:underline">
              Terms & Conditions
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
