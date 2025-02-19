import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# Table Component

## Component Preview
Below is an interactive example demonstrating the \`Table\` components.
`;

const markdownContent = `

## Description
The \`Table\` component provides a structured way to display data in rows and columns. It supports sorting and different row states.

## Props - Table
| Prop        | Type                | Default | Description                                      |
|------------|--------------------|---------|--------------------------------------------------|
| \`children\` | \`ReactNode\`        | -       | The table content (rows and cells).             |

## Props - TableHead & TableBody
| Prop        | Type                | Default | Description                                      |
|------------|--------------------|---------|--------------------------------------------------|
| \`children\` | \`ReactNode\`        | -       | The table head or body content.                 |

## Props - TableRow
| Prop        | Type                                  | Default | Description                                      |
|------------|--------------------------------------|---------|--------------------------------------------------|
| \`children\` | \`ReactNode\`                        | -       | The table row content (cells).                  |
| \`isSelected\` | \`boolean\`                         | \`false\` | Determines if the row is selected.               |
| \`status\`    | \`"removed" | "edited" | "error"\` | -       | Sets a special row status (e.g., removed, edited, error). |

## Props - TableCell
| Prop        | Type              | Default | Description                                      |
|------------|------------------|---------|--------------------------------------------------|
| \`children\` | \`ReactNode\`      | -       | The cell content.                                |
| \`align\`   | \`"left" | "center" | "right"\` | \`"left"\` | Alignment of the cell content.                   |
| \`colSpan\` | \`number\`        | -       | Number of columns the cell should span.         |
| \`rowSpan\` | \`number\`        | -       | Number of rows the cell should span.            |

## Props - TableSortLabel
| Prop        | Type                 | Default  | Description                                   |
|------------|---------------------|----------|-----------------------------------------------|
| \`active\`  | \`boolean\`          | \`false\` | Determines if sorting is active.             |
| \`direction\` | \`"asc" | "desc"\` | -        | Sorting direction (ascending or descending). |
| \`onClick\` | \`(event) => void\`  | -        | Event triggered when sorting is clicked.     |

## Example Usage
\`\`\`tsx
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from "liberty-core";
import { useState } from "react";

export const TableExample = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel active direction={sortDirection} onClick={handleSort}>
              Name
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">Age</TableCell>
          <TableCell align="right">City</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell align="center">30</TableCell>
          <TableCell align="right">New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell align="center">28</TableCell>
          <TableCell align="right">San Francisco</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
\`\`\`
`;

export const Core_Table = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-table-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Component Preview */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel active direction={sortDirection} onClick={handleSort}>
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="right">City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell align="center">30</TableCell>
                  <TableCell align="right">New York</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell align="center">28</TableCell>
                  <TableCell align="right">San Francisco</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>

          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markdownContent} />
          </CardContent>
        </Card>
      </Paper_Table>
    </Div_Markdown>
  );
};