"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPatient } from "@/interface/patient.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import SelectBox from "@/components/elements/SharedInputs/SelectBox";
import { toast } from "sonner";

interface EditPatientModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  patient: IPatient;
}

const EditPatientModal = ({ open, setOpen, patient }: EditPatientModalProps) => {
  const [birthDate, setBirthDate] = useState<Date | null>(
    patient.dateOfBirth ? new Date(patient.dateOfBirth) : null
  );
  
  const [medicalConditions, setMedicalConditions] = useState<string>(
    patient.medicalConditions ? patient.medicalConditions.join(', ') : ""
  );
  
  const [allergies, setAllergies] = useState<string>(
    patient.allergies ? patient.allergies.join(', ') : ""
  );
  
  const [medications, setMedications] = useState<string>(
    patient.medications ? patient.medications.join(', ') : ""
  );
  
  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm<IPatient>({
    defaultValues: {
      firstName: patient.firstName,
      lastName: patient.lastName,
      email: patient.email,
      phone: patient.phone,
      patientID: patient.patientID,
      gender: patient.gender,
      bloodGroup: patient.bloodGroup,
      address: patient.address,
      city: patient.city,
      state: patient.state,
      zipCode: patient.zipCode,
      country: patient.country,
      emergencyContact: patient.emergencyContact,
      insuranceProvider: patient.insuranceProvider,
      insuranceNumber: patient.insuranceNumber
    }
  });
  
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
      // Process comma-separated strings into arrays
      const medicalConditionsArray = medicalConditions.split(',').map(item => item.trim()).filter(Boolean);
      const allergiesArray = allergies.split(',').map(item => item.trim()).filter(Boolean);
      const medicationsArray = medications.split(',').map(item => item.trim()).filter(Boolean);
      
      // Add birth date to the data
      const formattedData = {
        ...data,
        dateOfBirth: birthDate ? birthDate.toISOString().split('T')[0] : undefined,
        // Add medical information
        medicalConditions: medicalConditionsArray,
        allergies: allergiesArray,
        medications: medicationsArray,
        // Preserve existing data
        id: patient.id,
        image: patient.image,
        name: `${data.firstName} ${data.lastName}`,
        registrationDate: patient.registrationDate,
        lastVisit: patient.lastVisit,
        socialLinks: patient.socialLinks
      };
      
      // In a real application, this would be an API call to update the patient
      toast.success("Patient updated successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Failed to update patient. Please try again.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Edit Patient</h5>
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
                  <FormLabel label="Date of Birth" id="dateOfBirth" />
                  <div className="datepicker-style">
                    <DatePicker
                      id="dateOfBirth"
                      selected={birthDate}
                      onChange={(date) => setBirthDate(date)}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Date of Birth"
                      className="w-full"
                    />
                  </div>
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
                <div className="col-span-12 md:col-span-6">
                  <SelectBox
                    id="bloodGroup"
                    label="Blood Group"
                    options={bloodGroupOptions}
                    control={control}
                    isRequired={false}
                    defaultValue={patient.bloodGroup}
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
              <h6 className="card__sub-title mb-4">Medical Information</h6>
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0 justify-center align-center">
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Emergency Contact"
                    id="emergencyContact"
                    type="text"
                    register={register("emergencyContact")}
                    error={errors.emergencyContact}
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
                Update Patient
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditPatientModal; 