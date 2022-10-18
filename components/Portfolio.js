/* eslint-disable react/jsx-no-comment-textnodes */
import Img from "./Img";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section>
      <div>
        <h3 className="relative overflow-hidden text-5xl py-1 dark:text-white font-Gothic text-cyan-500 w-max">
          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: "80%" }}
            transition={{ type: "tween", duration: 1 }}
            viewport={{ once: true }}
            className="absolute h-full w-full top-0 left-0 bg-cyan-500 z-10"
          />
          //Portfolio
        </h3>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <Img Src="/web1.png" />
          <Img Src="/web2.png" />
          <Img Src="/web3.png" />
          <Img Src="/web4.png" />
          <Img Src="/web5.png" />
          <Img Src="/web6.png" />
        </div>
      </div>
    </section>
  );
}
