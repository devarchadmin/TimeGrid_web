import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import {
  trainersData,
  trainingStatuses,
  trainingTitles,
} from "@/data/dropdown-data";
import { ITrainer } from "@/interface/dropdown.interface";
import { ITraining } from "@/interface/table.interface";
import { useForm } from "react-hook-form";
import SelectBox from "@/components/elements/SharedInputs/SelectBox";
import InputField from "@/components/elements/SharedInputs/InputField";
import SelectWithImage from "@/components/elements/SharedInputs/SelectWithImage";
import FormLabel from "@/components/elements/SharedInputs/FormLabel";
import DatePicker from "react-datepicker";
import { toast } from "sonner";
import { traineeStatePropsType } from "@/interface/common.interface";

const EditTraingModal = ({
  open,
  setOpen,
  editData,
}: traineeStatePropsType) => {
  const [selectedOwner, setSelectedOwner] = useState<ITrainer | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<ITrainer | null>(null);
  const [selectStartDate, setSelectStartDate] = useState<Date | null>(
    new Date()
  );
  const [selectEndDate, setSelectEndDate] = useState<Date | null>(new Date());
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ITraining>();

  const handleToggle = () => setOpen(!open);
  const onSubmit = async (data: ITraining) => {
    try {
      toast.success("Trainee Update successfully!");
      setTimeout(() => setOpen(false), 2000);
    } catch (error: any) {
      toast.error(
        error?.message ||
          "An error occurred while updating the Trainee. Please try again!"
      );
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h5 className="modal-title font-bold text-lg">Update Trainee</h5>
            <button
              onClick={handleToggle}
              type="button"
              className="bd-btn-close"
            >
              <i className="fa-solid fa-xmark-large text-gray-500 text-xl"></i>
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-x-6 maxXs:gap-x-0 gap-y-6">
              {/* Training Title */}
              <div className="col-span-12 md:col-span-6">
                <SelectBox
                  id="trainingTitle"
                  label="Training Title"
                  isRequired={false}
                  options={trainingTitles}
                  control={control} // Validation rule
                  error={errors.trainingTitle}
                  defaultValue={editData?.trainingTitle}
                />
              </div>

              {/* Trainer Name */}
              <div className="col-span-12 md:col-span-6">
                <div className="from__input-box select-wrapper">
                  <div className="form__input-title">
                    <label htmlFor="lastname">Trainer Name</label>
                  </div>
                  <div className="relative">
                    <div className="mz-default-select">
                      <SelectWithImage
                        data={trainersData}
                        selectedValue={selectedOwner}
                        valueKey="name"
                        displayKey="name"
                        imageKey="userImg"
                        placeholder="Select Owner"
                        onChange={setSelectedOwner}
                        title={editData?.trainer}
                        image={editData?.trainerImg}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Name */}

              <div className="col-span-12 md:col-span-6">
                <div className="from__input-box select-wrapper">
                  <div className="form__input-title">
                    <label htmlFor="lastname">Employee Name</label>
                  </div>
                  <div className="relative">
                    <div className="mz-default-select">
                      <SelectWithImage
                        data={trainersData}
                        selectedValue={selectedTrainer}
                        valueKey="name"
                        displayKey="name"
                        imageKey="userImg"
                        placeholder="Select Owner"
                        onChange={setSelectedTrainer}
                        title={editData?.trainer}
                        image={editData?.trainerImg}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Date */}
              {/* Start Date */}
              <div className="col-span-12 md:col-span-6">
                <FormLabel label="Start Date" id="selectStartDate" optional />
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
              {/* End Date */}
              <div className="col-span-12 md:col-span-6">
                <FormLabel label="End Date" id="selectEndDate" optional />
                <div className="datepicker-style">
                  <DatePicker
                    id="selectEndDate"
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
                    placeholderText="End date"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="col-span-12 md:col-span-6">
                <SelectBox
                  id="status"
                  label="Status"
                  isRequired={false}
                  options={trainingStatuses}
                  control={control} // Validation rule
                  error={errors.status}
                />
              </div>

              {/* Description */}
              <div className="col-span-12">
                <InputField
                  label="Description"
                  id="description"
                  isTextArea={true}
                  required={false}
                  register={register("description")}
                  error={errors.description}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit__btn text-center mt-6">
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

export default EditTraingModal;
