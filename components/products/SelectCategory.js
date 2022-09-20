import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronDown } from "react-icons/hi";
import Image from "next/future/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const SelectCategory = ({ label, items, selected, setSelected }) => {
    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <Listbox.Label className="text-xs font-medium text-gray-500">{label}</Listbox.Label>

                    <div className="relative">
                        <Listbox.Button className="relative h-11 w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm">
                            <span className="flex items-center gap-3 font-medium text-gray-600">
                                {selected?.icon && (
                                    <Image
                                        height={24}
                                        width={24}
                                        src={selected.icon}
                                        alt="icon"
                                        className="h-6 w-6 min-w-min rounded-md object-cover"
                                    />
                                )}
                                <span className="block truncate">{selected?.name || "Select A Category"}</span>
                            </span>

                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <HiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-200"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-y-auto rounded-lg bg-white py-1 text-sm shadow-0 ring-1 ring-gray-900 ring-opacity-5 focus:outline-none">
                                {items.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        className={({ active, selected }) =>
                                            classNames(
                                                selected
                                                    ? "bg-green-500 bg-opacity-10 text-green-500"
                                                    : active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <Image
                                                        height={24}
                                                        width={24}
                                                        src={item.icon}
                                                        alt="icon"
                                                        className="h-6 w-6 min-w-min rounded-md object-cover"
                                                    />

                                                    <span
                                                        className={classNames(
                                                            selected ? "font-semibold" : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-green-500">
                                                        <HiCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};
export default SelectCategory;
