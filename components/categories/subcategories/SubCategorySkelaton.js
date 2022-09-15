import Card from "../../ui/Card";
import Skelaton from "../../ui/Skelaton";

const SubCategorySkelaton = () => {
    return (
        <div>
            <Skelaton height={25} borderRadius={8} width={200} dark />

            <div className="mt-10">
                <Card>
                    <Skelaton height={25} borderRadius={8} />

                    <div className="mt-6 grid  gap-4">
                        <Skelaton height={40} dark borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                        <Skelaton height={40} borderRadius={8} />
                    </div>
                </Card>
            </div>
        </div>
    );
};
export default SubCategorySkelaton;
