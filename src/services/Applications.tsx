import { Card, CardContent, Div_Markdown, EApplications, MarkDown, Paper_Table } from "liberty-core";
import { useAppContext } from "liberty-core";
import { getApplications } from "../data/applications";
import { useEffect, useState } from "react";

const markDownPreview = `
# Applications Configuration

## Component Preview
Below is an interactive example demonstrating how applications are configured within the \`AppProvider\`.
`;

const markdownContent = `
## Description
The \`Applications Configuration\` defines multiple applications within the Liberty Framework. Each application has specific settings such as offset, limit, version, dashboard, and theme.

## Data Structure
| Field Name       | Type       | Description |
|-----------------|-----------|-------------|
| \`APPS_ID\`        | \`number\` | Unique application identifier. |
| \`APPS_NAME\`      | \`string\` | The name of the application. |
| \`APPS_DESCRIPTION\` | \`string\` | Description of the application’s purpose. |
| \`APPS_POOL\`      | \`string\` | The database connection pool used by the application. |
| \`APPS_OFFSET\`    | \`number\` | The default offset value for queries. |
| \`APPS_LIMIT\`     | \`number\` | The maximum number of records per query. |
| \`APPS_VERSION\`   | \`string\` | The current version of the application. |
| \`APPS_DASHBOARD\` | \`number | undefined\` | The dashboard ID associated with the app. |
| \`APPS_THEME\`     | \`string\` | The theme applied to the application. |
| \`APPS_SESSION\`   | \`string\` | The session mode (e.g., \`session\`). |
| \`APPS_JWT_TOKEN\` | \`string\` | JWT token for authentication (if applicable). |

## Example Usage
\`\`\`tsx
import { useAppContext } from "liberty-core";

export const ApplicationsExample = () => {
  const { appsProperties } = useAppContext();

  return (
    <div>
      <h2>Available Applications</h2>
      <ul>
        {Object.entries(appsProperties).map(([key, app]) => (
          <li key={key}>
            <strong>{app.name}</strong> - {app.description} (Version: {app.version})
          </li>
        ))}
      </ul>
    </div>
  );
};
\`\`\`
`;

export const Core_Applications = () => {
  const { appsProperties } = useAppContext();
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const appsData = await getApplications();
      setApplications(appsData.items);
    };

    fetchApplications();
  }, []);

  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-applications-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>


          <CardContent>
            {/* Render the actual component */}
            <h2>Available Applications</h2>
            <ul>
              {Object.values(applications).map((app, index) => (
                <li key={index}>
                  <strong>{app[EApplications.name]}</strong> - {app[EApplications.description]} (Version: {app[EApplications.version]})
                </li>
              ))}
            </ul>
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <h2>Current Application</h2>
            <ul>
                <li key="apps-current-1">
                  <strong>{appsProperties[EApplications.name]}</strong> - {appsProperties[EApplications.description]} (Version: {appsProperties[EApplications.version]})
                </li>
            </ul>
          </CardContent>

          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markdownContent} />
          </CardContent>
        </Card>
      </Paper_Table>
    </Div_Markdown>
  );
};