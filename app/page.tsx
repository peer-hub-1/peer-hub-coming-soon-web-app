import Image from "next/image";
import bg from "@/public/nasa-foto-snimok-kosmos.jpg";
import logo from "@/public/PeerHub Logo-07.svg";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-black flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={logo}
        alt="PeerHub Logo"
        className="m-12 rounded-full"
        width={100}
        height={100}
      />
      <div className="flex flex-col flex-grow justify-center items-center gap-6 text-white text-center">
        <div className="flex flex-grow flex-col gap-8 items-center justify-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold ">Coming Soon!</h1>
          <p className="text-base md:text-xl">
            Stay tuned for the launch of PeerHub!
          </p>
        </div>
        <div className="flex gap-4 sm:gap-12 pb-10 flex-wrap">
          <Link href="https://www.instagram.com/peerhub101/" target="_blank">
            <FaInstagram size={36} />
          </Link>
          {/* <Link href="https://facebook.com/peerhub" target="_blank">
            <FaFacebook size={36} />
          </Link> */}
          {/* <Link href="https://twitter.com/peerhub" target="_blank">
            <FaTwitter size={36} />
          </Link> */}
          <Link
            href="https://www.linkedin.com/company/peer-hub/"
            target="_blank"
          >
            <FaLinkedin size={36} />
          </Link>
        </div>
      </div>
    </div>
  );
}
