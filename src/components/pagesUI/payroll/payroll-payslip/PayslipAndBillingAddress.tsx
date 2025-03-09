import React from "react";
import logo from "../../../../../public/assets/images/logo/GB-Full-Logo.svg";
import logoWhite from "../../../../../public/assets/images/logo/GW-Full-Logo.svg";
import Image from "next/image";
import { IPayrollHistory } from "@/interface/table.interface";

interface PayslipAndBillingAddressProps {
  employeeData: IPayrollHistory | null;
}

const PayslipAndBillingAddress: React.FC<PayslipAndBillingAddressProps> = ({ employeeData }) => {
  // Default employee data if none is provided
  const employeeName = employeeData?.employeeName || "Michael Wilson";
  const employeePosition = "Orthopedic Surgeon"; // This would come from a more complete API
  const employeeDepartment = "Orthopedic"; // This would come from a more complete API
  const employeeEmail = employeeData?.employeeId ? `${employeeData.employeeId.toLowerCase()}@timegrid.com` : "michael.wilson@timegrid.com";
  const employeePhone = "+1(800) 642 7676"; // This would come from a more complete API
  
  // Format the current date for the payslip
  const currentDate = new Date().toISOString().split('T')[0];
  const payslipId = employeeData?.id || "TG-00114";
  
  return (
    <>
      <div className="flex flex-col sm:flex-row xl:flex-row justify-between">
        <div className="payslip__office-address">
          <div className="payslip__logo mb-[20px]">
            <Image className="light-logo" src={logo} alt="payslip logo" />
            <Image className="dark-logo" src={logoWhite} alt="payslip logo" />
          </div>
          <p>100 Terminal, Fort Lauderdale,</p>
          <p>Miami 33315, United States</p>
          <p>finance@timegrid.com</p>
          <p>+1(800) 872 2616</p>
        </div>
        <div className="payslip__serial-number min-w-[16.5%]">
          <div className="mb-[10px]">
            <h5 className="card__heading-title">PAYSLIP #{payslipId}</h5>
          </div>
          <div className="mb-[5px]">
            <span>Date:</span>
            <span>{employeeData?.paymentDate || currentDate}</span>
          </div>
          <div className="mb-[5px]">
            <span>Pay Period:</span>
            <span>{employeeData?.salaryMonth || "Current Month"}</span>
          </div>
        </div>
      </div>
      <div className="payslip-line"></div>
      <div className="flex justify-between row g-60 gy-20">
        <div className="col-xl-6 col-lg-6 col-sm-6">
          <div className="payslip__employee-address">
            <h5 className="mb-[10px] font-semibold">{employeeName}</h5>
            <p className="text-muted">
              Position: <span>{employeePosition}</span>{" "}
            </p>
            <p className="text-muted">
              Department: <span>{employeeDepartment}</span>
            </p>
            <p className="text-muted">
              Email: <span>{employeeEmail}</span>
            </p>
            <p className="text-muted">
              Phone: <span>{employeePhone}</span>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-sm-6 min-w-[16.5%]">
          <div className="payslip__employee-address">
            <h5 className="mb-[10px] font-semibold">Payment Details:</h5>
            <p className="text-muted">
            Payment Method: <span>{employeeData?.paymentMethod || "Bank Account"}</span>{" "}
            </p>
            <p className="text-muted">
            Account Name: <span>{employeeName}</span>
            </p>
            <p className="text-muted">
            Account Number: <span>3456 **** **** **34</span>
            </p>
            <p className="text-muted">
            Bank Name: <span>Manez Bank LTD</span>
            </p>
          </div>
        </div>
       
      </div>
      <div className="payslip-line"></div>
    </>
  );
};

export default PayslipAndBillingAddress;
