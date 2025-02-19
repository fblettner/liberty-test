import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table } from "liberty-core";

const markDownPreview = `
# MarkDown Component

## Component Preview
Below is an interactive example demonstrating the \`MarkDown\` component.
`;

const markdownContent = `

## Description
The \`MarkDown\` component renders markdown content and supports syntax highlighting for code blocks, tables, and links.

## Props

| Prop      | Type     | Description |
|-----------|---------|-------------|
| \`markdown\` | \`string\` | The markdown content to be rendered. |

## Example Usage
\`\`\`tsx
import { MarkDown } from "liberty-core";

const markdownText = \`
# Sample Markdown
This is an example of using the **MarkDown** component.

## Features
- Supports **bold** and *italic* text.
- Syntax highlighting for code blocks.
- Tables, lists, and links.

### Code Block Example:
\`\`\`tsx
const example = "Hello, Markdown!";
console.log(example);
\`\`\`

### Table Example:
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

[Visit our website](https://example.com)
\`;

export const MarkDownExample = () => {
  return <MarkDown markdown={markdownText} />;
};
\`\`\`
`;

export const Core_MarkDown = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-markdown-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <MarkDown
              markdown={`
# Sample Markdown
This is an example of using the **MarkDown** component.

## Features
- Supports **bold** and *italic* text.
- Syntax highlighting for code blocks.
- Tables, lists, and links.

### Code Block Example:
\`\`\`tsx
const example = "Hello, Markdown!";
console.log(example);
\`\`\`

### Table Example:
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |

[Visit our website](https://example.com)
`}
            />
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