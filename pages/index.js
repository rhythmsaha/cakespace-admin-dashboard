import { useState } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" },
];
function Home() {
    const [animal, setAnimal] = useState(null);

    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
    };

    return <Select isSearchable={false} value={animal} onChange={handleChange} options={options} isMultiple={true} />;
}

export default Home;

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
