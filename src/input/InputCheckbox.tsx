import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";
import { InputCheckbox } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# InputCheckbox Component
`;

const markdownContent = `
## Description
The \`InputCheckbox\` component is a reusable checkbox input with built-in state management. It supports:
- **Custom labels**
- **Controlled & uncontrolled behavior**
- **Disabled state**
- **Callback on change events**

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| \`id\` | \`string\` | - | Unique identifier for the checkbox. |
| \`label\` | \`string\` | - | Label displayed next to the checkbox. |
| \`onChange\` | \`(data: { id: string, value: boolean }) => void\` | - | Callback function triggered on change. |
| \`defaultValue\` | \`boolean\` | \`false\` | Initial checked state. |
| \`disabled\` | \`boolean\` | \`false\` | Disables the checkbox input. |

## Example Usage
\`\`\`tsx
import { InputCheckbox } from "liberty-core";
import { useState } from "react";

export const InputCheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: { id: string; value: boolean }) => {
    setIsChecked(data.value);
  };

  return (
    <InputCheckbox
      id="custom-checkbox"
      label="Enable Feature"
      defaultValue={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};
\`\`\`
`;

export const Core_InputCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (data: { id: string; value: boolean }) => {
    setIsChecked(data.value);
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
            <InputCheckbox
              id="core-checkbox"
              label="Enable Feature"
              defaultValue={isChecked}
              onChange={handleCheckboxChange}
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