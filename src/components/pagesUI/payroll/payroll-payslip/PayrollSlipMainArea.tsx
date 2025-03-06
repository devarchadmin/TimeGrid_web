"use client"
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React from "react";
import PayslipAndBillingAddress from "./PayslipAndBillingAddress";
import EarningTable from "./EarningTable";
import DeductionTable from "./DeductionTable";
import Link from "next/link";
import TimeOffTable from "./TimeOffTable";

const PayrollSlipMainArea = () => {
  const handlePrint = () => {
    const printWindow = window.open("/payroll-payslip-print", "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        // Ensure the DOM is fully loaded
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 1000);
      };
    }
  };
  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Payslip" subTitle="Home" />
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12">
            <div className="card__wrapper">
              <PayslipAndBillingAddress />
              <EarningTable />
              <TimeOffTable/>
              
              <div className="flex flex-wrap lg:justify-end gap-[10px]">
                {/* <button className="btn btn-secondary" onClick={handlePrint}>
                  <i className="fa-sharp fa-regular fa-eye"></i>
                  Print
                </button> */}
                {/* <button className="btn btn-success">
                  <i className="fa-sharp fa-light fa-floppy-disk"></i> Save
                </button> */}
                {/* <Link
                  href="/assets/documents/payroll-payslip.pdf"
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement("a");
                    link.href = "/assets/documents/payroll-payslip.pdf";
                    link.download = "payroll-payslip.pdf";
                    link.click();
                  }}
                >
                  <i className="fa-sharp fa-thin fa-file-arrow-down"></i> Download
                </Link> */}
                <button type="submit" className="btn btn-primary">
                  <i className="fa-light fa-paper-plane"></i> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayrollSlipMainArea;
