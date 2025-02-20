import { Card, CardContent, MarkDown, Button, Dialog, Dialog_Title, Dialog_Content, Dialog_Actions, LYCancelIcon, t, Paper_Popup, Div_DialogWidgetContent, Paper_Dialogs } from '@nomana-it/liberty-core';
import { useState } from "react";

const markDownPreview = `
# Dialog Component

## Component Preview
Below is an interactive example demonstrating the \`Dialog\` component.
`;

const markdownContent = `
## Description
The \`Dialog\` component is a modal dialog that appears over the main content. It supports customizable backdrop behavior, ESC key closing, and scroll options.

### Styled Subcomponents
| Component         | Description                                          |
|------------------|------------------------------------------------------|
| \`Dialog_Title\`  | The title of the dialog.                           |
| \`Dialog_Content\` | The main content area of the dialog.              |
| \`Dialog_Actions\` | A section for placing action buttons.             |

## Props
| Prop                  | Type                      | Default    | Description                                       |
|----------------------|-------------------------|------------|---------------------------------------------------|
| \`open\`             | \`boolean\`               | \`false\`   | Controls whether the dialog is visible.          |
| \`onClose\`          | \`() => void\`            | \`undefined\` | Callback function when the dialog is closed.    |
| \`maxWidth\`        | \`string\`                | \`"600px"\`  | The maximum width of the dialog.                |
| \`disableBackdropClick\` | \`boolean\`         | \`false\`    | Prevents closing when clicking the backdrop.     |
| \`closeOnEsc\`      | \`boolean\`               | \`true\`     | Allows closing the dialog by pressing ESC.       |
| \`scroll\`          | \`"paper" , "body"\`      | \`"paper"\`  | Controls the scrolling behavior inside the dialog. |

## Example Usage
\`\`\`tsx
import { Dialog, Button, Dialog_Title, Dialog_Content, Dialog_Actions } from '@nomana-it/liberty-core';
import { useState } from "react";
import { t } from "i18next";
import { LYCancelIcon } from "@ly_styles/icons";

export const DialogExample = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="500px" closeOnEsc>
        <Paper_Popup>
            <Dialog_Title>Dialog Title</Dialog_Title>
            <Dialog_Content>
            This is a simple dialog content area.
            </Dialog_Content>
            <Dialog_Actions>
            <Button variant="outlined" onClick={handleClose} startIcon={LYCancelIcon}>
                {t('button.close')}
            </Button>
            </Dialog_Actions>
        </Paper_Popup>
      </Dialog>
    </div>
  );
};
\`\`\`
`;

export const Core_Dialog = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
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
                        {/* Render the actual component */}
                        <Button variant="outlined" onClick={() => setOpen(true)}>Open Dialog</Button>
                        <Dialog open={open} onClose={handleClose} maxWidth="500px" closeOnEsc>
                            <Paper_Popup>
                                <Dialog_Title>Dialog Title</Dialog_Title>
                                <Dialog_Content>
                                    This is a simple dialog content area.
                                </Dialog_Content>
                                <Dialog_Actions>
                                    <Button variant="outlined" onClick={handleClose} startIcon={LYCancelIcon}>
                                        {t('button.close')}
                                    </Button>
                                </Dialog_Actions>
                            </Paper_Popup>
                        </Dialog>
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