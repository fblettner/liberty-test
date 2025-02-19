import { Alert, Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";

const markDownPreview = `
# Alert Component

## Component Preview
Below is an interactive example demonstrating the \`Alert\` component.
`;

const markdownContent = `
## Description
The \`Alert\` component provides a styled alert message with various severity levels. It can also be dismissible.

## Props
| Prop         | Type               | Default  | Description                                   |
|-------------|-------------------|----------|-----------------------------------------------|
| \`variant\`  | \`"success" , "info" , "warning" , "error"\` | \`"info"\`  | Defines the style and icon of the alert. |
| \`dismissible\` | \`boolean\` | \`false\` | Allows the alert to be dismissed. |
| \`onClose\` | \`() => void\` | \`undefined\` | Callback function when the alert is closed. |

## Example Usage
\`\`\`tsx
import { Alert } from "liberty-core";

export const AlertExample = () => {
  return (
    <div>
      <Alert variant="success">This is a success alert!</Alert>
      <Alert variant="info">This is an info alert.</Alert>
      <Alert variant="warning" dismissible onClose={() => alert("Alert closed!")}>
        This is a dismissible warning alert.
      </Alert>
      <Alert variant="error">This is an error alert.</Alert>
    </div>
  );
};
\`\`\`
`
  ;

export const Core_Alert = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <Alert variant="success">This is a success alert!</Alert>
            <Alert variant="info">This is an info alert.</Alert>
            <Alert variant="warning" dismissible >
              This is a dismissible warning alert.
            </Alert>
            <Alert variant="error">This is an error alert.</Alert>
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