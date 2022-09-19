import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const MarkDownEditor = () => {
    const [value, setValue] = useState("");
    return (
        <ReactQuill
            className="active::border-green-500 h-full overflow-hidden"
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
};
export default MarkDownEditor;
