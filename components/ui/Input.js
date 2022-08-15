import { useId } from "react";

function Input({ type, label, placeholder, name, error }) {
    const id = useId();
    return (
        <div className="space-y-1">
            {label && (
                <label htmlFor={id} className="text-grey-600 px-0.5">
                    {label}
                </label>
            )}
            <input
                type={type || "text"}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`w-full rounded-lg outline-none transition-all duration-200 py-2.5 px-4 text-grey-700 ${
                    !error
                        ? "border-grey-300 focus:ring-primary-main focus:border-primary-main"
                        : "border-error-main focus:ring-error-main focus:border-error-main"
                }`}
            />
            {error && <p className="text-xs text-error-main px-0.5 font-medium">{error}</p>}
        </div>
    );
}
export default Input;