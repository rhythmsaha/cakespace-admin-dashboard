import { useId } from "react";

function CheckBoxInput({ label, description }) {
    const id = useId();
    return (
        <div className="flex gap-2">
            <input
                id={id}
                name="remember"
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />

            <label htmlFor={id} className="leading-none cursor-pointer">
                <p>{label}</p>
                <span className="text-sm ">{description}</span>
            </label>
        </div>
    );
}

export default CheckBoxInput;
