import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table } from "liberty-core";
import { useAppContext } from "liberty-core";
import { EUsers } from "liberty-core";
import { useEffect, useState } from "react";
import { getUser } from "../data/user";

const markDownPreview = `
# Users Configuration

## Component Preview
Below is an interactive example demonstrating how users are configured within the \`AppProvider\`.
`;

const markdownContent = `
## Description
The \`Users Configuration\` defines user profiles within the Liberty Framework. Each user has settings such as their role, status, language, theme, and permissions.

## Data Structure
| Field Name       | Type       | Description |
|-----------------|-----------|-------------|
| \`USR_ID\`        | \`string\` | Unique user identifier. |
| \`USR_PASSWORD\`  | \`string\` | User’s password (hashed or stored securely). |
| \`USR_NAME\`      | \`string\` | The full name of the user. |
| \`USR_EMAIL\`     | \`string\` | The user’s email address. |
| \`USR_STATUS\`    | \`"Y" | "N"\` | Indicates if the user is active. |
| \`USR_ADMIN\`     | \`"Y" | "N"\` | Defines if the user has admin privileges. |
| \`USR_LANGUAGE\`  | \`string\` | Preferred language of the user. |
| \`USR_MODE\`      | \`"dark" | "light"\` | UI theme preference (dark/light mode). |
| \`USR_READONLY\`  | \`"Y" | "N"\` | Determines if the user has read-only access. |
| \`USR_DASHBOARD\` | \`number | undefined\` | The dashboard assigned to the user. |
| \`USR_THEME\`     | \`string\` | The theme applied to the user’s UI. |

## Example Usage
\`\`\`tsx
import { useAppContext } from "liberty-core";

export const UsersExample = () => {
  const { userProperties } = useAppContext();

  return (
    <div>
      <h2>Current User</h2>
      <ul>
        <li><strong>Name:</strong> {userProperties.name}</li>
        <li><strong>Email:</strong> {userProperties.email}</li>
        <li><strong>Theme:</strong> {userProperties.theme}</li>
      </ul>
    </div>
  );
};
\`\`\`
`;

export const Core_Users = () => {
  const { userProperties } = useAppContext();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(userProperties[EUsers.id]);
      setCurrentUser(userData.items[0] || {});
    };

    fetchUser();
  }, [userProperties]);

  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-users-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <h2>Current User</h2>
            {currentUser ? (
              <ul>
                <li><strong>Name:</strong> {currentUser[EUsers.name]}</li>
                <li><strong>Email:</strong> {currentUser[EUsers.email]}</li>
                <li><strong>Theme:</strong> {currentUser[EUsers.theme]}</li>
                <li><strong>Admin:</strong> {currentUser[EUsers.admin] === "Y" ? "Yes" : "No"}</li>
              </ul>
            ) : (
              <p>Loading user information...</p>
            )}
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