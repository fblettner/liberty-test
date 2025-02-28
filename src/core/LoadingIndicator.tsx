import { Card, CardContent, MarkDown, LoadingIndicator, Div_DialogWidgetContent, Paper_Dialogs } from '@nomana-it/liberty-core';

const markDownPreview = `
# LoadingIndicator Component

## Component Preview
Below is an interactive example demonstrating the \`LoadingIndicator\` component.
`;

const markdownContent = `

## Description
The \`LoadingIndicator\` component provides a visual loading state indicator with a customizable message and color.

## Props

| Prop             | Type                                                                                          | Default   | Description |
|-----------------|-----------------------------------------------------------------------------------------------|-----------|-------------|
| \`loadingMessage\` | \`string\` | \`t("loading")\` | The message displayed below the loading spinner. Uses i18n by default. |
| \`color\` | \`"primary" , "secondary" , "textSecondary" , "error" , "info" , "success" , "warning" , "textPrimary" , "textDisabled" , string\` | \`"primary"\` | Defines the color of the loading message. Can be a theme color or a custom string. |

## Example Usage
\`\`\`tsx
import { LoadingIndicator } from '@nomana-it/liberty-core';

export const LoadingIndicatorExample = () => {
  return (
    <div>
      <LoadingIndicator />
      <LoadingIndicator loadingMessage="Fetching data..." color="success" />
      <LoadingIndicator loadingMessage="Processing request..." color="warning" />
    </div>
  );
};
\`\`\`
`;

export const Core_LoadingIndicator = () => {
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
            <LoadingIndicator />
            <LoadingIndicator loadingMessage="Fetching data..." color="success" />
            <LoadingIndicator loadingMessage="Processing request..." color="warning" />
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