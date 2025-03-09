"use client";
import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPatient } from "@/interface/patient.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import { toast } from "sonner";

interface EditEmergencyContactModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  patient: IPatient;
}

const EditEmergencyContactModal = ({ open, setOpen, patient }: EditEmergencyContactModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      // Primary contact
      emergencyContact: patient.emergencyContact || "",
      emergencyContactName: patient.emergencyContactName || "",
      emergencyRelationship: patient.emergencyRelationship || "",
      emergencyAddress: patient.emergencyAddress || "",
      // Secondary contact
      secondaryEmergencyContact: patient.secondaryEmergencyContact || "",
      secondaryEmergencyContactName: patient.secondaryEmergencyContactName || "",
      secondaryEmergencyRelationship: patient.secondaryEmergencyRelationship || "",
      secondaryEmergencyAddress: patient.secondaryEmergencyAddress || ""
    }
  });
  
  const handleToggle = () => setOpen(!open);

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      // In a real application, this would be an API call to update the patient
      toast.success("Emergency contacts updated successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Failed to update emergency contacts. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Edit Emergency Contacts</h5>
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
              <h6 className="card__sub-title mb-4">Primary Emergency Contact</h6>
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Full Name"
                    id="emergencyContactName"
                    type="text"
                    register={register("emergencyContactName", {
                      required: "Primary contact name is required",
                    })}
                    error={errors.emergencyContactName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Relationship"
                    id="emergencyRelationship"
                    type="text"
                    register={register("emergencyRelationship", {
                      required: "Relationship is required",
                    })}
                    error={errors.emergencyRelationship}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone Number"
                    id="emergencyContact"
                    type="text"
                    register={register("emergencyContact", {
                      required: "Primary contact phone is required",
                    })}
                    error={errors.emergencyContact}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Address"
                    id="emergencyAddress"
                    type="text"
                    register={register("emergencyAddress", {
                      required: "Address is required",
                    })}
                    error={errors.emergencyAddress}
                  />
                </div>
              </div>
            </div>
            
            <div className="card__wrapper mt-[20px]">
              <h6 className="card__sub-title mb-4">Secondary Emergency Contact</h6>
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Full Name"
                    id="secondaryEmergencyContactName"
                    type="text"
                    register={register("secondaryEmergencyContactName")}
                    error={errors.secondaryEmergencyContactName}
                    required={false}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Relationship"
                    id="secondaryEmergencyRelationship"
                    type="text"
                    register={register("secondaryEmergencyRelationship")}
                    error={errors.secondaryEmergencyRelationship}
                    required={false}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone Number"
                    id="secondaryEmergencyContact"
                    type="text"
                    register={register("secondaryEmergencyContact")}
                    error={errors.secondaryEmergencyContact}
                    required={false}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Address"
                    id="secondaryEmergencyAddress"
                    type="text"
                    register={register("secondaryEmergencyAddress")}
                    error={errors.secondaryEmergencyAddress}
                    required={false}
                  />
                </div>
              </div>
            </div>
            
            <div className="submit__btn text-center mt-[20px]">
              <button className="btn btn-primary" type="submit">
                Update Emergency Contacts
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditEmergencyContactModal; 