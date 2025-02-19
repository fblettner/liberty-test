import { Card, CardContent, MarkDown, Input, Div_DialogWidgetContent, Paper_Dialogs } from "liberty-core";

const markDownPreview = `
# Input Component

## Component Preview
Below is an interactive example demonstrating the \`Input\` component.
`;

const markdownContent = `

## Description
The \`Input\` component is a reusable text input field supporting:
- **Multiple variants**: \`outlined\`, \`filled\`, and \`standard\`
- **Error handling and helper text**
- **Start and end adornments**
- **Multiline text area support**
- **Clear button functionality**

## Props

| Prop            | Type                         | Default      | Description |
|----------------|----------------------------|--------------|-------------|
| \`id\`         | \`string\`                   | \`-\`        | Unique identifier for the input. |
| \`label\`      | \`string\`                   | \`-\`        | The label for the input field. |
| \`variant\`    | \`"outlined" , "filled" , "standard"\` | \`"outlined"\`  | Defines the input style. |
| \`fullWidth\`  | \`boolean\`                  | \`false\`     | Expands input width to 100%. |
| \`error\`      | \`boolean\`                  | \`false\`     | Highlights input as an error. |
| \`helperText\` | \`string\`                   | \`-\`        | Additional message under the input. |
| \`disabled\`   | \`boolean\`                  | \`false\`     | Disables the input. |
| \`multiline\`  | \`boolean\`                  | \`false\`     | Enables textarea mode. |
| \`rows\`       | \`number\`                    | \`1\`        | Number of rows for multiline. |
| \`startAdornment\` | \`ReactNode\`           | \`-\`        | Component before the input. |
| \`endAdornment\` | \`ReactNode\`             | \`-\`        | Component after the input. |
| \`onClear\`    | \`() => void\`               | \`-\`        | Callback when clear button is clicked. |
| \`showClearButton\` | \`boolean\`            | \`false\`     | Shows clear button if input has value. |

## Example Usage
\`\`\`tsx
import { Input } from "liberty-core";

export const InputExample = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input id="outlined" label="Outlined Input" variant="outlined" />
      <Input id="filled" label="Filled Input" variant="filled" />
      <Input id="standard" label="Standard Input" variant="standard" />
      <Input 
        id="with-clear" 
        label="Clearable Input" 
        variant="outlined" 
        value={text} 
        showClearButton 
        onClear={() => setText("")} 
        onChange={(e) => setText(e.target.value)} 
      />
      <Input id="error" label="Error Input" variant="outlined" error helperText="This field is required" />
    </div>
  );
};
\`\`\`
`;

export const Core_Input = () => {
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Input id="outlined" label="Outlined Input" variant="outlined" />
              <Input id="filled" label="Filled Input" variant="filled" />
              <Input id="standard" label="Standard Input" variant="standard" />
              <Input id="error" label="Error Input" variant="outlined" error helperText="This field is required" />
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