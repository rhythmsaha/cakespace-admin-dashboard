import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Home() {
    const [data, setData] = useState([
        {
            x: 10,
            y: 100,
        },
    ]);

    useEffect(() => {
        data.push({
            x: 11,
            y: 500,
        });
    }, []);

    const series = [
        {
            data: data,
        },
    ];

    const options = {
        stroke: {
            curve: "smooth",
        },
    };

    return (
        <div>
            <Chart options={options} series={series} type="line" width={500} height={320} />
        </div>
    );
}
export default Home;
