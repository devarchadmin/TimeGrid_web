"use client";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { IPatient } from "@/interface/patient.interface";
import { toast } from "sonner";

interface EditDescriptionModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    patient: IPatient;
}

const EditDescriptionModal = ({ open, setOpen, patient }: EditDescriptionModalProps) => {
    const [description, setDescription] = useState(patient.description || "");

    const handleToggle = () => setOpen(!open);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // In a real application, this would be an API call to update the patient
        // For now, we'll just show a success message
        toast.success("Patient description updated successfully!");
        setTimeout(() => setOpen(false), 2000);
    };

    return (
        <>
            <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="md">
                <DialogTitle>
                    <div className="flex justify-between">
                        <h5 className="modal-title">Edit Patient Description</h5>
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
                        <div className="form-group mb-4">
                            <textarea
                                id="description"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={6}
                                placeholder="Enter patient description"
                            ></textarea>
                        </div>
                        <div className="submit__btn text-center mt-[20px]">
                            <button className="btn btn-primary" type="submit">
                                Update Description
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditDescriptionModal; 