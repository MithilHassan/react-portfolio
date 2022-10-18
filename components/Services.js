/* eslint-disable react/jsx-no-comment-textnodes */
import Service from "./Service";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section>
      <div>
        <h3 className="relative overflow-hidden text-5xl py-1 dark:text-white font-Gothic text-cyan-500 w-max">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: "80%" }}
            transition={{ type: "tween", duration: 1 }}
            viewport={{ once: true }}
            className="absolute h-full w-full  top-0 left-0  bg-cyan-500 z-10"
          />
          //Services
        </h3>
      </div>
      <Service />
    </section>
  );
}
