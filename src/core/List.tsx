import { 
    Card, 
    CardContent, 
    Div_Markdown, 
    MarkDown, 
    Paper_Table, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemButton, 
    Collapse, 
    LYDashboardIcon,
    LYUploadIcon
  } from "liberty-core";
  import { LYSettingsIcon, LYMenusExpandMoreIcon, LYMenusExpandLessIcon } from "liberty-core";
  import { useState, Fragment } from "react";
  
  const markDownPreview = `
  # List Component
  
  ## Component Preview
  Below is an interactive example demonstrating the \`List\` component.
  `;
  
  const markdownContent = `
  
  ## Description
  The \`List\` component provides a structured way to display lists of items, supporting:
  - **Customizable list density and padding**
  - **Selectable, disabled, and clickable items**
  - **Icons and text combinations**
  - **Collapsible sub-menus for hierarchical navigation**
  
  ## Props
  
  ### **List**
  | Prop      | Type      | Default  | Description |
  |-----------|----------|----------|-------------|
  | \`dense\`  | \`boolean\` | \`false\` | Reduces padding between items. |
  | \`padding\` | \`boolean\` | \`true\`  | Enables padding inside the list. |
  
  ### **ListItem**
  | Prop      | Type      | Default  | Description |
  |-----------|----------|----------|-------------|
  | \`selected\` | \`boolean\` | \`false\` | Highlights the selected item. |
  | \`disabled\` | \`boolean\` | \`false\` | Disables interaction with the item. |
  | \`onClick\` | \`() => void\` | \`-\` | Callback for when item is clicked. |
  
  ### **ListItemButton**
  | Prop      | Type      | Default  | Description |
  |-----------|----------|----------|-------------|
  | \`variant\` | \`"contained" , "outlined" , "text"\` | \`"text"\` | Defines the button style. |
  | \`fullWidth\` | \`boolean\` | \`false\` | Expands button to full width. |
  | \`disabled\` | \`boolean\` | \`false\` | Disables button interaction. |
  | \`selected\` | \`boolean\` | \`false\` | Highlights the selected button. |
  | \`startIcon\` | \`ReactNode\` | \`-\` | Icon before the text. |
  | \`endIcon\` | \`ReactNode\` | \`-\` | Icon after the text. |
  
  ### **Collapse**
  | Prop      | Type      | Default  | Description |
  |-----------|----------|----------|-------------|
  | \`in\` | \`boolean\` | \`false\` | Controls visibility of child components. |
  
  ## Example Usage
  \`\`\`tsx
  import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Collapse 
  } from "liberty-core";
  import { LYReactIcon } from "@ly_styles/icons";
  import { LYHomeIcon, LYSettingsIcon, LYMenusExpandMoreIcon, LYMenusExpandLessIcon } from "@ly_styles/icons";
  import { useState, Fragment } from "react";
  
  export const ListExample = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <List>
        <Fragment>
          <ListItem>
            <ListItemButton
              variant="text"
              fullWidth
              onClick={() => setOpen(!open)}
              startIcon={LYHomeIcon}
              endIcon={open ? LYMenusExpandLessIcon : LYMenusExpandMoreIcon}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
  
          <Collapse in={open}>
            <List padding={false}>
              <ListItem>
                <ListItemButton variant="text" fullWidth startIcon={LYSettingsIcon}>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </Fragment>
      </List>
    );
  };
  \`\`\`
  `;
  
  export const Core_List = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <Div_Markdown>
        <Paper_Table elevation={0} key={"core-list-1"}>
          <Card>
            <CardContent>
              {/* Render markdown documentation */}
              <MarkDown markdown={markDownPreview} />
            </CardContent>
  
            <CardContent>
              {/* Render the actual component */}
              <List>
                <Fragment>
                    <ListItem>
                        <ListItemButton variant="text" fullWidth startIcon={LYDashboardIcon}>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                  <ListItem>
                    <ListItemButton
                      variant="text"
                      fullWidth
                      onClick={() => setOpen(!open)}
                      startIcon={LYSettingsIcon}
                      endIcon={open ? LYMenusExpandLessIcon : LYMenusExpandMoreIcon}
                    >
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                  </ListItem>
  
                  <Collapse in={open}>
                    <List padding={false}>
                      <ListItem>
                        <ListItemButton variant="text" fullWidth startIcon={LYUploadIcon}>
                          <ListItemText primary="Upload file" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Collapse>
                </Fragment>
              </List>
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