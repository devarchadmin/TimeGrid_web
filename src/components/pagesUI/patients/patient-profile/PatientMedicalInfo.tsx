"use client";
import React, { useState } from "react";
import { IPatient } from "@/interface/patient.interface";
import EditMedicalInfoModal from "./EditMedicalInfoModal";

interface PatientMedicalInfoProps {
  patient: IPatient;
}

const PatientMedicalInfo = ({ patient }: PatientMedicalInfoProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Medical Information</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={() => setModalOpen(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="personal-info-wrapper">
              <ul className="personal-info">
                <li className="flex justify-between">
                  <div className="title">Blood Group:</div>
                  <div className="text">{patient.bloodGroup || "Not provided"}</div>
                </li>
                <li className="flex justify-between">
                  <div className="title">Medical Conditions:</div>
                  <div className="text">
                    {patient.medicalConditions && patient.medicalConditions.length > 0
                      ? patient.medicalConditions.join(", ")
                      : "None"}
                  </div>
                </li>
                <li className="flex justify-between">
                  <div className="title">Allergies:</div>
                  <div className="text">
                    {patient.allergies && patient.allergies.length > 0
                      ? patient.allergies.join(", ")
                      : "None"}
                  </div>
                </li>
                <li className="flex justify-between">
                  <div className="title">Current Medications:</div>
                  <div className="text">
                    {patient.medications && patient.medications.length > 0
                      ? patient.medications.join(", ")
                      : "None"}
                  </div>
                </li>
                <li className="flex justify-between">
                  <div className="title">Insurance Provider:</div>
                  <div className="text">{patient.insuranceProvider || "Not provided"}</div>
                </li>
                <li className="flex justify-between">
                  <div className="title">Insurance Number:</div>
                  <div className="text">{patient.insuranceNumber || "Not provided"}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <EditMedicalInfoModal
          open={modalOpen}
          setOpen={setModalOpen}
          patient={patient}
        />
      )}
    </>
  );
};

export default PatientMedicalInfo; 