"use client";
import React, { useState } from "react";
import UpdateEducationQualificationModal from "./UpdateEducationQualificationModal";
import Link from "next/link";
import { IEmployee } from "@/interface";

interface propsType {
  data?: IEmployee;
}

const EducationQualification = ({ data }: propsType) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="col-span-12 md:col-span-12 xl:col-span-6 xxl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Education Qualification</h5>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="edit-icon"
                data-bs-toggle="modal"
                data-bs-target="#education__info"
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="education__box">
              <ul className="education__list">
                {data?.educationQualification ? (
                  <>
                    <li>
                      <div className="education__user">
                        <div className="before__circle"></div>
                      </div>
                      <div className="education__content">
                        <div className="timeline-content">
                          <Link href="#" className="name">
                            {data.educationQualification.higherDegreeInstitutionName || "Not provided"}
                          </Link>
                          <span className="degree">{data.educationQualification.higherDegree || "Not provided"}</span>
                          <span className="year">
                            {data.educationQualification.higherDegreeStartingDate || "N/A"} - {data.educationQualification.higherDegreeCompleteDate || "N/A"}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="education__user">
                        <div className="before__circle"></div>
                      </div>
                      <div className="education__content">
                        <div className="timeline-content">
                          <Link href="#" className="name">
                            {data.educationQualification.bachelorDegreeInstitutionName || "Not provided"}
                          </Link>
                          <span className="degree">{data.educationQualification.bachelorDegree || "Not provided"}</span>
                          <span className="year">
                            {data.educationQualification.bachelorDegreeStartingDate || "N/A"} - {data.educationQualification.bachelorDegreeCompleteDate || "N/A"}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="education__user">
                        <div className="before__circle"></div>
                      </div>
                      <div className="education__content">
                        <div className="timeline-content">
                          <Link href="#" className="name">
                            {data.educationQualification.secondaryDegreeInstitutionName || "Not provided"}
                          </Link>
                          <span className="degree">{data.educationQualification.secondaryDegree || "Not provided"}</span>
                          <span className="year">
                            {data.educationQualification.secondaryDegreeStartingDate || "N/A"} - {data.educationQualification.secondaryDegreeCompleteDate || "N/A"}
                          </span>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <li>
                    <div className="education__content">
                      <div className="timeline-content">
                        <span className="degree">No education information available</span>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <UpdateEducationQualificationModal
          open={modalOpen}
          setOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default EducationQualification;
