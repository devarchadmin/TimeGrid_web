import Wrapper from "@/components/layouts/DefaultWrapper";
import PatientsMainArea from "@/components/pagesUI/patients/PatientsMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const PatientsPage = () => {
  return (
    <>
      <MetaData pageTitle="Patients">
        <Wrapper>
          <PatientsMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default PatientsPage; 