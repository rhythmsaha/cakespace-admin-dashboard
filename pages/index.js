import Head from "next/head";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Chart from "../components/ui/Chart";

const data = {
    type: "line",
    series1: [{ data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 40)) }],
    series2: [{ data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 40)) }],
    series3: [{ data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 40)) }],
    options: {
        chart: {
            animation: { enabled: true },
            fontFamily: "Public Sans, sans-serif",
            foreColor: "#919EAB",
            sparkline: { enabled: true },
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        colors: ["#00AB55", "#FFE700", "#2D99FF", "#826AF9"],
        dataLabels: { enabled: false },
        fill: {
            gradient: {
                opacityFrom: 0.4,
                opacityTo: 0,
                shadeIntensity: 0,
                stops: [0, 100],
                type: "vertical",
            },
            opacity: 1,
        },

        grid: { borderColor: "rgba(145, 158, 171, 0.24)", strokeDashArray: 3 },
        legend: {
            fontSize: 13,
            fontWeight: 500,
            horizontalAlign: "right",
            itemMargin: { horizontal: 12 },
            labels: { colors: "#212B36" },
            markers: { radius: 12 },
            position: "top",
            show: true,
        },

        markers: { size: 0, strokeColors: "#fff" },
        stroke: { curve: "smooth", lineCap: "round", width: 2 },
        tooltip: {
            x: { show: false },
            y: {
                formatter: (seriesName) => seriesName,
                title: {
                    formatter: () => "",
                },
            },
            marker: { show: false },
        },
    },

    height: 50,
    width: 80,
};

const CHART_DATA = [
    {
        year: 2019,
        data: [
            { name: "Total Income", data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
            { name: "Total Expenses", data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
        ],
    },
    {
        year: 2020,
        data: [
            { name: "Total Income", data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
            { name: "Total Expenses", data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
        ],
    },
];

/** @type {import('apexcharts').ApexOptions} */
const chartOptions = {
    chart: {
        animation: { enabled: true },
        fontFamily: "Public Sans, sans-serif",
        toolbar: { show: false },
        zoom: { enabled: false },
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0,
            shadeIntensity: 0,
            stops: [0, 100],
            type: "vertical",
        },
        opacity: 1,
    },
    dataLabels: { enabled: false },
    legend: { position: "top", horizontalAlign: "right" },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
};

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Home() {
    return (
        <>
            <Head>
                <title>Cakespace - Dashboard</title>
            </Head>

            <section>
                <section className="grid gap-4 w-full lg:grid-cols-3">
                    <div className="bg-white rounded-xl shadow-0 p-5 flex items-center justify-between">
                        <div className="space-y-4">
                            <h4 className="text-gray-600 font-medium">Product Sold</h4>
                            <h2 className="text-2xl font-bold text-gray-700">765</h2>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="bg-emerald-100 inline-flex items-center justify-center rounded-full h-6 w-6 text-sm text-green-600">
                                    <BiTrendingUp className="" />
                                </span>

                                <p className="text-gray-500">
                                    <span className="font-semibold text-gray-700">+2.6% </span> than last week
                                </p>
                            </div>
                        </div>
                        <div>
                            <Chart
                                options={data.options}
                                series={data.series1}
                                type="line"
                                width={data.width}
                                height={data.height}
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-0 p-5 flex items-center justify-between">
                        <div className="space-y-4">
                            <h4 className="text-gray-600 font-medium">Product Sold</h4>
                            <h2 className="text-2xl font-bold text-gray-700">765</h2>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="bg-red-100 inline-flex items-center justify-center rounded-full h-6 w-6 text-sm text-red-600">
                                    <BiTrendingDown className="" />
                                </span>

                                <p className="text-gray-500">
                                    <span className="font-semibold text-gray-700">+2.6% </span> than last week
                                </p>
                            </div>
                        </div>
                        <div>
                            <Chart
                                options={data.options}
                                series={data.series1}
                                type="line"
                                width={data.width}
                                height={data.height}
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-0 p-5 flex items-center justify-between">
                        <div className="space-y-4">
                            <h4 className="text-gray-600 font-medium">Product Sold</h4>
                            <h2 className="text-2xl font-bold text-gray-700">765</h2>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="bg-emerald-100 inline-flex items-center justify-center rounded-full h-6 w-6 text-sm text-green-600">
                                    <BiTrendingUp className="" />
                                </span>

                                <p className="text-gray-500">
                                    <span className="font-semibold text-gray-700">+2.6% </span> than last week
                                </p>
                            </div>
                        </div>
                        <div>
                            <Chart
                                options={data.options}
                                series={data.series1}
                                type="line"
                                width={data.width}
                                height={data.height}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-white p-8 shadow-0 rounded-xl mt-8">
                        <Chart type="area" series={CHART_DATA[0].data} options={chartOptions} height={364} />
                    </div>
                </section>
            </section>
        </>
    );
}

export default Home;
