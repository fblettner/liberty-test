import { Checkbox, MarkDown, Paper_Table, Card, CardContent, Div_Markdown } from "liberty-core";

const markDownPreview = `
# Checkbox Component

## Component Preview
Below is an interactive example demonstrating the \`Checkbox\` component.
`;

const markdownContent = `
## Description
The \`Checkbox\` component is a custom-styled checkbox that supports indeterminate states, labels, and various label placements.

## Props
| Prop           | Type                                      | Default  | Description                                             |
|---------------|-----------------------------------------|----------|---------------------------------------------------------|
| \`checked\`      | \`boolean\`                              | \`false\` | Whether the checkbox is checked.                        |
| \`disabled\`     | \`boolean\`                              | \`false\` | Disables the checkbox.                                  |
| \`indeterminate\` | \`boolean\`                              | \`false\` | Displays an indeterminate (dash) state.                |
| \`label\`        | \`string\`                              | \`""\`    | Optional label displayed next to the checkbox.         |
| \`labelPlacement\` | \`"start" , "end" , "top" , "bottom"\` | \`"end"\` | Defines where the label appears relative to the checkbox. |

## Example Usage
\`\`\`tsx
import { Checkbox } from "liberty-core";

export const CheckboxExample = () => {
  return (
    <div>
      <Checkbox checked={true} label="Checked" />
      <Checkbox checked={false} label="Unchecked" />
      <Checkbox indeterminate={true} label="Indeterminate" />
      <Checkbox checked={true} disabled label="Disabled Checked" />
      <Checkbox checked={false} disabled label="Disabled Unchecked" />
    </div>
  );
};
\`\`\`
`;


export const Core_Checkbox = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-checkbox-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <Checkbox checked={true} label="Checked" />
            <Checkbox checked={false} label="Unchecked" />
            <Checkbox checked={false} indeterminate={true} label="Indeterminate" />
            <Checkbox checked={true} disabled label="Disabled Checked" />
            <Checkbox checked={false} disabled label="Disabled Unchecked" />
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