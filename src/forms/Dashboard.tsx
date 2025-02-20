import { Card, CardContent, Div_DialogWidgetContent, MarkDown } from '@nomana-it/liberty-core';

const markDownPreview = `
# Liberty Core

A modular, extensible framework for building modern applications with reusable UI components and application management tools.
`;

const markdownContent = `
## Overview
**Liberty Core** is a comprehensive framework that provides a robust set of **UI components**, **application management tools**, and **context providers** to streamline development.

### Features
- 🚀 **Prebuilt UI Components**: Buttons, Dialogs, Alerts, Tables, and more.
- ⚙️ **Context Providers**: Manage applications, authentication, users, and modules.
- 🎨 **Theming Support**: Customizable styles for different UI needs.
- 🔌 **Extensibility**: Easily add and configure new modules.
- 🌐 **Integrated State Management**: Built-in context for handling global application state.

### Backend Integration
Liberty Core is designed to seamlessly integrate with the Liberty Framework, which includes a FastAPI-based backend powered by PostgreSQL. This backend provides a preconfigured database and a complete set of ready-to-use APIs, allowing developers to focus on building applications without worrying about backend setup.

- 🔗 Backend Repository: Liberty Framework

## Documentation Structure
The documentation is divided into the following categories:

### **Application Management**
- 🔹 **[AppProvider]** - Provides global application state.
- 🔹 **[Modules]** - Handles feature activation.
- 🔹 **[Applications]** - Manages multiple application instances.
- 🔹 **[Users]** - User authentication and profiles.
- 🔹 **[Authentication]** - Token-based authentication system.
- 🔹 **[Use Media Query]** - Responsive design utilities.

### **UI Components**
- 🎯 **Alerts & Messages** - Alert, AlertMessage, SnackMessage.
- 🎛 **Buttons & Toggles** - Button, IconButton, Toggle.
- 🗔 **Dialogs & Overlays** - Dialog, ConfirmationDialog, DialogExport, Popper, Tooltip.
- ✍️ **Inputs & Forms** - Input, Checkbox, Select.
- 📂 **Navigation** - Menu, Tabs.
- 📊 **Data Display** - Table, List, Grid, Typography.

## Getting Started
To use Liberty Core, install it via npm:
\`\`\`sh
npm install @nomana-it/liberty-core
\`\`\`

Then import the necessary components:
\`\`\`tsx
import { AppProvider, Button, Dialog } from '@nomana-it/liberty-core';

export const MyApp = () => (
  <AppProvider>
    <Button>Click Me</Button>
  </AppProvider>
);
\`\`\`

## Useful Links
🔗 **GitHub Repository (Core):** [Liberty Core](https://github.com/fblettner/liberty-core/)  
🔗 **GitHub Repository (Test Project):** [Liberty Test](https://github.com/fblettner/liberty-test/)  
📖 **Live Documentation:** [Liberty Core Docs](https://docs.nomana-it.fr/liberty-core/)  
💖 **Sponsor & Support:** [Sponsor Liberty Core](https://github.com/sponsors/fblettner)  

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