"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full">
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
        enableSearch={true}
        inputStyle={{ width: "100%" ,border: "none",paddingLeft:"60px"}}
        placeholder="Phone Number"
        containerStyle={{
          border: "1px solid #E5E7EB",
          stroke:"none",
          borderRadius: "0px",
          padding: "8px",

        }}
        buttonStyle={{
          border: "none",
          borderRight: "1px solid #E5E7EB",
          stroke:"none",
          borderRadius: "0px",
          background:"transparent",
          paddingRight:"10px",
        
        }}
      
      />
    </div>
  );
};

export default PhoneNumberInput;
