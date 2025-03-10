"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPatient } from "@/interface/patient.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import SelectBox from "@/components/elements/SharedInputs/SelectBox";
import { toast } from "sonner";

interface EditPersonalInfoModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  patient: IPatient;
}

const EditPersonalInfoModal = ({ open, setOpen, patient }: EditPersonalInfoModalProps) => {
  const [birthDate, setBirthDate] = useState<Date | null>(
    patient.dateOfBirth ? new Date(patient.dateOfBirth) : null
  );
  
  const [birthDateError, setBirthDateError] = useState<string | null>(null);
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<IPatient>({
    defaultValues: {
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      phone: patient.phone,
      patientID: patient.patientID,
      gender: patient.gender,
      address: patient.address,
      city: patient.city,
      state: patient.state,
      zipCode: patient.zipCode,
      country: patient.country
    }
  });
  
  const handleToggle = () => setOpen(!open);

  // Gender options
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];

  // Handle form submission
  const onSubmit = async (data: IPatient) => {
    try {
      // Validate birth date
      if (!birthDate) {
        setBirthDateError("Date of Birth is required");
        return;
      } else {
        setBirthDateError(null);
      }
      
      // Add birth date to the data
      const formattedData = {
        ...data,
        dateOfBirth: birthDate ? birthDate.toISOString().split('T')[0] : undefined,
        // Preserve existing data
        id: patient.id,
        image: patient.image,
        name: `${data.firstName} ${data.lastName}`,
        registrationDate: patient.registrationDate,
        lastVisit: patient.lastVisit,
        // Preserve medical information
        bloodGroup: patient.bloodGroup,
        medicalConditions: patient.medicalConditions,
        allergies: patient.allergies,
        medications: patient.medications,
        insuranceProvider: patient.insuranceProvider,
        insuranceNumber: patient.insuranceNumber,
        // Preserve emergency contacts
        emergencyContact: patient.emergencyContact,
        emergencyContactName: patient.emergencyContactName,
        emergencyRelationship: patient.emergencyRelationship,
        emergencyAddress: patient.emergencyAddress,
        secondaryEmergencyContact: patient.secondaryEmergencyContact,
        secondaryEmergencyContactName: patient.secondaryEmergencyContactName,
        secondaryEmergencyRelationship: patient.secondaryEmergencyRelationship,
        secondaryEmergencyAddress: patient.secondaryEmergencyAddress,
        primaryContactName: patient.primaryContactName,
        primaryContactPhone: patient.primaryContactPhone,
        secondaryContactName: patient.secondaryContactName,
        secondaryContactPhone: patient.secondaryContactPhone,
        socialLinks: patient.socialLinks
      };
      
      // In a real application, this would be an API call to update the patient
      toast.success("Personal information updated successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Failed to update personal information. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Edit Personal Information</h5>
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
                    label="First Name"
                    id="firstName"
                    type="text"
                    register={register("firstName", {
                      required: "First Name is required",
                    })}
                    error={errors.firstName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Last Name"
                    id="lastName"
                    type="text"
                    register={register("lastName", {
                      required: "Last Name is required",
                    })}
                    error={errors.lastName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    register={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    error={errors.email}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone Number"
                    id="phone"
                    type="text"
                    register={register("phone", {
                      required: "Phone Number is required",
                    })}
                    error={errors.phone}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Patient ID"
                    id="patientID"
                    type="text"
                    register={register("patientID", {
                      required: "Patient ID is required",
                    })}
                    error={errors.patientID}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormLabel label="Date of Birth" id="dateOfBirth" optional={false} />
                  <div className="datepicker-style">
                    <DatePicker
                      id="dateOfBirth"
                      selected={birthDate}
                      onChange={(date) => {
                        setBirthDate(date);
                        setBirthDateError(null);
                      }}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Date of Birth"
                      className={`w-full ${birthDateError ? "is-invalid" : ""}`}
                    />
                  </div>
                  {birthDateError && (
                    <div className="error-message text-danger mt-1">{birthDateError}</div>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <SelectBox
                    id="gender"
                    label="Gender"
                    options={genderOptions}
                    control={control}
                    isRequired={true}
                    defaultValue={patient.gender}
                  />
                </div>
                <div className="col-span-12">
                  <InputField
                    label="Address"
                    id="address"
                    isTextArea={true}
                    required={true}
                    register={register("address", {
                      required: "Address is required",
                    })}
                    error={errors.address}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="City"
                    id="city"
                    type="text"
                    register={register("city", {
                      required: "City is required",
                    })}
                    error={errors.city}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="State"
                    id="state"
                    type="text"
                    register={register("state", {
                      required: "State is required",
                    })}
                    error={errors.state}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Zip Code"
                    id="zipCode"
                    type="text"
                    register={register("zipCode", {
                      required: "Zip Code is required",
                    })}
                    error={errors.zipCode}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Country"
                    id="country"
                    type="text"
                    register={register("country", {
                      required: "Country is required",
                    })}
                    error={errors.country}
                  />
                </div>
              </div>
            </div>
            
            <div className="card__wrapper mt-[20px]">
              <div className="from__input-box">
                <div className="form__input-title">
                  <label htmlFor="patientPhoto">
                    Update Patient Photo (100px*100px)
                  </label>
                </div>
                <div className="form__input">
                  <input
                    className="form-control"
                    id="patientPhoto"
                    type="file"
                  />
                </div>
              </div>
            </div>
            
            <div className="submit__btn text-center mt-[20px]">
              <button className="btn btn-primary" type="submit">
                Update Personal Information
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditPersonalInfoModal; 