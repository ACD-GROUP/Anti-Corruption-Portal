import Chart from "@/components/Chart";

export default function ConsumerMarketsStats() {
    return (
        <main>
            <div className="container py-5">
                <h1 className="display-3 text-primary pb-5">Consumer Market Trends Over Time</h1>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            dropShadow: {
                                enabled: true,
                                color: '#000',
                                top: 18,
                                left: 7,
                                blur: 10,
                                opacity: 0.2
                            },
                            toolbar: {
                                show: false
                            }
                        },
                        colors: ['#77B6EA', '#545454'],
                        dataLabels: {
                            enabled: true,
                        },
                        stroke: {
                            curve: 'smooth'
                        },
                        title: {
                            text: 'Wholesale trade & Retail trade volume (annual)',
                            align: 'center'
                        },
                        subtitle: {
                            text: "billion soums",
                            align: "left"
                        },
                        grid: {
                            borderColor: '#e7e7e7',
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        markers: {
                            size: 1
                        },
                        xaxis: {
                            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
                                '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
                                '2016', '2017', '2018', '2019', '2020', '2021', '2022'],

                        },

                        legend: {
                            position: 'top',
                            horizontalAlign: 'right',
                            floating: true,
                            offsetY: -25,
                            offsetX: -5
                        }
                    }} series={[
                        {
                            name: "Wholesale",
                            data: [11774.0,
                                15476.0,
                                18018.0,
                                22001.2,
                                25512.2,
                                29156.9,
                                35396.1,
                                38799.2,
                                57481.6,
                                86538.7,
                                128741.2,
                                183112.4,
                                258444.4]
                        },
                        {
                            name: "Retail",
                            data: [21872.8,
                                28539.0,
                                36946.4,
                                46863.0,
                                58136.6,
                                71184.1,
                                88071.6,
                                105229.9,
                                133195.2,
                                166094.4,
                                199518.8,
                                216694.6,
                                270687.2]
                        }
                    ]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart depicts the annual volume of wholesale and retail trade activities in
                    Uzbekistan. The horizontal axis represents the years, while the vertical axis shows the scale of
                    trade volume. The chart provides a visual snapshot of how wholesale and retail trade have evolved
                    annually, offering insights into the dynamics of commerce in Uzbekistan.</p>

                <div className="card p-4 mb-3 mx-auto rounded-4 col-lg-8">
                    <Chart options={{
                        chart: {
                            dropShadow: {
                                enabled: true,
                                color: '#000',
                                top: 18,
                                left: 7,
                                blur: 10,
                                opacity: 0.2
                            },
                            toolbar: {
                                show: false
                            }
                        },
                        colors: ['#77B6EA', '#545454'],
                        dataLabels: {
                            enabled: true,
                        },
                        stroke: {
                            curve: 'smooth'
                        },
                        title: {
                            text: 'Wholesale trade & Retail trade volume growth rate (annual)',
                            align: 'center'
                        },
                        subtitle: {
                            text: "percents",
                            align: "left"
                        },
                        grid: {
                            borderColor: '#e7e7e7',
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5
                            },
                        },
                        markers: {
                            size: 1
                        },
                        xaxis: {
                            categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
                                '2018', '2019', '2020', '2021', '2022'],

                        },

                        legend: {
                            position: 'top',
                            horizontalAlign: 'right',
                            floating: true,
                            offsetY: -25,
                            offsetX: -5
                        }
                    }} series={[
                        {
                            name: "Wholesale",
                            data: [125.6,
                                114.6,
                                115.4,
                                109.1,
                                110.1,
                                107.4,
                                112.3,
                                94.0,
                                124.7,
                                131.7,
                                130.9,
                                127.4,
                                125.1]
                        },
                        {
                            name: "Retail",
                            data: [113.6,
                                117.1,
                                113.9,
                                113.3,
                                114.0,
                                116.0,
                                119.3,
                                101.3,
                                100.0,
                                108.6,
                                105.0,
                                117.0,
                                110.8]
                        }
                    ]} type="line" height={350}/>
                </div>

                <p className="mb-5">This chart illustrates the annual growth rate of wholesale and retail trade volume
                    in Uzbekistan over the specified period. The horizontal axis represents the years, and the vertical
                    axis shows the percentage growth. The chart provides a visual representation of how the volumes of
                    wholesale and retail trade have changed each year, offering insights into the trends and dynamics of
                    commerce in Uzbekistan.</p>
            </div>
        </main>
    );
}
