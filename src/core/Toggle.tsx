import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, Toggle, ToggleGroup } from '@nomana-it/liberty-core';
import { useState } from "react";

const markDownPreview = `
# Toggle & ToggleGroup Component

## Component Preview
Below is an interactive example demonstrating the \`Toggle\` and \`ToggleGroup\` components.
`;

const markdownContent = `

## Description
The \`Toggle\` component represents a selectable button that can be used alone or inside a \`ToggleGroup\` for grouped selection. It supports exclusive selection (single toggle active) and multiple selection modes.

## Props - Toggle
| Prop        | Type               | Default | Description                                      |
|------------|-------------------|---------|--------------------------------------------------|
| \`value\`    | \`any\`             | -       | Unique identifier for the toggle.               |
| \`isActive\` | \`boolean\`         | \`false\` | Defines whether the toggle is active.           |
| \`disabled\` | \`boolean\`         | \`false\` | Disables interaction with the toggle.           |
| \`onClick\`  | \`(event) => void\` | -       | Click handler for the toggle.                   |

## Props - ToggleGroup
| Prop         | Type               | Default | Description                                      |
|-------------|-------------------|---------|--------------------------------------------------|
| \`value\`    | \`string\`         | -       | The currently selected value (for exclusive mode). |
| \`onChange\` | \`(event, value) => void\` | - | Handles toggle state changes.                   |
| \`exclusive\` | \`boolean\`         | \`true\`  | If true, allows only one toggle to be active at a time. |

## Example Usage
\`\`\`tsx
import { Toggle, ToggleGroup } from '@nomana-it/liberty-core';
import { useState } from "react";

export const ToggleExample = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <ToggleGroup value={selectedValue} onChange={(e, value) => setSelectedValue(value)} exclusive>
      <Toggle value="option1">Option 1</Toggle>
      <Toggle value="option2">Option 2</Toggle>
      <Toggle value="option3">Option 3</Toggle>
    </ToggleGroup>
  );
};
\`\`\`
`;

export const Core_Toggle = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Component Preview */}
            <ToggleGroup value={selectedValue} onChange={(_e, value) => setSelectedValue(value)} exclusive>
              <Toggle value="option1">Option 1</Toggle>
              <Toggle value="option2">Option 2</Toggle>
              <Toggle value="option3">Option 3</Toggle>
            </ToggleGroup>
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