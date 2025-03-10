"use client";
import React from "react";
import { dateKeys } from "@/data/hrm/admin-attendance-data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import Link from "next/link";

interface AttendanceDetailsTableProps {
  employee: any;
  onViewDetails: (date: string, status: string) => void;
  startDate: string;
  endDate: string;
}

// Mock patient data for the table
const mockPatientCounts = {
  "Present": { count: 4, names: ["Alice Johnson", "Robert Smith", "Emily Davis", "Michael Wilson"] },
  "Late": { count: 2, names: ["Sarah Brown", "David Miller"] },
  "Absent": { count: 0, names: [] },
  "On Leave": { count: 0, names: [] },
  "Holiday": { count: 0, names: [] }
};

// Function to get attendance icon class based on status
// This is moved outside the component to avoid the React Hook rule violation
const getAttendanceIconClass = (status: string) => {
  switch (status) {
    case "Holiday":
      return "fa fa-star text-primary";
    case "Present":
      return "fa fa-check text-success";
    case "Late":
      return "fa fa-exclamation-circle text-warning";
    case "Absent":
      return "fa fa-times text-danger";
    case "On Leave":
      return "fa fa-plane-departure text-link";
    default:
      return "";
  }
};

const AttendanceDetailsTable: React.FC<AttendanceDetailsTableProps> = ({
  employee,
  onViewDetails,
  startDate,
  endDate,
}) => {
  // Function to get the date string for a given date key (date1, date2, etc.)
  const getDateString = (dateKey: string) => {
    const dayNumber = parseInt(dateKey.replace("date", ""));
    // Create a date object for the current month and the day number
    const date = new Date();
    date.setDate(dayNumber);
    
    // Format the date manually
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Function to get the day of week
  const getDayOfWeek = (dateKey: string) => {
    const dayNumber = parseInt(dateKey.replace("date", ""));
    const date = new Date();
    date.setDate(dayNumber);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  };

  // Function to check if a date is within the selected range
  const isDateInRange = (dateKey: string) => {
    const dayNumber = parseInt(dateKey.replace("date", ""));
    const date = new Date();
    date.setDate(dayNumber);
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return date >= start && date <= end;
  };

  // Function to get check-in and check-out times based on status
  const getAttendanceDetails = (status: string) => {
    let firstCheckIn = "--";
    let lastCheckOut = "--";
    let totalHours = "--";
    let patientCount = 0;
    let patientNames: string[] = [];

    if (status === "Present" || status === "Late") {
      const mockData = mockPatientCounts[status];
      patientCount = mockData.count;
      patientNames = mockData.names;

      if (status === "Present") {
        firstCheckIn = "09:00 AM";
        lastCheckOut = "06:00 PM";
        totalHours = "8h 0m";
      } else if (status === "Late") {
        firstCheckIn = "10:15 AM";
        lastCheckOut = "06:00 PM";
        totalHours = "6h 45m";
      }
    }

    return { firstCheckIn, lastCheckOut, totalHours, patientCount, patientNames };
  };

  // Filter date keys for the selected date range
  const filteredDateKeys = dateKeys.filter(isDateInRange);

  return (
    <div className="attendance-details-table">
      <TableContainer component={Paper} className="shadow-none">
        <Table className="min-w-full">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-semibold">Date</TableCell>
              <TableCell className="font-semibold">Day</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
              <TableCell className="font-semibold">First Check In</TableCell>
              <TableCell className="font-semibold">Last Check Out</TableCell>
              <TableCell className="font-semibold">Total Hours</TableCell>
              <TableCell className="font-semibold">Patients</TableCell>
              <TableCell className="font-semibold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDateKeys.length > 0 ? (
              filteredDateKeys.map((dateKey) => {
                const status = employee[dateKey];
                const attendanceIcon = getAttendanceIconClass(status);
                const dateString = getDateString(dateKey);
                const dayOfWeek = getDayOfWeek(dateKey);
                const { firstCheckIn, lastCheckOut, totalHours, patientCount, patientNames } = getAttendanceDetails(status);

                // Determine row color based on status
                let rowClass = "";
                if (status === "Holiday") rowClass = "bg-blue-50";
                else if (status === "Absent") rowClass = "bg-red-50";
                else if (status === "On Leave") rowClass = "bg-purple-50";

                return (
                  <TableRow key={dateKey} className={`${rowClass} hover:bg-gray-50`}>
                    <TableCell>{dateString}</TableCell>
                    <TableCell>{dayOfWeek}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <i className={`${attendanceIcon} mr-2`}></i>
                        <span>{status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{firstCheckIn}</TableCell>
                    <TableCell>{lastCheckOut}</TableCell>
                    <TableCell>{totalHours}</TableCell>
                    <TableCell>
                      {patientCount > 0 ? (
                        <Tooltip 
                          title={
                            <div>
                              <p className="font-semibold mb-1">Patients:</p>
                              <ul className="pl-4">
                                {patientNames.map((name, idx) => (
                                  <li key={idx} className="text-xs">• {name}</li>
                                ))}
                              </ul>
                            </div>
                          } 
                          arrow
                        >
                          <Chip 
                            label={`${patientCount} patients`} 
                            size="small" 
                            color="primary" 
                            variant="outlined"
                          />
                        </Tooltip>
                      ) : (
                        "--"
                      )}
                    </TableCell>
                    <TableCell>
                      {status !== "Holiday" && status !== "Absent" && status !== "On Leave" ? (
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            onViewDetails(dateString, status);
                          }}
                          className="table__icon download"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      ) : (
                        <span className="table__icon edit !text-gray-500 !bg-gray-200/50 !hover:bg-gray-200/70">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  <div className="text-gray-500">
                    <i className="fa fa-calendar-times text-2xl mb-2"></i>
                    <p>No attendance records found for the selected date range.</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceDetailsTable; 