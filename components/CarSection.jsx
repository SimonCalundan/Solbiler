import React from "react";
import Car from "./ui/Car";
import { useEffect, useState } from "react";
import axios from "axios";

function CarSection() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [kapacitet, setKapacitet] = useState("");
  const [bagagerum, setBagagerum] = useState("");

  const handleKapacitetChange = (event) => {
    setKapacitet(event.target.value);
  };

  const handleBagagerumChange = (event) => {
    setBagagerum(event.target.value);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/biler.json");
      setCars(data.billiste);
      setFilteredCars(data.billiste);
    }
    getData();
  }, []);

  function printCars() {
    if (filteredCars) {
      return cars?.map((car) => (
        <Car
          key={car.navn}
          navn={car.navn}
          pris={car.pris}
          billede={car.billede}
          kategori={car.kategori}
          personer={car.personer}
          kufferter={car.kufferter}
        />
      ));
    }
  }

  return (
    <section
      id="cars"
      className=" bg-gray-100 pt-5 w-screen dark:dark:bg-gray-800"
    >
      <h1 className=" text-4xl text-center font-bold text-gray-900 my-6 md:mb-14">
        Udvalg af biler
      </h1>

      <div className=" flex flex-col w-screen max-w-[780px] mx-auto md:flex-row gap-4 mb-4">
        <div className=" w-full md:w-1/3">
          <label
            htmlFor="personer"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Kapicitet
          </label>
          <select
            onChange={handleKapacitetChange}
            id="personer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0" defaultValue={0}>
              Vælg antal personer
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className=" w-full md:w-1/3">
          <label
            htmlFor="bagagerum"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bagagerum
          </label>
          <select
            onChange={handleBagagerumChange}
            id="personer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0" defaultValue={0}>
              Vælg bagage mængde
            </option>
            <option value="1">1 kuffert</option>
            <option value="2">2 kufferter</option>
            <option value="3">3 kufferter</option>
            <option value="4">4 kufferter</option>
          </select>
        </div>
        <div className=" mx-auto md:mx-0 w-auto md:w-1/3 space-x-4">
          <button
            onClick={() => {
              setCars(
                cars.filter(
                  (car) =>
                    car.personer >= kapacitet && car.kufferter >= bagagerum
                )
              );
            }}
            type="button"
            className=" hover:scale-110 transition-all active:scale-105 duration-300  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-7"
          >
            Filtrer biler
          </button>
          <button
            onClick={() => {
              setCars(filteredCars);
            }}
            type="button"
            className=" hover:scale-110 transition-all active:scale-105 duration-300  text-white bg-gray-700 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Fjern filter
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap py-5 justify-center  md:space-y-0 gap-8">
        {printCars()}
      </div>
    </section>
  );
}

export default CarSection;
