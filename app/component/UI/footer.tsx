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
          href: "/",
        },
        {
          name: "Legal",
          href: "/peer hub privacy policy.pdf",
        },
        {
          name: "Contact Us",
          href: "/",
        },
        {
          name: "Careers",
          href: "/",
        },
      ],
    },
    {
      heading: "PeerHub",
      links: [
        {
          name: "Community ",
          href: "/community",
        },
        {
          name: "Knowledge Vault",
          href: "/knowledge-vault",
        },
        {
          name: "Events",
          href: "/events",
        },
      ],
    },
    {
      heading: "Community",
      links: [
        {
          name: "Student Chapters",
          href: "/community",
        },
        {
          name: "PeerHub Clubs ",
          href: "/community",
        },
        {
          name: "Social Hub",
          href: "/community",
        },
      ],
    },
    {
      heading: "PeerHub Clubs",
      links: [
        {
          name: "Tech Clubs",
          href: "/community",
        },
        {
          name: "Management Clubs",
          href: "/community",
        },
        {
          name: "Art Clubs",
          href: "/community",
        },
        {
          name: "Start-Up Clubs",
          href: "/community",
        },
        {
          name: "Engineering Clubs",
          href: "/community",
        },
        {
          name: "Law Clubs",
          href: "/community",
        },
        {
          name: "Design Clubs",
          href: "/community",
        },
        {
          name: "Science Clubs",
          href: "/community",
        },
      ],
    },
    {
      heading: "Knowledge Vault ",
      links: [
        { name: "Micro-Learning Programs", href: "/knowledge-vault" },
        { name: "Foundation Lab", href: "/knowledge-vault" },
        { name: "Fellowship Programs", href: "/knowledge-vault" },
      ],
    },
    {
      heading: "Events",
      links: [
        { name: "Ideathons", href: "/events" },
        { name: "TedTalks", href: "/events" },
        { name: "Designathons", href: "/events" },
        { name: "Festivals ", href: "/events" },
        { name: "Hackathons", href: "/events" },
        { name: "Open Mics ", href: "/events" },
        { name: "Concerts ", href: "/events" },
      ],
    },
    {
      heading: "Tech Clubs",
      links: [
        { name: "Programming Club", href: "/community" },
        { name: "AI Club", href: "/community" },
        { name: "Data Club", href: "/community" },
      ],
    },
    {
      heading: "Management Clubs",
      links: [
        { name: "MBA Club", href: "/community" },
        { name: "Finance Club", href: "/community" },
        { name: "Product Club", href: "/community" },
        { name: "Marketing Club", href: "/community" },
      ],
    },
    {
      heading: "Art Clubs ",
      links: [
        { name: "Meme Club", href: "/community" },
        { name: "Photography Club", href: "/community" },
        { name: "Design Club", href: "/community" },
        { name: "Anime Club", href: "/community" },
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
                    className={`text-gray-600 hover:text-gray-900 ${
                      link.href === "#" && "pointer-events-none"
                    }`}
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
        <p>
          <a
            href="/peer hub privacy policy.pdf"
            download={true}
            className="hover:text-gray-900"
          >
            Privacy Policy
          </a>{" "}
          | © 2024 Peerhub All rights reserved
        </p>
      </div>
    </footer>
  );
}
