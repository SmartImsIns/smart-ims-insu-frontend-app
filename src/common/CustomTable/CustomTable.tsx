import { CSSProperties } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomTableStyle from './CustomTableStyle';

interface IColumns {
  label: string;
  accessorKey: string;
  style?: CSSProperties;
  Cell?: <T>(item: T) => void;
}

interface IProps {
  columns: IColumns[];
  data: any[];
}

const CustomTable = (props: IProps) => {
  const { columns, data } = props;

  const getTableHeader = () => {
    const tableColumn: any = columns.map(
      (column: IColumns, index: number) =>
      <TableCell key={index} sx={CustomTableStyle.tableHead}>
        {column.label}
      </TableCell>
    );

    return tableColumn;
  }

  const getTableBody = () => {
    let tableBody: any = <Box>No records found</Box>;
    if (data && data.length > 0) {
      tableBody = data.map((item: any, index: number) => {
        return (
          <TableRow key={`driver-${index}`} sx={CustomTableStyle.row}>
            {
              columns.map((hItem: IColumns, hIndex: number) => {
                return (
                  <TableCell
                  sx={{
                    ...CustomTableStyle.rowName,
                    borderBottom:
                      index === data.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >{hItem.Cell ? hItem.Cell(item) : item[hItem.accessorKey]}</TableCell>
                );
              })
            }
          </TableRow>
        );
      });
    }
    return tableBody
  }

  return (
    <TableContainer sx={CustomTableStyle.tableContainer} component={Paper}>
      <Table>
        <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
          <TableRow>
            {getTableHeader()}
          </TableRow>
        </TableHead>
        <TableBody>{getTableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
