import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
export default function Service({ services }) {
  return (
    <div className="lg:flex gap-10">
      {services?.map((service) => (
        <div
          key={service._id}
          className="relative text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 overflow-hidden"
        >
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "-98%" }}
            transition={{ type: "tween", duration: 1 }}
            viewport={{ once: true }}
            className="absolute h-full w-full  top-0 left-0  bg-cyan-500 z-10"
          />
          <Image
            src={urlFor(service.image).url()}
            width={100}
            height={100}
            alt=""
          />
          <h2 className="text-2xl font-medium pt-8 pb-2 dark:text-white">
            {service.title}
          </h2>
          <p className="py-2 dark:text-gray-400">{service.details}</p>
          <h4 className="py-4 text-cyan-500 font-bold">Tools I use</h4>
          <div className="flex flex-wrap justify-center gap-10">
            {service.tool.map((tool) => (
              <p
                key={tool._ref}
                className="text-gray-800 font-medium dark:text-white"
              >
                {}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
