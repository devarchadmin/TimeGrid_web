"use client";
import React, { useState } from "react";
import { IPatient, IMedicineTiming } from "@/interface/patient.interface";
import AddMedicineTimingModal from "./AddMedicineTimingModal";
import EditMedicineTimingModal from "./EditMedicineTimingModal";
import { toast } from "sonner";

interface PatientMedicineTimingsProps {
  patient: IPatient;
}

const PatientMedicineTimings = ({ patient }: PatientMedicineTimingsProps) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedMedicineTiming, setSelectedMedicineTiming] = useState<IMedicineTiming | null>(null);

  const handleEdit = (medicineTiming: IMedicineTiming) => {
    setSelectedMedicineTiming(medicineTiming);
    setEditModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this medicine timing?")) {
      // In a real application, this would be an API call
      toast.success("Medicine timing deleted successfully!");
    }
  };

  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Medicine Timings</h5>
              <button
                type="button"
                className="edit-icon"
                onClick={() => setAddModalOpen(true)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="medicine-timings-wrapper">
              {patient.medicineTimings && patient.medicineTimings.length > 0 ? (
                <div className="medicine-timings-list">
                  {patient.medicineTimings.map((medicineTiming) => (
                    <div className="flex gap-2 w-full">
                      <div key={medicineTiming.id} className="medicine-timing-item p-3 mb-3 border border-gray-200 rounded-md w-full">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-2">
                            <h6 className="font-semibold text-gray-800">{medicineTiming.medicineName}</h6>
                            <div className="grid grid-cols-2 gap-x-10">
                              <p className="text-sm text-gray-600 !mb-0 !mt-2">
                                <span className="font-medium">Dosage:</span> {medicineTiming.dosage}
                              </p>
                              <p className="text-sm text-gray-600 !mb-0">
                                <span className="font-medium">Frequency:</span> {medicineTiming.frequency}
                              </p>

                              <p className="text-sm text-gray-600 !mb-0">
                                <span className="font-medium">Time of Day:</span> {medicineTiming.timeOfDay.join(", ")}
                              </p>
                              <p className="text-sm text-gray-600 !mb-0">
                                <span className="font-medium">Start Date:</span> {medicineTiming.startDate}
                                {medicineTiming.endDate && ` - End Date: ${medicineTiming.endDate}`}
                              </p>
                            </div>
                              {medicineTiming.instructions && (
                                <p className="text-sm text-gray-600 !mb-0 col-span-1">
                                  <span className="font-medium">Instructions:</span> {medicineTiming.instructions}
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="p-3 mb-3 border border-gray-200 rounded-md flex flex-col justify-around items-center">
                        <button
                          type="button"
                          className="table__icon edit"
                          onClick={() => handleEdit(medicineTiming)}
                        >
                          <i className="fa-sharp fa-light fa-pen"></i>
                        </button>
                        <button
                          className="removeBtn table__icon delete"
                          onClick={() => handleDelete(medicineTiming.id)}
                        >
                          <i className="fa-regular fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-data text-center p-4">
                  <p className="text-gray-500">No medicine timings available for this patient.</p>

                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => setAddModalOpen(true)}
                  >
                    Add Medicine Timing
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {addModalOpen && (
        <AddMedicineTimingModal
          open={addModalOpen}
          setOpen={setAddModalOpen}
          patient={patient}
        />
      )}

      {editModalOpen && selectedMedicineTiming && (
        <EditMedicineTimingModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          patient={patient}
          medicineTiming={selectedMedicineTiming}
        />
      )}
    </>
  );
};

export default PatientMedicineTimings; 