import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Input Components
`;

const markdownContent = `
## Description
The \`Input_White\` component is a predefined styled input field that ensures consistent **text and label colors** across different themes.

- This input field inherits from \`Input\` in Liberty Core and is styled to **always display white text and labels**, making it ideal for dark-themed interfaces.

## Props
The \`Input_White\` component inherits all the default props from the standard \`Input\` component in Liberty Core.

## Example Usage

### **Basic Styled Input**
\`\`\`tsx
import { Input_White } from '@nomana-it/liberty-core';

export const InputExample = () => {
  return (
    <Input_White placeholder="Enter text here" />
  );
};
\`\`\`

---

## **Styled Input Components**
- \`Input_White\`: A text input field with enforced white text and label colors.

---

## Notes
- \`Input_White\` ensures high contrast for readability on dark backgrounds.
- It inherits **all behaviors** from the default \`Input\` component.

`;

export const Core_StyledInputDocumentation = () => {
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