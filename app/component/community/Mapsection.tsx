"use client";
import React from "react";
import dynamic from "next/dynamic";
import HighlightText from "../UI/HighlightText";

const MapContainerWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);

const TileLayerWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);

import "leaflet/dist/leaflet.css";
import { Search } from "lucide-react";

const MapSection = () => {
  return (
    <div className=" text-white  px-4 py-24">
      <h1 className="text-3xl font-bold mb-2 text-center font-Berlin md:text-6xl">
        PeerHub on <HighlightText text="Campus" />
      </h1>
      <div className="relative mb-4 max-w-3xl mx-auto my-8">
        <input
          type="text"
          placeholder="Search here"
          className="w-full bg-navbg text-white p-2 rounded-md pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="mb-4 h-64 md:h-96 relative">
        <MapContainerWithNoSSR
          center={[15.87, 100.9925]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayerWithNoSSR url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainerWithNoSSR>
      </div>
    </div>
  );
};

export default MapSection;
