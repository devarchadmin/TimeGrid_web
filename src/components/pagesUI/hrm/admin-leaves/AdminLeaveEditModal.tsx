"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { IAdminLeave } from "@/interface/table.interface";
import { useForm } from "react-hook-form";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import { adminLeaveStatePropsType } from "@/interface/common.interface";
import { toast } from "sonner";

const AdminLeaveEditModal = ({ open, setOpen, editData }: adminLeaveStatePropsType) => {
  const [selectStartDate, setSelectStartDate] = useState<Date | null>(
    new Date()
  );
  const [selectEndDate, setSelectEndDate] = useState<Date | null>(new Date());
  const { register, handleSubmit, formState: { errors } } = useForm<IAdminLeave>();
  const handleToggle = () => setOpen(!open);

  //handle submit
  const onSubmit = async (data: IAdminLeave) => {
    try {
      // Simulate API call or processing
      toast.success("Admin Leave updated successfully!");
      // Close modal after submission
      setTimeout(() => setOpen(false), 2000);
    } catch (error: any) {
      // Show error toast message
      toast.error(
        error?.message || "An error occurred while updating the leave. Please try again!");
    }
   };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="sm">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Admin Leave Edit</h5>
            <button
              onClick={handleToggle}
              type="button"
              className="bd-btn-close"
            >
              <i className="fa-solid fa-xmark-large"></i>
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="card__wrapper mb-20">
                  <div className="grid grid-cols-12 gap-x-5 maxXs:gap-x-0 gap-y-5">
                    <div className="col-span-12 md:col-span-6">
                      <InputField
                        label="Leave Type"
                        id="leaveType"
                        type="text"
                        defaultValue={editData?.leaveType}
                        required={false}
                        register={register("leaveType")}
                        error={errors.leaveType}
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <InputField
                        label="Leave Duration"
                        id="leaveDuration"
                        type="text"
                        required={false}
                        defaultValue={editData?.leaveDuration}
                        register={register("leaveDuration")}
                        error={errors.leaveDuration}
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6">
                      <FormLabel label="Start Date" id="selectStartDate" optional/>
                      <div className="datepicker-style">
                        <DatePicker
                          id="selectStartDate"
                          selected={selectStartDate}
                          onChange={(date) => setSelectStartDate(date)}
                          showYearDropdown
                          showMonthDropdown
                          useShortMonthInDropdown
                          showPopperArrow={false}
                          peekNextMonth
                          dropdownMode="select"
                          isClearable
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Start date"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <FormLabel label="Deadline" id="deadline" optional/>
                      <div className="datepicker-style">
                        <DatePicker
                          id="deadline"
                          selected={selectEndDate}
                          onChange={(date) => setSelectEndDate(date)}
                          showYearDropdown
                          showMonthDropdown
                          useShortMonthInDropdown
                          showPopperArrow={false}
                          peekNextMonth
                          dropdownMode="select"
                          isClearable
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Deadline"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="col-span-12">
                      <InputField
                        label="Reason"
                        id="reason"
                        isTextArea={true}
                        defaultValue={editData?.reason}
                        required={false}
                        register={register("reason")}
                        error={errors.reason}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit__btn text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminLeaveEditModal;
