import { Card, CardContent, MarkDown, Paper_Table, Divider, Div_Markdown } from "liberty-core";

const markDownPreview = `
# Divider Component

## Component Preview
Below is an interactive example demonstrating the \`Divider\` component.
`;

const markdownContent = `
# Divider Component

## Description
The \`Divider\` component is used to separate content with a thin line. It can be displayed horizontally or vertically, and it adapts to dark mode automatically.

## Props
| Prop         | Type                    | Default       | Description                                      |
|-------------|------------------------|--------------|--------------------------------------------------|
| \`orientation\`  | \`"horizontal" , "vertical"\` | \`"horizontal"\` | Defines the divider's orientation. |
| \`flexItem\` | \`boolean\` | \`false\` | Allows the divider to stretch when inside a flex container. |

## Example Usage
\`\`\`tsx
import { Divider } from "liberty-core";

export const DividerExample = () => {
  return (
    <div>
      <p>Above the divider</p>
      <Divider />
      <p>Below the divider</p>

      <div style={{ display: "flex", alignItems: "center", height: "50px", gap: "10px" }}>
        <span>Item 1</span>
        <Divider orientation="vertical" flexItem />
        <span>Item 2</span>
      </div>
    </div>
  );
};
\`\`\`
`;

export const Core_Divider = () => {
    return (
        <Div_Markdown>
            <Paper_Table elevation={0} key={"core-divider-1"}>
                <Card>
                    <CardContent>
                        {/* Render markdown documentation */}
                        <MarkDown markdown={markDownPreview} />
                    </CardContent>

                    <CardContent>
                        {/* Render the actual component */}
                        <p>Above the divider</p>
                        <Divider />
                        <p>Below the divider</p>

                        <div style={{ display: "flex", alignItems: "center", height: "50px", gap: "10px" }}>
                            <span>Item 1</span>
                            <Divider orientation="vertical" flexItem />
                            <span>Item 2</span>
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