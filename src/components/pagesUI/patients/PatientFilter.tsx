"use client";
import React, { useState } from "react";
import AddNewPatientModal from "./AddNewPatientModal";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const PatientFilter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOptions(event.target.value);
  };
  
  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 maxXs:gap-x-0 mb-[20px]">
        <div className="col-span-12 md:col-span-6 xxl:col-span-3">
          <div className="card__wrapper">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                id="patientName"
                placeholder="Patient Name"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-span-3">
          <div className="card__wrapper">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                id="patientId"
                placeholder="Patient ID"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-span-6">
          <div className="card__wrapper">
            <div className="flex items-center justify-between flex-wrap gap-[10px]">
              <button type="button" className="btn btn-secondary min-w-[48%]">
                Filters
              </button>
              <button
                type="button"
                className="btn btn-primary max-w-[48%] w-full"
                data-bs-toggle="modal"
                data-bs-target="#addNewPatient"
                onClick={() => setModalOpen(true)}
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <AddNewPatientModal open={modalOpen} setOpen={setModalOpen} />
      )}
    </>
  );
};

export default PatientFilter; 