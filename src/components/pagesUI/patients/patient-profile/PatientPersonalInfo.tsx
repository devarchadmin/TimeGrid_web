"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPatient } from "@/interface/patient.interface";

interface PatientPersonalInfoProps {
  patient: IPatient;
  onEdit: () => void;
}

const PatientPersonalInfo = ({ patient, onEdit }: PatientPersonalInfoProps) => {
  return (
    <>
      <div className="col-span-12 xxl:col-span-7">
        <div className="card__wrapper height-equal">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex items-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Personal Information</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={onEdit}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="profile-view flex flex-wrap justify-between items-start">
              <div className="flex flex-wrap items-start gap-[10px] sm:gap-[20px]">
                <div className="profile-img-wrap">
                  <div className="profile-img w-[100px] h-[100px] rounded-full overflow-hidden relative">
                    <Image
                      src={patient.image}
                      alt={`${patient.name} image`}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                </div>
                <div className="profile-info">
                  <h3 className="user-name mb-[15px]">{patient.name}</h3>
                  <h6 className="text-muted mb-[5px]">{patient.gender}</h6>
                  <span className="block text-muted">Blood Group: {patient.bloodGroup || "Not specified"}</span>
                  <h6 className="small employee-id text-black mb-[5px] mt-[5px]">
                    Patient ID: {patient.patientID}
                  </h6>
                  <span className="block text-muted">
                    Registration Date: {patient.registrationDate || "Not specified"}
                  </span>
                  <div className="employee-msg mt-[20px]">
                    <Link href={`tel:${patient.phone}`} className="btn btn-primary">
                      Call Patient
                    </Link>
                  </div>
                </div>
              </div>
              <div className="personal-info-wrapper pe-5">
                <ul className="personal-info">
                  <li>
                    <div className="title">Phone:</div>
                    <div className="text text-link-hover">
                      <Link href={`tel:${patient.phone}`}>{patient.phone}</Link>
                    </div>
                  </li>
                  <li>
                    <div className="title">Email:</div>
                    <div className="text text-link-hover">
                      <Link href={`mailto:${patient.email}`}>
                        {patient.email}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="title">Birthday:</div>
                    <div className="text">{patient.dateOfBirth || "Not specified"}</div>
                  </li>
                  <li>
                    <div className="title">Address:</div>
                    <div className="text">
                      {patient.address}, {patient.city}, {patient.state} {patient.zipCode}, {patient.country}
                    </div>
                  </li>
                  <li>
                    <div className="title">Emergency:</div>
                    <div className="text">{patient.emergencyContact || "Not specified"}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPersonalInfo; 