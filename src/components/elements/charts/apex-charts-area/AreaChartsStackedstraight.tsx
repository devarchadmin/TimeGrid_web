"use client";
import React, { useLayoutEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AreaChartsStackedstraight = () => {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    const options: ApexOptions = {
        chart: {
            height: 305,
            type: 'area',
            foreColor: '#7A7A7A',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
        },
        colors: ['#7A7A7A', '#05C3FB', '#34B53A'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            borderColor: '#E6E6E6',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],

            labels: {
                style: {
                    colors: '#7A7A7A',
                    fontSize: '12px',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        yaxis: {
            show: true,
            labels: {
                offsetX: -10,
                formatter: function (value: number) {
                    return value + "k";
                },
                style: {
                    colors: '#7A7A7A',
                    fontSize: '12px',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        legend: {
            show: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [100, 90, 100]
            }
        },
    };

    const series = [
        {
            name: 'Net Profit',
            data: [30, 60, 35, 110, 45, 70, 60] 
        },
        {
            name: 'Revenue',
            data: [65, 40, 80, 50, 100, 25, 85] 
        },
        {
            name: 'Expenses',
            data: [40, 35, 55, 70, 80, 50, 30] 
        }
    ];
    
    if (!isMounted) return <div>Loading...</div>;
    return <Chart options={options} series={series} type="area" height={305} />
    
};

export default AreaChartsStackedstraight;
