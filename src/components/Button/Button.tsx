import React from "react";
import { Button as ShadcnButton } from "../ui/button";
type ButtonProps = {
  name?: string;
  buttonHeight?:string
  onClickFunction?: () => void;
};
const Button = ({ name, onClickFunction,buttonHeight="50px" }: ButtonProps) => {
  return <ShadcnButton className={`bg-[#20C5BA] hover:bg-[#20C5BA]/80 h-[${buttonHeight}] px-[40px] py-[10px] capitalize rounded-[5px] text-[18px] font-[500] leading-[32px] font-roboto`} onClick={onClickFunction}>{name}</ShadcnButton>;
};

export default Button;
