import { Checkbox } from "@material-tailwind/react";
import { useId } from "react";

function CheckBoxInput({ label, description, defaultChecked, name, register = () => {}, ...rest }) {
    const id = useId();
    return (
        <div className="flex items-start">
            <Checkbox id={id} color="green" defaultChecked={defaultChecked} {...register(name)} />

            {label && (
                <label htmlFor={id} className="cursor-pointer leading-none block mt-2">
                    <p className="text-grey-800">{label}</p>
                    {description && <span className="text-sm text-grey-700">{description}</span>}
                </label>
            )}
        </div>
    );
}

export default CheckBoxInput;
