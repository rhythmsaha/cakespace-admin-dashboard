function Button({ type = "button", onClick, children, size = "sm", variant = "primary", width, height }) {
    return (
        <button
            style={{ width: width || "auto", height: height || "auto" }}
            type={type}
            onClick={onClick}
            className={`font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1  outline-none ${
                variant === "primary" && "bg-primary-main hover:shadow-button-primary active:bg-primary-dark text-white"
            } ${
                variant === "error" &&
                "bg-error-main hover:shadow-button-primary hover:shadow-error-lighter active:bg-error-dark text-white"
            } ${
                variant === "error-outlined" &&
                "border border-error-main hover:bg-error-main hover:shadow-button-primary hover:shadow-error-lighter active:bg-error-dark text-error-main hover:text-white "
            } ${size === "sm" && "px-2.5 py-1 text-[13px] leading-[22px]"} ${
                size === "md" && "px-4 py-1.5 text-sm leading-6"
            } ${size === "lg" && "px-[22px] py-[11px] text-[15px] leading-[26px]"}`}
        >
            {children}
        </button>
    );
}
export default Button;
