import { SidebarCategory } from "@/interface";

const sidebarData: SidebarCategory[] = [
  {
    id: 1,
    category: "Authentication",
    items: [
      {
        id: 1,
        label: "Sign In",
        icon: "fa-sharp fa-regular fa-arrow-right-to-arc",
        link: "/auth/signin",
      },
      {
        id: 2,
        label: "Sign Up",
        icon: "fa-sharp fa-regular fa-arrow-left-to-arc",
        link: "/auth/signup",
      },
      {
        id: 3,
        label: "Reset Password",
        icon: "fa-regular fa-lock",
        link: "/auth/reset-password",
      },
      {
        id: 4,
        label: "Forgot Password",
        icon: "fa-regular fa-question",
        link: "/auth/forgot-password",
      },
    ],
  },

  {
    id: 2,
    category: "Main",
    items: [
      {
        id: 15,
        label: "Dashboard",
        icon: "fa-regular fa-grid-2",
        link: "/",
      },
      {
        id: 5,
        label: "Employees",
        icon: "fa-regular fa-users",
        link: "/employees",
      },
      {
        id: 6,
        label: "Employee Profile",
        icon: "fa-regular fa-user",
        link: "/employee/1",
      },
      {
        id: 7,
        label: "Chats",
        icon: "fa-regular fa-message-quote",
        link: "/chats",
      },
      {
        id: 8,
        label: "Payroll",
        icon: "fa-sharp fa-light fa-money-bill-trend-up",
        link: "/payroll",
      },
      {
        id: 9,
        label: "Payroll Slip",
        icon: "fa-sharp fa-light fa-money-check-dollar",
        link: "/payroll-payslip",
      },
      {
        id: 10,
        label: "Time Off Requests",
        icon: "fa-regular fa-person-walking-arrow-right",
        link: "/time-off",
      },
      {
        id: 11,
        label: "Company Holidays",
        icon: "fa-regular fa-tree-christmas",
        link: "/company-holidays",
      },
      {
        id: 12,
        label: "Patients",
        icon: "fa-solid fa-users-medical",
        link: "/patients",
      },
      {
        id: 13,
        label: "Patient Profile",
        icon: "fa-regular fa-user",
        link: "/patients/1",
      },
      {
        id: 14,
        label: "Attendance",
        icon: "fa-regular fa-clock-ten",
        link: "/attendance",
      },
    ],
  },
];

export default sidebarData;
