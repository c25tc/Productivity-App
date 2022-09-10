import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="grid grid-cols-6 gap-4 h-30 mb-10 py-10 fixed top-0 w-full bg-white bg-opacity-70 backdrop-blur-lg z-10">
        <div className="bg-green rounded-r-3xl bg-opacity-100"></div>
        <div className="bg-blue text-center p-8 rounded-3xl text-white text-4xl font-extrabold col-span-4">
          tasks
        </div>
        <div className="bg-pink rounded-l-3xl"></div>
      </header>
      <div className="h-48 py-10"></div>
      <div className="mx-10 font-bold text-xl">today</div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          english reading
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          math hw
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <input
          type="text"
          className="bg-blue p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new task..."
        />
      </div>
      <div className="mx-10 font-bold text-xl">tommorow</div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          english reading
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          math hw
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <input
          type="text"
          className="bg-blue p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new task..."
        />
      </div>
      <div className="mx-10 font-bold text-xl">thursday</div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          english reading
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          math hw
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <input
          type="text"
          className="bg-blue p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new task..."
        />
      </div>
      <div className="mx-10 font-bold text-xl">friday</div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          english reading
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <div className="bg-blue p-3 text-white font-bold rounded-xl flex-1">
          math hw
        </div>
        <div className="bg-blue grid items-center ml-3 px-3 rounded-xl">
          <img src="/three_dots.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="mx-10 flex my-3">
        <input
          type="text"
          className="bg-blue p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new task..."
        />
      </div>
      <div className="h-48 py-10"></div>
      <footer className="fixed w-full bottom-0 bg-white bg-opacity-70 backdrop-blur-lg pt-3">
        <div className="grid grid-cols-7 grid-rows-7 h-16 gap-4 m-10 mt-0">
          <div className="bg-green rounded-full col-span-2 row-span-4 row-end-7"></div>
          <div className="bg-blue rounded-full col-span-3 row-span-5 row-end-7"></div>
          <div className="bg-pink rounded-full col-span-2 row-span-4 row-end-7"></div>
        </div>
      </footer>
    </div>
  );
}