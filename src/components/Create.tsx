import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from '@nomana-it/liberty-core';

const markDownPreview = `
# Creating a New React App with Liberty Core
`;

const markdownContent = `
## **Description**
Liberty Core provides a modular and extensible foundation for building modern web applications. This guide explains how to create a new React app using **Liberty Core**, set up authentication with **OIDC**, and configure **translations and error handling**.

---

## **Step 1: Initialize a New React Project**
Create a new React project using Vite (recommended for performance):

\`\`\`sh
npm create vite@latest my-liberty-app --template react-ts
cd my-liberty-app
\`\`\`

Then, install the required dependencies:

\`\`\`sh
npm install liberty-core react-oidc-context @emotion/react @emotion/styled
\`\`\`

---

## **Step 2: Create the Application Entry Point**
Create a new file called \`main.tsx\` inside \`src/\` with the following setup:

\`\`\`tsx
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App" 
import { AppProvider, Div, ErrorBoundary, TranslationProvider } from '@nomana-it/liberty-core'
import { AuthProvider, useAuth as oidcUseAuth } from "react-oidc-context";

// OIDC Configuration
const oidcConfig = {
  authority: window.location.origin + "/oidc/realms/Liberty",
  client_id: "liberty-framework",
  redirect_uri: window.location.origin,
};

// Render the app inside ReactDOM with the required providers
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <AppProvider useAuth={oidcUseAuth}>
        <ErrorBoundary fallback={<Div>An error has occurred</Div>}>
          <TranslationProvider>
            <App />
          </TranslationProvider>
        </ErrorBoundary>
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>,
)
\`\`\`

---

## **Step 3: Create the App Component**
Now, create a file named \`App.tsx\` inside \`src/\` and add:

\`\`\`tsx
import { AppsContent, LYThemeProvider, useAppContext } from '@nomana-it/liberty-core';

export function App() {
  const { userProperties, appsProperties, modulesProperties } = useAppContext();

  return (
    <LYThemeProvider>
      <AppsContent />
    </LYThemeProvider>
  );
}
\`\`\`

---

## **Step 4: Run the Application**
Start the development server:

\`\`\`sh
npm run dev
\`\`\`

Your **Liberty Core** app is now running! 🎉

---

## **Customization**
### **1. Customize the Theme**
Modify the theme inside \`App.tsx\`:

\`\`\`tsx
import { AppsContent, LYThemeProvider } from '@nomana-it/liberty-core';
import { theme } from './theme';  // Create a theme file

export function App() {
  return (
    <LYThemeProvider customTheme={theme}>
      <AppsContent />
    </LYThemeProvider>
  );
}
\`\`\`

---

### **2. Customize Menus**
To override the default menus, use \`getMenus\` in \`AppProvider\`:

\`\`\`tsx
const getMenus = async () => {
  return {
    items: [
      {
        MENU_LABEL: "Dashboard",
        MENU_COMPONENT: "FormsDashboard",
        MENU_COMPONENT_ID: 1,
      },
      {
        MENU_LABEL: "Settings",
        MENU_COMPONENT: "FormsContent",
        MENU_COMPONENT_ID: 2,
      },
    ],
  };
};

// Wrap AppProvider with custom menus
<AppProvider getMenus={getMenus}>
\`\`\`

---

## **Conclusion**
You have now set up a **React application using Liberty Core** with authentication, error handling, translation, and theming. 🎯 

For further customization, refer to the [Liberty Core Documentation](https://docs.nomana-it.fr/liberty-core/).
`;

export const Core_CreateApp = () => {
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