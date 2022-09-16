import Card from "../ui/Card";
import Skelaton from "../ui/Skelaton";

const ProductFormSkelaton = () => {
    return (
        <div>
            <Skelaton height={50} borderRadius={8} className="max-w-sm" dark />

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <Card>
                        <div className="space-y-5">
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={250} borderRadius={8} />
                            <Skelaton height={300} borderRadius={8} />
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4">
                    <Card>
                        <div className="space-y-5">
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={50} borderRadius={8} />
                            <Skelaton height={50} borderRadius={8} />
                        </div>
                    </Card>

                    <div className="mt-5 px-4">
                        <Skelaton height={50} borderRadius={8} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductFormSkelaton;
