"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import { adminAttendanceData } from "@/data/hrm/admin-attendance-data";
import Image from "next/image";
import AttendanceDetailsTable from "./AttendanceDetailsTable";
import AttendanceDetailsModal from "./AttendanceDetailsModal";
import { IconButton, Popover, TextField } from "@mui/material";

interface AttendanceDetailsMainAreaProps {
    id: string;
}

// Mock patient data
const mockPatients = [
    { id: 1, name: "Alice Johnson", image: "/assets/images/avatar/avatar1.png" },
    { id: 2, name: "Robert Smith", image: "/assets/images/avatar/avatar2.png" },
    { id: 3, name: "Emily Davis", image: "/assets/images/avatar/avatar3.png" },
    { id: 4, name: "Michael Wilson", image: "/assets/images/avatar/avatar4.png" },
    { id: 5, name: "Sarah Brown", image: "/assets/images/avatar/avatar5.png" },
    { id: 6, name: "David Miller", image: "/assets/images/avatar/avatar6.png" },
];

// Mock attendance sessions data (multiple check-ins/check-outs with patient assignments)
const generateMockAttendanceSessions = (date: Date, status: string) => {
    if (status === "Present") {
        return [
            {
                checkIn: "09:00 AM",
                checkOut: "10:45 AM",
                patient: mockPatients[0],
                duration: "1h 45m",
                notes: "Regular checkup and medication administration",
                type: "work"
            },
            {
                checkIn: "10:45 AM",
                checkOut: "11:15 AM",
                duration: "0h 30m",
                notes: "Morning break",
                type: "break"
            },
            {
                checkIn: "11:15 AM",
                checkOut: "01:00 PM",
                patient: mockPatients[1],
                duration: "1h 45m",
                notes: "Physical therapy session",
                type: "work"
            },
            {
                checkIn: "01:00 PM",
                checkOut: "02:00 PM",
                duration: "1h 0m",
                notes: "Lunch break",
                type: "break"
            },
            {
                checkIn: "02:00 PM",
                checkOut: "04:30 PM",
                patient: mockPatients[2],
                duration: "2h 30m",
                notes: "Post-surgery care and monitoring",
                type: "work"
            },
            {
                checkIn: "04:30 PM",
                checkOut: "04:45 PM",
                duration: "0h 15m",
                notes: "Afternoon break",
                type: "break"
            },
            {
                checkIn: "04:45 PM",
                checkOut: "06:00 PM",
                patient: mockPatients[3],
                duration: "1h 15m",
                notes: "Medication administration and vital signs check",
                type: "work"
            }
        ];
    } else if (status === "Late") {
        return [
            {
                checkIn: "10:15 AM",
                checkOut: "01:00 PM",
                patient: mockPatients[4],
                duration: "2h 45m",
                notes: "Emergency care for patient with high fever",
                type: "work"
            },
            {
                checkIn: "01:00 PM",
                checkOut: "02:00 PM",
                duration: "1h 0m",
                notes: "Lunch break",
                type: "break"
            },
            {
                checkIn: "02:00 PM",
                checkOut: "04:15 PM",
                patient: mockPatients[5],
                duration: "2h 15m",
                notes: "Assisted with multiple patients during staff shortage",
                type: "work"
            },
            {
                checkIn: "04:15 PM",
                checkOut: "04:30 PM",
                duration: "0h 15m",
                notes: "Afternoon break",
                type: "break"
            },
            {
                checkIn: "04:30 PM",
                checkOut: "06:00 PM",
                patient: mockPatients[0],
                duration: "1h 30m",
                notes: "Follow-up care and documentation",
                type: "work"
            }
        ];
    }
    return [];
};

const AttendanceDetailsMainArea: React.FC<AttendanceDetailsMainAreaProps> = ({ id }) => {
    const [employee, setEmployee] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("");
    const [startDate, setStartDate] = useState<string>(
        new Date(new Date().getFullYear(), new Date().getMonth(), 1)
            .toISOString()
            .split("T")[0]
    );
    const [endDate, setEndDate] = useState<string>(
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
            .toISOString()
            .split("T")[0]
    );
    const [timelineData, setTimelineData] = useState<any>(null);
    const [attendanceSessions, setAttendanceSessions] = useState<any[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        // Find the employee based on the ID
        const employeeIndex = parseInt(id) - 1;
        if (employeeIndex >= 0 && employeeIndex < adminAttendanceData.length) {
            setEmployee(adminAttendanceData[employeeIndex]);
        }
    }, [id]);

    const handleOpenModal = (date: string, status: string) => {
        setSelectedDate(date);
        setSelectedStatus(status);
        setIsModalOpen(true);
        
        // Generate attendance sessions data
        const dateObj = new Date(date);
        const sessions = generateMockAttendanceSessions(dateObj, status);
        setAttendanceSessions(sessions);
        
        // Generate timeline data for the selected date
        if (sessions.length > 0) {
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth();
            const day = dateObj.getDate();
            
            // Create timeline data from sessions
            const timelineData = sessions.map((session, index) => {
                // Parse check-in and check-out times
                const checkInParts = session.checkIn.match(/(\d+):(\d+) ([AP]M)/);
                const checkOutParts = session.checkOut.match(/(\d+):(\d+) ([AP]M)/);
                
                if (!checkInParts || !checkOutParts) return null;
                
                let checkInHour = parseInt(checkInParts[1]);
                const checkInMinute = parseInt(checkInParts[2]);
                const checkInAmPm = checkInParts[3];
                
                let checkOutHour = parseInt(checkOutParts[1]);
                const checkOutMinute = parseInt(checkOutParts[2]);
                const checkOutAmPm = checkOutParts[3];
                
                // Convert to 24-hour format
                if (checkInAmPm === "PM" && checkInHour < 12) checkInHour += 12;
                if (checkInAmPm === "AM" && checkInHour === 12) checkInHour = 0;
                
                if (checkOutAmPm === "PM" && checkOutHour < 12) checkOutHour += 12;
                if (checkOutAmPm === "AM" && checkOutHour === 12) checkOutHour = 0;
                
                // Set color based on session type
                let fillColor = '#6C5FFC'; // primary color for work
                if (session.type === 'break') {
                    fillColor = '#FFAB00'; // yellow for breaks
                }
                
                // Create timeline entry
                return {
                    x: session.type === 'break' ? 'Break' : `Patient: ${session.patient?.name || 'None'}`,
                    y: [
                        new Date(year, month, day, checkInHour, checkInMinute).getTime(),
                        new Date(year, month, day, checkOutHour, checkOutMinute).getTime()
                    ],
                    fillColor: fillColor,
                    patientId: session.patient?.id,
                    checkIn: session.checkIn,
                    checkOut: session.checkOut,
                    notes: session.notes,
                    type: session.type
                };
            }).filter(Boolean);
            
            setTimelineData(timelineData);
        } else {
            setTimelineData(null);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDateFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDateFilterClose = () => {
        setAnchorEl(null);
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    const open = Boolean(anchorEl);
    const popoverId = open ? 'date-range-popover' : undefined;

    if (!employee) {
        return (
            <div className="card__wrapper p-5">
                <div className="flex justify-center items-center h-64">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Loading employee data...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Calculate attendance statistics
    const presentCount = Object.values(employee).filter(value => value === "Present").length;
    const lateCount = Object.values(employee).filter(value => value === "Late").length;
    const absentCount = Object.values(employee).filter(value => value === "Absent").length;
    const leaveCount = Object.values(employee).filter(value => value === "Time Off").length;
    const holidayCount = Object.values(employee).filter(value => value === "Holiday").length;

    // Calculate total working days (excluding holidays)
    const totalWorkingDays = Object.values(employee).filter(value =>
        value !== "Holiday" && typeof value === "string" && !value.includes("date") && !value.includes("employeeImg") && !value.includes("name")
    ).length;

    // Calculate attendance percentage
    const attendancePercentage = Math.round((presentCount + lateCount) / totalWorkingDays * 100);

    // Calculate total patients attended (mock data)
    const totalPatientsAttended = presentCount * 3 + lateCount * 2;

    return (
        <>
            <div className="page-header">
                <div className="row">
                    <div className="col-span-12">
                        <Breadcrumb breadTitle="Attendance Details" subTitle="Attendance" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-span-12">
                    <div className="card__wrapper mb-6">
                        <div className="card__body">
                            <div className="flex flex-col md:flex-row items-start md:items-center">
                                <div className="employee-avatar mr-6 mb-4 md:mb-0">
                                    {employee.employeeImg && (
                                        <Image
                                            src={employee.employeeImg}
                                            alt={employee.name}
                                            className="rounded-full border-4 border-gray-100"
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </div>
                                <div className="employee-info flex-1">
                                    <h4 className="text-2xl font-semibold mb-2">{employee.name}</h4>
                                    <p className="text-gray-500 mb-1">Employee ID: EMP-{id.padStart(4, '0')}</p>
                                    <p className="text-gray-500">Department: Human Resources</p>
                                </div>
                                <div className="attendance-stats grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 md:mt-0">
                                    <div className="stat-card bg-green-50 p-3 rounded-lg text-center">
                                        <div className="text-green-600 text-xl font-bold">{presentCount}</div>
                                        <div className="text-sm text-gray-600">Present</div>
                                    </div>
                                    <div className="stat-card bg-yellow-50 p-3 rounded-lg text-center">
                                        <div className="text-yellow-600 text-xl font-bold">{lateCount}</div>
                                        <div className="text-sm text-gray-600">Late</div>
                                    </div>
                                    <div className="stat-card bg-red-50 p-3 rounded-lg text-center">
                                        <div className="text-red-600 text-xl font-bold">{absentCount}</div>
                                        <div className="text-sm text-gray-600">Absent</div>
                                    </div>
                                    <div className="stat-card bg-blue-50 p-3 rounded-lg text-center">
                                        <div className="text-blue-600 text-xl font-bold">{leaveCount}</div>
                                        <div className="text-sm text-gray-600">Leave</div>
                                    </div>
                                    <div className="stat-card bg-purple-50 p-3 rounded-lg text-center">
                                        <div className="text-purple-600 text-xl font-bold">{attendancePercentage}%</div>
                                        <div className="text-sm text-gray-600">Attendance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-span-12">
                    <div className="card__wrapper">
                        <div className="card__header">
                            <div className="card__header-title flex justify-between mb-4">
                                <h3>Attendance Records</h3>
                                <div className="card__header-action">
                                <div className="flex items-center">
                                    <div className="date-filter-text mr-2">
                                        <span className="text-sm text-gray-500">
                                            {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <IconButton 
                                        aria-describedby={popoverId}
                                        onClick={handleDateFilterClick}
                                        className="text-primary"
                                        size="small"
                                    >
                                        <i className="fa fa-calendar"></i>
                                    </IconButton>
                                    <Popover
                                        id={popoverId}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleDateFilterClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <div className="p-4 flex flex-col gap-4">
                                            <h4 className="font-medium">Select Date Range</h4>
                                            <div className="flex gap-4">
                                                <TextField
                                                    label="Start Date"
                                                    type="date"
                                                    value={startDate}
                                                    onChange={handleStartDateChange}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    size="small"
                                                />
                                                <TextField
                                                    label="End Date"
                                                    type="date"
                                                    value={endDate}
                                                    onChange={handleEndDateChange}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    size="small"
                                                />
                                            </div>
                                            <button 
                                                className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
                                                onClick={handleDateFilterClose}
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="card__body">
                            <AttendanceDetailsTable 
                                employee={employee} 
                                onViewDetails={handleOpenModal} 
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <AttendanceDetailsModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    employeeName={employee.name}
                    date={selectedDate}
                    status={selectedStatus}
                    timelineData={timelineData}
                    attendanceSessions={attendanceSessions}
                />
            )}
        </>
    );
};

export default AttendanceDetailsMainArea; 