import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Car({
  billede,
  navn,
  pris,
  kategori,
  personer,
  kufferter,
}) {
  return (
    <div className="max-w-sm fade">
      <Card>
        <Image
          src={billede}
          width={300}
          height={200}
          alt={navn}
          className=" mx-auto"
          draggable={false}
        />
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {navn}
          </h5>
        </a>
        <div className=" flex justify-center flex-wrap gap-y-2">
          <span className="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Kategori: {kategori}
          </span>
          <span className="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Personer: {personer}
          </span>
          <span className="bg-blue-100 text-blue-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Kufferter: {kufferter}
          </span>
        </div>

        <div className="flex items-center flex-col justify-between space-y-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            {pris + " kr."}
            <p className=" text-[0.75rem] text-gray-600 translate-y-[-10px] absolute">
              pris pr. dag
            </p>
          </span>
          <Link href="/checkud">
            <button
              onClick={() => {
                sessionStorage.setItem("car", navn);
                sessionStorage.setItem("price", pris);
              }}
              className="rounded-lg bg-blue-700 px-8 py-3 text-center text-xl md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn"
            >
              Book nu
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
