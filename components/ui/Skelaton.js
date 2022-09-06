const Skelaton = ({ height, width, borderRadius, dark }) => {
    return (
        <div
            style={{ height: height, width: width || "100%", borderRadius: borderRadius }}
            className={`${dark ? "bg-gray-200" : "bg-gray-100"} animate-pulse`}
        />
    );
};

export default Skelaton;
