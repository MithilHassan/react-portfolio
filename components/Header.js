/* eslint-disable react/jsx-no-comment-textnodes */
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="py-10 mb-6 flex justify-between">
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "80%" }}
          transition={{ type: "tween", duration: 1.5 }}
          className="absolute top-0 left-0 bg-cyan-500 h-full w-full"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-500 font-Gothic tracking-widest font-bold w-fit">
          //MithilHassan
        </h1>
      </div>
      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        <li
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl"
        >
          {darkMode ? (
            <BsFillSunFill className=" text-yellow-200" />
          ) : (
            <BsFillMoonStarsFill />
          )}
        </li>
        <li>
          <a
            className="hidden bg-gradient-to-r from-cyan-300 to-cyan-600 text-white px-4 py-2 rounded-md ml-8 hover:brightness-90 transition-all duration-300 md:block"
            href="#"
          >
            Resume
          </a>
        </li>
      </motion.ul>
    </header>
  );
}
