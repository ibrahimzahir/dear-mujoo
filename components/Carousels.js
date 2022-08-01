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
  console.log(messages);
  if (loading) return <Spinner />;
  return (
    <div className="py-24">
      <div className="px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          {/* <span className="block w-max mx-auto px-4 py-1.5 border border-white rounded-full bg-white-100 text-white">
            Write
          </span> */}
          <h2 className="text-xl text-white font-bold md:text-4xl">
            In Loving Memory of
          </h2>
          <h4 className="text-xl text-white lg:w-6/12 lg:mx-auto">
            Ahmed Mujthaba (Mujoo)
          </h4>
        </div>
        {messages && <Messages messages={messages} />}
      </div>
    </div>
  );
}

export default Carousels;
