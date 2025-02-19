import { Card, CardContent, MarkDown, Popper, Button, Div_DialogWidgetButtons, Div_DialogWidgetContent, Paper_Dialogs } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# Popper Component

## Component Preview
Below is an interactive example demonstrating the \`Popper\` component.
`;

const markdownContent = `

## Description
The \`Popper\` component provides a floating UI container that appears next to an anchor element. It supports various placements and can be configured as a modal.

## Props

| Prop          | Type                                      | Default        | Description |
|--------------|------------------------------------------|----------------|-------------|
| \`open\`      | \`boolean\`                              | \`false\`       | Controls the visibility of the popper. |
| \`anchorEl\`  | \`HTMLElement | null | undefined\`       | \`undefined\`  | The element that the popper is anchored to. |
| \`placement\` | \`"top" | "bottom" | "left" | "right" | "bottom-start" | "bottom-end"\` | \`"bottom-start"\` | The position of the popper relative to the anchor. |
| \`disablePortal\` | \`boolean\`                           | \`false\`      | If true, the popper will not be rendered inside a portal. |
| \`modal\`     | \`boolean\`                              | \`false\`      | If true, a backdrop is shown behind the popper, making it act like a modal. |
| \`onClose\`   | \`() => void\`                           | \`undefined\`  | Callback triggered when the popper is closed. |

## Example Usage
\`\`\`tsx
import { useState } from "react";
import { Popper, Button } from "liberty-core";

export const PopperExample = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Popper</Button>

      <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-start">
        <div style={{ padding: "10px", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          This is a popper content.
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Popper>
    </div>
  );
};
\`\`\`
`;

export const Core_Popper = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

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
                        <Div_DialogWidgetButtons>
                            <Button variant="outlined" onClick={handleOpen}>Open Popper</Button>
                        </Div_DialogWidgetButtons>

                        <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-start">
                            <div style={{ padding: "10px", background: "#3366ff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
                                This is a popper content.
                                <Button onClick={handleClose}>Close</Button>
                            </div>
                        </Popper>
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