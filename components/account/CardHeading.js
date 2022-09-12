import { Typography } from "@material-tailwind/react";

const CardHeading = ({ heading, desc }) => {
    return (
        <div>
            <Typography variant="lead" className="text-gray-900 font-medium">
                {heading}
            </Typography>

            <Typography variant="small" className=" text-gray-600">
                {desc}
            </Typography>
        </div>
    );
};
export default CardHeading;
