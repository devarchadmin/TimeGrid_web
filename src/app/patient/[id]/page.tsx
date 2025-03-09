import Wrapper from "@/components/layouts/DefaultWrapper";
import PatientProfileMainArea from "@/components/pagesUI/patients/patient-profile/PatientProfileMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

interface PatientPageProps {
  params: {
    id: string;
  };
}

const PatientPage = ({ params }: PatientPageProps) => {
  const patientId = parseInt(params.id);
  
  return (
    <>
      <MetaData pageTitle="Patient Profile">
        <Wrapper>
          <PatientProfileMainArea id={patientId} />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default PatientPage; 