import { Card, CardContent, Div_DialogWidgetContent, Div_InputChat, MarkDown, Paper_Dialogs, Typography } from "liberty-core";
import { InputFile } from "liberty-core";
import { useRef } from "react";

const markDownPreview = `
# InputFile Component
`;

const markdownContent = `
## Description
The \`InputFile\` component allows users to upload files via a button-based interface. It supports:
- **File type validation** (MIME types and extensions).
- **File size limit enforcement** (default: 5MB).
- **Custom file input handling** with a hidden input field.
- **Snackbar messages for validation feedback**.

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| \`onFileChange\` | \`(e: React.ChangeEvent<HTMLInputElement>) => void\` | - | Callback triggered when a file is selected. |
| \`fileInputRef\` | \`React.RefObject<HTMLInputElement | null>\` | - | Ref to access the file input element. |
| \`disabled\` | \`boolean\` | \`false\` | Disables file selection. |
| \`accept\` | \`string\` | \`""\` | Specifies accepted file types (e.g., ".png,.jpg"). |

## Example Usage
\`\`\`tsx
import { InputFile } from "liberty-core";
import { useRef } from "react";

export const InputFileExample = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(\`Selected file: \${file.name}\`);
    }
  };

  return (
    <InputFile
      onFileChange={handleFileChange}
      fileInputRef={fileInputRef}
      disabled={false}
      accept=".png,.jpg,.pdf"
    />
  );
};
\`\`\`
`;

export const Core_InputFile = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            alert(`Selected file: ${file.name}`);
        }
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
                        <Div_InputChat>
                            <InputFile
                                onFileChange={handleFileChange}
                                fileInputRef={fileInputRef}
                                disabled={false}
                                accept=".png,.jpg,.pdf"
                            />
                            <Typography>Upload a file</Typography>
                        </Div_InputChat>
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