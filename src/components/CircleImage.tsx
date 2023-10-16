import React from "react";
import Image from "next/image";
import { CircleImageProps } from "@/types";

const CircleImage = (props: CircleImageProps) => {
  return (
    <Image
      src={props.url}
      alt={props.alt || "userImage"}
      width={props.width || 50}
      height={props.height || 50}
      className="rounded-full border-2 border-white"
    />
  );
};

export default CircleImage;
