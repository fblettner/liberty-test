import { Card, CardContent, Div, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "@nomana-it/liberty-core";

const markDownPreview = `
# Styled Div Components

## Component Preview
Below is an interactive example demonstrating various styled div components.
`;

const markdownContent = `
## Description
The \`Div\` component is a styled wrapper based on \`styled.div\` from Emotion. It provides a flexible and reusable way to apply styles consistently across different UI elements. The library also includes multiple predefined \`Div\` components for various use cases.

## Props
| Prop             | Type               | Default  | Description                                   |
|-----------------|-------------------|----------|-----------------------------------------------|
| \`display\`  | \`string\` | \`block\`  | Defines the CSS display property. Supports 'flex', 'grid', etc. |
| \`flexDirection\`  | \`'row' | 'row-reverse' | 'column' | 'column-reverse'\` | \`undefined\` | Sets the flex direction when using flexbox. |
| \`justifyContent\` | \`string\` | \`undefined\` | Aligns children within the div along the main axis. |
| \`alignItems\` | \`string\` | \`undefined\` | Aligns children within the div along the cross-axis. |
| \`gap\` | \`string | number\` | \`undefined\` | Specifies the spacing between child elements. |
| \`padding\` | \`string | number\` | \`undefined\` | Defines padding inside the div. |
| \`margin\` | \`string | number\` | \`undefined\` | Defines margin outside the div. |
| \`position\` | \`'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'\` | \`undefined\` | Sets the CSS positioning of the div. |
| \`width\` | \`string | number\` | \`undefined\` | Defines the width of the div. |
| \`elevation\` | \`number\` | \`0\` | Applies Material-like shadow elevation to the div (0-5 levels supported). |

## Example Usage

### Basic Styled Div
\`\`\`tsx
import { Div } from '@nomana-it/liberty-core';

export const StyledDivExample = () => {
  return (
    <Div display="flex" justifyContent="center" alignItems="center" padding="16px" background="#f0f0f0">
      This is a styled div with flexbox properties.
    </Div>
  );
};
\`\`\`

### Predefined Styled Components

Liberty Core provides a collection of predefined styled \`Div\` components to simplify UI development.

### **General Styled Divs**
- \`Div\`
- \`Div_Users\`
- \`Div_UISettings\`
- \`Div_AppsLogin\`
- \`Div_ColumnsFilter\`
- \`Div_Export\`
- \`Div_Loading\`
- \`Div_Login\`
- \`Div_AutoComplete\`
- \`Div_AutoCompleteInput\`
- \`Div_FormsToolsCard\`
- \`Div_ContentWrapper\`

### **Dialog and Widget Components**
- \`Div_DialogToolbar\`
- \`Div_DialogToolbarButtons\`
- \`Div_DialogToolbarButtonsEnd\`
- \`Div_DialogWidget\`
- \`Div_DialogWidgetTitle\`
- \`Div_DialogWidgetTitleButtons\`
- \`Div_DialogWidgetContent\`
- \`Div_DialogWidgetButtons\`
- \`Div_DialogTabPanel\`

### **Table and Grid Components**
- \`Div_TableToolbar\`
- \`Div_TableToolbarButtons\`
- \`Div_TableProgress\`
- \`Div_TableHeaderContent\`
- \`Div_TableHeaderButtons\`
- \`Div_TableHeaderReisze\`
- \`Div_TableResultsOverlay\`
- \`Div_TableFooter\`
- \`Div_TableFooterContent\`
- \`Div_TableCell\`
- \`Div_TableGrid\`
- \`Div_TableGridContent\`
- \`Div_TableTreeTitle\`
- \`Div_TableList\`
- \`Div_TableFilters\`
- \`Div_TableToolbarButtons\`
- \`Div_TableExpander\`
- \`Div_TableSearch\`
- \`Div_TableColumnsChooser\`
- \`Div_TableAllColumnsChooser\`

### **Chat and AI Components**
- \`Div_ChatContent\`
- \`Div_ChatActions\`
- \`Div_ChatScrollButtons\`
- \`Div_FormsChat\`
- \`Div_InputChat\`
- \`Div_AIProgress\`
- \`Div_AIError\`

### **Header and Navigation Components**
- \`Div_Header\`
- \`Div_HeaderDrawer\`
- \`Div_HeaderIcons\`
- \`Div_HeaderToolbar\`
- \`Div_HeaderAppBar\`

### **Drawer Components**
- \`Div_DrawerOverlay\`
- \`Div_DrawerContainer\`
- \`Div_DrawerContent\`
- \`Div_DrawerHeader\`
- \`Div_DrawerPanel\`
- \`Div_DrawerPanelDynamic\`

### **Specialized UI Components**
- \`Div_ExportGroup\`
- \`Div_Markdown\`
- \`Div_Inline\`
- \`Div_TableFab\`
- \`Div_ResizeBox\`
- \`Div_ColorPicker\`
- \`Div_ColorPickerPreview\`
- \`Div_InputColor\`
- \`Div_ListItem\`
- \`Div_ListItemText\`
- \`Div_FormsListView\`
- \`Div_StyledGridOverlay\`
- \`Div_ChatTitle\`
- \`Div_DialogWidgetTitle\`
- \`Div_DialogWidgetButtons\`
- \`Div_TabPanelContent\`
- \`Div_AppsLayout\`
- \`Div_AppsTabsHeader\`
- \`Div_AppsDialogTabPanel\`
\`\`\`
`;

export const Core_StyledDivDocumentation = () => {
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
                        <Div display="flex" justifyContent="center" alignItems="center" padding="16px">
                            This is a styled div with flexbox properties.
                        </Div>
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
