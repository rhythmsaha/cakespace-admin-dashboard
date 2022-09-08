function Button({ type = "button", onClick, children, size = "sm", variant = "primary", width, height, disabled }) {
    return (
        <button
            disabled={disabled}
            style={{ width: width || "auto", height: height || "auto" }}
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center gap-1 rounded-lg font-bold outline-none transition-all  duration-300 ${
                variant === "primary" && "bg-primary-main text-white hover:shadow-button-primary active:bg-primary-dark"
            } ${
                variant === "error" &&
                "bg-error-main text-white hover:shadow-button-primary hover:shadow-error-lighter active:bg-error-dark"
            } ${
                variant === "error-outlined" &&
                "border border-error-main text-error-main hover:bg-error-main hover:text-white hover:shadow-button-primary hover:shadow-error-lighter active:bg-error-dark "
            } ${size === "sm" && "px-2.5 py-1 text-[13px] leading-[22px]"} ${
                size === "md" && "px-4 py-1.5 text-sm leading-6"
            } ${size === "lg" && "px-[22px] py-[11px] text-[15px] leading-[26px]"}`}
        >
            {children}
        </button>
    );
}
export default Button;
