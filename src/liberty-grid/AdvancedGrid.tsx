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

  ---

  # Table Properties Documentation
  
  ## Overview
  The **Table Properties** define the structure, behavior, and metadata associated with a **FormsTable** component.
  
  These properties control:
  - **Database Connection & Queries**: Identifying the table and its associated query.
  - **User Interaction**: Editable, uploadable, and searchable capabilities.
  - **Column Properties**: Data types, validation rules, and visibility settings.
  
    ## **Table Metadata Schema**
  Each table has the following properties:
  
  | Property | Type | Description |
  |----------|------|-------------|
  | \`TBL_ID\` | number | Unique identifier for the table. |
  | \`TBL_LABEL\` | text | A user-friendly description of the table. |
  | \`TBL_DB_NAME\` | text | The database name where the table resides. |
  | \`TBL_QUERY_ID\` | number | The query ID associated with the table. |
  | \`TBL_EDITABLE\` | boolean | Defines if the table is editable. |
  | \`TBL_UPLOADABLE\` | boolean | Specifies if the table allows data uploads. |
  | \`TBL_AUDIT\` | boolean | Enables auditing for the table. |
  | \`TBL_CTX_ID\` | number | Context ID linking the table to specific menus. |
  | \`TBL_TREE_ID\` | number | Defines if the table follows a hierarchical structure. |
  | \`TBL_FRM_ID\` | number | Links the table to a predefined form for UI interaction. |
  | \`TBL_AUTO_LOAD\` | boolean | Enables automatic data loading on startup. |
  | \`TBL_BURST\` | boolean | Allows burst data export. |
  | \`TBL_WORKBOOK\` | text | Associates a workbook for data reporting. |
  
  ---
  
  ## **Column Properties Schema**
  Each table consists of multiple columns, each having a specific role.
  
  | Property | Type | Description |
  |----------|------|-------------|
  | \`COL_ID\` | number | Unique identifier for the column. |
  | \`COL_SEQ\` | number | Specifies column order. |
  | \`COL_LABEL\` | text | Display name of the column. |
  | \`COL_TARGET\` | text | Database field mapped to the column. |
  | \`COL_TYPE\` | text | Defines the data type (text, number, boolean, date). |
  | \`COL_RULES\` | text | Validation rules applied to the column. |
  | \`COL_RULES_VALUES\` | text | Acceptable values for validation. |
  | \`COL_DEFAULT\` | text | Default value assigned if empty. |
  | \`COL_KEY\` | boolean | Identifies if this column is a primary key. |
  | \`COL_VISIBLE\` | boolean | Controls if the column is visible in the UI. |
  | \`COL_DISABLED\` | boolean | Disables column editing. |
  | \`COL_REQUIRED\` | boolean | Marks the column as mandatory. |
  | \`COL_FILTER\` | boolean | Specifies if the column is used for filtering. |
  | \`COL_CDN_ID\` | number | ID used for conditional display logic. |
  `;
  
  export const Core_FormsTable = () => {
    const [componentProperties] = useState({
      id: 1,
      label: "User Management",
      filters: [],
      componentMode: LYComponentMode.find,
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
