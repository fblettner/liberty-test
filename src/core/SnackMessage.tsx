import { Card, CardContent, Div_DialogWidgetContent, ESeverity, MarkDown, Paper_Dialogs, SnackMessage, useAppContext } from '@nomana-it/liberty-core';
import { useEffect, useRef } from "react";

const markDownPreview = `
# SnackMessage Component

## Component Preview
Below is an interactive example demonstrating the \`SnackMessage\` component.
`;

const markdownContent = `

## Description
The \`SnackMessage\` component displays temporary alert messages (snack messages) that disappear after a set duration. These messages provide feedback for user actions and support different severity levels.

## Usage
The component is used globally and does not require props. It automatically retrieves and displays messages from the application's context.

## Behavior
- **Displays messages from the application context.**
- **Automatically removes messages after 6 seconds.**
- **Supports different severity levels (info, success, warning, error).**
- **Can be dismissed manually.**

## Example Usage
\`\`\`tsx
import { SnackMessage } from '@nomana-it/liberty-core';
import { useAppContext } from "@ly_context/AppProvider";
import { ESeverity } from "@ly_types/common";

export const Example = () => {
  const { addSnackMessage } = useAppContext();

  useEffect(() => {
    addSnackMessage("Export of table has started", ESeverity.warning);
  }, []);

  return (
    <div>
      {/* This component should be placed at the root level to display messages globally */}
      <SnackMessage />
    </div>
  );
};
\`\`\`
`;

export const Core_SnackMessage = () => {
  const { addSnackMessage } = useAppContext();
  const hasRun = useRef(false); // Prevents running twice in Strict Mode

  useEffect(() => {
    if (hasRun.current) return; // Prevents duplicate messages
    hasRun.current = true;

    addSnackMessage("Example of success message", ESeverity.success);
    addSnackMessage("Example of warning message", ESeverity.warning);
    addSnackMessage("Example of error message", ESeverity.error);
    addSnackMessage("Example of info message", ESeverity.info);
  }, []);

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Trigger a snack message on render */}
            <SnackMessage />
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