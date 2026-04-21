"use client";
import { PLACES } from "@/consts/experiance";
import { Card } from "./Card";
import BaseModal from "./modals/BaseModal";
import { modalData } from "@/consts/modalsData";
import { useState } from "react";

export const Experiance = () => {
  const [visible, setVisible] = useState(false);

  const handleChangeVisability = () => {
    setVisible(prev => !prev);
  };
  
  return (
    <div className="max-w-335 mx-auto text-center">
      <h1 className="text-[24px] lg:text-[48px] mb-5">
        PREVIOUS PLACES{" "}
        <span className="text-black/50 text-[16px] lg:text-[24px]">
          {" "}
          (AND CURRENT)
        </span>
      </h1>

      <div className="w-full flex flex-row overflow-auto lg:grid lg:grid-cols-3 gap-2.5 lg:gap-5">
        {PLACES.map((place) => (
          <Card onClick={handleChangeVisability} key={place.id} data={place} />
        ))}
      </div>
      {visible &&
        modalData.map((data, index) => (
          <BaseModal key={index} onClose={handleChangeVisability} data={data} />
        ))}
    </div>
  );
};
