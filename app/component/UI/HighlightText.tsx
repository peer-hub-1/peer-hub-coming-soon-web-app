import React from "react";

const HighlightText = ({ text }: { text: string }) => {
  return (
    <span
      className="text-peerHubOrange w-fit bg-no-repeat"
      style={{
        backgroundImage: "url('/highlight.svg')",
        backgroundPosition: "0 100%", // position it at the bottom
        backgroundSize: "100% 10px", // adjust height to look like an underline
      }}
    >
      {text}
    </span>
  );
};

export default HighlightText;
