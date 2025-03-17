"use client";
import React, { useState } from "react";
import UpdateBankAccountModal from "./UpdateBankAccountModal";
import { IEmployee } from "@/interface";

interface propsType {
  data?: IEmployee;
}

const BankAccount = ({ data }: propsType) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Bank Account</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={() => setModalOpen(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="personal-info-wrapper bank__account">
              <ul className="personal-info">
                <li>
                  <div className="title">Account Holder Name:</div>
                  <div className="text">{data?.bankAccount?.accountHolderName || "Not provided"}</div>
                </li>
                <li>
                  <div className="title">Account Number:</div>
                  <div className="text">{data?.bankAccount?.accountNumber || "Not provided"}</div>
                </li>
                <li>
                  <div className="title">Bank Name:</div>
                  <div className="text">{data?.bankAccount?.bankName || "Not provided"}</div>
                </li>
                <li>
                  <div className="title">Branch Name:</div>
                  <div className="text">{data?.bankAccount?.branchName || "Not provided"}</div>
                </li>
                <li>
                  <div className="title">SWIFT Code:</div>
                  <div className="text">{data?.bankAccount?.swiftCode || "Not provided"}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <UpdateBankAccountModal open={modalOpen} setOpen={setModalOpen} />
      )}
    </>
  );
};

export default BankAccount;
