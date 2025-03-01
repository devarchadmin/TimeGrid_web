"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import { IMeeting } from "@/interface/table.interface";
import InputField from "@/components/elements/SharedInputs/InputField";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import { toast } from "sonner";
interface statePropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddNewMettingModal = ({ open, setOpen }: statePropsType) => {
  const [selectStartDate, setSelectStartDate] = useState<Date | null>(
    new Date()
  );
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMeeting>();

  const onSubmit = async (data: IMeeting) => {
    try {
      toast.success("Metting added successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error: any) {
      toast.error(
        error?.message ||
          "An error occurred while updating the Metting. Please try again!"
      );
    }
  };
  const handleToggle = () => setOpen(!open);
  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="sm">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Add New Metting</h5>
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
            <div className="card__wrapper">
              <div className="grid grid-cols-12 gap-y-5 gap-x-5 maxXs:gap-x-0">
                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Meeting Title"
                    id="meetingTitle"
                    type="text"
                    register={register("meetingTitle", {
                      required: "Meeting Title is required",
                    })}
                    error={errors.meetingTitle}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormLabel label="Meeting Date" id="selectStartDate" />
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
                      placeholderText="Meeting Date"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormLabel label="Meeting Time" id="selectStartDate" />
                  <div className="datepicker-style">
                    <DatePicker
                      id="startTime"
                      selected={startTime}
                      onChange={(date) => setStartTime(date)}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={1}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select time"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <InputField
                    label="Meeting Location"
                    id="meetingLocation"
                    type="text"
                    register={register("meetingLocation", {
                      required: "Meeting Location is required",
                    })}
                    error={errors.meetingLocation}
                  />
                </div>
              </div>
            </div>
            <div className="submit__btn flex items-center justify-end gap-[10px]">
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleToggle}
              >
                Cancel
              </button>
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

export default AddNewMettingModal;
