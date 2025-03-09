import { earningData } from "@/data/payroll/earning-data";
import React, { useMemo } from "react";

interface EarningTableProps {
  payrollAmount?: number;
}

const EarningTable: React.FC<EarningTableProps> = ({ payrollAmount }) => {
  // If a specific payroll amount is provided, adjust the earnings to match that total
  const adjustedEarningData = useMemo(() => {
    if (!payrollAmount) {
      return earningData;
    }
    
    // Calculate the current total from the earning data
    const currentTotal = earningData.reduce((sum, item) => sum + item?.amount, 0);
    
    // Calculate the adjustment factor to scale the earnings
    const adjustmentFactor = payrollAmount / currentTotal;
    
    // Return adjusted earning data
    return earningData.map(item => ({
      ...item,
      amount: Math.round((item.amount * adjustmentFactor) * 100) / 100
    }));
  }, [payrollAmount]);
  
  const totalAmount = adjustedEarningData.reduce((sum, item) => sum + item?.amount, 0);
  
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
                <th>Title</th>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {adjustedEarningData.map((earning, index) => (
                <tr key={index}>
                  <td>{earning.title}</td>
                  <td>{earning.type}</td>
                  <td>${earning.amount.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Total</td>
                <td>${totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default EarningTable;
