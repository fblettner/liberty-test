import { Button_Login, Card, CardContent, Div_AppsLogin, Div_DialogWidgetContent, Form_Login, Input_White, MarkDown, Paper_Dialogs, t } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Form Components

## Component Preview
Below is an interactive example demonstrating various styled form components from Liberty Core.
`;

const markdownContent = `
## Description
The \`Form\` components provide styled wrappers for HTML forms, ensuring consistent spacing and layout in authentication pages and user input sections.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| \`width\`  | \`string | number\` | \`100%\`  | Defines the form width to ensure proper responsiveness. |
| \`marginTop\` | \`string | number\` | \`theme.spacing(1)\` | Sets the top margin for spacing and alignment. |

## Example Usage

### Basic Login Form
\`\`\`tsx
import { Form_Login } from '@nomana-it/liberty-core';

export const LoginFormExample = () => {
  return (
    <Form_Login>
        <Div_AppsLogin>
            <Input_White
                variant="standard"
                required
                fullWidth
                id="userid"
                label={t("login.userid")}
                name="user"
                autoComplete="user"
                autoFocus
            />
        </Div_AppsLogin>
        <Div_AppsLogin>
            <Input_White
                variant="standard"
                required
                fullWidth
                name="password"
                label={t("login.password")}
                type="password"
                id="password"
                autoComplete="off"
            />
        </Div_AppsLogin>
        <Button_Login type="submit" fullWidth variant="contained">
            {t("login.loginButton")}
        </Button_Login>
    </Form_Login>
  );
};
\`\`\`

---

# Predefined Styled Form Components

Liberty Core provides predefined styled \`form\` components to simplify UI development.

### **General Styled Forms**
- \`Form_Login\`

\`\`\`

`;

export const Core_StyledFormDocumentation = () => {
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
                        <Form_Login>
                            <Div_AppsLogin>
                                <Input_White
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="userid"
                                    label={t("login.userid")}
                                    name="user"
                                    autoComplete="user"
                                    autoFocus
                                />
                            </Div_AppsLogin>
                            <Div_AppsLogin>
                                <Input_White
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="password"
                                    label={t("login.password")}
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                />
                            </Div_AppsLogin>
                            <Button_Login type="submit" fullWidth variant="contained">
                                {t("login.loginButton")}
                            </Button_Login>
                        </Form_Login>
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