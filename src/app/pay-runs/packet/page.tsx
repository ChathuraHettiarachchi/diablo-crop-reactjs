"use client";
import React from "react";

import { IoMdArrowBack } from "react-icons/io";
import { filterEmployee } from "@/utils/calculations";
import { useAppSelector } from "@/redux/store";
import { useSearchParams, useRouter } from "next/navigation";
import { EmployeeInfoCard } from "@/components";

const page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const employeeId = parseInt(params.get("id")!);

  const payments = useAppSelector((state) => state.payrunReducer.value);
  const employee = filterEmployee(employeeId, payments);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center pl-8 hover:cursor-pointer lg:pl-0">
        <IoMdArrowBack
          className="h-6 w-6 text-black"
          onClick={() => router.back()}
        />
        <div className="flex h-[100px] flex-col items-start justify-center p-4">
          <p className="text-2xl font-bold md:text-3xl">Payment Summary</p>
          <p className="text-gray-600">
            {employee.employeeName} - {employee.payDate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 bg-white px-6 py-6 lg:grid-cols-3">
        <div className="rounded-xl lg:col-span-1">
          <EmployeeInfoCard employee={employee} />
        </div>
        <div className="h-[300px] rounded-xl bg-red-500 lg:col-span-2">
          <div className="h-[300px] rounded-xl bg-red-500"></div>
          <div className="mt-4 h-[100px] rounded-xl bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
