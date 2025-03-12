"use client";
import React from "react";
import SummarySingleCard from "@/components/common/SummarySingleCard";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import chart components
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const HomeMainArea = () => {
  // Module overview cards data
  const moduleCards = [
    {
      iconClass: "fa-regular fa-users",
      title: "Employees",
      value: 313,
      description: "Active employees",
      link: "/employees",
    },
    {
      iconClass: "fa-solid fa-users-medical",
      title: "Patients",
      value: 528,
      description: "Registered patients",
      link: "/patients",
    },
    {
      iconClass: "fa-regular fa-clock-ten",
      title: "Attendance",
      value: "95%",
      description: "Average attendance rate",
      link: "/attendance",
    },
    {
      iconClass: "fa-sharp fa-light fa-money-bill-trend-up",
      title: "Payroll",
      value: "$125K",
      description: "Bi-weekly payroll",
      link: "/payroll",
    },
    {
      iconClass: "fa-regular fa-person-walking-arrow-right",
      title: "Time Offs",
      value: 42,
      description: "Pending requests",
      link: "/time-off",
    },
    {
      iconClass: "fa-regular fa-tree-christmas",
      title: "Company Holidays",
      value: 12,
      description: "Upcoming holidays",
      link: "/company-holidays",
    },
    // {
    //   iconClass: "fa-regular fa-message-quote",
    //   title: "Chat",
    //   value: 156,
    //   description: "Unread messages",
    //   link: "/chats",
    // },
    // {
    //   iconClass: "fa-regular fa-chart-line",
    //   title: "Overview",
    //   value: "7",
    //   description: "Active modules",
    //   link: "/",
    // },
  ];

  return (
    <>
      {/* -- App side area start -- */}
      <div className="app__slide-wrapper">
        <div className="grid grid-cols-12 gap-x-5 gap-y-5 maxXs:gap-x-0">
          {/* Module Overview Cards */}
          {moduleCards.map((card, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 mb-0">
              <Link href={card.link} className="block h-full">
                <div className="card__wrapper h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-[30px] maxSm:gap-5">
                    <div className="card__icon">
                      <span>
                        <i className={card.iconClass}></i>
                      </span>
                    </div>
                    <div className="card__title-wrap">
                      <h6 className="card__sub-title mb-[10px]">{card.title}</h6>
                      <div className="flex flex-wrap items-end gap-[10px]">
                        <h3 className="card__title mb-0">{card.value}</h3>
                        <span className="card__desc style_two">{card.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Attendance Overview Chart */}
          <div className="col-span-12 lg:col-span-6 mb-0">
            <div className="card__wrapper h-full">
              <div className="card__title-wrap flex flex-wrap gap-[10px] items-center justify-between mb-[25px]">
                <h5 className="card__heading-title">Attendance (Last 2 Weeks)</h5>
                <Link href="/attendance" className="btn btn-sm btn-primary">View Details</Link>
              </div>
              <div className="attendance-chart" style={{ height: "320px" }}>
                <AttendanceChart />
              </div>
            </div>
          </div>

          {/* Time Off Requests */}
          <div className="col-span-12 lg:col-span-6 mb-0">
            <div className="card__wrapper h-full">
              <div className="card__title-wrap flex flex-wrap gap-[10px] items-center justify-between mb-[25px]">
                <h5 className="card__heading-title">Recent Time Off Requests</h5>
                <Link href="/time-off" className="btn btn-sm btn-primary">View All</Link>
              </div>
              <div className="table__wrapper table-responsive">
                <table className="table mb-[20px] w-full">
                  <thead>
                    <tr className="table__title">
                      <th>Employee</th>
                      <th>Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Smith</td>
                      <td>Vacation</td>
                      <td>Jun 15, 2024</td>
                      <td>Jun 22, 2024</td>
                      <td><span className="bd-badge bg-warning text-white">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Sarah Johnson</td>
                      <td>Sick Leave</td>
                      <td>Jun 10, 2024</td>
                      <td>Jun 12, 2024</td>
                      <td><span className="bd-badge bg-success text-white">Approved</span></td>
                    </tr>
                    <tr>
                      <td>Michael Brown</td>
                      <td>Personal</td>
                      <td>Jun 18, 2024</td>
                      <td>Jun 19, 2024</td>
                      <td><span className="bd-badge bg-warning text-white">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Emily Davis</td>
                      <td>Vacation</td>
                      <td>Jul 01, 2024</td>
                      <td>Jul 15, 2024</td>
                      <td><span className="bd-badge bg-success text-white">Approved</span></td>
                    </tr>
                    <tr>
                      <td>Robert Wilson</td>
                      <td>Sick Leave</td>
                      <td>Jun 08, 2024</td>
                      <td>Jun 09, 2024</td>
                      <td><span className="bd-badge bg-danger text-white">Rejected</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Upcoming Holidays */}
          <div className="col-span-12 lg:col-span-6 mb-0">
            <div className="card__wrapper h-full">
              <div className="card__title-wrap flex flex-wrap gap-[10px] items-center justify-between mb-[25px]">
                <h5 className="card__heading-title">Upcoming Holidays</h5>
                <Link href="/company-holidays" className="btn btn-sm btn-primary">View All</Link>
              </div>
              <div className="table__wrapper table-responsive">
                <table className="table mb-[20px] w-full">
                  <thead>
                    <tr className="table__title">
                      <th>Holiday</th>
                      <th>Date</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Independence Day</td>
                      <td>Jul 04, 2024</td>
                      <td>Thursday</td>
                    </tr>
                    <tr>
                      <td>Labor Day</td>
                      <td>Sep 02, 2024</td>
                      <td>Monday</td>
                    </tr>
                    <tr>
                      <td>Columbus Day</td>
                      <td>Oct 14, 2024</td>
                      <td>Monday</td>
                    </tr>
                    <tr>
                      <td>Veterans Day</td>
                      <td>Nov 11, 2024</td>
                      <td>Monday</td>
                    </tr>
                    <tr>
                      <td>Thanksgiving Day</td>
                      <td>Nov 28, 2024</td>
                      <td>Thursday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Patients */}
          <div className="col-span-12 lg:col-span-6 mb-0">
            <div className="card__wrapper h-full">
              <div className="card__title-wrap flex flex-wrap gap-[10px] items-center justify-between mb-[25px]">
                <h5 className="card__heading-title">Recent Patients</h5>
                <Link href="/patients" className="btn btn-sm btn-primary">View All</Link>
              </div>
              <div className="table__wrapper table-responsive">
                <table className="table mb-[20px] w-full">
                  <thead>
                    <tr className="table__title">
                      <th>Patient Name</th>
                      <th>ID</th>
                      <th>Age</th>
                      <th>Insurance Provider</th>
                      <th>Emergency Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alice Cooper</td>
                      <td>PT-1001</td>
                      <td>42</td>
                      <td>Blue Cross</td>
                      <td>John Cooper (Spouse)</td>
                    </tr>
                    <tr>
                      <td>Bob Marley</td>
                      <td>PT-1002</td>
                      <td>35</td>
                      <td>Aetna</td>
                      <td>Rita Marley (Spouse)</td>
                    </tr>
                    <tr>
                      <td>Carol Danvers</td>
                      <td>PT-1003</td>
                      <td>29</td>
                      <td>United Healthcare</td>
                      <td>Maria Danvers (Mother)</td>
                    </tr>
                    <tr>
                      <td>David Bowie</td>
                      <td>PT-1004</td>
                      <td>51</td>
                      <td>Cigna</td>
                      <td>Iman Bowie (Spouse)</td>
                    </tr>
                    <tr>
                      <td>Eva Green</td>
                      <td>PT-1005</td>
                      <td>38</td>
                      <td>Kaiser Permanente</td>
                      <td>James Green (Brother)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- App side area end -- */}
    </>
  );
};

// Attendance Chart Component
const AttendanceChart = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate last 14 days for the chart
  const generateDailyData = () => {
    const days = [];
    const presentData = [];
    const absentData = [];
    const dateLabels = [];
    
    const today = new Date();
    const twoWeeksAgo = new Date(today);
    twoWeeksAgo.setDate(today.getDate() - 13);
    
    // Format dates for period display: "28 Feb, 2025 to 13 Mar, 2025"
    const formatDateForPeriod = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    };
    
    // Format dates for x-axis: "28 Feb"
    const formatDateForAxis = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      return `${day} ${month}`;
    };
    
    const startDateStr = formatDateForPeriod(twoWeeksAgo);
    const endDateStr = formatDateForPeriod(today);
    
    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      
      // Format as "28 Feb"
      const formattedDate = formatDateForAxis(date);
      days.push(formattedDate);
      dateLabels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
      
      // Generate random attendance data between 85-100%
      const presentValue = Math.floor(Math.random() * 15) + 85;
      presentData.push(presentValue);
      absentData.push(100 - presentValue);
    }
    
    return { days, presentData, absentData, dateLabels, startDateStr, endDateStr };
  };
  
  const { days, presentData, absentData, dateLabels, startDateStr, endDateStr } = generateDailyData();

  const options = {
    series: [
      {
        name: "Present",
        data: presentData
      },
      {
        name: "Absent",
        data: absentData
      }
    ],
    chart: {
      type: "bar" as const,
      height: 320,
      stacked: true,
      foreColor: "#7A7A7A",
      fontFamily: "'Roboto', sans-serif",
      toolbar: {
        show: false
      }
    },
    colors: ["#006E5B", "#FF3A29"],
    fill: { opacity: [1, 1] },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function(val: number) {
          return val + "%";
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(val: number) {
          return val + "%";
        }
      }
    },
    xaxis: {
      categories: days,
      labels: {
        rotate: -45,
        style: {
          fontSize: '10px'
        }
      }
    },
    legend: {
      show: true,
      position: "top" as const,
      horizontalAlign: "left" as const,
      offsetX: -5,
      labels: {
        colors: "#7A7A7A",
      }
    }
  };

  return isMounted ? (
    <Chart options={options} series={options.series} type="bar" height={320} />
  ) : (
    <div>Loading...</div>
  );
};

export default HomeMainArea;
