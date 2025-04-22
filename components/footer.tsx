"use client"

import { FaRegClock } from "react-icons/fa";
import { RiMapPinAddFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Services", href: "#services" },
  { name: "Meet Our Team", href: "#therapists" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Book Appointment", href: "/booking" },
  { name: "About Us", href: "/about_us" },
  // { name: "FAQs", href: "#" }
];

// const serviceLinks = [
//   { name: "Sports Rehabilitation", href: "#" },
//   { name: "Manual Therapy", href: "#" },
//   { name: "Neurological Rehabilitation", href: "#" },
//   { name: "Pediatric Therapy", href: "#" },
//   { name: "Pain Management", href: "#" },
//   { name: "Geriatric Physiotherapy", href: "#" },
//   { name: "Workplace Injuries", href: "#" }
// ];

// const socialLinks = [
//   { icon: <FaFacebook size={25} />, href: "#", label: "Facebook" },
//   { icon: <FaTwitter size={25} />, href: "#", label: "Twitter" },
// ];

export default function Footer() {

  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src={'/images/Final Logo White.png'}
                alt="footer-image"
                width={1000}
                height={1000}
                className="w-[60%]"
              />
            </div>
            <p className="text-base text-gray-400 mb-6">
              Your trusted partner in physiotherapy and rehabilitation. We are dedicated to helping you move better and live pain-free.
            </p>
            <div className="flex space-x-4">
              {/* {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </Link>
              ))} */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <RiMapPinAddFill size={17} className="mt-1 mr-3" />
                <span className="text-base text-gray-400">Barrackpore BT Road, Kolkata, 700120</span>
              </li>
              <li className="flex items-start">
                <FaPhoneVolume size={17} className="mt-1 mr-3" />
                <span className="text-base text-gray-400">(+91) 6291064916</span>
              </li>
              <li className="flex items-start">
                <IoMdMailUnread size={17} className="mt-1 mr-3" />
                <span className="text-base text-gray-400">movecure51@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaRegClock size={17} className="mt-1 mr-3" />
                <div className="text-base text-gray-400">
                  <div>Everyday (Monday - Sunday): 8:00 AM - 10:00 PM</div>
                  <div>occasionally: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MoveCure Physiotherapy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href={"/privacy_policy"} className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>

              <Link href={"/refund_policy"} className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>

              <Link href="/term_condition" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
