"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import EmailNotification from './EmailNotification';
import Notification from './Notification';
import HeaderUserProfile from './HeaderUserProfile';
import EnglishFlag from '@/svg/header-svg/EnglishFlag';
import ArabicFlag from '@/svg/header-svg/ArabicFlag';
import ChineseFlag from '@/svg/header-svg/ChineseFlag';
import GermanFlag from '@/svg/header-svg/GermanFlag';
import FrenchFlag from '@/svg/header-svg/FrenchFlag';
import WorldSvg from '@/svg/header-svg/WorldSvg';
import ZoomScreen from '@/svg/header-svg/ZoomScreen';

const HeaderAction = () => {
     // State to manage dropdown visibility
     const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
     const [isOpenLanguage, setIsOpenLanguage] = useState<boolean>(false);
     const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false)
     const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false)
     const [isOpenUserDropdown, setUserDropdown] = useState<boolean>(false);
 
       // Toggle function to show/hide the dropdown
     const handleShowLanguage = () => {
         setIsOpenLanguage(!isOpenLanguage);
         setIsOpenEmail(false);
         setIsOpenNotification(false);
         setUserDropdown(false);
     };
     const handleShowNotificationEmail = () => {
         setIsOpenEmail(!isOpenEmail);
         setIsOpenNotification(false);
         setUserDropdown(false);
         setIsOpenLanguage(false);
     };
     const handleShowNotification = () => {
         setIsOpenNotification(!isOpenNotification);
         setUserDropdown(false);
         setIsOpenEmail(false);
         setIsOpenLanguage(false);
     };
     const handleShowUserDrowdown = () => {
        setUserDropdown(!isOpenUserDropdown);
         setIsOpenEmail(false);
         setIsOpenNotification(false);
         setIsOpenLanguage(false);
     };
 
     const handleToggleFullScreen = () => {
        if (!isFullScreen) {
            enterFullScreen();
        } else {
            exitFullScreen();
        }
    };

    const enterFullScreen = () => {
        const docElement = document.documentElement;

        if (docElement.requestFullscreen) {
            docElement.requestFullscreen();
        } else if ((docElement as any).mozRequestFullScreen) {
            (docElement as any).mozRequestFullScreen();
        } else if ((docElement as any).webkitRequestFullscreen) {
            (docElement as any).webkitRequestFullscreen();
        }
        setIsFullScreen(true);
    };

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        }
        setIsFullScreen(false);
    };

    return (
        <>
            <div className="app__header-action">
                <ul>
                    <li>
                        <button onClick={handleToggleFullScreen} className='flex'>
                            <div className="nav-item">
                                <div className="notification__icon cursor-pointer">
                                 <ZoomScreen/>
                                </div>
                            </div>
                        </button>
                    </li>
                    <Notification handleShowNotification={handleShowNotification} isOpenNotification={isOpenNotification}/>
                </ul>
            </div>
            <HeaderUserProfile handleShowUserDrowdown={handleShowUserDrowdown} isOpenUserDropdown={isOpenUserDropdown}/>
        </>
    );
};

export default HeaderAction;