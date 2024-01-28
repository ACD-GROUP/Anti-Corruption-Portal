'use client'

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

export default function ConsumerMarketsStats() {
    return (
        <main>
            <div className="container py-5">
                <h1 className="display-3 text-primary pb-5">Foreign Trade Volume Trends</h1>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent']
                        },
                        title: {
                            text: "Export and Import volumes (annual)",
                            align: "center"
                        },
                        xaxis: {
                            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
                                '2018', '2019', '2020', '2021', '2022'],
                        },
                        yaxis: {
                            title: {
                                text: '$ (millions)'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: (val) => "$ " + val + " millions"
                            }
                        }
                    }} series={[{
                        name: 'Export volume',
                        data: [13023.4,
                            15021.3,
                            13599.7,
                            14322.7,
                            13545.7,
                            12507.6,
                            12094.6,
                            12553.7,
                            13990.7,
                            17458.7,
                            15102.3,
                            16662.8,
                            19293.7]
                    }, {
                        name: 'Import volume',
                        data: [9175.8,
                            11344.6,
                            12816.5,
                            13946.9,
                            13984.3,
                            12416.6,
                            12137.6,
                            14012.4,
                            19439.3,
                            24292.3,
                            21153.8,
                            25507.7,
                            30767.8]
                    }]} type="bar" height={350}/>
                </div>

                <p className="mb-5">This chart presents the annual volumes of both exports and imports in Uzbekistan.
                    The horizontal axis displays the years, while the vertical axis represents the scale of trade
                    volumes. The chart offers a visual overview of how export and import activities have fluctuated
                    annually, providing insights into the trade dynamics of Uzbekistan.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        plotOptions: {
                            bar: {
                                borderRadius: 4,
                                horizontal: true,
                            }
                        },
                        title: {
                            text: 'Volume of foreign trade turnover (annual)',
                            align: "center"
                        },
                        subtitle: {
                            text: 'million USD',
                            align: "right"
                        },
                        dataLabels: {
                            enabled: false
                        },
                        xaxis: {
                            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
                                '2018', '2019', '2020', '2021', '2022'
                            ],
                        }
                    }} series={[{
                        name: "Value",
                        data: [22199.2,
                            26365.9,
                            26416.1,
                            28269.6,
                            27530.1,
                            24924.3,
                            24232.2,
                            26566.1,
                            33430.0,
                            41751.0,
                            36256.1,
                            42170.5,
                            50061.5]
                    }]} type="bar" height={350}/>
                </div>

                <p className="mb-5">This chart illustrates the annual volume of foreign trade turnover in Uzbekistan.
                    The horizontal axis represents the years, while the vertical axis shows the scale of foreign trade
                    volumes. The chart provides a visual representation of how foreign trade turnover has changed
                    annually, offering insights into the international trade dynamics of Uzbekistan.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        stroke: {
                            curve: 'stepline',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        title: {
                            text: 'Growth rates of foreign trade turnover (annual)',
                            align: 'center'
                        },
                        subtitle: {
                            text: "percents",
                            align: "left"
                        },
                        markers: {
                            hover: {
                                sizeOffset: 4
                            }
                        },
                        xaxis: {
                            categories: years
                        }
                    }} series={[{
                        name: "percents",
                        data: [104.7,
                            118.8,
                            100.2,
                            107.0,
                            97.4,
                            90.5,
                            97.2,
                            109.6,
                            125.8,
                            124.9,
                            86.8,
                            116.3,
                            118.7]
                    }]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart depicts the annual growth rates of foreign trade turnover in Uzbekistan
                    over the specified period. The horizontal axis represents the years, and the vertical axis shows the
                    percentage growth. The chart visually represents how the foreign trade turnover has expanded or
                    contracted each year, providing insights into the trends and dynamics of international trade in
                    Uzbekistan.</p>
            </div>
        </main>
    );
}
