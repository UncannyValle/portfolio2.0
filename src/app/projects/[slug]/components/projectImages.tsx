"use client";
import { motion } from "framer-motion";

import Image from "next/image";

type ProjectImagesProps = {
  slug: string | undefined;
  quantity: number;
};

const MotionImage = motion(Image);

export const ProjectImages = ({ slug, quantity }: ProjectImagesProps) => {
  return (
    <div>
      {Array.from({ length: quantity }).map((x, index) => (
        <MotionImage
          src={`/images/projects/${slug}/${index + 1}.png`}
          alt="{slug}"
          className="mx-auto my-8 w-full drop-shadow-lg"
          height={1000}
          width={1000}
          key={index}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      ))}
    </div>
  );
};
