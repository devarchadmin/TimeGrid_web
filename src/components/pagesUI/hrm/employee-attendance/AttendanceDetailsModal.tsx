"use client";
import React, { useState } from "react";
import { useAttendanceHook } from "@/hooks/use-condition-class";
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Image from "next/image";

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

const AttendanceDetailsModal: React.FC<AttendanceDetailsModalProps> = ({
  isOpen,
  onClose,
  employeeName,
  date,
  status,
  timelineData,
  attendanceSessions,
}) => {
  const attendanceIcon = useAttendanceHook(status);
  const [activeTab, setActiveTab] = useState<string>("timeline");

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
        show: false
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-auto">
        <div className="p-6">
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

          <div className="tabs mb-4">
            <div className="flex border-b">
              <button 
                className={`py-2 px-4 font-medium ${activeTab === 'timeline' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeTab === 'sessions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('sessions')}
              >
                Patient Sessions
              </button>
            </div>
          </div>

          {activeTab === 'timeline' ? (
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
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-danger mr-2"></div>
                      <span className="text-sm">Check Out</span>
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
          ) : (
            <div className="sessions-view">
              {attendanceSessions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attendanceSessions.map((session, index) => (
                    <div 
                      key={index} 
                      className={`session-card border rounded-lg p-4 hover:shadow-md transition-shadow ${
                        session.type === 'break' ? 'border-l-4 border-l-warning' : 'border-l-4 border-l-primary'
                      }`}
                    >
                      {session.type === 'work' && session.patient ? (
                        <div className="flex items-start mb-3">
                          <div className="patient-avatar mr-3">
                            {session.patient.image && (
                              <Image
                                src={session.patient.image}
                                alt={session.patient.name}
                                width={50}
                                height={50}
                                className="rounded-full"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold">{session.patient.name}</h4>
                            <p className="text-sm text-gray-500">Patient ID: {session.patient.id}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-3">
                          <h4 className="font-semibold text-warning">
                            <i className="fa fa-coffee mr-2"></i>
                            Break Time
                          </h4>
                        </div>
                      )}
                      
                      <div className="session-details grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <p className="text-gray-600 text-sm">Check In:</p>
                          <p className="font-medium">{session.checkIn}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Check Out:</p>
                          <p className="font-medium">{session.checkOut}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Duration:</p>
                          <p className="font-medium">{session.duration}</p>
                        </div>
                      </div>
                      
                      <div className="session-notes">
                        <p className="text-gray-600 text-sm">Notes:</p>
                        <p className="text-sm bg-gray-50 p-2 rounded">{session.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-[350px] bg-gray-50 rounded-lg">
                  <div className="text-center text-gray-500">
                    <i className="fa fa-user-clock text-4xl mb-2"></i>
                    <p>No patient sessions available for this attendance record.</p>
                  </div>
                </div>
              )}
            </div>
          )}

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