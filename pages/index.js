import DashboardLayout from "../components/layouts/DashboardLayout";

Home.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

function Home() {
    return (
        <>
            <div>Hello World</div>

            <div>
                <table className="w-full border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 ">State</th>
                            <th className="border border-slate-600 ">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 ">Indiana</td>
                            <td className="border border-slate-700 ">Indianapolis</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 ">Ohio</td>
                            <td className="border border-slate-700 ">Columbus</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 ">Michigan</td>
                            <td className="border border-slate-700 ">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
