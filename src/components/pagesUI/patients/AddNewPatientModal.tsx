"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { statePropsType } from "@/interface/common.interface";
import { useForm } from "react-hook-form";
import { IPatient } from "@/interface/patient.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import SelectBox from "@/components/elements/SharedInputs/SelectBox";
import { toast } from "sonner";

const AddNewPatientModal = ({ open, setOpen }: statePropsType) => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [registrationDate, setRegistrationDate] = useState<Date | null>(new Date());
  const [medicalConditions, setMedicalConditions] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [medications, setMedications] = useState<string>("");
  const [birthDateError, setBirthDateError] = useState<string | null>(null);
  const [registrationDateError, setRegistrationDateError] = useState<string | null>(null);
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<IPatient>();
  
  const handleToggle = () => setOpen(!open);

  // Gender options
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];

  // Blood group options
  const bloodGroupOptions = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" }
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
      
      // Validate registration date
      if (!registrationDate) {
        setRegistrationDateError("Registration Date is required");
        return;
      } else {
        setRegistrationDateError(null);
      }
      
      // Process comma-separated strings into arrays
      const medicalConditionsArray = medicalConditions.split(',').map(item => item.trim()).filter(Boolean);
      const allergiesArray = allergies.split(',').map(item => item.trim()).filter(Boolean);
      const medicationsArray = medications.split(',').map(item => item.trim()).filter(Boolean);
      
      // Add birth date and registration date to the data
      const formattedData = {
        ...data,
        dateOfBirth: birthDate ? birthDate.toISOString().split('T')[0] : undefined,
        registrationDate: registrationDate ? registrationDate.toISOString().split('T')[0] : undefined,
        // Add medical information
        medicalConditions: medicalConditionsArray,
        allergies: allergiesArray,
        medications: medicationsArray,
        // Add emergency contact information
        emergencyContact: data.primaryContactPhone,
        emergencyContactName: data.primaryContactName,
        secondaryEmergencyContact: data.secondaryContactPhone,
        secondaryEmergencyContactName: data.secondaryContactName,
        // Add default social links
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://x.com",
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          website: "#"
        }
      };
      
      toast.success("Patient added successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Failed to add patient. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Add New Patient</h5>
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
              <h6 className="card__sub-title mb-4">Personal Information</h6>
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
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <SelectBox
                    id="bloodGroup"
                    label="Blood Group"
                    options={bloodGroupOptions}
                    control={control}
                    isRequired={false}
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
              <h6 className="card__sub-title mb-4">Emergency Contact</h6>
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <h6 className="card__sub-title mb-2.5">Primary Contact</h6>
                  <InputField
                    label="Name"
                    id="primaryContactName"
                    type="text"
                    register={register("primaryContactName", {
                      required: "Primary contact name is required",
                    })}
                    error={errors.primaryContactName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h6 className="card__sub-title mb-2.5">Secondary Contact</h6>
                  <InputField
                    label="Name"
                    id="secondaryContactName"
                    type="text"
                    register={register("secondaryContactName")}
                    error={errors.secondaryContactName}
                    required={false}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone"
                    id="primaryContactPhone"
                    type="text"
                    register={register("primaryContactPhone", {
                      required: "Primary contact phone is required",
                    })}
                    error={errors.primaryContactPhone}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone"
                    id="secondaryContactPhone"
                    type="text"
                    register={register("secondaryContactPhone")}
                    error={errors.secondaryContactPhone}
                    required={false}
                  />
                </div>
              </div>
            </div>
            
            <div className="card__wrapper mt-[20px]">
              <h6 className="card__sub-title mb-4">Medical Information</h6>
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <FormLabel label="Registration Date" id="registrationDate" optional={false} />
                  <div className="datepicker-style">
                    <DatePicker
                      id="registrationDate"
                      selected={registrationDate}
                      onChange={(date) => {
                        setRegistrationDate(date);
                        setRegistrationDateError(null);
                      }}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Registration Date"
                      className={`w-full ${registrationDateError ? "is-invalid" : ""}`}
                    />
                  </div>
                  {registrationDateError && (
                    <div className="error-message text-danger mt-1">{registrationDateError}</div>
                  )}
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
            
            <div className="card__wrapper mt-[20px]">
              <div className="from__input-box">
                <div className="form__input-title">
                  <label htmlFor="patientPhoto">
                    Patient Photo (100px*100px)
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
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewPatientModal; 