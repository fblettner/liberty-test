import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, Menu, MenuItem, SubMenu, Popper, Divider, Button, Div_DialogWidgetButtons } from "liberty-core";
import { useState } from "react";

const markDownPreview = `
# Menu Component

## Component Preview
Below is an interactive example demonstrating the \`Menu\` component with a context menu inside a popper.
`;

const markdownContent = `

## Description
The \`Menu\` component is a floating menu that appears next to an anchor element. It supports different placements, can be used for contextual actions, and can be wrapped inside a \`Popper\`.

## Props

### Menu Props
| Prop                     | Type                                              | Default        | Description |
|--------------------------|--------------------------------------------------|----------------|-------------|
| \`open\`                 | \`boolean\`                                       | \`false\`       | Controls the visibility of the menu. |
| \`anchorEl\`             | \`HTMLElement | null | undefined\`               | \`undefined\`  | The element that the menu is anchored to. |
| \`anchorPosition\`       | \`{ top: number; left: number }\`                 | \`undefined\`  | Manually position the menu. |
| \`onClose\`             | \`() => void\`                                    | \`undefined\`  | Callback when the menu is closed. |
| \`placement\`           | \`"bottom-start" | "bottom-end" | "top-start" | "top-end"\` | \`"bottom-start"\` | The position of the menu relative to the anchor. |
| \`zIndex\`              | \`number\`                                        | \`DefaultZIndex.Menus\` | Controls the stacking order. |
| \`preventBrowserContextMenu\` | \`boolean\`                                  | \`false\`      | Prevents the default browser context menu from appearing. |

### MenuItem Props
| Prop       | Type                              | Default   | Description |
|------------|----------------------------------|-----------|-------------|
| \`onClick\` | \`() => void\`                   | \`undefined\` | Function triggered when the item is clicked. |
| \`startIcon\` | \`ReactNode | React.ElementType\` | \`undefined\` | Icon to be displayed before the text. |

### SubMenu Props
| Prop       | Type                              | Default   | Description |
|------------|----------------------------------|-----------|-------------|
| \`label\`   | \`string\`                       | Required  | The text displayed on the submenu item. |
| \`startIcon\` | \`ReactNode | React.ElementType\` | \`undefined\` | Icon to be displayed before the text. |
| \`children\` | \`ReactNode\`                   | Required  | The submenu content. |

## Example Usage
\`\`\`tsx
import { useState } from "react";
import { Menu, MenuItem, SubMenu, Popper, Divider, Button } from "liberty-core";

export const MenuExample = () => {
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
      <Button onClick={handleOpen}>Open Context Menu</Button>

      <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-end">
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} placement="bottom-end">
          <MenuItem onClick={() => alert("Action 1 clicked")}>Action 1</MenuItem>
          <MenuItem onClick={() => alert("Action 2 clicked")}>Action 2</MenuItem>
          <Divider />
          <SubMenu label="More Options">
            <MenuItem onClick={() => alert("Sub Action 1 clicked")}>Sub Action 1</MenuItem>
            <MenuItem onClick={() => alert("Sub Action 2 clicked")}>Sub Action 2</MenuItem>
          </SubMenu>
          <Divider />
          <MenuItem onClick={() => alert("Closing menu")} onClose={handleClose}>Close</MenuItem>
        </Menu>
      </Popper>
    </div>
  );
};
\`\`\`
`;

export const Core_Menu = () => {
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
        <Div_Markdown>
            <Paper_Table elevation={0} key={"core-menu-1"}>
                <Card>
                    <CardContent>
                        {/* Render markdown documentation */}
                        <MarkDown markdown={markDownPreview} />
                    </CardContent>

                    <CardContent>
                        {/* Render the actual component */}
                        <Div_DialogWidgetButtons>
                            <Button variant="outlined" onClick={handleOpen}>Open Context Menu</Button>
                        </Div_DialogWidgetButtons>

                        <Popper open={open} anchorEl={anchorEl} onClose={handleClose} placement="bottom-end">
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} placement="bottom-end">
                                <MenuItem onClick={() => alert("Action 1 clicked")}>Action 1</MenuItem>
                                <MenuItem onClick={() => alert("Action 2 clicked")}>Action 2</MenuItem>
                                <Divider />
                                <SubMenu label="More Options">
                                    <MenuItem onClick={() => alert("Sub Action 1 clicked")}>Sub Action 1</MenuItem>
                                    <MenuItem onClick={() => alert("Sub Action 2 clicked")}>Sub Action 2</MenuItem>
                                </SubMenu>
                                <Divider />
                                <MenuItem onClick={handleClose}>Close</MenuItem>
                            </Menu>
                        </Popper>
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