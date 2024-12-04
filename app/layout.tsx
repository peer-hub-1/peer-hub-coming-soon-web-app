import type { Metadata } from "next";
// import localFont from "next/font/local";
// import Footer from "@/app/component/UI/footer";
// import Navbar from "@/app/component/UI/navbar";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "PeerHub",
  description: "",
  icons: {
    icon: "/public/PeerHub Logo-07.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="PeerHub, the community-driven platform where students connect, collaborate, and create. Join our interest-based clubs on our exclusive app, share ideas, and get inspired by peers across colleges. Our diverse range of clubs, including Tech Clubs, Management Clubs, Metro Clubs, Health Clubs, Law Clubs, and Art Clubs, ensures that there’s a community for everyone."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="PeerHub" />
        <meta
          property="og:description"
          content="PeerHub, the community-driven platform where students connect, collaborate, and create. Join our interest-based clubs on our exclusive app, share ideas, and get inspired by peers across colleges. Our diverse range of clubs, including Tech Clubs, Management Clubs, Metro Clubs, Health Clubs, Law Clubs, and Art Clubs, ensures that there’s a community for everyone."
        />
        <meta
          property="og:image"
          content="https://www.peerhub.in/PeerHub Logo-07.svg"
        />
        <meta property="og:url" content="https://www.peerhub.in" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`antialiased bg-navyBlue max-w-[1440px] mx-auto`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
