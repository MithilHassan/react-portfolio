import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
export default function Img({ SRC }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 1, delay: 0.05 }}
      viewport={{ once: true }}
      className="basis-1/3 flex-1"
    >
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={urlFor(SRC).url()}
        alt=""
      />
    </motion.div>
  );
}
