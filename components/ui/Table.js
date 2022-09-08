import React from "react";

export default function Table({ children }) {
    return (
        <div className="overflow-x-auto rounded-md py-4">
            <table className="table w-full table-auto border-collapse text-center">{children}</table>
        </div>
    );
}

export function TableHead({ children }) {
    return <thead>{children}</thead>;
}

export function TableBody({ children }) {
    return <tbody className="">{children}</tbody>;
}

export function Th({ text, className }) {
    return <th className={className || "p-4 text-sm first:rounded-l-md last:rounded-r-md lg:text-base"}>{text}</th>;
}

export function Tr({ children }) {
    return <tr>{children}</tr>;
}

export function Td({ children, className }) {
    return <td className={className || "p-4 first:rounded-l-xl last:rounded-r-xl"}>{children}</td>;
}
