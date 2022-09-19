import { Typography } from "@material-tailwind/react";

function PageName({ name }) {
    return (
        <div className="px-2">
            <Typography variant="h4">{name}</Typography>
        </div>
    );
}
export default PageName;
