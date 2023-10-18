import { EmployeeInfoProps, EmployeeProps } from "@/types";
import React from "react";
import { CircleImage } from ".";
import { getRandomInt } from "@/utils/calculations";
import { useAppSelector } from "@/redux/store";

const EmployeeInfoCard = (props: EmployeeInfoProps) => {
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const url = "https://i.pravatar.cc/150?img=" + getRandomInt(50);

  return (
    <div
      className="flex flex-col rounded-xl bg-gray-200 p-4 md:flex-row lg:flex-col"
      data-testid={props.dataTestId}
    >
      <div className="flex flex-col items-center justify-center ">
        <CircleImage url={url} height={140} width={140} alt="" />
        <p className="mt-2 text-xl font-bold lg:text-2xl">
          {employee.employeeName}
        </p>
        <p className="text-gray-500">Senior Software Engineer</p>
      </div>
      <div className="ml-0 p-4 pt-4 md:ml-10 lg:ml-0">
        <p className="employee-card">
          Employee Id:{" "}
          <span className="employee-data">{employee.employeeId}</span>
        </p>
        <p className="employee-card">
          Email: <span className="employee-data">abc@abc.com</span>
        </p>
        <p className="employee-card">
          Contact Number: <span className="employee-data">(123) 123 1234</span>
        </p>
        <p className="employee-card">
          Department: <span className="employee-data">Mobile Innovations</span>
        </p>
        <p className="employee-card">
          Reporting Person: <span className="employee-data">David Obama</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeInfoCard;
