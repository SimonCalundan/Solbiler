import React from "react";
import Checkbox from "./ui/Checkbox";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Select() {
  let dateData = "";
  let price = 0;
  let car = "";
  let dates = "";
  let afhentning = "";
  let aflevering = "";
  let dayAmount = 0;

  useEffect(() => {
    dateData = sessionStorage.getItem("date");
    dates = JSON.parse(dateData);
    afhentning = new Date(dates.afhentning);
    aflevering = new Date(dates.aflevering);

    car = sessionStorage.getItem("car");
    price = parseInt(sessionStorage.getItem("price"));
    dayAmount = Math.round((aflevering - afhentning) / 86400000);
  }, []);

  const [total, setTotal] = useState(0);

  return (
    <>
      <div className=" w-full bg-slate-50 py-32">
        <Link
          href="/"
          className=" flex text-gray-700 text-4xl md:text-2xl items-center ml-2 xl:translate-x-[8rem] 2xl:translate-x-[12rem] space-x-2 hover:text-gray-500 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 md:w-7 md:h-7"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
          <p>Gå tilbage</p>
        </Link>
        <div className=" flex flex-col md:flex-row max-w-[1200px] mx-auto items-center md:items-start py-4 px-2 gap-8">
          <div className=" w-[90%] md:w-1/3 bg-slate-200 rounded-sm py-8 px-4 space-y-10">
            <h2 className=" text-4xl md:text-2xl font-medium">Dine valg</h2>
            <div className=" space-y-2">
              <h2 className=" text-3xl md:text-xl  font-medium">{car}</h2>
              <p className=" text-lg md:text-base">
                Aflevering: {"2023-06-12"}{" "}
              </p>
              <p className=" text-lg md:text-base">
                Afhentning: {"2023-06-15"}{" "}
              </p>
              <p className=" text-lg md:text-base">Antal dage: {dayAmount}</p>
            </div>

            <div>
              <h2 className=" font-semibold text-2xl">
                Pris i alt {price * dayAmount + total} kr.
              </h2>
              <p>inkl. moms</p>
            </div>
          </div>
          <div className=" w-[90%] flex flex-col gap-4">
            <div className="w-full bg-blue-100 rounded-sm py-8 px-4 ">
              <h2 className="text-4xl md:text-2xl font-medium">
                Vælg ekstra udstyr
              </h2>
              <div className=" flex flex-col gap-4 md:flex-row flex-wrap justify-center mt-8">
                <Checkbox
                  name="Barnesæde (5-12 år)"
                  price="155"
                  funcAdd={() => setTotal(total + 155)}
                  funcRemove={() => setTotal(total - 155)}
                />
                <Checkbox
                  name="Vejhjælp"
                  price="120"
                  funcAdd={() => setTotal(total + 120)}
                  funcRemove={() => setTotal(total - 120)}
                />
                <Checkbox
                  name="Lift-net (0-1 år)"
                  price="100"
                  funcAdd={() => setTotal(total + 100)}
                  funcRemove={() => setTotal(total - 100)}
                />
                <Checkbox
                  name="Barnesæde (1-4 år)"
                  price="140"
                  funcAdd={() => setTotal(total + 140)}
                  funcRemove={() => setTotal(total - 140)}
                />
                <Checkbox
                  name="GPS navigation"
                  price="250"
                  funcAdd={() => setTotal(total + 250)}
                  funcRemove={() => setTotal(total - 250)}
                />
                <Checkbox
                  name="Snekæder"
                  price="188"
                  funcAdd={() => setTotal(total + 188)}
                  funcRemove={() => setTotal(total - 188)}
                />
              </div>
            </div>
            <div className=" bg-blue-500 text-white w-full flex justify-between items-center px-4 py-4 rounded-sm">
              <div>
                <h2 className=" text-xl font-semibold">
                  TOTAL {price * dayAmount + total} kr.
                </h2>
                <p className=" text-gray-100 ">inkl. moms</p>
              </div>
              <Link href="/oplysninger">
                <button
                  onClick={() => {
                    sessionStorage.setItem("total", price * dayAmount + total);
                  }}
                  type="button"
                  className="text-slate-700 text-lg md:text-base bg-blue-200 hover:bg-blue-100  font-medium rounded-lg px-6 py-3 mr-2 transition-all   "
                >
                  Forsæt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
