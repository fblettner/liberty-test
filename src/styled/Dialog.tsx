import { Card, CardContent, Dialog_Actions, Dialog_Content, Dialog_Title, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, Typography } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Dialog Components

## Component Preview
Below is an interactive example demonstrating various styled dialog components from Liberty Core.
`;

const markdownContent = `
## Description
The \`Dialog\` components provide structured elements for building modal dialogs with proper styling, responsiveness, and accessibility.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| \`variant\`  | \`"primary", "secondary"\` | \`"primary"\` | Defines the typography variant for the title. |
| \`fontSize\` | \`string, number\` | \`18px\` | Defines the font size of the title. |
| \`fontWeight\` | \`string, number\` | \`bold\` | Sets the font weight of the title. |
| \`background\` | \`string\` | \`theme.background.default\` | Background color of the dialog content or actions. |
| \`padding\` | \`string, number\` | \`theme.spacing(2)\` | Defines padding for dialog components. |
| \`borderTop\` | \`string\` | \`theme.palette.divider\` | Adds a separator on top of the actions container. |
| \`overflowY\` | \`string\` | \`auto\` | Enables vertical scrolling for long content. |

## Example Usage

### Basic Dialog Title
\`\`\`tsx
import { Dialog_Title } from '@nomana-it/liberty-core';

export const DialogTitleExample = () => {
  return (
    <Dialog_Title>
      Dialog Header
    </Dialog_Title>
  );
};
\`\`\`

---

# Predefined Styled Dialog Components

Liberty Core provides a collection of predefined styled \`Dialog\` components to simplify modal UI development.

### **General Styled Dialog Components**
- \`Dialog_Title\`
- \`Dialog_Content\`
- \`Dialog_Actions\`

### **Detailed Predefined Components**

#### **Dialog_Title**
A styled typography component for dialog headers.

\`\`\`tsx
import { Dialog_Title } from '@nomana-it/liberty-core';

<Dialog_Title>
  Dialog Header
</Dialog_Title>
\`\`\`

#### **Dialog_Content**
A scrollable container for dialog content.

\`\`\`tsx
import { Dialog_Content } from '@nomana-it/liberty-core';

<Dialog_Content>
  This is the content inside a dialog.
</Dialog_Content>
\`\`\`

#### **Dialog_Actions**
A flex container for dialog action buttons.

\`\`\`tsx
import { Dialog_Actions } from '@nomana-it/liberty-core';
import { Button } from '@nomana-it/liberty-core';

<Dialog_Actions>
  <Button variant="outlined">Cancel</Button>
  <Button variant="contained">Confirm</Button>
</Dialog_Actions>
\`\`\`

`;

export const Core_StyledDialogDocumentation = () => {
    return (
        <Paper_Dialogs>
            <Div_DialogWidgetContent>
                <Card>
                    <CardContent>
                        {/* Render markdown documentation */}
                        <MarkDown markdown={markDownPreview} />
                    </CardContent>

                    <CardContent>
                        {/* Render the actual components */}
                        <Dialog_Title>Dialog Header</Dialog_Title>
                        <Dialog_Content>
                            This is the content inside a dialog.
                        </Dialog_Content>
                        <Dialog_Actions>
                            <Typography>Actions</Typography>
                        </Dialog_Actions>
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