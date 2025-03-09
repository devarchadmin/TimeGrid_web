"use client";
import React, { useState } from "react";
import { IPatient } from "@/interface/patient.interface";
import EditEmergencyContactModal from "./EditEmergencyContactModal";
import Link from "next/link";

interface PatientEmergencyContactProps {
  patient: IPatient;
}

const PatientEmergencyContact = ({ patient }: PatientEmergencyContactProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="col-span-12 md:col-span-12 xl:col-span-12 xxl:col-span-5">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[10px]">
              <h5 className="card__heading-title">Emergency Contact</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={() => setModalOpen(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
              <div className="col-span-12 sm:col-span-6">
                <div className="emergency-contact">
                  <h6 className="card__sub-title mb-2.5">Primary Contact</h6>
                  <ul className="personal-info">
                    <li>
                      <div className="title">Name:</div>
                      <div className="text">
                        {patient.emergencyContactName || "Not provided"}
                      </div>
                    </li>
                    <li>
                      <div className="title">Relationship:</div>
                      <div className="text">
                        {patient.emergencyRelationship || "Not provided"}
                      </div>
                    </li>
                    <li>
                      <div className="title">Phone:</div>
                      <div className="text text-link-hover">
                        {patient.emergencyContact ? (
                          <Link href={`tel:${patient.emergencyContact}`}>
                            {patient.emergencyContact}
                          </Link>
                        ) : (
                          "Not provided"
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="title">Address:</div>
                      <div className="text">
                        {patient.emergencyAddress || "Not provided"}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <div className="emergency-contact">
                  <h6 className="card__sub-title mb-2.5">Secondary Contact</h6>
                  <ul className="personal-info">
                    <li>
                      <div className="title">Name:</div>
                      <div className="text">
                        {patient.secondaryEmergencyContactName || "Not provided"}
                      </div>
                    </li>
                    <li>
                      <div className="title">Relationship:</div>
                      <div className="text">
                        {patient.secondaryEmergencyRelationship || "Not provided"}
                      </div>
                    </li>
                    <li>
                      <div className="title">Phone:</div>
                      <div className="text text-link-hover">
                        {patient.secondaryEmergencyContact ? (
                          <Link href={`tel:${patient.secondaryEmergencyContact}`}>
                            {patient.secondaryEmergencyContact}
                          </Link>
                        ) : (
                          "Not provided"
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="title">Address:</div>
                      <div className="text">
                        {patient.secondaryEmergencyAddress || "Not provided"}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <EditEmergencyContactModal
          open={modalOpen}
          setOpen={setModalOpen}
          patient={patient}
        />
      )}
    </>
  );
};

export default PatientEmergencyContact; 