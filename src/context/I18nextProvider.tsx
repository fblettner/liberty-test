import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from '@nomana-it/liberty-core';

const markDownPreview = `
# TranslationProvider Component
`;

const markdownContent = `
## Description
The \`TranslationProvider\` is a wrapper for internationalization (i18n) using **i18next** in the Liberty Framework. It ensures that translations are available across the application.

### Features
- Uses **i18next** for managing translations.
- Provides language switching support.
- Works seamlessly with the **AppProvider**.

## Props
| Prop       | Type       | Default | Description |
|-----------|-----------|---------|-------------|
| \`children\` | \`ReactNode\` | -       | Components wrapped by the translation provider. |

## Example Usage
To use the \`TranslationProvider\`, wrap it around your application inside **ReactDOM.createRoot**:

\`\`\`tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider, TranslationProvider } from '@nomana-it/liberty-core';
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AppProvider useAuth={oidcUseAuth}>
        <TranslationProvider>
            <App />
        </TranslationProvider>
    </AppProvider>
  </React.StrictMode>
);
\`\`\`

## Notes
- The \`TranslationProvider\` should always wrap the application **inside** the \`AppProvider\` to ensure translations are available globally.
- It integrates with **i18next**, and translations can be managed dynamically.
`;

export const Core_TranslationProvider = () => {
    return (
        <Paper_Dialogs>
            <Div_DialogWidgetContent>
                <Card>
                    <CardContent>
                        <MarkDown markdown={markDownPreview} />
                    </CardContent>
                    <CardContent>
                        <MarkDown markdown={markdownContent} />
                    </CardContent>
                </Card>
            </Div_DialogWidgetContent>
        </Paper_Dialogs>
    );
};