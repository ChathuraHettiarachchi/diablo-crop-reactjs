"use client";
import React from "react";

import { useAppSelector } from "@/redux/store";
import { useSearchParams } from "next/navigation";

const page = () => {
  const params = useSearchParams();
  const employeeId = params.get("id");

  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-[100px] bg-red-400"></div>
      <div className="grid grid-cols-1 gap-2 bg-white px-6 py-6 lg:grid-cols-3">
        <div className="h-[100px] rounded-xl bg-black lg:col-span-1"></div>
        <div className="h-[300px] rounded-xl bg-red-500 lg:col-span-2">
          <div className="h-[300px] rounded-xl bg-red-500"></div>
          <div className="mt-4 h-[100px] rounded-xl bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
