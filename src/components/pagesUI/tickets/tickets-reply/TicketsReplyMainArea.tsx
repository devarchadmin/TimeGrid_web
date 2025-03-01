import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatarImg1 from "../../../../../public/assets/images/avatar/avatar.png";
import avatarImg2 from "../../../../../public/assets/images/avatar/avatar1.png";
import avatarImg3 from "../../../../../public/assets/images/avatar/avatar3.png";
import avatarImg4 from "../../../../../public/assets/images/avatar/avatar4.png";
import avatarImg5 from "../../../../../public/assets/images/avatar/avatar5.png";
import avatarImg6 from "../../../../../public/assets/images/avatar/avatar6.png";
import avatarImg7 from "../../../../../public/assets/images/avatar/avatar7.png";
import avatarImg8 from "../../../../../public/assets/images/avatar/avatar2.png";
import textImage from "../../../../../public/assets/images/message/text.png"


const TicketsReplyMainArea = () => {
  return (
    <>
      {/* -- App side area start -- */}
            <div className="app__slide-wrapper">
              <Breadcrumb breadTitle="Tickets Reply" subTitle="Home"/>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="chatbox__chatting-wrapper">
                            <div className="chatbox__chatting-top">
                                <div className="chatbox__header">
                                    <div className="chatting__user">
                                        <div className="chatting__user-thumb">
                                            <Image className="w-[36px] border-circle" src={avatarImg1} priority alt="image"/>
                                        </div>
                                        <div className="chatting__user-content">
                                            <h5 className="chatting__user-info">John Doe</h5>
                                        </div>
                                    </div>
                                    <div className="chatbox__header-notification">
                                       <Link href="#">
                                            <i className="fa-light fa-video"></i>
                                       </Link>
                                       <Link href="#">
                                            <i className="fa-light fa-phone"></i>
                                       </Link>
                                       <Link href="#">
                                            <i className="fa-light fa-magnifying-glass"></i>
                                       </Link>
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
                                        <div className="chat__message-thumb">
                                            <Image src={avatarImg2} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>Hi David, have you got the project <br/> report pdf?</p>
                                        </div>
                                    </div>
                                    <div className="chat__message-item is-right mt-5">
                                        <div className="chat__message-thumb">
                                            <Image src={avatarImg8} style={{width:"100%", height:"auto"}} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>NO. I did not get it</p>
                                        </div>
                                    </div>
                                    <div className="chat__message-item is-time">
                                        <span>Yesterday</span>
                                    </div>
                                    <div className="chat__message-item">
                                        <div className="chat__message-thumb">
                                            <Image src={avatarImg3} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>Ok, I will just sent it here. Plz be <br/> sure to fill the details by today
                                                <br/> end
                                    of the day.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat__message-item mt-[25px]">
                                        <div className="chat__message-thumb">
                                        <Image src={avatarImg4} style={{width:"100%", height:"auto"}} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-item-pdf">
                                            <Image src={textImage} priority alt="text image"/>
                                            <div className="chat__message-title">
                                                <p>project_report.pdf</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat__message-item is-right mt-[30px]">
                                        <div className="chat__message-thumb">
                                        <Image src={avatarImg5} style={{width:"100%", height:"auto"}} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>Ok. Should I send it over <br/> email as well after filling <br/> the details.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat__message-item mt-[35px]">
                                        <div className="chat__message-thumb">
                                        <Image src={avatarImg6} style={{width:"100%", height:"auto"}} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>Ya. I’ll be adding more team <br/> members to it.</p>
                                        </div>
                                    </div>
                                    <div className="chat__message-item is-right mt-5">
                                        <div className="chat__message-thumb">
                                        <Image src={avatarImg7} style={{width:"100%", height:"auto"}} priority alt="image not found"/>
                                        </div>
                                        <div className="chat__message-title">
                                            <p>OK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatbox__chatting-footer">
                                <form action="#">
                                    <div className="chatbox__footer-input">
                                       <Link className="chatbox__input-voice" href="#">
                                            <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.7 9.46533C0.885652 9.46533 1.0637 9.53678 1.19497 9.66395C1.32625 9.79112 1.4 9.96361 1.4 10.1435V11.4997C1.4 12.9385 1.99 14.3184 3.0402 15.3358C4.09041 16.3531 5.51479 16.9247 7 16.9247C8.48521 16.9247 9.90959 16.3531 10.9598 15.3358C12.01 14.3184 12.6 12.9385 12.6 11.4997V10.1435C12.6 9.96361 12.6737 9.79112 12.805 9.66395C12.9363 9.53678 13.1143 9.46533 13.3 9.46533C13.4857 9.46533 13.6637 9.53678 13.795 9.66395C13.9263 9.79112 14 9.96361 14 10.1435V11.4997C14 13.1808 13.3555 14.802 12.1914 16.0488C11.0273 17.2955 9.42664 18.0789 7.7 18.2471V20.9935H11.9C12.0857 20.9935 12.2637 21.0649 12.395 21.1921C12.5263 21.3192 12.6 21.4917 12.6 21.6716C12.6 21.8514 12.5263 22.0239 12.395 22.1511C12.2637 22.2783 12.0857 22.3497 11.9 22.3497H2.1C1.91435 22.3497 1.7363 22.2783 1.60503 22.1511C1.47375 22.0239 1.4 21.8514 1.4 21.6716C1.4 21.4917 1.47375 21.3192 1.60503 21.1921C1.7363 21.0649 1.91435 20.9935 2.1 20.9935H6.3V18.2471C4.57336 18.0789 2.97273 17.2955 1.80863 16.0488C0.644538 14.802 -2.18003e-05 13.1808 5.53009e-10 11.4997V10.1435C5.53009e-10 9.96361 0.0737499 9.79112 0.205025 9.66395C0.336301 9.53678 0.514348 9.46533 0.7 9.46533Z" fill="#9D9D9D" />
                                                <path d="M9.7998 11.4999C9.7998 12.2193 9.5048 12.9092 8.9797 13.4179C8.4546 13.9266 7.74241 14.2124 6.9998 14.2124C6.2572 14.2124 5.54501 13.9266 5.01991 13.4179C4.4948 12.9092 4.1998 12.2193 4.1998 11.4999V4.71865C4.1998 3.99925 4.4948 3.30932 5.01991 2.80063C5.54501 2.29193 6.2572 2.00615 6.9998 2.00615C7.74241 2.00615 8.4546 2.29193 8.9797 2.80063C9.5048 3.30932 9.7998 3.99925 9.7998 4.71865V11.4999ZM6.9998 0.649902C5.8859 0.649902 4.81761 1.07857 4.02996 1.84161C3.2423 2.60465 2.7998 3.63955 2.7998 4.71865V11.4999C2.7998 12.579 3.2423 13.6139 4.02996 14.3769C4.81761 15.14 5.8859 15.5687 6.9998 15.5687C8.11371 15.5687 9.182 15.14 9.96965 14.3769C10.7573 13.6139 11.1998 12.579 11.1998 11.4999V4.71865C11.1998 3.63955 10.7573 2.60465 9.96965 1.84161C9.182 1.07857 8.11371 0.649902 6.9998 0.649902V0.649902Z" fill="#9D9D9D" />
                                            </svg>
                                       </Link>
                                        <input type="text" placeholder="Write Something..."/>
                                        <button className="chatbox__submit-btn" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3798 10.7124L3.26922 12.0636C3.17597 12.0791 3.08847 12.119 3.01551 12.1791C2.94254 12.2392 2.88669 12.3174 2.85357 12.4059L0.0570815 19.8972C-0.209969 20.5862 0.510421 21.243 1.17158 20.9114L20.5543 11.2216C20.6882 11.1545 20.8009 11.0514 20.8796 10.9239C20.9583 10.7965 21 10.6496 21 10.4998C21 10.3499 20.9583 10.2031 20.8796 10.0756C20.8009 9.94808 20.6882 9.84501 20.5543 9.77787L1.17158 0.0881315C0.510421 -0.242396 -0.209969 0.414353 0.0570815 1.10232L2.85465 8.59357C2.88777 8.6821 2.94362 8.76035 3.01658 8.82045C3.08955 8.88055 3.17705 8.92038 3.2703 8.93594L11.3809 10.2871C11.4315 10.2952 11.4775 10.321 11.5108 10.36C11.544 10.399 11.5623 10.4485 11.5623 10.4998C11.5623 10.551 11.544 10.6005 11.5108 10.6395C11.4775 10.6785 11.4315 10.7043 11.3809 10.7124H11.3798Z" fill="white" />
                                            </svg>
                                        </button>
                                        <div className="search__option">
                                            <div>
                                                <input name="type" type="radio" value="type-attach-file" id="type-attach-file"/>
                                                <label htmlFor="type-attach-file">
                                                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4415 7.02667L12.064 5.63239L5.1765 12.6093C4.90524 12.8842 4.69009 13.2105 4.54332 13.5697C4.39655 13.9289 4.32104 14.3138 4.3211 14.7025C4.32117 15.0913 4.3968 15.4762 4.54369 15.8353C4.69057 16.1944 4.90583 16.5207 5.17717 16.7955C5.44852 17.0704 5.77063 17.2883 6.12513 17.4371C6.47962 17.5858 6.85955 17.6623 7.24323 17.6622C7.62691 17.6621 8.00681 17.5855 8.36126 17.4367C8.71571 17.2879 9.03775 17.0698 9.30901 16.7948L17.574 8.42232C18.4872 7.49694 19.0001 6.24194 19 4.9334C18.9999 3.62485 18.4867 2.36995 17.5733 1.44476C16.66 0.519566 15.4213 -0.00012891 14.1298 2.39851e-08C12.8383 0.000128958 11.5997 0.520071 10.6865 1.44544L2.00892 10.236L1.98992 10.2539C-0.663305 12.942 -0.663305 17.2981 1.98992 19.9849C4.64314 22.6717 8.94258 22.6717 11.5958 19.9849L11.6134 19.9657L11.6148 19.967L17.5387 13.9664L16.1612 12.5721L10.2373 18.5714L10.2197 18.5893C9.31055 19.5085 8.07861 20.0248 6.79421 20.0248C5.50981 20.0248 4.27788 19.5085 3.36878 18.5893C2.91815 18.1317 2.5611 17.5885 2.31809 16.9909C2.07509 16.3932 1.95091 15.7528 1.95267 15.1064C1.95444 14.4601 2.08211 13.8204 2.32838 13.2241C2.57465 12.6278 2.93466 12.0867 3.38778 11.6316L3.38642 11.6303L12.0654 2.83972C13.204 1.6847 15.0579 1.6847 16.1979 2.83972C17.3379 3.99474 17.3365 5.87165 16.1979 7.02529L7.93286 15.3978C7.74789 15.5702 7.50435 15.6635 7.25309 15.6583C7.00183 15.653 6.76229 15.5496 6.58449 15.3696C6.4067 15.1897 6.30441 14.9471 6.29898 14.6925C6.29355 14.438 6.3854 14.1911 6.55536 14.0035L13.4429 7.02529L13.4415 7.02667Z" fill="#B4B4B4" />
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <input name="type" type="radio" value="type-posts" id="type-posts"/>
                                                <label htmlFor="type-posts">
                                                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28.6192 22H1.38112C1.10327 22 0.836803 21.8946 0.640337 21.7071C0.44387 21.5196 0.333496 21.2652 0.333496 21V4C0.333496 3.73478 0.44387 3.48043 0.640337 3.29289C0.836803 3.10536 1.10327 3 1.38112 3H8.14873L9.94016 0.45C10.0351 0.312439 10.1641 0.199384 10.3158 0.12088C10.4675 0.0423752 10.6371 0.000852118 10.8097 0H19.1906C19.3632 0.000852118 19.5328 0.0423752 19.6845 0.12088C19.8362 0.199384 19.9653 0.312439 20.0602 0.45L21.8516 3H28.6192C28.8971 3 29.1635 3.10536 29.36 3.29289C29.5565 3.48043 29.6668 3.73478 29.6668 4V21C29.6668 21.2652 29.5565 21.5196 29.36 21.7071C29.1635 21.8946 28.8971 22 28.6192 22ZM2.42873 20H27.5716V5H21.2859C21.1133 4.99915 20.9437 4.95763 20.792 4.87912C20.6403 4.80062 20.5113 4.68756 20.4164 4.55L18.6249 2H11.3754L9.58397 4.55C9.48907 4.68756 9.36004 4.80062 9.20835 4.87912C9.05666 4.95763 8.887 4.99915 8.71445 5H2.42873V20Z" fill="#B4B4B4" />
                                                        <path d="M15.0001 18C13.7569 18 12.5416 17.6481 11.5079 16.9888C10.4742 16.3295 9.66858 15.3925 9.19283 14.2961C8.71708 13.1997 8.5926 11.9933 8.83514 10.8295C9.07767 9.66557 9.67633 8.59648 10.5554 7.75736C11.4345 6.91825 12.5545 6.3468 13.7738 6.11529C14.9931 5.88378 16.2569 6.0026 17.4055 6.45673C18.5541 6.91085 19.5358 7.67989 20.2265 8.66658C20.9171 9.65328 21.2858 10.8133 21.2858 12C21.2858 13.5913 20.6235 15.1174 19.4447 16.2426C18.2659 17.3679 16.6671 18 15.0001 18ZM15.0001 8C14.1713 8 13.3611 8.2346 12.672 8.67412C11.9828 9.11365 11.4457 9.73836 11.1286 10.4693C10.8114 11.2002 10.7284 12.0044 10.8901 12.7804C11.0518 13.5563 11.4509 14.269 12.037 14.8284C12.623 15.3878 13.3697 15.7688 14.1826 15.9231C14.9954 16.0775 15.838 15.9983 16.6037 15.6955C17.3694 15.3928 18.0239 14.8801 18.4843 14.2223C18.9448 13.5645 19.1905 12.7911 19.1905 12C19.1905 10.9391 18.7491 9.92172 17.9632 9.17158C17.1773 8.42143 16.1115 8 15.0001 8V8Z" fill="#B4B4B4" />
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <input name="type" type="radio" value="type-emoji" id="type-emoji"/>
                                                <label htmlFor="type-emoji">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.87284 1.89995C6.06945 1.08518 7.41535 0.515669 8.83291 0.224273C10.2505 -0.0671228 11.7116 -0.0746369 13.1321 0.202164C14.5526 0.478965 15.9043 1.0346 17.1092 1.83703C18.3141 2.63945 19.3484 3.67278 20.1524 4.8774C20.9564 6.08203 21.5142 7.43411 21.7937 8.85565C22.0731 10.2772 22.0687 11.7401 21.7806 13.1599C21.4925 14.5797 20.9265 15.9283 20.1151 17.128C19.3038 18.3277 18.2633 19.3547 17.0535 20.1498C14.6362 21.7672 11.6762 22.3569 8.82463 21.7893C5.97306 21.2216 3.4635 19.5431 1.84804 17.1231C0.232576 14.703 -0.356462 11.7395 0.210505 8.88465C0.777472 6.02976 2.454 3.51729 4.87128 1.89995H4.87284ZM5.74356 18.8469C6.76941 19.5409 7.92214 20.025 9.13549 20.2715C10.3488 20.518 11.5989 20.522 12.8138 20.2833C14.0287 20.0446 15.1845 19.5679 16.2147 18.8805C17.245 18.1931 18.1295 17.3087 18.8172 16.278C19.505 15.2474 19.9825 14.0908 20.2224 12.8747C20.4622 11.6587 20.4597 10.4072 20.2148 9.19217C19.97 7.97712 19.4878 6.8225 18.7958 5.79465C18.1039 4.7668 17.2158 3.88599 16.1828 3.20284C14.1105 1.8325 11.5806 1.33924 9.14617 1.83088C6.71171 2.32253 4.57067 3.75909 3.19106 5.82655C1.81146 7.894 1.30551 10.4242 1.78381 12.864C2.26212 15.3039 3.68576 17.4549 5.74356 18.8469ZM8.61411 9.45703C8.61411 9.87285 8.44911 10.2716 8.15543 10.5657C7.86174 10.8597 7.46341 11.0249 7.04807 11.0249C6.63273 11.0249 6.2344 10.8597 5.94071 10.5657C5.64702 10.2716 5.48203 9.87285 5.48203 9.45703C5.48203 9.0412 5.64702 8.64241 5.94071 8.34838C6.2344 8.05435 6.63273 7.88917 7.04807 7.88917C7.46341 7.88917 7.86174 8.05435 8.15543 8.34838C8.44911 8.64241 8.61411 9.0412 8.61411 9.45703ZM16.4443 9.45703C16.4443 9.87285 16.2793 10.2716 15.9856 10.5657C15.6919 10.8597 15.2936 11.0249 14.8783 11.0249C14.4629 11.0249 14.0646 10.8597 13.7709 10.5657C13.4772 10.2716 13.3122 9.87285 13.3122 9.45703C13.3122 9.0412 13.4772 8.64241 13.7709 8.34838C14.0646 8.05435 14.4629 7.88917 14.8783 7.88917C15.2936 7.88917 15.6919 8.05435 15.9856 8.34838C16.2793 8.64241 16.4443 9.0412 16.4443 9.45703ZM10.9632 15.7285C10.1122 15.7305 9.27663 15.5012 8.54571 15.0649C7.81479 14.6286 7.21596 14.0017 6.81316 13.2512L5.45071 14.0038C5.99905 15.0197 6.81692 15.8644 7.81416 16.4446C8.81141 17.0248 9.9493 17.3181 11.1024 17.2922C12.2556 17.2662 13.3792 16.9221 14.3494 16.2976C15.3196 15.6731 16.0987 14.7925 16.6009 13.753L15.1915 13.0788C14.8063 13.8733 14.2054 14.5432 13.4576 15.0118C12.7098 15.4804 11.8454 15.7288 10.9632 15.7285Z" fill="#B4B4B4" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- App side area end -- */}
    </>
  );
}; 

export default TicketsReplyMainArea;
