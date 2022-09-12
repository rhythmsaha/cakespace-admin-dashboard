import { useId } from "react";

function Input({ type, label, placeholder, name, disabled, error, register = () => {}, value, required, ...rest }) {
    const id = useId();
    return (
        <div className="space-y-1">
            {label && (
                <label htmlFor={id} className="px-0.5 text-grey-600">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type || "text"}
                placeholder={placeholder}
                defaultValue={value}
                disabled={disabled}
                className={`w-full rounded-lg py-2.5 px-4 text-grey-700 outline-none transition-all duration-200 placeholder:text-gray-400 ${
                    !error
                        ? "border-grey-300 focus:border-primary-main focus:ring-primary-main"
                        : "border-error-main focus:border-error-main focus:ring-error-main"
                }`}
                {...register(name, required)}
                {...rest}
            />

            {error && <p className="px-0.5 text-xs font-medium text-error-main">{error}</p>}
        </div>
    );
}
export default Input;

<input />;
