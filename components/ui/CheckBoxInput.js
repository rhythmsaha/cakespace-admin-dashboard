import { useId } from "react";

function CheckBoxInput({ label, description, defaultChecked, name, register = () => {}, ...rest }) {
    const id = useId();
    return (
        <div className="flex gap-2 select-none">
            <input
                id={id}
                type="checkbox"
                defaultChecked={defaultChecked}
                className="h-4 w-4 rounded border-gray-300 text-primary-main focus:ring-transparent border-2 hover:border-primary-main outline-none focus:outline-none cursor-pointer transition-all duration-300  ease-in-out"
                {...register(name)}
            />

            {label && (
                <label htmlFor={id} className="leading-none cursor-pointer">
                    <p className="text-grey-800">{label}</p>
                    {description && <span className="text-sm text-grey-700">{description}</span>}
                </label>
            )}
        </div>
    );
}

export default CheckBoxInput;
