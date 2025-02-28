import { Card, CardContent, MarkDown, Divider, Div_DialogWidgetContent, Paper_Dialogs } from '@nomana-it/liberty-core';

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
import { Divider } from '@nomana-it/liberty-core';

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
        <Paper_Dialogs>
            <Div_DialogWidgetContent>
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
            </Div_DialogWidgetContent>
        </Paper_Dialogs>
    );
};