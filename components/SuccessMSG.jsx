import React from "react";

export default function SuccessMSG() {
  const navn = sessionStorage.getItem("name");
  const mail = sessionStorage.getItem("mail");
  const phone = sessionStorage.getItem("phone");
  const lastName = sessionStorage.getItem("lastName");
  const address = sessionStorage.getItem("address");

  return (
    <>
      <div className=" pt-5">
        <div className=" flex flex-col items-center space-y-4 print:hidden">
          <h2 className=" text-2xl font-bold mb-2">
            Din bestilling er bekræftet
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-24 h-24 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <p className=" max-w-sm text-center font-medium text-lg text-gray-800">
            Du vil inden for 15 min modtage en mail om yderligere oplysninger
          </p>
        </div>
        <div className=" mt-8 flex flex-col justify-between md:px-8 text-gray-800">
          <h2 className=" font-semibold text-lg print:mt-10 ">
            Dine oplysninger:
          </h2>
          <ul className=" space-y-2 ">
            <li>
              <span className=" font-semibold">Navn:</span>{" "}
              {navn + " " + lastName}
            </li>
            <li>
              <span className=" font-semibold">Email:</span> {mail}
            </li>
            <li>
              <span className=" font-semibold">Telefon:</span> {phone}
            </li>
            <li>
              <span className=" font-semibold">Adresse:</span> {address}
            </li>
          </ul>
          <button
            onClick={() => {
              window.print();
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-8 md:w-1/3 md:mx-auto print:hidden"
          >
            Print Kvittering
          </button>
        </div>
      </div>
    </>
  );
}
