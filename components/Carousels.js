import React from "react";
import Image from "next/image";
import Spinner from "../components/Spinner";
import { client } from "../client";
import { feedQuery } from "../utils/requests";
import { useEffect, useState } from "react";
import Messages from "./Messages";

const handleClick = () => {
  setActive(!active);
};

function Carousels() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setLoading(true);

    client.fetch(feedQuery).then((data) => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;
  return (
    <div>
      <div className="relative">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="/background.jpeg"
          layout="fill"
          objectFit="cover"
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
                  {messages && <Messages messages={messages} />}
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
