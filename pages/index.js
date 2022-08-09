import Head from "next/head";
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

    height: 80,
    width: 120,
};

function Home() {
    return (
        <>
            <Head>
                <title>Cakespace - Dashboard</title>
            </Head>

            <section>
                <section className="grid gap-4 w-full grid-cols-3"></section>
            </section>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;

{
    /* <div>
<Chart
    options={data.options}
    series={data.series1}
    type="line"
    width={data.width}
    height={data.height}
/>
</div> */
}
