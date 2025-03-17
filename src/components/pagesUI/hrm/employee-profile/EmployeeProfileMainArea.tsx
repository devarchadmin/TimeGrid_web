import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import { idType } from "@/interface/common.interface";
import React from "react";
import PersonalInformation from "./PersonalInformation";
import EmergencyContact from "./EmergencyContact";
import EducationQualification from "./EducationQualification";
import ExperienceDetails from "./ExperienceDetails";
import BankAccount from "./BankAccount";

import SocialProfile from "./SocialProfile";
import employeeData from "@/data/hrm/employee-data";

const EmployeeProfileMainArea = ({ id }: idType) => {
  const data = employeeData.find((item) => item.id == id);

  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Employee Profile" subTitle="Employees" subtitleLink="/employees" />
        <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0">
          <PersonalInformation data={data} />
          <EmergencyContact data={data} />
          <EducationQualification data={data} />
          <ExperienceDetails data={data} />
          <BankAccount data={data} />
          {/* <SocialProfile data={data} /> */}
        </div>
      </div>
    </>
  );
};

export default EmployeeProfileMainArea;
