import { deductionData } from "@/data/payroll/deduction-data";
import { earningData } from "@/data/payroll/earning-data";
import React from "react";

const DeductionTable = () => {
  const totalAmount = deductionData.reduce(
    (sum, item) => sum + item?.amount,
    0
  );
  return (
    <>
      <div className="table__wrapper meeting-table table-responsive">
        <table className="table mb-[20px] w-full">
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <thead>
            <tr className="table__title">
              <th>Deduction</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {deductionData.map((deduction, index) => (
              <tr key={index}>
                <td>{deduction.deduction}</td>
                <td>{deduction.title}</td>
                <td>{deduction.amount}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>Total</td>
              <td>${totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <p>
              <strong>Net Salary :</strong> $1500.00
            </p>
            <p>
              <strong>Rebate :</strong> $0.00
            </p>
            <p>
              <strong>Payable Amount :</strong> $1500.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeductionTable;