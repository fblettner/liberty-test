import { Card, CardContent, MarkDown, Input, Button, Div_AppsLogin, Typography, Div_DialogWidgetContent, Paper_Dialogs } from "liberty-core";
import { useState } from "react";
import { getToken } from "../data/token";

const markDownPreview = `
# Authentication & Token Management

## Component Preview
Below is an interactive example demonstrating the authentication and token retrieval process.
`;

const markdownContent = `
## Description
The authentication system in Liberty Framework uses an access token mechanism. A user provides their credentials, and if authenticated, they receive an access token.

## Data Structure
### **Successful Response**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| \`access_token\`  | \`string\` | The generated token for the session. |
| \`token_type\`    | \`string\` | Type of token, usually \`"bearer"\`. |
| \`status\`       | \`"success"\` | Indicates authentication was successful. |
| \`message\`      | \`string\` | Message confirming login success. |

### **Failed Response (Login Error)**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| \`access_token\`  | \`string\` | Empty, as login failed. |
| \`token_type\`    | \`string\` | Type of token, usually \`"bearer"\`. |
| \`status\`       | \`"failed"\` | Indicates authentication failure. |
| \`message\`      | \`string\` | Error message \`"loginError"\`. |

### **Failed Response (Password Error)**
| Field Name   | Type   | Description |
|-------------|--------|-------------|
| \`access_token\`  | \`string\` | Empty, as authentication failed. |
| \`token_type\`    | \`string\` | Type of token, usually \`"bearer"\`. |
| \`status\`       | \`"failed"\` | Indicates authentication failure. |
| \`message\`      | \`string\` | Error message \`"passwordError"\`. |

## Example Usage
\`\`\`tsx
import { getToken } from "liberty-core";

export const AuthenticationExample = async () => {
  const response = await getToken("admin", "admin");

  if (response.status === "success") {
    console.log("Access Token:", response.access_token);
  } else {
    console.error("Authentication Failed:", response.message);
  }
};
\`\`\`
`;

export const Core_Authentication = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [authResponse, setAuthResponse] = useState<any>(null);

  const handleLogin = async () => {
    const response = await getToken(userId, password);
    setAuthResponse(response);
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
            {/* Interactive Login Form using reusable Input and Button components */}
            <Typography variant="h5" gutterBottom>Test Authentication</Typography>
            <Div_AppsLogin>
            <Input
              label="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              fullWidth 
              id="user"     
              variant="standard"       
            />
            </Div_AppsLogin>
            <Div_AppsLogin>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              id="password"   
              variant="standard"
            />
            </Div_AppsLogin>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
              Login
            </Button>

            {/* Display Authentication Response */}
            {authResponse && (
              <div>
                <h3>Response</h3>
                <p><strong>Status:</strong> {authResponse.status}</p>
                <p><strong>Message:</strong> {authResponse.message}</p>
                {authResponse.access_token && (
                  <p><strong>Access Token:</strong> {authResponse.access_token}</p>
                )}
              </div>
            )}
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