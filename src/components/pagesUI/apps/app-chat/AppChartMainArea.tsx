"use client"
import Link from "next/link";
import React, { useState } from "react";
import avatar9 from "../../../../../public/assets/images/avatar/avatar9.png";
import avatar10 from "../../../../../public/assets/images/avatar/avatar10.png";
import avatar11 from "../../../../../public/assets/images/avatar/avatar11.png";
import avatar12 from "../../../../../public/assets/images/avatar/avatar12.png";
import avatar13 from "../../../../../public/assets/images/avatar/avatar13.png";
import avatar14 from "../../../../../public/assets/images/avatar/avatar14.png";
import avatar15 from "../../../../../public/assets/images/avatar/avatar15.png";
import messageTextImg from "../../../../../public/assets/images/message/text.png";
import Image from "next/image";
import ChattingFooter from "./ChattingFooter";

const AppChartMainArea = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* -- App side area start -- */}
      <div className="app__slide-wrapper">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="chatbox__area mb-5">
              <div className="chatbox__main-wrapper">
                <div className="chatbox__inbox-wrapper">
                  <div className="chatbox__inbox-inner">
                    <div className="chatbox__author-item is-active">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>David Peters</h5>
                          <span>Senior Developer</span>
                        </div>
                      </div>

                      {/* ------- Settings Button ------- */}
                      {/* <div className="chatbox__edit">
                        <div className="dropdown">
                          <button onClick={toggleDropdown}><i className="icon-gear"></i></button>
                          <div className="dropdown-list start-inline" style={{ display: isDropdownOpen ? "block" : "none" }}>
                            {dropdownItems.map((item, index) => (
                              <Link key={index} className="dropdown__item" href={item.link}>
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div> */}
                      {/* -------------------------------- */}

                    </div>
                    <div className="chatbox__inbox-search">
                      <form action="#">
                        <div className="chatbox__inbox-input">
                          <input type="search" placeholder="Search Here..." />
                          <button className="chatbox__inbox-btn" type="submit"><i className="icon-magnifying-glass"></i></button>
                        </div>
                      </form>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="./assets/images/logo/GW-Fav.svg" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Team Group</h5>
                          <p>Hi, are you Available Tomorrow?</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number"><i className="fa-light fa-check"></i></span>
                      </div>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Lisa Roy</h5>
                          <p>Hi, are you Available Tomorrow?</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number active">1</span>
                      </div>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/29881401/pexels-photo-29881401/free-photo-of-intense-portrait-of-a-young-man-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Jamie Taylor</h5>
                          <p>Hi, are you Available Tomorrow?</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number active">3</span>
                      </div>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/10648919/pexels-photo-10648919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Amy Frost</h5>
                          <p>Hi, are you Available Tomorrow?</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number"><i className="fa-light fa-check"></i></span>
                      </div>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Paul Wilson</h5>
                          <p>Hi, are you Available Tomorrow?</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number"></span>
                      </div>
                    </div>
                    <div className="chatbox__author-item">
                      <div className="chatbox__author-content">
                        <div className="chatbox__author-thumb">
                          <Image src="https://images.pexels.com/photos/12453979/pexels-photo-12453979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>Ana Wlliams</h5>
                          <p>??</p>
                        </div>
                      </div>
                      <div className="chatbox__notification">
                        <span className="time">10:35 AM</span>
                        <span className="text__number active">1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chatbox__chatting-wrapper">
                  <div className="chatbox__chatting-top">
                    <div className="chatbox__header">
                      <div className="chatting__user">
                        <div className="chatting__user-thumb">
                          <Image src="https://images.pexels.com/photos/29881401/pexels-photo-29881401/free-photo-of-intense-portrait-of-a-young-man-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={100} alt="image not found" />
                        </div>
                        <div className="chatting__user-content">
                          <h5 className="chatting__user-info">Jamie Taylor</h5>
                        </div>
                      </div>
                      <div className="chatbox__header-notification">
                        <Link href="#">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa-light fa-bell"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="chatbox__chatting-body">
                      <div className="chat__message-item mt-[30px]">
                        <div className="chat__message-title">
                          <p>Hi David, have you got the project <br /> report pdf?</p>
                        </div>
                      </div>
                      <div className="chat__message-item is-right mt-5">
                        <div className="chat__message-title">
                          <p>NO. I did not get it</p>
                        </div>
                      </div>
                      <div className="chat__message-item is-time">
                        <span>Yesterday</span>
                      </div>
                      <div className="chat__message-item">
                        <div className="chat__message-title">
                          <p>Ok, I will just sent it here. Plz be <br /> sure to fill the details by today
                            <br /> end
                            of the day.
                          </p>
                        </div>
                      </div>
                      <div className="chat__message-item mt-[25px]">
                        
                        <div className="chat__message-item-pdf">
                          <Image src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/9f/4e/319f4e62-13dc-2128-69d8-23d98c929b13/ReleaseAppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x600wa.png" width={100} height={100} className="w-full" priority alt="massage" />
                          <div className="chat__message-title">
                            <p>project_report.pdf</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat__message-item is-right mt-[30px]">
                        
                        <div className="chat__message-title">
                          <p>Ok. Should I send it over <br /> email as well after filling <br /> the details.
                          </p>
                        </div>
                      </div>
                      <div className="chat__message-item mt-[35px]">
                      
                        <div className="chat__message-title">
                          <p>Ya. I’ll be adding more team <br /> members to it.</p>
                        </div>
                      </div>
                      <div className="chat__message-item is-right mt-5">
                        
                        <div className="chat__message-title">
                          <p>OK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChattingFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- App side area end -- */}
    </>
  );
};

export default AppChartMainArea;
