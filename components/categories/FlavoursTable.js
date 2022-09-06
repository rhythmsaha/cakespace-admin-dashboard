import Table, { TableBody, TableHead, Td, Th, Tr } from "../ui/Table";

function FlavoursTable({ flavours }) {
    return (
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
    );
}
export default FlavoursTable;
