"use client";

import { useState } from "react";
import { GrDownload } from "react-icons/gr";
import CustomBtn from "../shared/CustomBtn";

const QrZone = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="grid col-span-4 border-2 rounded-md p-10 shadow bg-white">
      <div className="border-2 rounded-md py-20 shadow bg-white">
        <h1 className="text-lg text-center font-bold text-slate-300">
          QR Code
        </h1>
      </div>
      <CustomBtn
        onDisabled={isDisabled}
        myStyle={
          "rounded-full mt-10 flex justify-evenly item-center font-medium active:bg-blue-400"
        }
      >
        <GrDownload className="w-5 h-5" />
        Download QR
      </CustomBtn>
    </div>
  );
};

export default QrZone;
