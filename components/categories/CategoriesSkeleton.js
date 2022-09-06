import React from "react";
import Card from "../ui/Card";
import Skelaton from "../ui/Skelaton";

const CategoriesSkeleton = () => {
    return (
        <Card>
            <div className="space-y-4 p-4">
                <div className="flex justify-between gap-10">
                    <Skelaton height={40} width={200} borderRadius={6} />
                    <Skelaton height={40} width={200} borderRadius={6} />
                </div>
                <Skelaton height={40} borderRadius={8} dark />
                <Skelaton height={40} borderRadius={8} />
                <Skelaton height={40} borderRadius={8} />
                <Skelaton height={40} borderRadius={8} />
                <Skelaton height={40} borderRadius={8} />
                <Skelaton height={40} borderRadius={8} />
            </div>
        </Card>
    );
};

export default CategoriesSkeleton;
