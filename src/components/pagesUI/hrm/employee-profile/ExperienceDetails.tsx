"use client";
import React, { useState } from "react";
import UpdateExperienceDetailsModal from "./UpdateExperienceDetailsModal";
import Link from "next/link";
import { IEmployee } from "@/interface";

interface propsType {
  data?: IEmployee;
}

const ExperienceDetails = ({ data }: propsType) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Experience Details</h5>
              <button className="edit-icon" onClick={() => setModalOpen(true)}>
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="education__box">
              <ul className="education__list">
                {data?.workExperience ? (
                  <>
                    {data.workExperience.c1companyName && (
                      <li>
                        <div className="education__user">
                          <div className="before__circle"></div>
                        </div>
                        <div className="education__content">
                          <div className="timeline-content">
                            <Link href="#" className="name">
                              {data.workExperience.c1companyName}
                            </Link>
                            <span className="degree">{data.workExperience.c1position}</span>
                            <span className="year">
                              {data.workExperience.c1periodFrom} - {data.workExperience.c1periodTo || "Present"}
                            </span>
                          </div>
                        </div>
                      </li>
                    )}
                    {data.workExperience.c2companyName && (
                      <li>
                        <div className="education__user">
                          <div className="before__circle"></div>
                        </div>
                        <div className="education__content">
                          <div className="timeline-content">
                            <Link href="#" className="name">
                              {data.workExperience.c2companyName}
                            </Link>
                            <span className="degree">{data.workExperience.c2position}</span>
                            <span className="year">
                              {data.workExperience.c2periodFrom} - {data.workExperience.c2periodTo}
                            </span>
                          </div>
                        </div>
                      </li>
                    )}
                    {data.workExperience.c3companyName && (
                      <li>
                        <div className="education__user">
                          <div className="before__circle"></div>
                        </div>
                        <div className="education__content">
                          <div className="timeline-content">
                            <Link href="#" className="name">
                              {data.workExperience.c3companyName}
                            </Link>
                            <span className="degree">{data.workExperience.c3position}</span>
                            <span className="year">
                              {data.workExperience.c3periodFrom} - {data.workExperience.c3periodTo}
                            </span>
                          </div>
                        </div>
                      </li>
                    )}
                  </>
                ) : (
                  <li>
                    <div className="education__content">
                      <div className="timeline-content">
                        <span className="degree">No experience information available</span>
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
        <UpdateExperienceDetailsModal open={modalOpen} setOpen={setModalOpen} />
      )}
    </>
  );
};

export default ExperienceDetails;
