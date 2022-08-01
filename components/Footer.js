import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="w-full items-center py-16 bg-black">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600">
          <div className="flex justify-center">
            <span className="text-sm tracking-wide mx-2">with love</span>
            <HeartIcon className="h-5 w-5 animate-ping text-red-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
