"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useState } from "react";

const DotLottie = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p> loading.... </p>}
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
