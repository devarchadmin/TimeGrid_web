"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UpdateEmployeeProfileModal from "./UpdateEmployeeProfileModal";
import { IEmployee } from "@/interface";

interface propsType {
  data: IEmployee | any;
}

const PersonalInformation = ({ data }: propsType) => {
  const [modalOpen, setModalOpen] = useState(false);
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
                onClick={() => setModalOpen(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
            <div className="profile-view flex flex-wrap justify-between items-start">
              <div className="flex flex-wrap items-start gap-[10px] sm:gap-[20px]">
                <div className="profile-img-wrap">
                  <div className="profile-img">
                    <Link href="#">
                      <Image
                        src={data?.image}
                        width={100}
                        height={100}
                        priority
                        style={{ width: "100%", height: "auto" }}
                        alt={`${data?.name} image`}
                      />
                    </Link>
                  </div>
                </div>
                <div className="profile-info">
                  <h3 className="user-name mb-[15px]">{data?.name}</h3>
                  <h6 className="text-muted mb-[5px]">{data?.position}</h6>
                  <span className="block text-muted">
                    Employee ID : {data?.employeeID}
                  </span>
                  <span className="block text-muted">
                    Date of Join : {data?.joiningDate}
                  </span>
                  <span className="block text-muted">
                    Divisions : {data?.division}
                  </span>
                  <span className="block text-muted">
                    National Identity No : {data?.nationalIdNo}
                  </span>
                  <div className="employee-msg mt-[20px]">
                    <button className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="personal-info-wrapper pe-5">
                <ul className="personal-info">
                  <li>
                    <div className="title">Phone:</div>
                    <div className="text text-link-hover">
                      <Link href={`tel:${data?.phone}`}>{data?.phone}</Link>
                    </div>
                  </li>
                  <li>
                    <div className="title">Email:</div>
                    <div className="text text-link-hover">
                      <Link href={`mailto:${data?.email}`}>
                        {data?.email}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="title">Birthday:</div>
                    <div className="text">{data?.birthday}</div>
                  </li>
                  <li>
                    <div className="title">Address:</div>
                    <div className="text">
                      {data?.address}
                    </div>
                  </li>
                  <li>
                    <div className="title">Gender:</div>
                    <div className="text">{data?.gender}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <UpdateEmployeeProfileModal
          open={modalOpen}
          setOpen={setModalOpen}
          data={data}
        />
      )}
    </>
  );
};

export default PersonalInformation;
