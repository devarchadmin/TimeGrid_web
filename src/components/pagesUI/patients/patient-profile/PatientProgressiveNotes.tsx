"use client";
import React from "react";
import { IPatient } from "@/interface/patient.interface";

interface PatientProgressiveNotesProps {
  patient: IPatient;
}

const PatientProgressiveNotes = ({ patient }: PatientProgressiveNotesProps) => {
  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-6">
        <div className="card__wrapper">
          <div className="employee__profile-single-box relative">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Progressive Notes</h5>
            </div>
            <div className="progressive-notes-wrapper">
              {patient.progressiveNotes && patient.progressiveNotes.length > 0 ? (
                <div className="progressive-notes-list">
                  {patient.progressiveNotes.map((note) => (
                    <div key={note.id} className="progressive-note-item p-3 mb-3 border border-gray-200 rounded-md">
                      <div className="flex justify-between items-start">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <h6 className="font-semibold text-gray-800">{note.date}</h6>
                            <span className="text-sm text-gray-600">{note.addedBy}</span>
                          </div>
                          <p className="text-gray-700">{note.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-data text-center p-4">
                  <p className="text-gray-500">No progressive notes available for this patient.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProgressiveNotes; 