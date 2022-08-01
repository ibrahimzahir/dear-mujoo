import React from "react";

function about() {
  return (
    <div className="py-32 bg-black">
      <div className="container  m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="/mujey.jpeg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
