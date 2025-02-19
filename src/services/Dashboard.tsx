import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";
import { getDashboard } from "../data/dashboard";
import { useEffect, useState } from "react";

const markDownPreview = `
# Dashboard Configuration
`;

const markdownContent = `
## Description
The **Dashboard Configuration** defines the structure and content of dashboards within the Liberty Core framework.  
A dashboard consists of **header metadata** and **content components** that can be dynamically rendered.

### Header Fields
| Field Name       | Type    | Description |
|-----------------|--------|-------------|
| \`DSH_ID\`      | Number | Unique identifier for the dashboard. |
| \`DSH_LABEL\`   | String | Name of the dashboard. |
| \`DSH_ROW\`     | Number | Number of rows in the layout. |
| \`DSH_COLUMN\`  | Number | Number of columns in the layout. |

### Content Fields
| Field Name         | Type    | Description |
|-------------------|--------|-------------|
| \`DSH_ID\`        | Number | Dashboard ID it belongs to. |
| \`DSH_COL_ID\`    | Number | Column identifier. |
| \`DSH_DISPLAY_TITLE\` | String | Whether to display the title ("Y" or "N"). |
| \`DSH_TITLE\`     | String | Title of the dashboard component. |
| \`DSH_ROW\`       | Number | Row position in the layout. |
| \`DSH_COLUMN\`    | Number | Column position in the layout. |
| \`DSH_COMPONENT\` | Enum   | Component type (e.g., \`FormsContent\`). |
| \`DSH_CONTENT\`   | JSX    | The actual component to be displayed. |

## Example Usage
\`\`\`tsx
import { getDashboard } from "liberty-core";

export const DashboardExample = async () => {
  const dashboard = await getDashboard(1);

  return (
    <div>
      <h2>{dashboard?.header.DSH_LABEL}</h2>
      <ul>
        {dashboard?.content.map((item, index) => (
          <li key={index}>
            <strong>{item.DSH_TITLE}</strong> (Row: {item.DSH_ROW}, Column: {item.DSH_COLUMN})
          </li>
        ))}
      </ul>
    </div>
  );
};
\`\`\`
`;

export const Core_Dashboard =  () => {
      const [currentDashboard, setCurrentDashboard] = useState<any>(null);

    useEffect(() => {
      const fetchDashboard = async () => {
        const dashboard = await getDashboard(1);
        setCurrentDashboard(dashboard);
      };
  
      fetchDashboard();
    }, []);
    

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
            <h3>Dashboard Preview</h3>
            <h4>{currentDashboard?.header.DSH_LABEL}</h4>
            <ul>
              {currentDashboard?.content.map((item: any, index: any) => (
                <li key={index}>
                  <strong>{item.DSH_TITLE}</strong> (Row: {item.DSH_ROW}, Column: {item.DSH_COLUMN})
                </li>
              ))}
            </ul>
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