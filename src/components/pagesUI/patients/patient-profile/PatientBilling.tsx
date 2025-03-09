"use client";
import React from "react";

interface PatientBillingProps {
  patientId: number;
}

const PatientBilling = ({ patientId }: PatientBillingProps) => {
  return (
    <>
      <div className="col-span-12 xxl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex items-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Billing History</h5>
              <button type="button" className="btn btn-primary btn-sm">
                <i className="fa-light fa-file-invoice-dollar mr-2"></i>
                New Invoice
              </button>
            </div>
            <div className="profile-view">
              <div className="table__wrapper meeting-table table-responsive">
                <table className="table mb-[20px] w-full">
                  <thead>
                    <tr className="table__title">
                      <th>Invoice #</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table__body">
                    <tr>
                      <td colSpan={6} className="text-center py-4">
                        No billing records found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientBilling; 