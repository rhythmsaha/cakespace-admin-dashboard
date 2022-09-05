import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
    return (
        <th className={className || "p-4 text-sm lg:text-base text-center first:rounded-l-md last:rounded-r-md"}>
            {text}
        </th>
    );
}

export function Tr({ children }) {
    return <tr>{children}</tr>;
}

export function Td({ children }) {
    return <td className="p-4 first:rounded-l-xl last:rounded-r-xl">{children}</td>;
}

export function TableRow({ cols }) {
    return (
        <>
            {[].map((el, idx) => (
                <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                    <td className="p-4 rounded-l-xl ">
                        <p className="text-xs whitespace-nowrap">Birthday Cakes</p>
                    </td>

                    <td className="p-4 ">
                        <p className="text-xs whitespace-nowrap">birthday_cakes</p>
                    </td>

                    <td className="p-4 ">
                        <button className="">
                            <AiFillEdit className="text-primary-main text-xl" />
                        </button>
                    </td>

                    <td className="p-4 rounded-r-xl">
                        <button>
                            <AiFillDelete className="text-error-main text-xl" />
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}
