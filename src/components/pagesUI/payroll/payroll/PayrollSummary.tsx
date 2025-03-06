import React from "react";
import SummarySingleCard from "@/components/common/SummarySingleCard"; // Adjust the import path as necessary

const PayrollSummary: React.FC = () => {
  const payrollData = [
    {
      iconClass: "fa-regular fa-users",
      title: "Total Employee",
      value: "8450",
      description: "",
      percentageChange: "",
      isIncrease: true,
    },
    {
      iconClass: "fa-regular fa-badge-check",
      title: "Total Paid",
      value: "950",
      description: "",
      percentageChange: "",
      isIncrease: false,
    },
    {
      iconClass: "fa-regular fa-circle-xmark",
      title: "Total Unpaid",
      value: "3130",
      description: "",
      percentageChange: "",
      isIncrease: false,
    },
    {
      iconClass: "fa-regular fa-money-bill-transfer",
      title: "Total Unpaid",
      value: "$38,200.16",
      description: "",
      percentageChange: "",
      isIncrease: true,
    },
  ];

  return (
    <>
      {payrollData.map((item, index) => (
        <div className="col-span-12 sm:col-span-6 xxl:col-span-3" key={index}>
          <SummarySingleCard {...item} />
        </div>
      ))}
    </>
  );
};

export default PayrollSummary;
