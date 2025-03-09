import { IPayrollHistory } from "@/interface/table.interface";

export const getPayrollHistoryByEmployeeId = (employeeId: string): IPayrollHistory[] => {
  // This function simulates fetching payroll history from an API
  // In a real application, this would be an API call to /payroll endpoint
  
  // Sample data for all employees
  const allPayrollHistory: Record<string, IPayrollHistory[]> = {
    "TG-114": [
      {
        id: "PAY-001",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Jan 15, 2024",
        salaryMonth: "Jan 1 - Jan 14, 2024",
        amount: 7250,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-002",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Jan 31, 2024",
        salaryMonth: "Jan 15 - Jan 31, 2024",
        amount: 7250,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-003",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Feb 15, 2024",
        salaryMonth: "Feb 1 - Feb 14, 2024",
        amount: 7250,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-004",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Feb 29, 2024",
        salaryMonth: "Feb 15 - Feb 29, 2024",
        amount: 7250,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-005",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Mar 15, 2024",
        salaryMonth: "Mar 1 - Mar 14, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-006",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Mar 31, 2024",
        salaryMonth: "Mar 15 - Mar 31, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-007",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Apr 15, 2024",
        salaryMonth: "Apr 1 - Apr 14, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-008",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "Apr 30, 2024",
        salaryMonth: "Apr 15 - Apr 30, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-009",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "May 15, 2024",
        salaryMonth: "May 1 - May 14, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-010",
        employeeId: "TG-114",
        employeeName: "Dr. Michael Anderson",
        paymentDate: "May 31, 2024",
        salaryMonth: "May 15 - May 31, 2024",
        amount: 7500,
        paymentMethod: "Bank Transfer",
        status: "Unpaid"
      }
    ],
    "TG-115": [
      {
        id: "PAY-011",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Jan 15, 2024",
        salaryMonth: "Jan 1 - Jan 14, 2024",
        amount: 7740,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-012",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Jan 31, 2024",
        salaryMonth: "Jan 15 - Jan 31, 2024",
        amount: 7740,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-013",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Feb 15, 2024",
        salaryMonth: "Feb 1 - Feb 14, 2024",
        amount: 7740,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-014",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Feb 29, 2024",
        salaryMonth: "Feb 15 - Feb 29, 2024",
        amount: 7740,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-015",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Mar 15, 2024",
        salaryMonth: "Mar 1 - Mar 14, 2024",
        amount: 8000,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-016",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Mar 31, 2024",
        salaryMonth: "Mar 15 - Mar 31, 2024",
        amount: 8000,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-017",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Apr 15, 2024",
        salaryMonth: "Apr 1 - Apr 14, 2024",
        amount: 8000,
        paymentMethod: "Bank Transfer",
        status: "Paid"
      },
      {
        id: "PAY-018",
        employeeId: "TG-115",
        employeeName: "Dr. Emily Johnson",
        paymentDate: "Apr 30, 2024",
        salaryMonth: "Apr 15 - Apr 30, 2024",
        amount: 8000,
        paymentMethod: "Bank Transfer",
        status: "Unpaid"
      }
    ],
    // Add more employee data as needed
  };

  // Return the payroll history for the specified employee ID
  return allPayrollHistory[employeeId] || [];
}; 