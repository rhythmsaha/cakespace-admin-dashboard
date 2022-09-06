import Card from "../ui/Card";
import Table, { TableBody, TableHead, Td, Th, Tr } from "../ui/Table";
import AddNewCategory from "./AddNewCategory";

function FlavoursTable({ flavours, flavoursError }) {
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Flavours</h3>

                <AddNewCategory />
            </div>

            <Table>
                <TableHead>
                    <tr className="bg-grey-200 w-full">
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
                                <p className="text-xs whitespace-nowrap">{}</p>
                            </Td>
                            <Td>
                                <p className="text-xs whitespace-nowrap">Birthday Cakes</p>
                            </Td>
                            <Td>
                                <button className="text-xs whitespace-nowrap">Birthday Cakes</button>
                            </Td>
                            <Td>
                                <button className="text-xs whitespace-nowrap">Birthday Cakes</button>
                            </Td>
                        </Tr>
                    ))}
                </TableBody>
            </Table>

            {flavoursError && <p className="text-center py-4 text-gray-500">{flavoursError}</p>}
        </Card>
    );
}
export default FlavoursTable;
