import { ActionButtonProps } from "@/types";
import React from "react";

const ActionButton = ({ title, action }: ActionButtonProps) => {
  return (
    <button
      className="m-4 min-w-[140px] rounded-full bg-blue-500 p-2 text-white"
      onClick={action}
    >
      {title}
    </button>
  );
};

export default ActionButton;
