import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Service() {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="lg:flex gap-10">
      {services?.map((service, index) => (
        <div
          key={index}
          className="relative text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 overflow-hidden"
        >
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "-98%" }}
            transition={{ type: "tween", duration: 1 }}
            viewport={{ once: true }}
            className="absolute h-full w-full  top-0 left-0  bg-cyan-500 z-10"
          />
          <Image src={`/${service.id}.png`} width={100} height={100} alt="" />
          <h2 className="text-2xl font-medium pt-8 pb-2 dark:text-white">
            {service.type}
          </h2>
          <p className="py-2 dark:text-gray-400">{service.details}</p>
          <h4 className="py-4 text-cyan-500 font-bold">Tools I use</h4>
          <div className="flex flex-wrap justify-center gap-10">
            {service.tools.map((tool, index) => (
              <p
                key={index}
                className="text-gray-800 font-medium dark:text-white"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
