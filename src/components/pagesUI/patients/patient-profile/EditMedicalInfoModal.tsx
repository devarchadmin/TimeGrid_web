"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPatient } from "@/interface/patient.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import { toast } from "sonner";

interface EditMedicalInfoModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  patient: IPatient;
}

const EditMedicalInfoModal = ({ open, setOpen, patient }: EditMedicalInfoModalProps) => {
  const [medicalConditions, setMedicalConditions] = useState<string>(
    patient.medicalConditions ? patient.medicalConditions.join(', ') : ""
  );
  
  const [allergies, setAllergies] = useState<string>(
    patient.allergies ? patient.allergies.join(', ') : ""
  );
  
  const [medications, setMedications] = useState<string>(
    patient.medications ? patient.medications.join(', ') : ""
  );
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      bloodGroup: patient.bloodGroup || "",
      insuranceProvider: patient.insuranceProvider || "",
      insuranceNumber: patient.insuranceNumber || ""
    }
  });
  
  const handleToggle = () => setOpen(!open);

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      // Process comma-separated strings into arrays
      const medicalConditionsArray = medicalConditions.split(',').map(item => item.trim()).filter(Boolean);
      const allergiesArray = allergies.split(',').map(item => item.trim()).filter(Boolean);
      const medicationsArray = medications.split(',').map(item => item.trim()).filter(Boolean);
      
      // Combine the form data with the arrays
      const formattedData = {
        ...data,
        medicalConditions: medicalConditionsArray,
        allergies: allergiesArray,
        medications: medicationsArray
      };
      
      // In a real application, this would be an API call to update the patient
      toast.success("Medical information updated successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Failed to update medical information. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Edit Medical Information</h5>
            <button
              onClick={handleToggle}
              type="button"
              className="bd-btn-close"
            >
              <i className="fa-solid fa-xmark-large"></i>
            </button>
          </div>
        </DialogTitle>
        <DialogContent className="common-scrollbar max-h-screen overflow-y-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card__wrapper mt-[5px]">
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Blood Group"
                    id="bloodGroup"
                    type="text"
                    register={register("bloodGroup")}
                    error={errors.bloodGroup}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Insurance Provider"
                    id="insuranceProvider"
                    type="text"
                    register={register("insuranceProvider")}
                    error={errors.insuranceProvider}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Insurance Number"
                    id="insuranceNumber"
                    type="text"
                    register={register("insuranceNumber")}
                    error={errors.insuranceNumber}
                  />
                </div>
                <div className="col-span-12">
                  <div className="from__input-box">
                    <div className="form__input-title">
                      <label htmlFor="medicalConditions">
                        Medical Conditions (comma separated)
                      </label>
                    </div>
                    <div className="form__input">
                      <textarea
                        className="form-control"
                        id="medicalConditions"
                        rows={3}
                        value={medicalConditions}
                        onChange={(e) => setMedicalConditions(e.target.value)}
                        placeholder="E.g., Asthma, Diabetes, Hypertension"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="from__input-box">
                    <div className="form__input-title">
                      <label htmlFor="allergies">
                        Allergies (comma separated)
                      </label>
                    </div>
                    <div className="form__input">
                      <textarea
                        className="form-control"
                        id="allergies"
                        rows={3}
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="E.g., Penicillin, Peanuts, Latex"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="from__input-box">
                    <div className="form__input-title">
                      <label htmlFor="medications">
                        Current Medications (comma separated)
                      </label>
                    </div>
                    <div className="form__input">
                      <textarea
                        className="form-control"
                        id="medications"
                        rows={3}
                        value={medications}
                        onChange={(e) => setMedications(e.target.value)}
                        placeholder="E.g., Lisinopril, Metformin, Albuterol"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="submit__btn text-center mt-[20px]">
              <button className="btn btn-primary" type="submit">
                Update Medical Information
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditMedicalInfoModal; 