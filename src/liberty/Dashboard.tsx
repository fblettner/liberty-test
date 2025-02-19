import { Card, CardContent, Div_DialogWidgetContent, MarkDown } from "liberty-core";

const markDownPreview = `
# Liberty Core

A modular, extensible framework for building modern applications with reusable UI components and application management tools.
`;

const markdownContent = `
## Overview
Liberty Core is a comprehensive framework that provides a robust set of **UI components**, **application management tools**, and **context providers** to streamline development.

### Features
- **Prebuilt UI Components**: Buttons, Dialogs, Alerts, Tables, and more.
- **Context Providers**: Manage applications, authentication, users, and modules.
- **Theming Support**: Customizable styles for different UI needs.
- **Extensibility**: Easily add and configure new modules.
- **Integrated State Management**: Built-in context for handling global application state.

## Documentation Structure
The documentation is divided into the following categories:

### **Application Management**
- **AppProvider]** - Provides global application state.
- **Modules** - Handles feature activation.
- **Applications** - Manages multiple application instances.
- **Users** - User authentication and profiles.
- **Authentication** - Token-based authentication system.
- **Use Media Query** - Responsive design utilities.

### **UI Components**
- **Alerts & Messages** - Alert, AlertMessage, SnackMessage.
- **Buttons & Toggles** - Button, IconButton, Toggle.
- **Dialogs & Overlays** - Dialog, ConfirmationDialog, DialogExport, Popper, Tooltip.
- **Inputs & Forms** - Input, Checkbox, Select.
- **Navigation** - Menu, Tabs.
- **Data Display** - Table, List, Grid, Typography.

## Getting Started
To use Liberty Core, install it via npm:
\`\`\`sh
npm install @nomana-it/liberty-core
\`\`\`

Then import the necessary components:
\`\`\`tsx
import { AppProvider, Button, Dialog } from "liberty-core";

export const MyApp = () => (
  <AppProvider>
    <Button>Click Me</Button>
  </AppProvider>
);
\`\`\`

For detailed documentation on each component, navigate through the sidebar menu.
`;

export const Core_Home = () => {
  return (

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

  );
};