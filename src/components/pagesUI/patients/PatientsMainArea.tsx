"use client";
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React, { useState } from "react";
import PatientFilter from "./PatientFilter";
import PatientSingleCard from "@/components/common/PatientSingleCard";
import patientData from "@/data/patients/patient-data";
import { IPatient } from "@/interface/patient.interface";
import EditPatientModal from "./patient-profile/EditPatientModal";

const PatientsMainArea = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);

  const handleEditPatient = (patient: IPatient) => {
    setSelectedPatient(patient);
    setEditModalOpen(true);
  };

  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Patients" subTitle="Home" />
        <PatientFilter />
        <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
          {patientData?.map((patient) => (
            <PatientSingleCard 
              key={patient.id} 
              patient={patient} 
              onEdit={handleEditPatient}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[20px] mb-[20px]">
          <button type="button" className="btn btn-primary">
            Load More
          </button>
        </div>
      </div>

      {/* Edit Patient Modal */}
      {editModalOpen && selectedPatient && (
        <EditPatientModal 
          open={editModalOpen} 
          setOpen={setEditModalOpen} 
          patient={selectedPatient}
        />
      )}
    </>
  );
};

export default PatientsMainArea; 