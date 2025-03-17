import { StaticImageData } from "next/image";

// Define an interface for the patient's social links
interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  website: string;
}

// Define an interface for medicine timings
export interface IMedicineTiming {
  id: number;
  medicineName: string;
  dosage: string;
  frequency: string;
  instructions?: string;
  timeOfDay: ("Morning" | "Afternoon" | "Evening" | "Night")[];
}

// Define an interface for progressive notes
export interface IProgressiveNote {
  id: number;
  date: string;
  note: string;
  addedBy: string;
}

// Define an interface for the patient data
export interface IPatient {
  id: number;
  image: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  patientID?: string;
  routeNumber?: string; // National ID No.
  dateOfBirth?: string;
  gender?: "Male" | "Female" | "Other";
  bloodGroup?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  phone: string;
  // Primary emergency contact
  emergencyContact?: string;
  emergencyContactName?: string;
  emergencyRelationship?: string;
  emergencyAddress?: string;
  primaryContactName?: string;
  primaryContactPhone?: string;
  // Secondary emergency contact
  secondaryEmergencyContact?: string;
  secondaryEmergencyContactName?: string;
  secondaryEmergencyRelationship?: string;
  secondaryEmergencyAddress?: string;
  secondaryContactName?: string;
  secondaryContactPhone?: string;
  medicalConditions?: string[];
  allergies?: string[];
  medications?: string[];
  insuranceProvider?: string;
  insuranceNumber?: string;
  registrationDate?: string;
  lastVisit?: string;
  socialLinks: SocialLinks;
  // New fields
  description?: string;
  medicineTimings?: IMedicineTiming[];
  progressiveNotes?: IProgressiveNote[];
}

// Define an interface for the patient's medical history
export interface IMedicalHistory {
  id: number;
  patientId: number;
  date: string;
  diagnosis: string;
  treatment: string;
  doctor: string;
  notes: string;
}

// Define an interface for the patient's appointment
export interface IPatientAppointment {
  id: number;
  patientId: number;
  doctorId: number;
  doctorName: string;
  date: string;
  time: string;
  status: "Scheduled" | "Completed" | "Cancelled" | "No-show";
  reason: string;
  notes?: string;
}

// Define an interface for the patient's billing
export interface IPatientBilling {
  id: number;
  patientId: number;
  date: string;
  amount: number;
  description: string;
  status: "Paid" | "Unpaid" | "Pending" | "Refunded";
  paymentMethod?: string;
  invoiceNumber: string;
} 