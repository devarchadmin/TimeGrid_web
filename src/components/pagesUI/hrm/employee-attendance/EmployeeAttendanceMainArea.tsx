import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React from "react";
import EmployeeAttendanceSummary from "./EmployeeAttendanceSummary";
import EmployeeAttendanceTable from "./EmployeeAttendanceTable";

const EmployeeAttendanceMainArea = () => {
  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Attendance" subTitle="Home" subtitleLink="/" />
        <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
          <EmployeeAttendanceSummary />
          <EmployeeAttendanceTable />
        </div>
      </div>
    </>
  );
};

export default EmployeeAttendanceMainArea;
