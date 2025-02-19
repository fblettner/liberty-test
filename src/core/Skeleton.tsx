import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table } from "liberty-core";

const markDownPreview = `
# Skeleton Component

## Component Preview
Below is an interactive example demonstrating the \`Skeleton\` component.
`;

const markdownContent = `

## Description
The \`Skeleton\` component provides a loading placeholder that mimics the shape of the expected content. It supports different shapes and sizes to fit various UI elements.

## Props

| Prop     | Type                                   | Default       | Description |
|----------|----------------------------------------|---------------|-------------|
| \`width\`  | \`string | number\`                  | \`100%\`       | The width of the skeleton. |
| \`height\` | \`string | number\`                  | \`16px\`       | The height of the skeleton. |
| \`variant\` | \`"rounded" | "rectangular" | "circular"\` | \`"rounded"\` | Defines the shape of the skeleton. |

## Example Usage
\`\`\`tsx
import { Skeleton } from "liberty-core";

export const SkeletonExample = () => {
  return (
    <div>
      <Skeleton width={200} height={20} variant="rectangular" />
      <Skeleton width={100} height={100} variant="circular" />
      <Skeleton width="100%" height={30} variant="rounded" />
    </div>
  );
};
\`\`\`
`;

export const Core_Skeleton = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-skeleton-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
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