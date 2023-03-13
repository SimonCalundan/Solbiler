import React from "react";
import { useState } from "react";

export default function Form() {
  const currentDate = new Date();
  const [date, setDate] = useState({
    afhentning: null,
    aflevering: null,
  });

  function handleSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem("date", JSON.stringify(date));

    scrollBy(0, 800);
  }

  function handleAfhentningChange(event) {
    setDate({
      ...date,
      afhentning: event.target.value,
    });
  }

  function handleAfleveringChange(event) {
    setDate({
      ...date,
      aflevering: event.target.value,
    });
  }

  return (
    <form
      action=""
      className=" w-[95%] max-w-[1080px] lg:w-[80%] bg-gray-800 shadow-2xl flex flex-col items-center p-8 space-y-12 md:space-y-6 rounded-md"
    >
      <h2 className=" text-5xl pb-2 md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 ">
        Find den perfekte bil for dig
      </h2>
      <div className=" flex flex-col md:flex-row md:space-x-16 space-y-5 md:space-y-0 text-center justify-center w-full">
        <div className=" flex flex-col space-y-2 text-2xl md:text-xl">
          <label className=" text-white">Jeg henter den</label>
          <input
            onChange={handleAfhentningChange}
            type="date"
            required
            id="afhentning"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-md md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14
            md:w-64  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" flex flex-col space-y-2 text-2xl md:text-xl">
          <label className=" text-white">Jeg aflevere den</label>
          <input
            onChange={handleAfleveringChange}
            type="date"
            required
            id="aflevering"
            className=" bg-gray-50 border border-gray-300 text-gray-700 text-md md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-14"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row md:space-x-16 space-y-5 md:space-y-0 text-center justify-center w-full"></div>
      <button
        className="text-white bg-gradient-to-tr from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-10 py-4 text-center hover:scale-105 transition-all duration-300 ease-in-out "
        type="submit"
        onClick={(event) => {
          event.preventDefault();

          if (date.afhentning === date.aflevering) {
            alert("Afhentning og aflevering kan ikke være den samme dato");
            console.log(date.afhentning);
          } else if (date.aflevering < currentDate) {
            alert("Afhentning kan ikke være før i dag");
          } else if (
            date.afhentning < currentDate ||
            date.aflevering < currentDate
          ) {
            alert("Afhentning kan ikke være før i dag");
          } else if (date.afhentning > date.aflevering) {
            alert("Afhentning kan ikke være efter aflevering");
          } else if (date.afhentning === null || date.aflevering === null) {
            alert("Du skal vælge en afhentnings og afleverings dato");
          } else {
            handleSubmit(event);
          }
        }}
      >
        Find din bil
      </button>
    </form>
  );
}
