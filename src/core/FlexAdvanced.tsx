import { Card, CardContent, MarkDown, AdvancedFlexPanels, Div_DialogWidgetContent, Paper_Dialogs } from "liberty-core";

const markDownPreview = `
# AdvancedFlexPanels Component

## Component Preview
Below is an interactive example demonstrating the \`AdvancedFlexPanels\` component.
`;

const markdownContent = `

## Description
The \`AdvancedFlexPanels\` component is a **bi-dimensional, resizable** layout system that allows for:
- **Dynamic resizing of both rows and columns**
- **Drag-and-drop reordering of child elements**
- **Smooth animations for user interactions**

## Props
| Prop         | Type                     | Default | Description |
|-------------|-------------------------|---------|-------------|
| \`rows\`     | \`number\`               | \`2\`     | Number of rows in the layout. |
| \`columns\`  | \`number\`               | \`2\`     | Number of columns in each row. |
| \`children\` | \`ReactNode[][]\`        | \`-\`     | Bi-dimensional array of child components. |

## Example Usage
\`\`\`tsx
import { AdvancedFlexPanels } from "liberty-core";

export const AdvancedFlexPanelsExample = () => {
  return (
    <AdvancedFlexPanels rows={2} columns={2}>
      {[
        [
          <div style={{ padding: "20px", background: "#0044cc", color: "white", borderRadius: "8px" }}>Panel 1</div>,
          <div style={{ padding: "20px", background: "#3366ff", color: "white", borderRadius: "8px" }}>Panel 2</div>,
        ],
        [
          <div style={{ padding: "20px", background: "#5588ff", color: "white", borderRadius: "8px" }}>Panel 3</div>,
          <div style={{ padding: "20px", background: "#77aaff", color: "white", borderRadius: "8px" }}>Panel 4</div>,
        ],
      ]}
    </AdvancedFlexPanels>
  );
};
\`\`\`
`;

export const Core_AdvancedFlexPanels = () => {
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
            <AdvancedFlexPanels rows={2} columns={2}>
              {[
                [
                  <div style={{ padding: "20px", background: "#0044cc", color: "white", borderRadius: "8px" }}>Panel 1</div>,
                  <div style={{ padding: "20px", background: "#3366ff", color: "white", borderRadius: "8px" }}>Panel 2</div>,
                ],
                [
                  <div style={{ padding: "20px", background: "#5588ff", color: "white", borderRadius: "8px" }}>Panel 3</div>,
                  <div style={{ padding: "20px", background: "#77aaff", color: "white", borderRadius: "8px" }}>Panel 4</div>,
                ],
              ]}
            </AdvancedFlexPanels>
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