"use client";
import React from "react";
import { dateKeys } from "@/data/hrm/admin-attendance-data";
import { useAttendanceHook } from "@/hooks/use-condition-class";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";

interface AttendanceDetailsTableProps {
  employee: any;
  onViewDetails: (date: string, status: string) => void;
  selectedMonth: Date;
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
  selectedMonth,
}) => {
  // Get the selected year and month
  const selectedYear = selectedMonth.getFullYear();
  const selectedMonthIndex = selectedMonth.getMonth();

  // Function to get the date string for a given date key (date1, date2, etc.)
  const getDateString = (dateKey: string) => {
    const dayNumber = parseInt(dateKey.replace("date", ""));
    // Create a date object for the selected month and the day number
    const date = new Date(selectedYear, selectedMonthIndex, dayNumber);
    
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
    const date = new Date(selectedYear, selectedMonthIndex, dayNumber);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
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

  // Filter date keys for the current month (all dates are shown for demo purposes)
  const filteredDateKeys = dateKeys;

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
            {filteredDateKeys.map((dateKey) => {
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
                    <Tooltip title="View Details">
                      <IconButton
                        onClick={() => onViewDetails(dateString, status)}
                        disabled={status === "Holiday" || status === "Absent" || status === "On Leave"}
                        className={status === "Holiday" || status === "Absent" || status === "On Leave" ? "text-gray-300" : "text-primary"}
                        size="small"
                      >
                        <i className="fa fa-eye"></i>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceDetailsTable; 