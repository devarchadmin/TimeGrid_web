import React from "react";
import SummarySingleCard from "@/components/common/SummarySingleCard";

const LeavesSummary: React.FC = () => {
  const leaveData = [
    {
      iconClass: "fa-regular fa-code-pull-request",
      title: "Total Time Off",
      value: "15",
      description: "",
      percentageChange: "",
      isIncrease: true,
    },
    {
      iconClass: "fa-regular fa-badge-check",
      title: "Approve",
      value: "12",
      description: "",
      percentageChange: "",
      isIncrease: false,
    },
    {
      iconClass: "fa-regular fa-circle-xmark",
      title: "Rejected",
      value: "2",
      description: "",
      percentageChange: "",
      isIncrease: false,
    },
    {
      iconClass: "fa-regular fa-stopwatch",
      title: "Pending",
      value: "5",
      description: "",
      percentageChange: "",
      isIncrease: true,
    },
  ];

  return (
    <>
      {leaveData.map((item, index) => (
        <div className="col-span-12 sm:col-span-6 xxl:col-span-3" key={index}>
          <SummarySingleCard {...item} />
        </div>
      ))}
    </>
  );
};

export default LeavesSummary;
