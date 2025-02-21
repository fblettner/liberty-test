import {
    Card,
    CardContent,
    Div_DialogWidgetContent,
    FormsUpload,
    LYComponentMode,
    LYComponentType,
    MarkDown,
    Paper_Dialogs,
    Paper_Table,
  } from "@nomana-it/liberty-core";
  import { useState } from "react";
  
  const markDownPreview = `
  # FormsUpload Component
  
  ## Component Preview
  Below is an interactive example demonstrating the \`FormsUpload\` component.
  `;
  
  const markdownContent = `
  ## Description
  The \`FormsUpload\` component provides a **powerful file upload system** 
  specifically designed for **bulk data import in enterprise applications**. 
  
  It extends **FormsTable** functionality, allowing users to **drag and drop** 
  files (Excel), process them, and upload structured data efficiently.
  
  ### **Key Features**
  - **Drag-and-Drop Support**: Seamless file uploads with an intuitive UI.
  - **Excel & CSV Parsing**: Converts uploaded files into structured data.
  - **Dynamic Column Mapping**: Adapts to different file structures.
  - **Error Handling**: Displays errors and warnings in real-time.
  - **Seamless Integration**: Works directly with \`FormsTable\` and data providers.
  
  ## Props
  | Prop                 | Type                  | Default | Description |
  |----------------------|----------------------|---------|-------------|
  | \`componentProperties\` | \`ComponentProperties\` | \`Required\` | Configuration for the upload component. |
  | \`onClose\`         | \`(event: { event: LYComponentEvent }) => void\` | \`Optional\` | Callback triggered when closing the dialog. |
  
  ## Example Usage
  
  ### Simple File Upload
  \`\`\`tsx
  import { FormsUpload } from '@nomana-it/liberty-core';
  
  const componentConfig = {
    id: 3,
    label: "Bulk Import",
    filters: [],
  };
  
  export const BulkImport = () => {
    return <FormsUpload componentProperties={componentConfig} />;
  };
  \`\`\`
  
  ### Handling File Uploads Dynamically
  \`\`\`tsx
  const handleFileUpload = (files: File[]) => {
    console.log("Processing uploaded files:", files);
  };
  
  <FormsUpload
    componentProperties={{
        id: 1,
        label: "User Management",
        filters: [],
        componentMode: LYComponentMode.find,
        showPreviousButton: false,
        isChildren: false,
        type: LYComponentType.FormsUpload
    }}
    onClose={(event) => console.log("Upload closed", event)}
  />
  \`\`\`
  
  ### Integrating with a Data Provider
  \`\`\`tsx
  <AppProvider
    getTables={{
        getProperties: getUploadProperties,
        getData: getUploadData
    }}
  >
  \`\`\`
  `;
  
  export const Core_FormsUpload = () => {
  const [componentProperties] = useState({
    id: 1,
    label: "User Management",
    filters: [],
    componentMode: LYComponentMode.find,
    showPreviousButton: false,
    isChildren: false,
    type: LYComponentType.FormsUpload
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
              <Paper_Table elevation={0} key={"upload-users"} style={{ height: "500px" }}>
                <FormsUpload componentProperties={componentProperties} />
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