import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Tabs Components

## Component Preview
Below is an interactive example demonstrating various styled tab components.
`;

const markdownContent = `
## Description
The \`Tabs\` and \`Tab\` components are predefined styled wrappers based on the \`Tabs\` and \`Tab\` components from Liberty Core. These components provide consistent styling for tabbed navigation in dialogs.

## Styled Tabs Components

| Component Name      | Description |
|---------------------|--------------------------------------------------|
| \`Tabs_Dialogs\`   | A styled container for tabbed navigation inside dialogs. |
| \`Tab_Dialogs\`    | A styled tab with enhanced styles for dialog interactions. |

---

## Example Usage

### **Basic Styled Tabs**
\`\`\`tsx
import { Tabs_Dialogs, Tab_Dialogs } from '@nomana-it/liberty-core';

export const TabsExample = () => {
  return (
    <Tabs_Dialogs>
      <Tab_Dialogs label="Tab 1" />
      <Tab_Dialogs label="Tab 2" />
      <Tab_Dialogs label="Tab 3" />
    </Tabs_Dialogs>
  );
};
\`\`\`

---

## Notes
- **\`Tabs_Dialogs\`** ensures **consistent styling** for **dialog-based navigation**.
- **\`Tab_Dialogs\`** provides **customized styling** for tabs, including:
  - **Small Caps Font Variant**
  - **Padding & Border Radius**
  - **Box Shadows for Hover Effects**

`;

export const Core_StyledTabsDocumentation = () => {
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