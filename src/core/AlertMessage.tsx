import { AlertMessage, Card, CardContent, ESeverity, MarkDown, Paper_Table } from "liberty-core";
import { useState } from "react";

const markdownContent = `
# AlertMessage Component

## Description
The \`AlertMessage\` component is a wrapper around the \`Alert\` component that provides automatic dismissal for non-error messages.

## Props
| Prop         | Type               | Default  | Description                                   |
|-------------|-------------------|----------|-----------------------------------------------|
| \`open\`  | \`boolean\` | \`false\`  | Controls whether the alert is visible. |
| \`severity\` | \`"success" , "info" , "warning" , "error"\` | \`"info"\` | Defines the severity of the alert. |
| \`message\` | \`string\` | \`""\` | The text displayed inside the alert. |
| \`onClose\` | \`() => void\` | \`undefined\` | Callback function triggered when the alert is closed. |

## Behavior
- If the \`severity\` is not **error**, the alert will **automatically close** after **3 seconds**.
- Clicking the close button will manually dismiss the alert.

## Example Usage
\`\`\`tsx
import { AlertMessage } from "liberty-core";
import { useState } from "react";

export const AlertMessageExample = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <AlertMessage open={open} severity={ESeverity.success} message="This is a success alert!" onClose={() => setOpen(false)} />
      <AlertMessage open={true} severity={ESeverity.info} message="This is an info alert!" onClose={() => console.log("Closed")} />
      <AlertMessage open={true} severity={ESeverity.warning} message="This is a warning alert!" onClose={() => console.log("Closed")} />
      <AlertMessage open={true} severity={ESeverity.error} message="This is an error alert!" onClose={() => console.log("Closed")} />
    </div>
  );
};
\`\`\`

# Component Preview
Below is an interactive example demonstrating the \`AlertMessage\` component.
`;

export const Core_AlertMessage = () => {
    const [open, setOpen] = useState(true);

    return (
        <Paper_Table elevation={0} key={"core-alert-message-1"}>
            <Card>
                <CardContent>
                    {/* Render markdown documentation */}
                    <MarkDown markdown={markdownContent} />
                </CardContent>

                <CardContent>
                    {/* Render the actual component */}
                    <AlertMessage open={open} severity={ESeverity.success} message="This is a success alert!" onClose={() => setOpen(false)} />
                    <AlertMessage open={true} severity={ESeverity.info} message="This is an info alert!" onClose={() => console.log("Closed")} />
                    <AlertMessage open={true} severity={ESeverity.warning} message="This is a warning alert!" onClose={() => console.log("Closed")} />
                    <AlertMessage open={true} severity={ESeverity.error} message="This is an error alert!" onClose={() => console.log("Closed")} />
                </CardContent>
            </Card>
        </Paper_Table>
    );
};