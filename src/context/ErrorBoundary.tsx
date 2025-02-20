import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from '@nomana-it/liberty-core';

const markDownPreview = `
# ErrorBoundary Component
`;

const markdownContent = `
## Description
The \`ErrorBoundary\` component is a React class component that catches JavaScript errors anywhere in its child component tree. It prevents the entire application from crashing by displaying a fallback UI and logging the error using Sentry.

### Features:
- **Catches errors in the component tree** and prevents the app from breaking.
- **Uses Sentry for error reporting** when Sentry is available.
- **Provides a customizable fallback UI**.
- **Supports React class component lifecycle methods for error handling.**

## Props
| Prop      | Type      | Default | Description |
|-----------|----------|---------|-------------|
| \`children\` | \`ReactNode\` | - | Components wrapped inside the boundary. |
| \`fallback\` | \`ReactNode\` | - | Optional fallback UI when an error occurs. |

## Example Usage
\`\`\`tsx
import { ErrorBoundary } from '@nomana-it/liberty-core';
import { MyComponent } from "./MyComponent";

export const MyApp = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <MyComponent />
    </ErrorBoundary>
  );
};
\`\`\`

## Implementation
The \`ErrorBoundary\` component utilizes React lifecycle methods to catch and handle errors.
\`\`\`tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Div } from "@ly_styles/Div";
import * as Sentry from "@sentry/react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    if (Sentry.getClient()) {
      Sentry.captureException(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <Div>An unexpected error has occurred.</Div>;
    }
    return this.props.children;
  }
}
\`\`\`
`;

export const Core_ErrorBoundary = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
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
      </Div_DialogWidgetContent>
    </Paper_Dialogs>
  );
};