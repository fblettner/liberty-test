import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, IconButton, LYIconSize } from "liberty-core";
import { LYThumbUpIcon, LYThumbDownOffIcon } from "liberty-core";

const markDownPreview = `
# IconButton Component

## Component Preview
Below is an interactive example demonstrating the \`IconButton\` component.
`;

const markdownContent = `

## Description
The \`IconButton\` component is a button wrapper specifically for **icons**, offering:
- **Customizable icon size**
- **Disabled and selected states**
- **Hover effects with scaling animation**

## Props

| Prop         | Type                           | Default        | Description |
|-------------|--------------------------------|--------------|-------------|
| \`icon\`    | \`React.ElementType\`           | \`-\`        | Icon component to display inside the button. |
| \`isSelected\` | \`boolean\`                   | \`false\`     | Determines if the button is selected. |
| \`size\`    | \`"small" , "medium" , "large"\` | \`"medium"\`  | Defines the icon size. |
| \`disabled\` | \`boolean\`                     | \`false\`     | Disables the button when set to true. |
| \`component\` | \`ElementType\`                | \`"button"\`  | Allows rendering a different HTML element. |

## Example Usage
\`\`\`tsx
import { IconButton } from "liberty-core";
import { LYThumbUpIcon, LYThumbDownOffIcon } from "@ly_styles/icons";

export const IconButtonExample = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <IconButton icon={LYThumbUpIcon} size="large" />
      <IconButton icon={LYThumbDownOffIcon} />
      <IconButton icon={LYThumbUpIcon} isSelected />
      <IconButton icon={LYThumbDownOffIcon} disabled />
    </div>
  );
};
\`\`\`
`;

export const Core_IconButton = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-icon-button-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <div style={{ display: "flex", gap: "16px" }}>
              <IconButton icon={LYThumbUpIcon} size={LYIconSize.large} />
              <IconButton icon={LYThumbDownOffIcon} size={LYIconSize.small} />
              <IconButton icon={LYThumbUpIcon} isSelected />
              <IconButton icon={LYThumbDownOffIcon} disabled />
            </div>
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