"use client"
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import avataImage from "../../../../../public/assets/images/avatar/avatar.png";
import Image from 'next/image';
import { AlertType } from '@/interface';

const AlertOutlineWithImage = () => {
    const [alerts, setAlerts] = useState({
        primary: true,
        secondary: true,
        success: true,
        info: true,
        warning: true,
        danger: true,
        light: true,
        dark: true,
    });

       // Function to handle dismiss of an alert
       const closeAlert = (alertType: AlertType) => {
        setAlerts((prevState) => ({
            ...prevState,
            [alertType]: false,
        }));
    };
    return (
        <>
            <div className="card__wrapper">
                <div className="card__title-wrap mb-[20px]">
                    <h5 className="card__heading-title">Alert Outline With Image</h5>
                </div>
                <div className="">
                {alerts.primary && (
                    <div className="alert alert-img  alert-primary alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('primary')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                )}
                   {alerts.secondary && (
                    <div className="alert alert-img  alert-secondary alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('secondary')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                   )}
                   {alerts.success && (
                    <div className="alert alert-img  alert-success alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('success')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                   )}
                   {alerts.info && (
                    <div className="alert alert-img  alert-info alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar avatar-xl me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('info')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                   )}
                   {alerts.warning && (
                    <div className="alert alert-img  alert-warning alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar avatar-lg me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('warning')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                   )}
                    {alerts.danger && (
                    <div className="alert alert-img  alert-danger alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar avatar-md me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('danger')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    )}
                     {alerts.light && (
                    <div className="alert alert-img  alert-light alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar avatar-sm me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('light')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                     )}
                     {alerts.dark && (
                    <div className="alert alert-img alert-dark alert-dismissible inverse-bg inverse-primary alert-outline-img fade show flex-wrap">
                        <div className="alert-avatar avatar-xs me-[16px]"> <Image style={{width:"100%", height:"auto"}} src={avataImage} alt="img" /> </div>
                        <p>A simple primary alert with image—check it out!</p>
                        <IconButton className='btn-close outline-btn-close'  type="button" style={{  boxShadow: 'none'}} onClick={() => closeAlert('dark')}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                     )}
                </div>
            </div>
        </>
    );
};

export default AlertOutlineWithImage;