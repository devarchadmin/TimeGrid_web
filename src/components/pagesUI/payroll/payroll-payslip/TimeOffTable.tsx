import { deductionData } from "@/data/payroll/deduction-data";
import { earningData } from "@/data/payroll/earning-data";
import { timeOffData } from "@/data/payroll/time-off-data";
import React from "react";

const TimeOffTable = () => {
  const totalAmount = timeOffData.reduce(
    (sum, item) => sum + item?.hourse,
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
              <th>Time Off</th>
              <th>Details</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {timeOffData.map((timeoff, index) => (
              <tr key={index}>
                <td>{timeoff.title}</td>
                <td>{timeoff.details}</td>
                <td>{timeoff.hourse} Hourse</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>Total</td>
              <td>{totalAmount} Hours</td>
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
              <strong>Gross Pay :</strong> $2760.00
            </p>
            <p>
              <strong>Tax (22%) :</strong> $607.2
            </p>
            <p>
              <strong>Payable Amount :</strong> $2152.8
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeOffTable;