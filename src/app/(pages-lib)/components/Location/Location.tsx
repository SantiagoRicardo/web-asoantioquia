import React from "react";
import {} from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        ¿Dónde encontrarnos?
      </h1>
      <h2 className="mb-8 text-center text-xl">
        Próximamente en toda Colombia
      </h2>
      <div className="flex justify-around">
        <div className="flex flex-row items-center justify-center gap-8 rounded-lg bg-white bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-4 px-6 py-8 shadow-md">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mb-2 text-4xl text-[#9FC52E]"
          />

          <span className="text-lg font-semibold">Turbo</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 rounded-lg bg-white bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-4 px-6 py-8 shadow-md">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mb-2 text-4xl text-[#9FC52E]"
          />
          <span className="text-lg font-semibold">Córdoba</span>
        </div>
      </div>
    </section>
  );
};

export default Location;
