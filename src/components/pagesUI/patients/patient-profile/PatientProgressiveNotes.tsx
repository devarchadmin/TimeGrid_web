"use client";
import React, { useState, useMemo } from "react";
import { IPatient, IProgressiveNote } from "@/interface/patient.interface";

interface PatientProgressiveNotesProps {
  patient: IPatient;
}

const PatientProgressiveNotes = ({ patient }: PatientProgressiveNotesProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sort notes in chronological order (newest first) and filter by doctor name
  const filteredNotes = useMemo(() => {
    if (!patient.progressiveNotes) return [];
    
    // Sort by date (newest first)
    const sortedNotes = [...patient.progressiveNotes].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Filter by doctor name if search term exists
    if (searchTerm.trim() === "") {
      return sortedNotes;
    }
    
    return sortedNotes.filter(note => 
      note.addedBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [patient.progressiveNotes, searchTerm]);

  return (
    <>
      <div className="col-span-12 md:col-span-6 xl:col-span-6">
        <div className="card__wrapper h-full">
          <div className="employee__profile-single-box relative h-full flex flex-col">
            <div className="card__title-wrap flex align-center justify-between mb-[15px]">
              <h5 className="card__heading-title">Progressive Notes</h5>
            </div>
            
            {/* Search input */}
            <div className="search-box mb-3">
              <div className="form__input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by doctor name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="progressive-notes-wrapper overflow-y-auto h-[50vh] pr-2 scrollbar-hide">
              {filteredNotes.length > 0 ? (
                <div className="progressive-notes-list">
                  {filteredNotes.map((note) => (
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
                  {patient.progressiveNotes && patient.progressiveNotes.length > 0 ? (
                    <p className="text-gray-500">No matching notes found. Try a different search term.</p>
                  ) : (
                    <p className="text-gray-500">No progressive notes available for this patient.</p>
                  )}
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