import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from '@nomana-it/liberty-core';
import { useAppContext } from '@nomana-it/liberty-core';

const markDownPreview = `
# Modules Configuration

`;

const markdownContent = `
## Description
The \`Modules\` configuration determines which application features are enabled or disabled.

## Data Structure
| Field Name           | Type       | Description |
|----------------------|-----------|-------------|
| \`MODULE_ID\`        | \`string\` | Unique module identifier. |
| \`MODULE_DESCRIPTION\` | \`string\` | Description of the module. |
| \`MODULE_ENABLED\`   | \`boolean\` | Indicates whether the module is active. |
| \`MODULE_PARAMS\`    | \`JSON\`   | Additional configuration for the module. |

## Example Usage
\`\`\`tsx
import { useAppContext } from '@nomana-it/liberty-core';

export const ModulesExample = () => {
  const { modulesProperties } = useAppContext();

  return (
    <div>
      <h2>Modules Status</h2>
      <ul>
        {Object.entries(modulesProperties).map(([key, module]) => (
          <li key={key}>
            <strong>{key}</strong>: {module.enabled ? "Enabled ✅" : "Disabled ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};
\`\`\`
`;

export const Core_Modules = () => {
  const { modulesProperties } = useAppContext();

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
            <h2>Modules Status</h2>
            <ul>
              {Object.entries(modulesProperties).map(([key, module]) => (
                <li key={key}>
                  <strong>{key}</strong>: {module.enabled ? "Enabled ✅" : "Disabled ❌"}
                </li>
              ))}
            </ul>
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