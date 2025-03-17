"use client";
import React, { useState } from "react";
import { IPatient } from "@/interface/patient.interface";
import EditDescriptionModal from "./EditDescriptionModal";

interface PatientDescriptionProps {
  patient: IPatient;
}

const PatientDescription = ({ patient }: PatientDescriptionProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="col-span-12 md:col-span-12 xl:col-span-12 xxl:col-span-5">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[10px]">
              <h5 className="card__heading-title">Patient Description</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={() => setModalOpen(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="personal-info-wrapper">
              <div className="description-text p-2">
                {patient.description ? (
                  <p className="text-gray-700 leading-relaxed">{patient.description}</p>
                ) : (
                  <p className="text-gray-500 italic">No description available for this patient.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <EditDescriptionModal
          open={modalOpen}
          setOpen={setModalOpen}
          patient={patient}
        />
      )}
    </>
  );
};

export default PatientDescription; 