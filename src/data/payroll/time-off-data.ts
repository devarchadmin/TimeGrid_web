import { IEarning, ITimeOff } from "@/interface/table.interface";

export const timeOffData: ITimeOff[] = [
  {
    title: "PTO",
    details: "Paid Time Off ",
    hourse: 24.0,
  },
  {
    title: "Sick Hours",
    details: "Paid Time Off's due to sickness.",
    hourse: 24.0,
  },
  {
    title: "Vacation Hours",
    details: "Paid Vacations.",
    hourse: 0.0,
  },
  {
    title: "Unpaid Time Off",
    details: "These hourse will be deducted.",
    hourse: 0.0,
  },
];
