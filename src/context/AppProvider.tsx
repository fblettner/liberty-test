import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";

const markDownPreview = `
# AppProvider Component
`;

const markdownContent = `
## Description
The \`AppProvider\` is a context provider that manages global state for the Liberty Framework. It provides access to:

- **Authentication state**
- **Application properties**
- **User properties**
- **Module configurations**
- **Snack messages**
- **WebSocket handling**

This provider allows injecting custom functions for retrieving data such as applications, users, tokens, and menus.

## Props
| Prop             | Type                     | Default | Description |
|-----------------|--------------------------|---------|-------------|
| \`children\`       | \`ReactNode\`             | -       | Components wrapped by the provider. |
| \`useAuth\`        | \`() => AuthContextProps\` | -       | Custom authentication hook. |
| \`getModules\`     | \`() => Promise<IModulesProps>\` | - | Fetch function for modules configuration. |
| \`getApplications\` | \`() => Promise<IAppsProps>\` | - | Fetch function for application settings. |
| \`getUser\`        | \`() => Promise<IUsersProps>\` | - | Fetch function for user details. |
| \`getMenus\`       | \`() => Promise<IMenusProps>\` | - | Fetch function for application menus. |

## Example Usage
\`\`\`tsx
import { AppProvider, useAppContext } from "liberty-core";

export const AppProviderExample = () => {
  return (
    <AppProvider>
      <MyApp />
    </AppProvider>
  );
};

const MyApp = () => {
  const { userProperties, modulesProperties } = useAppContext();

  return (
    <div>
      <h2>User: {userProperties.name}</h2>
      <p>Debug Mode: {modulesProperties.debug.enabled ? "Enabled" : "Disabled"}</p>
    </div>
  );
};
\`\`\`
`;

export const Core_AppProvider = () => {
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