"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useState } from "react";

const DotLottie = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="h-full w-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl">Loading...</h2>
            <div className="animate-spin text-4xl">🍥</div>
          </div>
        </div>
      )}
      <DotLottiePlayer
        src={src}
        loop
        autoplay
        onEvent={(event) => {
          if (event === "ready") {
            setLoading(false);
          }
        }}
        className={loading ? "hidden" : "inline-block"}
      />{" "}
    </>
  );
};

export default DotLottie;
