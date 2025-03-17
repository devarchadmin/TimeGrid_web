"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { statePropsType } from "@/interface/common.interface";
import { employeeDesignationData } from "@/data/dropdown-data";
import { useForm } from "react-hook-form";
import { IEmployee } from "@/interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import SelectBox from "@/components/elements/SharedInputs/SelectBox";
import { toast } from "sonner";
import { genderOptions } from "@/data/gender-data";

const AddNewEmployeeModal = ({ open, setOpen }: statePropsType) => {
  const [selectJoiningDate, setSelectJoiningDate] = useState<Date | null>(
    new Date()
  );
  const handleToggle = () => setOpen(!open);

  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<IEmployee>({
    defaultValues: {
      bankAccount: {
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        branchName: "",
        swiftCode: ""
      }
    }
  });

  const onSubmit = async (data: IEmployee) => {
    try {
      // Simulate API call or processing
      toast.success("Employee added successfully!");
      // Close modal after submission
      setTimeout(() => setOpen(false), 2000);
    } catch (error: any) {
      toast.error(
        error?.message || "An error occurred while adding the employee. Please try again!"
      );
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleToggle}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
          },
        }}
      >
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Add New Employee</h5>
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
            <div className="card__wrapper mb-[20px]">
              <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0 gap-y-6 items-center justify-center">
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
                        message: "Invalid email address",
                      },
                    })}
                    error={errors.email}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Phone"
                    id="phone"
                    type="text"
                    register={register("phone", {
                      required: "Phone is required",
                    })}
                    error={errors.phone}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Employee ID"
                    id="employeeID"
                    type="text"
                    register={register("employeeID", {
                      required: "Employee ID is required",
                    })}
                    error={errors.employeeID}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Position"
                    id="position"
                    type="text"
                    register={register("position", {
                      required: "Position is required",
                    })}
                    error={errors.position}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Division"
                    id="division"
                    type="text"
                    register={register("division", {
                      required: "Division is required",
                    })}
                    error={errors.division}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="National Identity No"
                    id="nationalIdNo"
                    type="text"
                    register={register("nationalIdNo", {
                      required: "National Identity No is required",
                    })}
                    error={errors.nationalIdNo}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <SelectBox
                    id="gender"
                    label="Gender"
                    isRequired={true}
                    options={genderOptions}
                    control={control}
                    error={errors.gender}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormLabel
                    label="Joining Date"
                    id="selectJoiningDate"
                    optional={false}
                  />
                  <div className="datepicker-style">
                    <DatePicker
                      id="selectJoiningDate"
                      selected={selectJoiningDate}
                      onChange={(date) => {
                        setSelectJoiningDate(date);
                        if (date) {
                          const formattedDate = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
                          setValue("joiningDate", formattedDate);
                        }
                      }}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Joining date"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Account Holder Name"
                    id="bankAccount.accountHolderName"
                    type="text"
                    register={register("bankAccount.accountHolderName", {
                      required: "Account Holder Name is required",
                    })}
                    error={errors.bankAccount?.accountHolderName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Account Number"
                    id="bankAccount.accountNumber"
                    type="text"
                    register={register("bankAccount.accountNumber", {
                      required: "Account Number is required",
                    })}
                    error={errors.bankAccount?.accountNumber}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Bank Name"
                    id="bankAccount.bankName"
                    type="text"
                    register={register("bankAccount.bankName", {
                      required: "Bank Name is required",
                    })}
                    error={errors.bankAccount?.bankName}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Branch Name"
                    id="bankAccount.branchName"
                    type="text"
                    register={register("bankAccount.branchName", {
                      required: "Branch Name is required",
                    })}
                    error={errors.bankAccount?.branchName}
                  />
                </div>
              </div>
            </div>
            <div className="submit__btn text-center">
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

export default AddNewEmployeeModal;
