import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Paper Components

## Component Preview
Below is an interactive example demonstrating various styled Paper components.
`;

const markdownContent = `
## Description
The \`Paper\` components are predefined styled wrappers based on the \`Div\` component. They provide structured and reusable layouts for different UI sections, such as login forms, dashboards, and dialogs.

## Styled Paper Components

| Component Name           | Description |
|-------------------------|--------------------------------------------------|
| \`Paper_Login\`        | A styled paper container for login forms. |
| \`Paper_Table\`        | A full-width, full-height wrapper for tables. |
| \`Paper_TableDialog\`  | A paper container for table dialogs. |
| \`Paper_Dialogs\`      | A flexible wrapper for dialog sections. |
| \`Paper_Dashboard\`    | A structured container for dashboard sections. |
| \`Paper_UploadFile\`   | A wrapper specifically for file upload areas. |
| \`Paper_FormsAI\`      | A styled container for FormsAI interface. |
| \`Paper_TableToolbar\` | A sticky toolbar for tables. |
| \`Paper_DialogToolbar\`| A styled toolbar for dialogs. |
| \`Paper_FormsChart\`   | A paper wrapper for charts. |
| \`Paper_Popup\`        | A popup-style modal container. |
| \`Paper_FormsChat\`    | A styled wrapper for FormsChat messages. |
| \`Paper_TableTree\`    | A structured container for tree-like table structures. |

---

## Example Usage

### **Basic Styled Paper Components**
\`\`\`tsx
import { Paper_Login, Paper_Dashboard } from '@nomana-it/liberty-core';

export const PaperExample = () => {
  return (
    <>
      <Paper_Login>
        <h2>Login Form</h2>
      </Paper_Login>

      <Paper_Dashboard>
        <h1>Dashboard Content</h1>
      </Paper_Dashboard>
    </>
  );
};
\`\`\`

---

## Notes
- These components ensure **consistent layout structure** across the application.
- \`Paper_Login\` provides a **semi-transparent** background with adaptive styling.
- \`Paper_Table\` and \`Paper_TableDialog\` are optimized for **data tables**.
- \`Paper_FormsAI\` and \`Paper_FormsChat\` enable **intelligent form processing** and **chat interactions**.

`;

export const Core_StyledPaperDocumentation = () => {
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