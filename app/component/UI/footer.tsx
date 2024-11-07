import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
// import { head, hr } from "framer-motion/client";

export default function Footer() {
  const footerData = [
    {
      heading: "Company",
      links: [
        {
          name: "About Us",
          href: "#",
        },
        {
          name: "Legal",
          href: "#",
        },
        {
          name: "Contact Us",
          href: "#",
        },
        {
          name: "Careers",
          href: "#",
        },
      ],
    },
    {
      heading: "PeerHub",
      links: [
        {
          name: "Community ",
          href: "#",
        },
        {
          name: "Knowledge Vault",
          href: "#",
        },
        {
          name: "Events",
          href: "#",
        },
      ],
    },
    {
      heading: "Community",
      links: [
        {
          name: "Student Chapters",
          href: "#",
        },
        {
          name: "PeerHub Clubs ",
          href: "#",
        },
        {
          name: "Social Hub",
          href: "#",
        },
      ],
    },
    {
      heading: "PeerHub Clubs",
      links: [
        {
          name: "Tech Clubs",
          href: "#",
        },
        {
          name: "Management Clubs",
          href: "#",
        },
        {
          name: "Art Clubs",
          href: "#",
        },
        {
          name: "Start-Up Clubs",
          href: "#",
        },
        {
          name: "Engineering Clubs",
          href: "#",
        },
        {
          name: "Law Clubs",
          href: "#",
        },
        {
          name: "Design Clubs",
          href: "#",
        },
        {
          name: "Science Clubs",
          href: "#",
        },
      ],
    },
    {
      heading: "Knowledge Vault ",
      links: [
        { name: "Micro-Learning Programs", href: "#" },
        { name: "Foundation Lab", href: "#" },
        { name: "Fellowship Programs", href: "#" },
      ],
    },
    {
      heading: "Events",
      links: [
        { name: "Ideathons", href: "#" },
        { name: "TedTalks", href: "#" },
        { name: "Designathons", href: "#" },
        { name: "Festivals ", href: "#" },
        { name: "Hackathons", href: "#" },
        { name: "Open Mics ", href: "#" },
        { name: "Concerts ", href: "#" },
      ],
    },
    {
      heading: "Tech Clubs",
      links: [
        { name: "Programming Club", href: "#" },
        { name: "AI Club", href: "#" },
        { name: "Data Club", href: "#" },
      ],
    },
    {
      heading: "Management Clubs",
      links: [
        { name: "MBA Club", href: "#" },
        { name: "Finance Club", href: "#" },
        { name: "Product Club", href: "#" },
        { name: "Marketing Club", href: "#" },
      ],
    },
    {
      heading: "Art Clubs ",
      links: [
        { name: "Meme Club", href: "#" },
        { name: "Photography Club", href: "#" },
        { name: "Design Club", href: "#" },
        { name: "Anime Club", href: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-white py-12 px-4 w-full">
      {/* Section 2: Three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 lg:p-6">
        <div className=" flex flex-col gap-4 items-center">
          <Image
            src="/PeerHub Logo-05.svg"
            alt="PeerHub Logo"
            className="size-24 object-cover"
            width={100}
            height={100}
          />
          <p className="text-gray-600 whitespace-pre-wrap hidden lg:block">
            {`Registered Address \nD-9, Sector 3, Noida, Gautam \nBuddha Nagar, Uttar Pradesh -201301`}
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 pointer-events-none"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/peerhub101?igsh=MWxvZWhlMjkxNzk2MA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 "
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 pointer-events-none"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 pointer-events-none"
          >
            Download App
          </Link>
        </div>
        {footerData.map((item, index) => (
          <div key={index} className="hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">{item?.heading}</h3>
            <ul className="space-y-2">
              {item?.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 pointer-events-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
        <p>Terms of use | © 2024 Peerhub All rights reserved</p>
      </div>
    </footer>
  );
}
