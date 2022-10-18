import Image from "next/image";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import model from "../public/3d-model.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h2 className="text-5xl py-2 text-cyan-500 font-medium md:text-7xl font-Gothic">
          Mithil Hassan
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Front-End Web Developer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-4xl mx-auto md:text-xl dark:text-gray-400">
          I am a freelancer. Working with core Javascript and it&#39;s framework
          specially React. Have hands-on experience in Html, Css, Bootstrap,
          Saas, Tailwind, Materialize, JavaScript, Jquery, React, Firebase and
          NextJs. Join me down below and let&#39;s get cracking.
        </p>
      </motion.div>
      <div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl flex justify-center gap-16 py-3 text-gray-600"
      >
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.25 }}
          href="https://www.facebook.com/mithil.hassan.7/"
        >
          <AiFillFacebook className=" cursor-pointer hover:text-gray-400 transition-all duration-300" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          href="#"
        >
          <AiFillLinkedin className=" cursor-pointer  hover:text-gray-400 transition-all duration-300" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.75 }}
          href="https://github.com/MithilHassan"
        >
          <AiFillGithub className=" cursor-pointer  hover:text-gray-400 transition-all duration-300" />
        </motion.a>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 "
      >
        <Image src={model} layout="fill" objectFit="cover" alt="avatar" />
      </motion.div>
    </>
  );
}
