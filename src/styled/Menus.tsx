import { Card, CardContent, MarkDown, Paper_Dialogs, Div_DialogWidgetContent } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Menu Components

## Component Preview
Below is an interactive example demonstrating the styled menu component.
`;

const markdownContent = `
## Description
The \`Menu_Filters\` component is a styled version of the \`Menu\` component from Liberty Core. It is designed specifically for filter menus with auto-scroll behavior when content exceeds a defined height.

## Props
| Prop             | Type              | Default  | Description                                  |
|-----------------|------------------|----------|----------------------------------------------|
| \`zIndex\`      | \`number\`       | \`undefined\` | Defines the stacking order (z-index) for layering. |

## Example Usage

### Basic Styled Menu
\`\`\`tsx
import { Menu_Filters } from '@nomana-it/liberty-core';

export const FilterMenuExample = () => {
  return (
    <Menu_Filters zIndex={1000}>
      {/* Menu items go here */}
    </Menu_Filters>
  );
};
\`\`\`

---

## **Styled Menu Components**
- \`Menu_Filters\`: A specialized menu with scrollable content.

---

## Notes
- The menu automatically **adds a scrollbar** if content exceeds the defined height (\`400px\`).
- It **inherits theme properties** from the Liberty Core styling system.

`;

export const Core_StyledMenuDocumentation = () => {
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