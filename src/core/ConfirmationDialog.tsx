import { Card, CardContent, MarkDown, Paper_Table, Button, ConfirmationDialog, Div_Markdown } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# ConfirmationDialog Component

## Component Preview
Below is an interactive example demonstrating the \`ConfirmationDialog\` component.
`;

const markdownContent = `
## Description
The \`ConfirmationDialog\` component provides a standard confirmation popup with customizable actions.

## Props
| Prop        | Type         | Default  | Description                                      |
|------------|-------------|----------|--------------------------------------------------|
| \`open\`    | \`boolean\`  | \`false\` | Controls whether the dialog is visible. |
| \`title\`   | \`string\`   | \`""\`     | The title of the confirmation dialog. |
| \`content\` | \`string\`   | \`""\`     | The content message of the dialog. |
| \`onClose\`  | \`() => void\` | \`undefined\` | Callback function when the dialog is closed. |
| \`onAccept\` | \`() => void\` | \`undefined\` | Callback function when the "Yes" button is clicked. |
| \`onDecline\` | \`() => void\` | \`undefined\` | Callback function when the "No" button is clicked. |

## Example Usage
\`\`\`tsx
import { ConfirmationDialog, Button } from "liberty-core";
import { useState } from "react";

export const ConfirmationDialogExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Confirmation Dialog</Button>
      <ConfirmationDialog
        open={open}
        title="Confirm Action"
        content="Are you sure you want to proceed?"
        onClose={() => setOpen(false)}
        onAccept={() => {
          alert("Accepted");
          setOpen(false);
        }}
        onDecline={() => {
          alert("Declined");
          setOpen(false);
        }}
      />
    </div>
  );
};
\`\`\`
`;

export const Core_ConfirmationDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-confirmation-dialog-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <Button variant="outlined" onClick={() => setOpen(true)}>Open Confirmation Dialog</Button>
            <ConfirmationDialog
              open={open}
              title="Confirm Action"
              content="Are you sure you want to proceed?"
              onClose={() => setOpen(false)}
              onAccept={() => {
                alert("Accepted");
                setOpen(false);
              }}
              onDecline={() => {
                alert("Declined");
                setOpen(false);
              }}
            />
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