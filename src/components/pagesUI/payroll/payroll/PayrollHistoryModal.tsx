"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { IPaylist, IPayrollHistory } from "@/interface/table.interface";
import { getPayrollHistoryByEmployeeId } from "@/data/payroll/payroll-history-data";
import { getTableStatusClass } from "@/hooks/use-condition-class";

// Helper function to get status class without using hooks
const getStatusClass = (status: string): string => {
  return getTableStatusClass(status);
};

interface PayrollHistoryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  employee: IPaylist | null;
}

const PayrollHistoryModal: React.FC<PayrollHistoryModalProps> = ({
  open,
  setOpen,
  employee,
}) => {
  const router = useRouter();
  const [payrollHistory, setPayrollHistory] = useState<IPayrollHistory[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<IPayrollHistory[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    if (employee && employee.employeeId) {
      // Fetch payroll history for the employee
      const history = getPayrollHistoryByEmployeeId(employee.employeeId);
      setPayrollHistory(history);
      setFilteredHistory(history);
    }
  }, [employee]);

  const handleClose = () => {
    setOpen(false);
    setStartDate("");
    setEndDate("");
  };

  const handleFilter = () => {
    if (!startDate && !endDate) {
      // If no dates are selected, show all records
      setFilteredHistory(payrollHistory);
      return;
    }

    // Filter the payroll history based on the selected date range
    const filtered = payrollHistory.filter((record) => {
      const recordDate = new Date(record.paymentDate);
      const startDateObj = startDate ? new Date(startDate) : null;
      const endDateObj = endDate ? new Date(endDate) : null;
      
      if (startDateObj && endDateObj) {
        return recordDate >= startDateObj && recordDate <= endDateObj;
      } else if (startDateObj) {
        return recordDate >= startDateObj;
      } else if (endDateObj) {
        return recordDate <= endDateObj;
      }
      
      return true;
    });

    setFilteredHistory(filtered);
  };

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    setFilteredHistory(payrollHistory);
  };

  const handleViewPayslip = (payrollId: string) => {
    // Navigate to the payroll-payslip page with the payroll ID as a query parameter
    router.push(`/payroll-payslip?id=${payrollId}`);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="payroll-history-dialog-title"
      sx={{
        "& .MuiDialog-paper": {
          minHeight: "80vh",
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle className="common-scrollbar overflow-y-auto !p-4 !ml-1">
        <div className="flex justify-between items-center">
          <h5 className="modal-title text-xl font-semibold">
            Bi-Weekly Payroll History - {employee?.employeeName}
          </h5>
        </div>
      </DialogTitle>
      <DialogContent className="common-scrollbar overflow-y-auto !p-4">
        <div className="card__wrapper mb-4">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-4">
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>
            <div className="col-span-12 md:col-span-4 flex gap-2">
              <button
                className="btn btn-primary"
                onClick={handleFilter}
              >
                Filter
              </button>
              <button
                className="btn bg-gray-200"
                onClick={handleClearFilter}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="card__wrapper">
          <div className="manaz-common-mat-list w-full table__wrapper table-responsive">
            <TableContainer component={Paper} className="table mb-[20px] hover multiple_tables w-full">
              <Table aria-label="payroll history table" className="whitespace-nowrap">
                <TableHead>
                  <TableRow className="table__title">
                    <TableCell>ID</TableCell>
                    <TableCell>Payment Date</TableCell>
                    <TableCell>Pay Period</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table__body">
                  {filteredHistory.length > 0 ? (
                    filteredHistory.map((record) => {
                      return (
                        <TableRow 
                          key={record.id} 
                          onClick={() => handleViewPayslip(record.id)}
                          className="cursor-pointer hover:bg-gray-50"
                        >
                          <TableCell>{record.id}</TableCell>
                          <TableCell>{record.paymentDate}</TableCell>
                          <TableCell>{record.salaryMonth}</TableCell>
                          <TableCell>${record.amount.toFixed(2)}</TableCell>
                          <TableCell>{record.paymentMethod}</TableCell>
                          <TableCell className="table__delivery">
                            <span className={`bd-badge ${getStatusClass(record.status)}`}>
                              {record.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        No payroll history found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        
        <div className="card__wrapper mt-4 p-3 bg-blue-50 border border-blue-100 rounded">
          <div className="flex items-start">
            <div className="text-blue-500 mr-2">
              <i className="fa-solid fa-circle-info"></i>
            </div>
            <div>
              <h6 className="text-sm font-semibold text-blue-700">Bi-Weekly Payment System</h6>
              <p className="text-sm text-blue-600">
                Employees receive their salary every two weeks. Click on any payroll record to view the detailed payslip.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions className="card__wrapper !p-4 !pt-2 flex justify-center">
        <button onClick={handleClose} className="btn btn-primary">
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default PayrollHistoryModal; 