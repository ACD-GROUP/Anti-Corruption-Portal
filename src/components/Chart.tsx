'use client'

import ReactApexChart, {Props as ReactApexChartProps} from 'react-apexcharts'
import {useEffect, useState} from "react";

export default function Chart(props: ReactApexChartProps) {
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)

        return () => {
            setMount(false)
        }
    }, []);

    return (
        <>
        {mount && <ReactApexChart {...props} />}
        </>
    );
}