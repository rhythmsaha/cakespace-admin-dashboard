import React from "react";

export default function Table({ children }) {
    return (
        <div className="overflow-x-auto py-4 rounded-md">
            <table className="table table-auto w-full border-collapse text-center">{children}</table>
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
    return <th className={className || "p-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md"}>{text}</th>;
}

export function Tr({ children }) {
    return <tr>{children}</tr>;
}

export function Td({ children }) {
    return <td className="p-4 first:rounded-l-xl last:rounded-r-xl">{children}</td>;
}
