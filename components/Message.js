import React from "react";
import Image from "next/image";
import { client, urlFor } from "../client";

function Message({ message: { name, comment, title, url, image } }) {
  return (
    <div className="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 "
        ></div>
        <Image
          src={urlFor(image).width(250).url()}
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          className="h-64 w-full object-cover object-top rounded-t-lg grayscale transition hover:grayscale-0  transition duration-500 group-hover:rounded-t-xl"
        />
      </div>
      <div className="relative space-y-4 p-4">
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="text-white">{comment}</p>
      </div>
      <a
        href="#"
        className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
      >
        <span className="text-white text-sm italic">from {name}</span>
      </a>
    </div>
  );
}

export default Message;
