import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import { motion } from "framer-motion";
import { client } from "../sanity";

export default function Home({ about, socials, services, portfolio }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>React Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 transition-all duration-500 lg:px-20 dark:bg-gray-800 font-Poppins relative overflow-hidden">
        <section className="mb-6 min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero about={about} socials={socials} />
        </section>
        <Services services={services} />
        <Portfolio portfolio={portfolio} />
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          transition={{ type: "tween", duration: 1 }}
          viewport={{ once: true }}
          className="absolute h-full w-full  top-0 left-0  bg-cyan-500 z-10"
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const about = await client.fetch(`*[_type == "about"]`);
  const socials = await client.fetch(`*[_type == "socials"]`);
  const services = await client.fetch(`*[_type == "services"]`);
  const portfolio = await client.fetch(`*[_type == "portfolio"]`);
  return {
    props: {
      about,
      socials,
      services,
      portfolio,
    },
  };
}
