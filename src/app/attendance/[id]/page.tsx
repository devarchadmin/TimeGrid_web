import React from "react";
import AttendanceDetailsMainArea from "@/components/pagesUI/hrm/employee-attendance/AttendanceDetailsMainArea";
import Wrapper from "@/components/layouts/DefaultWrapper";
import MetaData from "@/hooks/useMetaData";

export const metadata = {
  title: "Attendance Details | TimeGrid Admin Dashboard Template",
  description: "This is Attendance Details page for TimeGrid Admin Dashboard Template",
};

const AttendanceDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <MetaData pageTitle="Attendance Details">
      <Wrapper>
        <AttendanceDetailsMainArea id={params.id} />
      </Wrapper>
    </MetaData>
  );
};

export default AttendanceDetailsPage; 