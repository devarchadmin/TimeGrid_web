"use client";
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React, { useEffect, useState } from "react";
import { IPatient } from "@/interface/patient.interface";
import patientData from "@/data/patients/patient-data";
import Link from "next/link";
import { toast } from "sonner";
import PatientPersonalInfo from "./PatientPersonalInfo";
import PatientMedicalInfo from "./PatientMedicalInfo";
import PatientEmergencyContact from "./PatientEmergencyContact";
import EditPersonalInfoModal from "./EditPersonalInfoModal";


interface PatientProfileMainAreaProps {
  id: number;
}

const PatientProfileMainArea = ({ id }: PatientProfileMainAreaProps) => {
  const [patient, setPatient] = useState<IPatient | null>(null);
  const [editPersonalInfoModalOpen, setEditPersonalInfoModalOpen] = useState(false);

  useEffect(() => {
    // In a real application, this would be an API call
    const foundPatient = patientData.find((p) => p.id === id);
    setPatient(foundPatient || null);
  }, [id]);

  const handleDeletePatient = () => {
    if (confirm("Are you sure you want to delete this patient?")) {
      // In a real application, this would be an API call
      toast.success("Patient deleted successfully!");
      // Redirect to patients list
      window.location.href = "/patients";
    }
  };

  if (!patient) {
    return (
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Patient Profile" subTitle="Patients" subtitleLink='/patients'/>
        <div className="card__wrapper p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Patient not found</h3>
          <p className="mt-2 text-gray-600">The patient you are looking for does not exist or has been removed.</p>
          <Link href="/patients" className="btn btn-primary mt-4">
            Back to Patients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Patient Profile" subTitle="Patients" subtitleLink='/patients'/>
        <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
          <PatientPersonalInfo patient={patient} onEdit={() => setEditPersonalInfoModalOpen(true)} />
          <PatientEmergencyContact patient={patient} />
          <PatientMedicalInfo patient={patient} />
        </div>
      </div>
      
      {/* Edit Personal Info Modal */}
      {editPersonalInfoModalOpen && (
        <EditPersonalInfoModal 
          open={editPersonalInfoModalOpen} 
          setOpen={setEditPersonalInfoModalOpen} 
          patient={patient}
        />
      )}
    </>
  );
};

export default PatientProfileMainArea; 