import {
    Card,
    CardContent,
    Div_DialogWidgetContent,
    LYComponentMode,
    LYComponentType,
    MarkDown,
    Paper_Dialogs,
    Paper_Table,
  } from "@nomana-it/liberty-core";
  import { FormsTable } from "@nomana-it/liberty-core";
  import { LYComponentDisplayMode, LYComponentViewMode } from "@nomana-it/liberty-core";
  import { useState } from "react";
  
  const markDownPreview = `
  # FormsTable Component
  
  ## Component Preview
  Below is an interactive example demonstrating the \`FormsTable\` component.
  `;
  
  const markdownContent = `
  ## Description
  The \`FormsTable\` component is a **fully featured table system** designed for complex **enterprise applications**. It provides:
  
  - **Editable rows with validation**
  - **Dynamic context menus**
  - **Column visibility toggles**
  - **Filtering, sorting, and searching**
  - **Batch selection and clipboard integration**
  - **Exporting, importing, and inline editing**
  
  ## Props
  | Prop             | Type               | Default  | Description                                   |
  |-----------------|-------------------|----------|-----------------------------------------------|
  | \`componentProperties\`  | \`ComponentProperties\` | \`-\` | Configuration object defining table structure, filters, and behavior. |
  | \`displayMode\`  | \`LYComponentDisplayMode\` | \`"component"\` | Determines how the table is displayed. |
  | \`viewGrid\`  | \`boolean\` | \`true\`  | Enables or disables the table grid view. |
  | \`viewMode\`  | \`LYComponentViewMode\` | \`"table"\` | Defines the layout mode (tree, list, grid, etc.). |
  | \`onSelectRow\`  | \`(row: ITableRow) => void\` | \`undefined\` | Callback when a row is selected. |
  | \`readonly\`  | \`boolean\` | \`false\` | If true, disables row editing. |
  
  ## Example Usage
  
  ### Using Static Data
  
  \`FormsTable\` can be used with static configuration as shown below:
  
  \`\`\`tsx
  import { FormsTable } from '@nomana-it/liberty-core';
  import { LYComponentDisplayMode, LYComponentViewMode } from '@nomana-it/liberty-core';
  
  export const FormsTableExample = () => {
    return (
      <FormsTable
        componentProperties={{
          id: 1,
          label: "User Data",
          filters: [],
          componentMode: "edit",
        }}
        displayMode={LYComponentDisplayMode.component}
        viewGrid={true}
        viewMode={LYComponentViewMode.table}
        readonly={false}
      />
    );
  };
  \`\`\`
  
  ### Using Data from a Provider
  
  The \`FormsTable\` component can also dynamically receive data from a provider.
  
  #### Example Data Provider
  
  \`\`\`tsx
  export async function getTableProperties() {
      return tableProperties;
  }
  
  export async function getTableData() {
      return tableData;
  }
  \`\`\`
  
  #### Integrating with \`AppProvider\`
  
  \`\`\`tsx
  <AppProvider
    getModules={getModules}
    getApplications={getApplications}
    getToken={getToken}
    getUser={getUser}
    getMenus={getMenus}
    getDashboard={getDashboard}
    getTables={{
        getProperties: getTableProperties,
        getData: getTableData
    }}
  >
  \`\`\`
  
  This ensures that the \`FormsTable\` dynamically receives its configuration and data.
  
  `;
  
  export const Core_FormsTable = () => {
    const [componentProperties] = useState({
      id: 1,
      label: "User Management",
      filters: [],
      componentMode: LYComponentMode.edit,
      showPreviousButton: false,
      isChildren: false,
      type: LYComponentType.FormsTable
    });
  
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
              <Paper_Table elevation={0} key={"table-users"} style={{height: "400px"}}>
              <FormsTable
                componentProperties={componentProperties}
                displayMode={LYComponentDisplayMode.component}
                viewGrid={true}
                viewMode={LYComponentViewMode.table}
                readonly={false}
              />
              </Paper_Table>
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
