import { AppsHeader, Card, CardContent, MarkDown, Paper_Table } from "liberty-core";

const markdownContent = `
# AppsHeader Component

## Description
The \`AppsHeader\` component provides a standard header with multiple actions such as:
- Opening a menu drawer
- Toggling dark mode
- Opening user settings
- Opening chat
- Signing out

## Props
| Prop                 | Type          | Description                    |
|----------------------|--------------|--------------------------------|
| \`onToggleMenusDrawer\` | \`() => void\` | Callback for opening the menu drawer |
| \`onToggleDarkMode\` | \`() => void\` | Callback for toggling dark mode |
| \`onToggleUserSettings\` | \`() => void\` | Callback for user settings |
| \`onToggleChat\` | \`() => void\` | Callback for opening chat |
| \`onSignout\` | \`() => void\` | Callback for signing out |

## Example Usage
\`\`\`tsx
import { AppsHeader } from "liberty-core";

export const AppHeaderExample = () => {
  const onToggleMenusDrawer = () => {
    alert("Open Menu");
  };

  const onToggleDarkMode = () => {
    alert("Toggle Dark Mode");
  };

  const onToggleUserSettings = () => {
    alert("Open User Settings");
  };

  const onToggleChat = () => {
    alert("Open Chat");
  };

  const onSignout = () => {
    alert("Signout");
  };

  return (
    <AppsHeader
      onToggleMenusDrawer={onToggleMenusDrawer}
      onToggleDarkMode={onToggleDarkMode}
      onToggleChat={onToggleChat}
      onToggleUserSettings={onToggleUserSettings}
      onSignout={onSignout}
    />
  );
};
\`\`\`

# Component Preview
`;

export const Core_AppsHeader = () => {
  return (
    <Paper_Table elevation={0} key={"core-apps-header-1"}>
    <Card >
      <CardContent>
        {/* Render markdown documentation */}
        <MarkDown markdown={markdownContent} />
      </CardContent>

      <CardContent>
        {/* Render the actual component */}
        <AppsHeader
          onToggleMenusDrawer={() => alert("Open Menu")}
          onToggleDarkMode={() => alert("Toggle Dark Mode")}
          onToggleChat={() => alert("Open Chat")}
          onToggleUserSettings={() => alert("Open User Settings")}
          onSignout={() => alert("Signout")}
        />
      </CardContent>


    </Card>
    </Paper_Table>
  );
};