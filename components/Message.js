import React from "react";
import Image from "next/image";
import { client, urlFor } from "../client";

function Message({ message: { name, comment, title, url, image } }) {
  return (
    <div>
      <Image
        src={urlFor(image).width(250).url()}
        alt="player"
        layout="fill"
        objectFit="cover"
        className="h-full rounded-xl"
        loading="lazy"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center">
          <div className="font-bold text-xl mb-2 pr-2">{name}</div>
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
}

export default Message;
