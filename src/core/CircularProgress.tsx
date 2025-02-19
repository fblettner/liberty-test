import { Card, CardContent, MarkDown, Paper_Table, CircularProgress, Div_Markdown } from "liberty-core";

const markDownPreview = `
# CircularProgress Component

## Component Preview
Below is an interactive example demonstrating the \`CircularProgress\` component.
`;

const markdownContent = `
## Description
The \`CircularProgress\` component displays a rotating loader, commonly used to indicate an ongoing operation.

## Props
| Prop         | Type            | Default  | Description                                   |
|-------------|----------------|----------|-----------------------------------------------|
| \`size\`      | \`number\`       | \`40\`     | Diameter of the spinner (in pixels). |
| \`thickness\` | \`number\`       | \`4\`      | Thickness of the circular border. |
| \`color\`     | \`string\`       | \`theme.palette.primary.main\` | Spinner color. |
| \`trackColor\` | \`string\`      | \`theme.palette.text.primary\` | Background track color. |
| \`speed\`     | \`number\`       | \`1.2\`    | Speed of rotation (in seconds per full spin). |

## Example Usage
\`\`\`tsx
import { CircularProgress } from "liberty-core";

export const CircularProgressExample = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <CircularProgress size={40} />
      <CircularProgress size={50} thickness={5} color="#ff4081" />
      <CircularProgress size={60} thickness={6} trackColor="gray" speed={2} />
    </div>
  );
};
\`\`\`
`;

export const Core_CircularProgress = () => {
    return (
        <Div_Markdown>
            <Paper_Table elevation={0} key={"core-circularprogress-1"}>
                <Card>
                    <CardContent>
                        {/* Render markdown documentation */}
                        <MarkDown markdown={markDownPreview} />
                    </CardContent>

                    <CardContent>
                        {/* Render the actual component */}
                        <div style={{ display: "flex", gap: "16px" }}>
                            <CircularProgress size={40} />
                            <CircularProgress size={50} thickness={5} color="#ff4081" />
                            <CircularProgress size={60} thickness={6} trackColor="gray" speed={2} />
                        </div>
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