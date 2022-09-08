import { useId } from "react";

function CheckBoxInput({ label, description, defaultChecked, name, register = () => {}, ...rest }) {
    const id = useId();
    return (
        <div className="flex select-none gap-2">
            <input
                id={id}
                type="checkbox"
                defaultChecked={defaultChecked}
                className="h-4 w-4 cursor-pointer rounded border-2 border-gray-300 text-primary-main outline-none transition-all duration-300 ease-in-out hover:border-primary-main focus:outline-none  focus:ring-transparent"
                {...register(name)}
            />

            {label && (
                <label htmlFor={id} className="cursor-pointer leading-none">
                    <p className="text-grey-800">{label}</p>
                    {description && <span className="text-sm text-grey-700">{description}</span>}
                </label>
            )}
        </div>
    );
}

export default CheckBoxInput;
