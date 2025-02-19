import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";
import { InputColor } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# InputColor Component
`;

const markdownContent = `
## Description
The \`InputColor\` component allows users to select colors using an interactive color picker. It supports:
- **Customizable color selection.**
- **Fullscreen mode for small screens.**
- **Draggable & resizable dialogs for desktop users.**
- **Real-time preview of selected color.**

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| \`id\` | \`string\` | - | Unique identifier for the input field. |
| \`label\` | \`string\` | - | Label displayed above the input field. |
| \`onChange\` | \`(e: React.ChangeEvent<HTMLInputElement>) => void\` | - | Callback triggered when the color changes. |
| \`value\` | \`string\` | \`""\` | Initial selected color in HEX format. |
| \`disabled\` | \`boolean\` | \`false\` | Disables color selection. |

## Example Usage
\`\`\`tsx
import { InputColor } from "liberty-core";
import { useState } from "react";

export const InputColorExample = () => {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <InputColor
      id="custom-color-picker"
      label="Select a Color"
      value={color}
      onChange={handleColorChange}
    />
  );
};
\`\`\`
`;

export const Core_InputColor = () => {
  const [color, setColor] = useState("#1976d2");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

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
            <InputColor
              id="core-inputcolor"
              label="Select a Color"
              value={color}
              onChange={handleColorChange}
            />
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