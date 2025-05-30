import SummarySingleCard from "@/components/common/SummarySingleCard";

import React from "react";

const InvoiceListSummary = () => {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
        <SummarySingleCard
          iconClass="fa-sharp fa-light fa-file-chart-column"
          title="Total Invoice"
          value={313}
          description="Than Last Week"
          percentageChange="+11.54%"
          isIncrease={true}
        />
      </div>
      <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
        <SummarySingleCard
          iconClass="fa-light fa-badge-check"
          title="Paid Invoice"
          value={150}
          description="Than Last Week"
          percentageChange="+35.15%"
          isIncrease={true}
        />
      </div>
      <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
        <SummarySingleCard
          iconClass="fa-sharp fa-light fa-circle-xmark"
          title="Unpaid Invoice"
          value={100}
          description="Than Last Week"
          percentageChange="+22.15%"
          isIncrease={true}
        />
      </div>
      <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
        <SummarySingleCard
          iconClass="fa-light fa-ban"
          title="Cancelled Invoice"
          value={63}
          description="Than Last Week"
          percentageChange="+15.95%"
          isIncrease={false}
        />
      </div>
    </>
  );
};

export default InvoiceListSummary;
