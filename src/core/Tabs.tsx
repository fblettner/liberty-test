import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, Tab, Tabs } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# Tabs Component

## Component Preview
Below is an interactive example demonstrating the \`Tabs\` and \`Tab\` components.
`;

const markdownContent = `

## Description
The \`Tabs\` and \`Tab\` components allow navigation between different views or settings. It supports standard and scrollable variants.

## Props - Tabs
| Prop           | Type                                   | Default      | Description                                      |
|---------------|--------------------------------------|--------------|--------------------------------------------------|
| \`value\`       | \`string\`                              | -            | The currently selected tab value.               |
| \`onChange\`    | \`(event, newValue: string) => void\`  | -            | Callback function triggered when a tab is clicked. |
| \`variant\`     | \`"standard" | "scrollable"\`           | \`"standard"\` | Defines if the tabs are standard or scrollable. |
| \`scrollButtons\` | \`boolean\`                          | \`false\`     | Enables scroll buttons for overflow tabs.       |

## Props - Tab
| Prop         | Type                  | Default  | Description                                   |
|-------------|----------------------|----------|-----------------------------------------------|
| \`id\`       | \`string\`             | -        | Unique identifier for the tab.                |
| \`label\`    | \`string | ReactNode\`  | -        | Label displayed inside the tab.               |
| \`value\`    | \`string\`             | -        | The value of the tab, used for selection.     |
| \`isActive\` | \`boolean\`            | \`false\` | Determines if the tab is currently active.    |
| \`onClick\`  | \`(event) => void\`    | -        | Event triggered when the tab is clicked.      |

## Example Usage
\`\`\`tsx
import { Tab, Tabs } from "liberty-core";
import { useState } from "react";

export const TabsExample = () => {
  const [selectedTab, setSelectedTab] = useState("general");

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab id="general" label="General" value="general" />
        <Tab id="advanced" label="Advanced" value="advanced" />
        <Tab id="settings" label="Settings" value="settings" />
      </Tabs>

      <div style={{ marginTop: "16px", padding: "8px", border: "1px solid #ddd" }}>
        {selectedTab === "general" && <p>General Settings Content</p>}
        {selectedTab === "advanced" && <p>Advanced Settings Content</p>}
        {selectedTab === "settings" && <p>Settings Panel Content</p>}
      </div>
    </div>
  );
};
\`\`\`
`;

export const Core_Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("general");

interface TabChangeEvent {
    target: EventTarget;
}

const handleTabChange = (_event: TabChangeEvent, newValue: string): void => {
    setSelectedTab(newValue);
};

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Component Preview */}
            <Tabs value={selectedTab} onChange={handleTabChange}>
              <Tab id="general" key="general" label="General" value="general" />
              <Tab id="advanced" key="advanced" label="Advanced" value="advanced" />
              <Tab id="settings" key="settings" label="Settings" value="settings" />
            </Tabs>

            <div style={{ marginTop: "16px", padding: "8px", border: "1px solid #ddd" }}>
              {selectedTab === "general" && <p>General Settings Content</p>}
              {selectedTab === "advanced" && <p>Advanced Settings Content</p>}
              {selectedTab === "settings" && <p>Settings Panel Content</p>}
            </div>
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