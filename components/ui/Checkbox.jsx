import React from "react";
import { useState } from "react";

export default function Checkbox({ price, name, funcAdd, funcRemove }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="flex items-center pl-4 rounded-full bg-slate-500 w-full md:w-60">
        <input
          onClick={() => {
            if (checked) {
              setChecked(false);
              sessionStorage.removeItem(name);
              funcRemove();
            } else {
              setChecked(true);
              sessionStorage.setItem(name, [name, price]);
              funcAdd();
            }
          }}
          type="checkbox"
          value={price}
          name="bordered-checkbox"
          className="w-5 h-5 text-blue-600 bg-gray-100  border-gray-500 rounded-full"
        />
        <label className="w-full py-4 ml-2 text-md md:text-[0.8rem] font-medium text-gray-200 dark:text-gray-300">
          {name + " " + price + " kr."}
        </label>
      </div>
    </>
  );
}
