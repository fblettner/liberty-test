import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Stack Components

## Component Preview
Below is an interactive example demonstrating various styled Stack components.
`;

const markdownContent = `
## Description
The \`Stack\` components are predefined styled wrappers based on the \`Div\` component. They provide structured and reusable layouts for arranging UI elements in a stack-like format.

## Styled Stack Components

| Component Name           | Description |
|-------------------------|--------------------------------------------------|
| \`Stack_FormsTable\`   | A structured stack container for FormsTable elements. |
| \`Stack_Table\`        | A full-width, full-height container for tables. |
| \`Stack_Dialogs\`      | A stack container for dialog sections. |
| \`Stack_FormsAI\`      | A structured stack for FormsAI interface. |
| \`Stack_FormsChart\`   | A stack container for chart layouts. |
| \`Stack_SnackMessage\` | A fixed-position stack for snack messages (notifications). |

---

## Example Usage

### **Basic Styled Stack Components**
\`\`\`tsx
import { Stack_FormsTable, Stack_Dialogs } from '@nomana-it/liberty-core';

export const StackExample = () => {
  return (
    <>
      <Stack_FormsTable>
        <h2>Forms Table Content</h2>
      </Stack_FormsTable>

      <Stack_Dialogs>
        <h1>Dialog Content</h1>
      </Stack_Dialogs>
    </>
  );
};
\`\`\`

---

## Notes
- These components ensure **consistent stacking behavior** across the application.
- \`Stack_FormsTable\` and \`Stack_Table\` provide **full-screen table support**.
- \`Stack_FormsAI\` and \`Stack_FormsChart\` enable **AI-driven form processing** and **visualizations**.
- \`Stack_SnackMessage\` is positioned **at the bottom right** for displaying notification messages.

`;

export const Core_StyledStackDocumentation = () => {
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