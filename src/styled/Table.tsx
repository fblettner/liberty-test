import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Table Components

## Component Preview
Below is an interactive example demonstrating various styled table components.
`;

const markdownContent = `
## Description
The \`Table\` components are predefined styled wrappers based on the \`TableCell\`, \`TableRow\`, and \`Div\` components. These components provide structured table layouts with enhanced styling for header rows, checkboxes, and row selection.

## Styled Table Components

| Component Name                 | Description |
|---------------------------------|--------------------------------------------------|
| \`TableContainer\`              | A styled container wrapping the table for proper layout and scrolling. |
| \`TableRow_Header\`             | A header row with a styled background and color. |
| \`TableCell_HeaderCheckbox\`     | A sticky checkbox cell for table headers. |
| \`TableCell_Checkbox\`           | A sticky checkbox cell for table rows. |
| \`TableRow_Selected\`           | A row component that highlights selection state. |
| \`TableCell_Tanstack\`          | A styled table cell supporting TanStack Table. |

---

## Example Usage

### **Basic Styled Table Components**
\`\`\`tsx
import { TableContainer, TableRow_Header, TableCell_Checkbox } from '@nomana-it/liberty-core';

export const TableExample = () => {
  return (
    <TableContainer>
      <table>
        <thead>
          <TableRow_Header>
            <TableCell_Checkbox>
              <input type="checkbox" />
            </TableCell_Checkbox>
            <th>Column 1</th>
            <th>Column 2</th>
          </TableRow_Header>
        </thead>
        <tbody>
          <tr>
            <TableCell_Checkbox>
              <input type="checkbox" />
            </TableCell_Checkbox>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
};
\`\`\`

---

## Notes
- **\`TableContainer\`** ensures proper **scrolling and layout**.
- **\`TableRow_Header\`** provides **custom header row styling**.
- **\`TableCell_Checkbox\`** and **\`TableCell_HeaderCheckbox\`** are **sticky for better usability**.
- **\`TableRow_Selected\`** helps indicate **selected rows visually**.
- **\`TableCell_Tanstack\`** is optimized for **TanStack Table column sizes and alignment**.

`;

export const Core_StyledTableDocumentation = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markdownContent} />
          </CardContent>
        </Card>
      </Div_DialogWidgetContent>
    </Paper_Dialogs>
  );
};