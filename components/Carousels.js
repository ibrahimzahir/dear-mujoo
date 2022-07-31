import React from "react";
import Image from "next/image";

function Carousels() {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="./background.jpeg"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-30 backdrop-blur-sm"
        ></div>
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <main className="py-28">
            <div className="py-4">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center">
                  <h2 className="text-2xl font-bold md:text-4xl">
                    In Loving Memory of Mujoo
                  </h2>
                  <p className="lg:w-6/12 lg:mx-auto">
                    Quam hic dolore cumque voluptate rerum beatae et quae,
                    tempore sunt, debitis dolorum officia aliquid explicabo?
                    Excepturi, voluptate?
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="grayscale transition hover:grayscale-0 relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-purple-50"
                      ></div>
                      <img
                        src="mujoo10.jpeg"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"
                      />
                    </div>
                    <div className="relative space-y-4 -mt-20 p-4">
                      <h4 className="text-2xl font-semibold text-purple-900">
                        lorem ispum laboriosam expedita.
                      </h4>
                      <p className="text-gray-600">
                        Voluptates harum aliquam totam, doloribus eum impedit
                        atque! Temporibus...
                      </p>
                    </div>
                    <a
                      href="#"
                      className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                    ></a>
                  </div>
                  <div className="grayscale transition hover:grayscale-0 relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-purple-50"
                      ></div>
                      <img
                        src="mujoo.jpeg"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"
                      />
                    </div>
                    <div className="relative space-y-4 -mt-20 p-4">
                      <h4 className="text-2xl font-semibold text-purple-900">
                        lorem ispum laboriosam expedita.
                      </h4>
                      <p className="text-gray-600">
                        Voluptates harum aliquam totam, doloribus eum impedit
                        atque! Temporibus...
                      </p>
                    </div>
                    <a
                      href="#"
                      className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                    ></a>
                  </div>
                  <div className="grayscale transition hover:grayscale-0 relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-purple-50"
                      ></div>
                      <img
                        src="mujoo17.jpeg"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"
                      />
                    </div>
                    <div className="relative space-y-4 -mt-20 p-4">
                      <h4 className="text-2xl font-semibold text-purple-900">
                        lorem ispum laboriosam expedita.
                      </h4>
                      <p className="text-gray-600">
                        Voluptates harum aliquam totam, doloribus eum impedit
                        atque! Temporibus...
                      </p>
                    </div>
                    <a
                      href="#"
                      className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                    ></a>
                  </div>

                  <div className="grayscale transition hover:grayscale-0 relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-purple-50"
                      ></div>
                      <img
                        src="mujoo11.jpeg"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"
                      />
                    </div>
                    <div className="relative space-y-4 -mt-20 p-4">
                      <h4 className="text-2xl font-semibold text-purple-900">
                        lorem ispum laboriosam expedita.
                      </h4>
                      <p className="text-gray-600">
                        Voluptates harum aliquam totam, doloribus eum impedit
                        atque! Temporibus...
                      </p>
                    </div>
                    <a
                      href="#"
                      className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
