"use client";
import React from "react";
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface AttendanceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  employeeName: string;
  date: string;
  status: string;
  timelineData: any;
  attendanceSessions: any[];
}

// Function to get attendance icon class based on status
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

const AttendanceDetailsModal: React.FC<AttendanceDetailsModalProps> = ({
  isOpen,
  onClose,
  employeeName,
  date,
  status,
  timelineData,
  attendanceSessions,
}) => {
  const attendanceIcon = getAttendanceIconClass(status);

  // Calculate total hours worked
  const totalHours = attendanceSessions.reduce((total, session) => {
    const durationParts = session.duration.match(/(\d+)h (\d+)m/);
    if (durationParts) {
      const hours = parseInt(durationParts[1]);
      const minutes = parseInt(durationParts[2]);
      return total + hours + (minutes / 60);
    }
    return total;
  }, 0).toFixed(1);

  // Calculate total break time
  const totalBreakTime = attendanceSessions
    .filter(session => session.type === 'break')
    .reduce((total, session) => {
      const durationParts = session.duration.match(/(\d+)h (\d+)m/);
      if (durationParts) {
        const hours = parseInt(durationParts[1]);
        const minutes = parseInt(durationParts[2]);
        return total + hours + (minutes / 60);
      }
      return total;
    }, 0).toFixed(1);

  // Count unique patients
  const uniquePatients = new Set();
  attendanceSessions.forEach(session => {
    if (session.patient && session.patient.id) {
      uniquePatients.add(session.patient.id);
    }
  });

  // Define options for the Apex chart
  const options: ApexOptions = timelineData ? {
    series: [
      {
        data: timelineData
      }
    ],
    chart: {
      height: 350,
      type: 'rangeBar' as const,
      foreColor: '#7A7A7A',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'zoom'
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        rangeBarGroupRows: true
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          hour: 'HH:mm'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      custom: function({ seriesIndex, dataPointIndex, w }: any) {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        
        if (data.type === 'break') {
          return `<div class="apexcharts-tooltip-title" style="font-weight: bold; margin-bottom: 5px; color: ${data.fillColor}">Break Time</div>
                  <div>Start: ${data.checkIn}</div>
                  <div>End: ${data.checkOut}</div>
                  <div>Duration: ${data.duration}</div>
                  <div class="mt-2 text-xs">${data.notes || ''}</div>`;
        }
        
        return `<div class="apexcharts-tooltip-title" style="font-weight: bold; margin-bottom: 5px; color: ${data.fillColor}">
                  ${data.patient ? `Patient: ${data.x.replace('Patient: ', '')}` : data.x}
                </div>
                <div>Check In: ${data.checkIn}</div>
                <div>Check Out: ${data.checkOut}</div>
                <div>Duration: ${data.duration}</div>
                <div class="mt-2 text-xs">${data.notes || ''}</div>`;
      }
    },
    legend: {
      show: false
    },
    title: {
      text: `Attendance Timeline - ${date}`,
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    colors: ['#6C5FFC', '#FF4560', '#FFAB00'] // Primary, Danger, Warning
  } : {};

  // Helper function to calculate duration between two timestamps
  const calculateDuration = (start: number, end: number) => {
    const durationMs = end - start;
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 overflow-y-auto max-h-[90vh] rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Attendance Details</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="employee-summary bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-4">
                  <div className="flex items-center">
                    <i className={`${attendanceIcon} mr-2 text-xl`}></i>
                    <span className="font-semibold text-lg">{status}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Employee:</p>
                  <p className="font-semibold">{employeeName}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <p className="text-gray-600 mb-1">Date:</p>
                  <p className="font-semibold">{date}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Work Hours:</p>
                  <p className="font-semibold">{totalHours}h</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Break Time:</p>
                  <p className="font-semibold">{totalBreakTime}h</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Patients:</p>
                  <p className="font-semibold">{uniquePatients.size}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-view">
            {timelineData && timelineData.length > 0 ? (
              <div className="attendance-timeline">
                {typeof window !== 'undefined' && (
                  <Chart options={options} series={options.series || []} type="rangeBar" height={350} />
                )}
                <div className="timeline-legend flex justify-center mt-4 gap-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm">Patient Care</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
                    <span className="text-sm">Break Time</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[350px] bg-gray-50 rounded-lg">
                <div className="text-center text-gray-500">
                  <i className="fa fa-chart-bar text-4xl mb-2"></i>
                  <p>Timeline data not available for this attendance record.</p>
                </div>
              </div>
            )}
          </div>

          <div className="attendance-sessions mt-6">
            <h4 className="text-lg font-medium mb-4">Activity Summary</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border text-left">Check In</th>
                    <th className="py-2 px-4 border text-left">Check Out</th>
                    <th className="py-2 px-4 border text-left">Activity</th>
                    <th className="py-2 px-4 border text-left">Duration</th>
                    <th className="py-2 px-4 border text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceSessions.map((session, index) => (
                    <tr key={index} className={`border hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2 px-4 border">
                        <span className="text-success font-medium">
                          <i className="fa fa-sign-in-alt mr-1"></i> {session.checkIn}
                        </span>
                      </td>
                      <td className="py-2 px-4 border">
                        <span className="text-danger font-medium">
                          <i className="fa fa-sign-out-alt mr-1"></i> {session.checkOut}
                        </span>
                      </td>
                      <td className="py-2 px-4 border">
                        {session.type === 'break' ? (
                          <span className="text-warning flex items-center">
                            <i className="fa fa-coffee mr-2"></i> Break Time
                          </span>
                        ) : (
                          <span className="text-primary flex items-center">
                            <i className="fa fa-user-md mr-2"></i> 
                            {session.patient ? `Patient: ${session.patient.name}` : 'Work'}
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-4 border font-medium">{session.duration}</td>
                      <td className="py-2 px-4 border text-sm">{session.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetailsModal;