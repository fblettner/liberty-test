import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, Tooltip, Button } from "liberty-core";

const markDownPreview = `
# Tooltip Component

## Component Preview
Below is an interactive example demonstrating the \`Tooltip\` component.
`;

const markdownContent = `

## Description
The \`Tooltip\` component provides a simple way to display contextual hints when hovering over an element.

## Props
| Prop      | Type         | Default  | Description                                     |
|-----------|------------|----------|-------------------------------------------------|
| \`title\`  | \`string\`   | \`""\`   | The text content displayed inside the tooltip. |
| \`children\` | \`ReactNode\` | -        | The element that triggers the tooltip on hover. |

## Example Usage
\`\`\`tsx
import { Tooltip, Button } from "liberty-core";

export const TooltipExample = () => {
  return (
    <Tooltip title="Click to submit">
      <Button variant="contained">Submit</Button>
    </Tooltip>
  );
};
\`\`\`
`;

export const Core_Tooltip = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-tooltip-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Component Preview */}
            <Tooltip title="Click to submit">
              <Button variant="outlined" fullWidth>Submit</Button>
            </Tooltip>
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