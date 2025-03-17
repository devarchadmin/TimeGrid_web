"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { IPatient } from "@/interface/patient.interface";
import { toast } from "sonner";

interface AddMedicineTimingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  patient: IPatient;
}

const AddMedicineTimingModal = ({ open, setOpen, patient }: AddMedicineTimingModalProps) => {
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [instructions, setInstructions] = useState("");
  const [timeOfDay, setTimeOfDay] = useState<string[]>([]);

  const handleToggle = () => setOpen(!open);

  const handleTimeOfDayChange = (time: string) => {
    if (timeOfDay.includes(time)) {
      setTimeOfDay(timeOfDay.filter((t) => t !== time));
    } else {
      setTimeOfDay([...timeOfDay, time]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!medicineName || !dosage || !frequency || timeOfDay.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real application, this would be an API call to add the medicine timing
    // For now, we'll just show a success message
    toast.success("Medicine timing added successfully!");
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <>
      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between">
            <h5 className="modal-title">Add Medicine Timing</h5>
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
          <form onSubmit={handleSubmit}>
            <div className="card__wrapper mt-[5px]">
              <div className="grid grid-cols-12 gap-y-6 gap-x-6 maxXs:gap-x-0">
                <div className="col-span-12 md:col-span-6">
                  <div className="form-group">
                    <label htmlFor="medicineName" className="form-label">
                      Medicine Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="medicineName"
                      className="form-control"
                      value={medicineName}
                      onChange={(e) => setMedicineName(e.target.value)}
                      placeholder="Enter medicine name"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="form-group">
                    <label htmlFor="dosage" className="form-label">
                      Dosage <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="dosage"
                      className="form-control"
                      value={dosage}
                      onChange={(e) => setDosage(e.target.value)}
                      placeholder="Enter dosage (e.g., 10mg, 2 tablets)"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="form-group">
                    <label htmlFor="frequency" className="form-label">
                      Frequency <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="frequency"
                      className="form-control"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      placeholder="Enter frequency (e.g., Daily, Twice daily)"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="form-group">
                    <label className="form-label">
                      Time of Day <span className="text-danger">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="morning"
                          className="form-check-input"
                          checked={timeOfDay.includes("Morning")}
                          onChange={() => handleTimeOfDayChange("Morning")}
                        />
                        <label htmlFor="morning" className="form-check-label">
                          Morning
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="afternoon"
                          className="form-check-input"
                          checked={timeOfDay.includes("Afternoon")}
                          onChange={() => handleTimeOfDayChange("Afternoon")}
                        />
                        <label htmlFor="afternoon" className="form-check-label">
                          Afternoon
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="evening"
                          className="form-check-input"
                          checked={timeOfDay.includes("Evening")}
                          onChange={() => handleTimeOfDayChange("Evening")}
                        />
                        <label htmlFor="evening" className="form-check-label">
                          Evening
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="night"
                          className="form-check-input"
                          checked={timeOfDay.includes("Night")}
                          onChange={() => handleTimeOfDayChange("Night")}
                        />
                        <label htmlFor="night" className="form-check-label">
                          Night
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="form-group">
                    <label htmlFor="instructions" className="form-label">
                      Instructions
                    </label>
                    <textarea
                      id="instructions"
                      className="form-control"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      rows={3}
                      placeholder="Enter any special instructions"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="submit__btn text-center mt-[20px]">
              <button className="btn btn-primary" type="submit">
                Add Medicine Timing
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddMedicineTimingModal; 