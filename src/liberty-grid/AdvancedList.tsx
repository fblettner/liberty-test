import {
  Card,
  CardContent,
  Div_DialogWidgetContent,
  FormsList,
  LYComponentMode,
  LYComponentType,
  MarkDown,
  Paper_Dialogs,
  Paper_Table,
} from "@nomana-it/liberty-core";
import { useState } from "react";

const markDownPreview = `
# FormsList Component

## Component Preview
Below is an interactive example demonstrating the \`FormsList\` component.
`;

const markdownContent = `
## Description
The \`FormsList\` component is a **specialized version of the FormsTable component** 
designed to display data in a **list view**.

### **How is FormsList different from FormsTable?**
- **Optimized for list-based data representation.**
- **Retains the core functionalities of FormsTable** while simplifying the grid view.
- **Ideal for scenarios where inline editing and advanced grid actions are not required.**

## Key Features
- **Dynamic Data Handling**: Automatically fetches and displays structured data.
- **Configurable Columns**: Supports visibility toggles, sorting, and filtering.
- **Component-Based Integration**: Works seamlessly with \`@nomana-it/liberty-core\` ecosystem.

## Props
| Prop                 | Type                  | Default | Description |
|----------------------|----------------------|---------|-------------|
| \`componentProperties\` | \`ComponentProperties\` | \`Required\` | Configuration for the list component. |
| \`readonly\`         | \`boolean\`           | \`false\` | If true, disables row editing. |

## Example Usage

### Simple List Display
\`\`\`tsx
import { FormsList } from '@nomana-it/liberty-core';

const componentConfig = {
  id: 2,
  label: "Product List",
  filters: [],
  componentMode: "find"
};

export const ProductList = () => {
  return <FormsList componentProperties={componentConfig} />;
};
\`\`\`

### Using Data from a Provider
\`\`\`tsx
export async function getListProperties() {
    return listProperties;
}

export async function getListData() {
    return listData;
}

<AppProvider
  getTables={{
      getProperties: getListProperties,
      getData: getListData
  }}
>
\`\`\`
`;

export const Core_FormsList = () => {
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
            <Paper_Table elevation={0} key={"table-users"} style={{ height: "400px" }}>
              <FormsList componentProperties={componentProperties} />
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