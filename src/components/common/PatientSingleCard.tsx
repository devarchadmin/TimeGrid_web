import { IPatient } from "@/interface/patient.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  patient: IPatient;
  onEdit?: (patient: IPatient) => void;
}

const PatientSingleCard = ({ patient, onEdit }: propsType) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onEdit) {
      onEdit(patient);
    }
  };

  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-3">
        <div className="card__wrapper">
          <div className="employee__wrapper text-center">
            <div className="employee__thumb mb-[15px] flex justify-center">
              <Link href={`/patient/${patient.id}`}>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
                  <Image
                    src={patient.image}
                    alt={`${patient.name}'s image`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="employee__content">
              <div className="employee__meta mb-[15px]">
                <h4 className="mb-2">
                  <Link href={`/patient/${patient.id}`}>
                    {patient.name}
                  </Link>
                </h4>
              </div>
              <div className="employee__btn">
                <div className="flex items-center justify-center gap-[15px]">
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <Link
                    className="btn btn-outline-primary"
                    href={`/patient/${patient.id}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientSingleCard; 