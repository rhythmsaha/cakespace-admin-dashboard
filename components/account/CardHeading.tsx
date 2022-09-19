import { Typography } from "@material-tailwind/react";

const CardHeading = ({ heading, desc }) => {
    return (
        <div>
            <Typography variant="lead" className="font-medium text-gray-900">
                {heading}
            </Typography>

            <Typography variant="small" className=" text-gray-600">
                {desc}
            </Typography>
        </div>
    );
};
export default CardHeading;
