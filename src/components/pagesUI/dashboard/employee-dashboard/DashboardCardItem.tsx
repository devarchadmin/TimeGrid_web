import React from 'react';

const DashboardCardItem = () => {
    return (
        <>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
                <div className="card__wrapper">
                    <div className="flex tems-center gap-[10px] md:gap-[30px]">
                        <div className="card__icon">
                            <span><i className="fa-sharp fa-regular fa-user"></i></span>
                        </div>
                        <div className="card__title-wrap">
                            <h6 className="card__sub-title mb-[10px]">New Tickets</h6>
                            <div className="flex flex-wrap items-end gap-[10px]">
                                <h4 className="card__title">313</h4>
                                <span className="card__desc style_two"><span className="price-increase"><i
                                    className="fa-light fa-arrow-up"></i> +10%</span> Than Last
                                    Year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
                <div className="card__wrapper">
                    <div className="flex tems-center gap-[10px] md:gap-[30px]">
                        <div className="card__icon">
                            <span><i className="fa-sharp fa-regular fa-house-person-leave"></i></span>
                        </div>
                        <div className="card__title-wrap">
                            <h6 className="card__sub-title mb-[10px]">Ticket Resolved</h6>
                            <div className="flex flex-wrap items-end gap-[10px]">
                                <h4 className="card__title">55</h4>
                                <span className="card__desc style_two"><span className="price-increase"><i
                                    className="fa-light fa-arrow-up"></i> +2.15%</span> Than Last Month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
                <div className="card__wrapper">
                    <div className="flex tems-center gap-[10px] md:gap-[30px]">
                        <div className="card__icon">
                            <span><i className="fa-sharp fa-regular fa-gear"></i></span>
                        </div>
                        <div className="card__title-wrap">
                            <h6 className="card__sub-title mb-[10px]">Project Assigned</h6>
                            <div className="flex flex-wrap items-end gap-[10px]">
                                <h4 className="card__title">313</h4>
                                <span className="card__desc style_two"><span className="price-increase"><i
                                    className="fa-light fa-arrow-up"></i> +5.15%</span> Than Last Month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxl:col-span-3">
                <div className="card__wrapper">
                    <div className="flex tems-center gap-[10px] md:gap-[30px]">
                        <div className="card__icon">
                            <span><i className="fa-light fa-badge-check"></i></span>
                        </div>
                        <div className="card__title-wrap">
                            <h6 className="card__sub-title mb-[10px]">Available Leaves</h6>
                            <div className="flex flex-wrap items-end gap-[10px]">
                                <h3 className="card__title">150</h3>
                                <span className="card__desc style_two"><span className="price-decrease"><i
                                    className="fa-light fa-arrow-down"></i> +5.5%</span> Than Last Month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardCardItem;