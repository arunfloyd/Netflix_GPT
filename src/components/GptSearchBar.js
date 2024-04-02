import React from "react";
import lang from "../utils/language";
import { useSearchParams } from "react-router-dom";

const GptSearchBar = () => {
  const langKey = useSearchParams((store) => store.config.lang);
  

  return (
    <div className="pt-[9%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey]}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg">
          {lang[langKey]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
