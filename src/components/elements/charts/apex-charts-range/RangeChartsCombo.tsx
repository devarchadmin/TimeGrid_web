"use client"
import React, { useLayoutEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RangeChartsCombo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    // Define the options for the Apex chart
    const options: ApexOptions = {
        series: [
            {
                type: 'rangeArea',
                name: 'Team B Range',
                data: [
                    { x: 'Jan', y: [1100, 1900] },
                    { x: 'Feb', y: [1200, 1800] },
                    { x: 'Mar', y: [900, 2900] },
                    { x: 'Apr', y: [1400, 2700] },
                    { x: 'May', y: [2600, 3900] },
                    { x: 'Jun', y: [500, 1700] },
                    { x: 'Jul', y: [1900, 2300] },
                    { x: 'Aug', y: [1000, 1500] }
                ]
            },
            {
                type: 'rangeArea',
                name: 'Team A Range',
                data: [
                    { x: 'Jan', y: [3100, 3400] },
                    { x: 'Feb', y: [4200, 5200] },
                    { x: 'Mar', y: [3900, 4900] },
                    { x: 'Apr', y: [3400, 3900] },
                    { x: 'May', y: [5100, 5900] },
                    { x: 'Jun', y: [5400, 6700] },
                    { x: 'Jul', y: [4300, 4600] },
                    { x: 'Aug', y: [2100, 2900] }
                ]
            },
            {
                type: 'line',
                name: 'Team B Median',
                data: [
                    { x: 'Jan', y: 1500 },
                    { x: 'Feb', y: 1700 },
                    { x: 'Mar', y: 1900 },
                    { x: 'Apr', y: 2200 },
                    { x: 'May', y: 3000 },
                    { x: 'Jun', y: 1000 },
                    { x: 'Jul', y: 2100 },
                    { x: 'Aug', y: 1200 },
                    { x: 'Sep', y: 1800 },
                    { x: 'Oct', y: 2000 }
                ]
            },
            {
                type: 'line',
                name: 'Team A Median',
                data: [
                    { x: 'Jan', y: 3300 },
                    { x: 'Feb', y: 4900 },
                    { x: 'Mar', y: 4300 },
                    { x: 'Apr', y: 3700 },
                    { x: 'May', y: 5500 },
                    { x: 'Jun', y: 5900 },
                    { x: 'Jul', y: 4500 },
                    { x: 'Aug', y: 2400 },
                    { x: 'Sep', y: 2100 },
                    { x: 'Oct', y: 1500 }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeArea',
            foreColor: '#7A7A7A',
            animations: { speed: 500 },
            toolbar: { show: true }
        },
        colors: ['#6C5FFC', '#1ABC9C', '#0dcaf0', '#34B53A'],
        dataLabels: { enabled: false },
        fill: { opacity: [1, 1, 1, 1] },
        forecastDataPoints: { count: 2 },
        stroke: { curve: 'straight', width: [0, 0, 2, 2] },
        legend: {
            show: false,
            customLegendItems: ['Team B', 'Team A'],
            inverseOrder: true
        },
        markers: {
            hover: { sizeOffset: 5 }
        }
    };

    return isMounted ? (
        <Chart options={options} series={options.series} type="rangeArea" height={350} />
    ) : (
        <div>Loading...</div>
    );
};

export default RangeChartsCombo;
