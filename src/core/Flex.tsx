import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, FlexPanels } from "liberty-core";

const markDownPreview = `
# FlexPanels Component

## Component Preview
Below is an interactive example demonstrating the \`FlexPanels\` component.
`;

const markdownContent = `

## Description
The \`FlexPanels\` component is a flexible, resizable layout container that allows dynamic panel resizing and optional drag-and-drop reordering.

## Props
| Prop          | Type                        | Default       | Description |
|--------------|----------------------------|--------------|-------------|
| \`panels\`      | \`number[]\`               | \`[1, 1]\`     | Initial flex sizes for each panel. |
| \`children\`    | \`ReactNode[]\`            | \`-\`          | Components to be placed inside the panels. |
| \`direction\`   | \`"horizontal" | "vertical"\` | \`"horizontal"\` | Defines the layout direction. |
| \`dragEnabled\` | \`boolean\`               | \`false\`      | Enables drag-and-drop reordering. |

## Example Usage
\`\`\`tsx
import { FlexPanels } from "liberty-core";

export const FlexPanelsExample = () => {
  return (
    <FlexPanels panels={[2, 1]} direction="horizontal" dragEnabled>
      <div style={{ padding: "20px", background: "#4c9aff" }}>Panel 1</div>
      <div style={{ padding: "20px", background: "#3366ff" }}>Panel 2</div>
    </FlexPanels>
  );
};
\`\`\`
`;

export const Core_FlexPanels = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-flexpanels-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <FlexPanels panels={[2, 1]} direction="horizontal" dragEnabled>
              <div style={{
                padding: "20px",
                background: "#4c9aff",
                color: "white",
                borderRadius: "8px",
              }}>
                Panel 1
              </div>
              <div style={{
                padding: "20px",
                background: "#3366ff",
                color: "white",
                borderRadius: "8px",
              }}>
                Panel 2
              </div>
            </FlexPanels>
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