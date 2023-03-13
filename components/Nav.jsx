import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className=" w-screen dark:bg-gray-800 print:hidden">
      <Navbar className=" max-w-7xl mx-auto" fluid={true} rounded={false}>
        <Link className=" flex" href="/">
          <GiCarWheel className="self-center w-12 h-12 mr-2 text-blue-500" />
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-black">
            Solbiler ApS
          </span>
        </Link>
        <div className="flex md:order-2">
          <Button
            className=" bg-gradient-to-tl from-cyan-500 to-blue-500  text-white hover:scale-110 transition-all duration-300 ease-in-out hidden md:block"
            pill={true}
          >
            <Link href="/#cars">Lej en bil</Link>
          </Button>
          <Navbar.Toggle className="scale-[200%] text-black m-4" />
        </div>
        <Navbar.Collapse className=" md:translate-x-[-3rem]">
          <Link
            className="link text-black text-5xl md:text-xl py-4 md:py-0"
            href="/"
            active="true"
          >
            Hjem
          </Link>
          <Link
            className="link text-black text-5xl md:text-xl py-4 md:py-0"
            href="/about"
          >
            Om os
          </Link>

          <Link
            href="/"
            className=" link cursor-not-allowed text-black text-5xl md:text-xl py-4 md:py-0"
          >
            Priser
          </Link>
          <Link
            href="/"
            className=" link cursor-not-allowed text-black text-5xl md:text-xl py-4 md:py-0"
          >
            Kontakt
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
