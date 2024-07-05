import { useState } from "react";
import {
  Cell,
  Row,
  TableBody,
  TableHeader,
  TableView,
  Column,
} from "@adobe/react-spectrum";
import { useAirportsContext } from "../context/airportsContext";

function RenderTableView() {
  const { airportsList } = useAirportsContext();
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  let columns = [
    { name: "All Airports", uid: "name" },
    { name: "Country", uid: "country", width: 150 },
    { name: "Code", uid: "code", width: 100 },
    { name: "Terminals", uid: "terminals", width: 100 },
  ];
  return (
    <TableView
      aria-label="Table with controlled selection"
      selectionMode="multiple"
      onSelectionChange={setSelectedKeys}
      selectedKeys={selectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            key={column.uid}
            width={column.uid === "name" ? "size-2500" : column.width}
            align={column.uid === "terminals" ? "end" : "start"}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={airportsList}>
        {(item) => (
          <Row key={item.code} href={`/airport/${item.id}`}>
            <Cell>{item.name}</Cell>
            <Cell>{item.country}</Cell>
            <Cell>{item.code}</Cell>
            <Cell>{item.terminals}</Cell>
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}

export default RenderTableView;
