import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kerenke Tepela - Ts & Rust</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-600">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Kerenke <span className="text-[hsl(280,100%,70%)]">Tepela</span>
          </h1>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:gap-8">
            <a
              href="https://github.com/sankaire"
              className="text-3xl text-white"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://twitter.com/tepela2"
              className="text-3xl text-white"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/kerenke-tepela-80743220b/"
              className="text-3xl text-white"
            >
              <AiFillLinkedin />
            </a>
            <Link href="/blog" className="text-3xl text-white">
              <FaBlog />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
