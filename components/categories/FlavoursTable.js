import Card from "../ui/Card";
import Table, { TableBody, TableHead, Td, Th, Tr } from "../ui/Table";
import AddNewCategory from "./AddNewCategory";

function FlavoursTable({ flavours, flavoursError }) {
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-600 lg:px-2 lg:text-lg">Flavours</h3>

                <AddNewCategory />
            </div>

            <Table>
                <TableHead>
                    <tr className="w-full bg-grey-200">
                        <Th text="Name" />
                        <Th text="Slug" />
                        <Th text="Edit" />
                        <Th text="Delete" />
                    </tr>
                </TableHead>

                <TableBody>
                    {flavours.map(({ _id, icon, name, slug, enabled }) => (
                        <Tr key={_id}>
                            <Td>
                                <p className="whitespace-nowrap text-xs">{}</p>
                            </Td>
                            <Td>
                                <p className="whitespace-nowrap text-xs">Birthday Cakes</p>
                            </Td>
                            <Td>
                                <button className="whitespace-nowrap text-xs">Birthday Cakes</button>
                            </Td>
                            <Td>
                                <button className="whitespace-nowrap text-xs">Birthday Cakes</button>
                            </Td>
                        </Tr>
                    ))}
                </TableBody>
            </Table>

            {flavoursError && <p className="py-4 text-center text-gray-500">{flavoursError}</p>}
        </Card>
    );
}
export default FlavoursTable;
