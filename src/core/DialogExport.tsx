import { Card, CardContent, MarkDown, Paper_Table, Button, IExportOptions, EExportType, DialogExport } from "liberty-core";
import { useState } from "react";

const markdownContent = `
# Dialog Export Component

## Description
The \`DialogExport\` component provides a modal dialog to select export options before exporting data. It allows users to configure:
- **Headers**: Column name vs. column ID
- **Columns**: Export all or only visible columns
- **Rows**: Export all, visible, or selected rows

### Styled Subcomponents
| Component          | Description                                      |
|-------------------|--------------------------------------------------|
| \`ExportContent\`  | Provides the UI for export configuration.      |
| \`Dialog_Title\`   | Displays the export dialog title.              |
| \`Dialog_Content\` | Holds the export configuration options.        |
| \`Dialog_Actions\` | Contains the accept and decline buttons.       |

## Props
| Prop           | Type                                 | Default   | Description                                      |
|---------------|-------------------------------------|-----------|--------------------------------------------------|
| \`open\`       | \`boolean\`                         | \`false\`  | Controls whether the dialog is visible.         |
| \`exportType\` | \`EExportType\`                     | \`""\`     | Type of export (e.g., CSV, Excel, etc.).        |
| \`onClose\`    | \`() => void\`                      | \`undefined\` | Callback for closing the dialog.                 |
| \`onAccept\`   | \`() => void\`                      | \`undefined\` | Callback for accepting export settings.         |
| \`onDecline\`  | \`() => void\`                      | \`undefined\` | Callback for canceling export.                  |
| \`exportOptions\` | \`IExportOptions\`              | \`{}\`      | Object containing export preferences.           |
| \`setExportOptions\` | \`React.Dispatch<SetStateAction<IExportOptions>>\` | \`undefined\` | Function to update export preferences. |

## Example Usage
\`\`\`tsx
import { DialogExport, Button } from "liberty-core";
import { useState } from "react";
import { EExportType, IExportOptions } from "@ly_utils/commonUtils";

export const DialogExportExample = () => {
  const [open, setOpen] = useState(false);
  const [exportOptions, setExportOptions] = useState<IExportOptions>({
    header: "columnName",
    columns: "allColumns",
    rows: "allRows",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    alert("Export confirmed!");
    setOpen(false);
  };
  const handleDecline = () => {
    alert("Export canceled!");
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Export Dialog</Button>
      <DialogExport 
        open={open} 
        exportType={EExportType.EXCEL} 
        onClose={handleClose} 
        onAccept={handleAccept} 
        onDecline={handleDecline} 
        exportOptions={exportOptions} 
        setExportOptions={setExportOptions} 
      />
    </div>
  );
};
\`\`\`

# Component Preview
Below is an interactive example demonstrating the \`DialogExport\` component.
`;

export const Core_DialogExport = () => {
  const [open, setOpen] = useState(false);
  const [exportOptions, setExportOptions] = useState<IExportOptions>({
    header: "columnName",
    columns: "allColumns",
    rows: "allRows",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    alert("Export confirmed!");
    setOpen(false);
  };
  const handleDecline = () => {
    alert("Export canceled!");
    setOpen(false);
  };

  return (
    <Paper_Table elevation={0} key={"core-dialog-export-1"}>
      <Card>
        <CardContent>
          {/* Render markdown documentation */}
          <MarkDown markdown={markdownContent} />
        </CardContent>

        <CardContent>
          {/* Render the actual component */}
          <Button variant="outlined" onClick={handleOpen}>Open Export Dialog</Button>
          <DialogExport 
            open={open} 
            exportType={EExportType.excel} 
            onClose={handleClose} 
            onAccept={handleAccept} 
            onDecline={handleDecline} 
            exportOptions={exportOptions} 
            setExportOptions={setExportOptions} 
          />
        </CardContent>
      </Card>
    </Paper_Table>
  );
};