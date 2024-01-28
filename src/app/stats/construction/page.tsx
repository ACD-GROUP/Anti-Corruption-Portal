import Chart from "@/components/Chart";

const years = ['2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022'
]

export default function ConstructionsStats() {
    return (
        <main>
            <div className="container py-5">
                <h1 className="display-3 text-primary pb-5">Building Our Future: Government Investments and Changes</h1>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            zoom: {
                                enabled: false
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            curve: 'straight',
                            colors: ["#0d6efd"]
                        },
                        title: {
                            text: 'Growth rates of investments in fixed assets (annual)',
                            align: 'center',
                        },
                        subtitle: {
                            text: 'percentage',
                            align: 'left'
                        },
                        grid: {
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        xaxis: {
                            categories: years
                        }
                    }} series={[{
                        name: "Percentage",
                        data: [104.2, 102.6, 110.6, 111.3, 109.8, 109.4, 104.1, 119.4, 129.9, 138.1, 95.6, 102.9, 100.2]
                    }]} type="line" height={350} />
                </div>

                <p className="mb-5">This chart provides a snapshot of the annual growth rates of investments in fixed
                    assets from 2010 to 2022. The horizontal axis represents the years, and the vertical axis depicts
                    the percentage growth. The single series, named "Percentage," presents the annual growth rates,
                    showcasing how investments have fluctuated over the years. The chart is a visual representation of
                    the changing trends in fixed asset investments, offering insights into the economic dynamics during
                    this period.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            zoom: {
                                enabled: false
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            curve: 'straight'
                        },
                        title: {
                            text: 'The volume of investments in fixed assets (annual)',
                            align: 'center'
                        },
                        subtitle: {
                            text: 'billion soums',
                            align: 'left'
                        },
                        grid: {
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        xaxis: {
                            categories: years
                        }
                    }} series={[{
                        name: "Value",
                        data: [16463.7, 19500, 24455.3, 30490.1, 37646.2, 44810.4, 51232, 72155.2, 124231.3, 195927.3, 210195.1, 239552.6, 266240]
                    }]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart outlines the annual volume of investments in fixed assets from 2010 to
                    2022. The horizontal axis represents the years, while the vertical axis shows the percentage of
                    investment volume. The single series, labeled "Percentage," illustrates the annual fluctuations in
                    investment volumes, offering a visual representation of the changes over the specified period. The
                    chart provides a quick overview of the trends in fixed asset investments, giving insights into the
                    variations in economic commitment to infrastructure and development.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '50%',
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            width: 2
                        },

                        grid: {
                            row: {
                                colors: ['#fff', '#f2f2f2']
                            }
                        },
                        xaxis: {
                            labels: {
                                rotate: -45
                            },
                            categories: ['Republic of Uzbekistan', 'The Republic of Karakalpakstan',
                                'Andijan region', 'Bukhara region', 'Jizzakh region',
                                'Kashkadarya region', 'Navoi region', 'Namangan region',
                                'Samarkand region', 'Surkhandarya region', 'Syrdarya region',
                                'Tashkent region', 'Fergana region', 'Khorezm region', 'Tashkent city'],
                            tickPlacement: 'on'
                        },
                        title: {
                            text: 'Total share of the state budget of investments in fixed assets for 2000-2022',
                            align: 'center'
                        },
                        subtitle: {
                            text: 'percentage',
                            align: 'left'
                        },

                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'light',
                                type: "horizontal",
                                shadeIntensity: 0.25,
                                gradientToColors: undefined,
                                inverseColors: true,
                                opacityFrom: 0.85,
                                opacityTo: 0.85,
                                stops: [50, 0, 100]
                            },
                        }
                    }} series={[{
                        name: 'Percentage',
                        data: [227.5, 295., 266.7, 159., 384.2, 125.9, 141.7, 340.5, 276.6,
                            323.7, 424.2, 211.9, 283.8, 290., 230.1]
                    }]} type="bar" height={350}/>
                </div>

                <p className="mb-5">This chart displays the total share of fixed asset investments funded through the
                    state budget from 2000 to 2022. The horizontal axis represents the years, while the vertical axis
                    indicates the percentage of fixed asset investments covered by the state budget. The chart aims to
                    provide an overview of the financial contribution of the state budget to overall fixed asset
                    investments over the specified period, offering insights into the government's role in supporting
                    economic development through infrastructure projects.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        plotOptions: {
                            bar: {
                                borderRadius: 10,
                                columnWidth: '50%',
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            width: 2
                        },

                        grid: {
                            row: {
                                colors: ['#fff', '#f2f2f2']
                            }
                        },
                        xaxis: {
                            labels: {
                                rotate: -45
                            },
                            categories: ['Republic of Uzbekistan', 'The Republic of Karakalpakstan',
                                'Andijan region', 'Bukhara region', 'Jizzakh region',
                                'Kashkadarya region', 'Navoi region', 'Namangan region',
                                'Samarkand region', 'Surkhandarya region', 'Syrdarya region',
                                'Tashkent region', 'Fergana region', 'Khorezm region', 'Tashkent city'],
                            tickPlacement: 'on'
                        },
                        title: {
                            text: 'Total share of foreign investments and loans in investments in fixed assets for 2000-2022',
                            align: 'center'
                        },
                        subtitle: {
                            text: 'percentage',
                            align: 'left'
                        },

                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'light',
                                type: "horizontal",
                                shadeIntensity: 0.25,
                                gradientToColors: undefined,
                                inverseColors: true,
                                opacityFrom: 0.85,
                                opacityTo: 0.85,
                                stops: [50, 0, 100]
                            },
                        }
                    }} series={[{
                        name: 'Percentage',
                        data: [608.2, 554., 400.3, 956.4, 399.3, 729.6, 541.7, 405.9, 307.3,
                            411.2, 464.3, 429.9, 497.2, 399.7, 674.7]
                    }]} type="bar" height={350}/>
                </div>

                <p className="mb-5">This chart presents the overall proportion of foreign investments and loans in fixed
                    asset investments from 2000 to 2022. The vertical axis shows the percentage scale, ranging from 0%
                    to 100%. The chart provides an overview of the extent to which foreign investments and loans
                    contribute to the total investments in fixed assets over the specified period, indicating the
                    reliance on international financial support for economic development.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            zoom: {
                                enabled: false
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            curve: 'straight'
                        },
                        title: {
                            text: 'Volume of construction works of Uzbekistan (annualy)',
                            align: 'center'
                        },
                        subtitle: {
                            text: 'billion soums',
                            align: 'left'
                        },
                        grid: {
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        xaxis: {
                            categories: ['2013',
                                '2014',
                                '2015',
                                '2016',
                                '2017',
                                '2018',
                                '2019',
                                '2020',
                                '2021',
                                '2022'],
                        }
                    }} series={[{
                        name: "Value",
                        data: [15219.3, 20060.4, 25423.1, 29413.9, 34698, 51129.3, 71156.5, 88130.3, 107492.7, 130790.9]
                    }]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart represents the annual volume of construction works in Uzbekistan over the
                    specified period. The horizontal axis denotes the years, and the vertical axis shows the scale of
                    construction activities. The chart provides a visual overview of how the volume of construction
                    works has changed annually, offering insights into the dynamics of the construction sector in
                    Uzbekistan.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            zoom: {
                                enabled: false
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            curve: 'straight'
                        },
                        title: {
                            text: 'Growth rate of construction works of Uzbekistan (annual)',
                            align: 'center'
                        },
                        subtitle: {
                            text: 'percentage',
                            align: 'left'
                        },
                        grid: {
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        xaxis: {
                            categories: ['2013',
                                '2014',
                                '2015',
                                '2016',
                                '2017',
                                '2018',
                                '2019',
                                '2020',
                                '2021',
                                '2022'],
                        }
                    }} series={[{
                        name: "Percentage",
                        data: [117.2, 117.6, 118.8, 107.2, 106, 114.3, 122.9, 109.5, 106.8, 106.6]
                    }]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart illustrates the annual growth rate of construction works in Uzbekistan
                    over the specified period. The horizontal axis represents the years, and the vertical axis shows the
                    percentage growth. The chart provides a visual representation of how the construction sector has
                    expanded or contracted each year, offering insights into the overall trends in construction activity
                    in Uzbekistan.</p>
            </div>
        </main>
    );
}
