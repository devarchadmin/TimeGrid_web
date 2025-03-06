import React from "react";
import logo from "../../../../../public/assets/images/logo/GB-Full-Logo.svg";
import logoWhite from "../../../../../public/assets/images/logo/GW-Full-Logo.svg";
import Image from "next/image";
const PayslipAndBillingAddress = () => {
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
        <div className="payslip__serial-number w-[16.5%]">
          <div className="mb-[10px]">
            <h5 className="card__heading-title">PAYSLIP #TG-00114</h5>
          </div>
          <div className="mb-[5px]">
            <span>Date:</span>
            <span>2025-01-08</span>
          </div>
          <div className="mb-[5px]">
            <span>Date Due:</span>
            <span>2025-01-08</span>
          </div>
        </div>
      </div>
      <div className="payslip-line"></div>
      <div className="flex justify-between row g-60 gy-20">
        <div className="col-xl-6 col-lg-6 col-sm-6">
          <div className="payslip__employee-address">
            <h5 className="mb-[10px] font-semibold">Michael Wilson</h5>
            <p className="text-muted">
              Position: <span>Orthopedic Surgeon</span>{" "}
            </p>
            <p className="text-muted">
              Department: <span>Orthopedic</span>
            </p>
            <p className="text-muted">
              Email: <span>michael.wilson@timegrid.com</span>
            </p>
            <p className="text-muted">
              Phone: <span> +1(800) 642 7676</span>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-sm-6 w-[16.5%]">
          <div className="payslip__employee-address">
            <h5 className="mb-[10px] font-semibold">Payment Details:</h5>
            <p className="text-muted">
            Payment Method: <span>Bank Account</span>{" "}
            </p>
            <p className="text-muted">
            Account Name: <span>Ethan Mitchell</span>
            </p>
            <p className="text-muted">
            Account Number: <span>3456 **** **** **34</span>
            </p>
            <p className="text-muted">
            Account Name: <span>Manez Bank LTD</span>
            </p>
          </div>
        </div>
       
      </div>
      <div className="payslip-line"></div>
    </>
  );
};

export default PayslipAndBillingAddress;
