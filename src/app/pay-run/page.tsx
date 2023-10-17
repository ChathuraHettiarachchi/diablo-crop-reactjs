"use client";
import React, { useEffect, useState } from "react";
import { PaymentTableItem, TitleWithSearch } from "@/components";
import { useAppSelector } from "@/redux/store";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const page = () => {
  const payments = useAppSelector((state) => state.payrunReducer.value);

  const countPerPage = 10;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(payments);

  const updatePage = (p: number) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(payments.slice(from, to));
  };

  useEffect(() => {
    updatePage(1);
  }, []);

  return (
    <div className="flex flex-col p-4">
      <TitleWithSearch title="Employee Payments" onChange={() => {}} />

      {/* for big screens, view as a table, middle and mobile will be a grid with 1,2 cols */}
      <div className="mr-8 mt-2 ">
        <div className="m-4 w-full">
          <div className="hidden h-12 grid-cols-5 items-center justify-between bg-slate-300 lg:grid">
            <div className="table-h">Id</div>
            <div className="table-h">Name</div>
            <div className="table-h">Pay Day</div>
            <div className="table-h">Status</div>
            <div className="table-h">Amount</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:gap-0">
            {collection.map((i) => (
              <PaymentTableItem employee={i} />
            ))}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="">
        <Pagination
          pageSize={countPerPage}
          onChange={updatePage}
          current={currentPage}
          total={payments.length}
        />
      </div>
    </div>
  );
};

export default page;
