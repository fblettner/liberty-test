import { Card, CardContent, MarkDown, Collapse, Button, Div_DialogWidgetContent, Paper_Dialogs } from '@nomana-it/liberty-core';
import { useState } from "react";

const markDownPreview = `
# Collapse Component

## Component Preview
Below is an interactive example demonstrating the \`Collapse\` component.
`;

const markdownContent = `
## Description
The \`Collapse\` component allows content to expand and collapse smoothly with an animation.

## Props
| Prop              | Type         | Default  | Description                                     |
|------------------|-------------|----------|-------------------------------------------------|
| \`in\`           | \`boolean\`  | \`false\` | Controls whether the content is expanded or collapsed. |
| \`timeout\`       | \`number\`   | \`0\`      | Duration of the expand/collapse transition (in milliseconds). |
| \`collapsedHeight\` | \`string\` | \`"0px"\`  | The height of the content when collapsed. |

## Example Usage
\`\`\`tsx
import { Collapse, Button } from '@nomana-it/liberty-core';
import { useState } from "react";

export const CollapseExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Collapse" : "Expand"}
      </Button>
      <Collapse in={open} timeout={300} collapsedHeight="0px">
        <div style={{ padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          This content is collapsible.
        </div>
      </Collapse>
    </div>
  );
};
\`\`\`
`;

export const Core_Collapse = () => {
  const [open, setOpen] = useState(false);

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
            <Button variant="outlined" onClick={() => setOpen((prev) => !prev)}>
              {open ? "Collapse" : "Expand"}
            </Button>
            <Collapse in={open} timeout={300} collapsedHeight="0px">
              <div style={{ padding: "10px", borderRadius: "8px" }}>
                This content is collapsible.
              </div>
            </Collapse>
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