"use client";
import React, { useState } from "react";
import UpdateEmergencyContactModal from "./UpdateEmergencyContactModal";
import { IEmployee } from "@/interface";
import Link from "next/link";

interface propsType {
  data: IEmployee | any;
}

const EmergencyContact = ({ data }: propsType) => {
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
                      <div className="text">{data?.emergencyContact?.fullName || "Not provided"}</div>
                    </li>
                    <li>
                      <div className="title">Relationship:</div>
                      <div className="text">{data?.emergencyContact?.relationship || "Not provided"}</div>
                    </li>
                    <li>
                      <div className="title">Phone:</div>
                      <div className="text text-link-hover">
                        <Link href={`tel:${data?.emergencyContact?.phoneNumber}`}>{data?.emergencyContact?.phoneNumber || "Not provided"}</Link>
                        {data?.emergencyContact?.phoneNumber2 && (
                          <>
                            ,{" "}
                            <Link href={`tel:${data?.emergencyContact?.phoneNumber2}`}>
                              {data?.emergencyContact?.phoneNumber2}
                            </Link>
                          </>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="title">Email:</div>
                      <div className="text text-link-hover">
                        <Link href={`mailto:${data?.emergencyContact?.emailAddress}`}>
                          {data?.emergencyContact?.emailAddress || "Not provided"}
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="title">Address:</div>
                      <div className="text">{data?.emergencyContact?.address || "Not provided"}</div>
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
                      <div className="text">{data?.emergencyContact?.secondaryFullName || "Not provided"}</div>
                    </li>
                    <li>
                      <div className="title">Relationship:</div>
                      <div className="text">{data?.emergencyContact?.secondaryRelationship || "Not provided"}</div>
                    </li>
                    <li>
                      <div className="title">Phone:</div>
                      <div className="text text-link-hover">
                        <Link href={`tel:${data?.emergencyContact?.secondaryPhoneNumber}`}>
                          {data?.emergencyContact?.secondaryPhoneNumber || "Not provided"}
                        </Link>
                        {data?.emergencyContact?.secondaryPhoneNumber2 && (
                          <>
                            ,{" "}
                            <Link href={`tel:${data?.emergencyContact?.secondaryPhoneNumber2}`}>
                              {data?.emergencyContact?.secondaryPhoneNumber2}
                            </Link>
                          </>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="title">Email:</div>
                      <div className="text text-link-hover">
                        <Link href={`mailto:${data?.emergencyContact?.secondaryEmailAddress}`}>
                          {data?.emergencyContact?.secondaryEmailAddress || "Not provided"}
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="title">Address:</div>
                      <div className="text">{data?.emergencyContact?.secondaryAddress || "Not provided"}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <UpdateEmergencyContactModal open={modalOpen} setOpen={setModalOpen} />
      )}
    </>
  );
};

export default EmergencyContact;
