"use client"
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React, { useEffect, useState } from "react";
import PayslipAndBillingAddress from "./PayslipAndBillingAddress";
import EarningTable from "./EarningTable";
import DeductionTable from "./DeductionTable";
import Link from "next/link";
import TimeOffTable from "./TimeOffTable";
import { useSearchParams } from "next/navigation";
import { IPayrollHistory } from "@/interface/table.interface";
import { getPayrollHistoryByEmployeeId } from "@/data/payroll/payroll-history-data";

const PayrollSlipMainArea = () => {
  const searchParams = useSearchParams();
  const payrollId = searchParams.get('id');
  const [payrollData, setPayrollData] = useState<IPayrollHistory | null>(null);
  
  useEffect(() => {
    // If a specific payroll ID is provided, fetch that payroll data
    if (payrollId) {
      // In a real application, this would be an API call to fetch the specific payroll
      // For now, we'll search through our mock data
      const allEmployees = ["TG-114", "TG-115"]; // Add more as needed
      
      for (const employeeId of allEmployees) {
        const employeePayrolls = getPayrollHistoryByEmployeeId(employeeId);
        const foundPayroll = employeePayrolls.find(payroll => payroll.id === payrollId);
        
        if (foundPayroll) {
          setPayrollData(foundPayroll);
          break;
        }
      }
    }
  }, [payrollId]);

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
        <Breadcrumb breadTitle={payrollData ? `Payslip - ${payrollData.employeeName}` : "Payslip"} subTitle="Home" />
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12">
            <div className="card__wrapper">
              {payrollData && (
                <div className="bg-blue-50 p-4 mb-4 rounded-md">
                  <h3 className="text-lg font-semibold text-blue-700">Payroll Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                    <div>
                      <p className="text-sm text-gray-500">Payroll ID</p>
                      <p className="font-medium">{payrollData.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pay Period</p>
                      <p className="font-medium">{payrollData.salaryMonth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Date</p>
                      <p className="font-medium">{payrollData.paymentDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-medium">${payrollData.amount.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <PayslipAndBillingAddress employeeData={payrollData} />
              <EarningTable payrollAmount={payrollData?.amount} />
              <TimeOffTable/>
              
              <div className="flex flex-wrap lg:justify-end gap-[10px]">
                {/* <button className="btn btn-secondary" onClick={handlePrint}>
                  <i className="fa-sharp fa-regular fa-eye"></i>
                  Print
                </button> */}
                <Link
                  href="/payroll"
                  className="btn btn-warning"
                >
                  <i className="fa-solid fa-arrow-left"></i> Back to Payroll
                </Link>
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
