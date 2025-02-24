import { Card, CardContent, Div, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "@nomana-it/liberty-core";
import {
  LYMenuIcon, LYMenuOpenIcon, LYDashboardIcon, LYLightModeIcon, LYDarkModeIcon,
  LYNotificationsIcon, LYLogoutIcon, LYAccountCircleIcon, LYCloseIcon, LYCheckIcon,
  LYClearIcon, LYSaveIcon, LYCancelIcon, LYEditIcon, LYDeleteIcon, LYHelpIcon,
  LYSettingsIcon,LYWarningIcon, LYInfoIcon, LYErrorIcon, LYSuccessIcon, LYBugIcon, LYRefreshIcon
} from "@nomana-it/liberty-core";

const markDownPreview = `
# Icon Components

## Component Preview
Below is an interactive example showcasing various icon components used in Liberty Core.
`;

const markdownContent = `
## Description
The **Liberty Core Icon Set** provides a collection of **Material Icons** and **Font Awesome Icons** wrapped in a standardized interface for easier integration.

## Features
✅ Pre-styled **Material and Font Awesome Icons**  
✅ Easy to use with standard **React components**  
✅ Support for **color themes** and **custom sizes**  

## Example Usage

\`\`\`tsx
import { LYSearchIcon } from '@nomana-it/liberty-core';

export const IconExample = () => {
  return <LYSearchIcon size="24px" color="primary" />;
};
\`\`\`

## **Predefined Icon Components**

### **General UI Icons**
- \`LYMenuIcon\` - Navigation menu
- \`LYMenuOpenIcon\` - Expanded menu
- \`LYDashboardIcon\` - Dashboard
- \`LYLightModeIcon\` - Light mode
- \`LYDarkModeIcon\` - Dark mode
- \`LYNotificationsIcon\` - Notifications
- \`LYLogoutIcon\` - Logout
- \`LYAccountCircleIcon\` - Profile

### **Actions**
- \`LYCloseIcon\` - Close
- \`LYCheckIcon\` - Confirm
- \`LYClearIcon\` - Clear
- \`LYSaveIcon\` - Save
- \`LYCancelIcon\` - Cancel
- \`LYEditIcon\` - Edit
- \`LYDeleteIcon\` - Delete
- \`LYHelpIcon\` - Help
- \`LYSettingsIcon\` - Settings

### **Navigation**
- \`LYArrowDownwardIcon\`
- \`LYArrowUpwardIcon\`
- \`LYArrowRightIcon\`
- \`LYArrowLeftIcon\`
- \`LYExpandLessIcon\`
- \`LYExpandMoreIcon\`
- \`LYUnfoldMoreIcon\`

### **File & Data**
- \`LYContentCopyIcon\` - Copy
- \`LYContentPasteIcon\` - Paste
- \`LYAttachFileIcon\` - Attach
- \`LYCloudUploadIcon\` - Upload
- \`LYDownloadIcon\` - Download
- \`LYUploadIcon\` - Upload
- \`LYTableViewIcon\` - Table View
- \`LYFilterListIcon\` - Filter
- \`LYFilterAltIcon\` - Advanced Filter
- \`LYViewColumnIcon\` - Columns
- \`LYFormatListBulletedIcon\` - List

### **Database & Developer Tools**
- \`LYDatabaseIcon\` - Database
- \`LYGitIcon\` - Git
- \`LYLogsIcon\` - Logs
- \`LYChartIcon\` - Analytics
- \`LYIdentityIcon\` - Security
- \`LYTelegramIcon\` - Telegram
- \`LYExcelIcon\` - Excel
- \`LYPDFIcon\` - PDF
- \`LYCSVIcon\` - CSV
- \`LYChevronDownIcon\`
- \`LYChevronUpIcon\`
- \`LYChevronRightIcon\`
- \`LYWarningIcon\` - Warning
- \`LYInfoIcon\` - Info
- \`LYErrorIcon\` - Error
- \`LYSuccessIcon\` - Success
- \`LYBugIcon\` - Bug
- \`LYRefreshIcon\` - Refresh
`;

const IconPreview = () => {
  const iconList = [
    { name: "LYMenuIcon", Component: LYMenuIcon },
    { name: "LYMenuOpenIcon", Component: LYMenuOpenIcon },
    { name: "LYDashboardIcon", Component: LYDashboardIcon },
    { name: "LYLightModeIcon", Component: LYLightModeIcon },
    { name: "LYDarkModeIcon", Component: LYDarkModeIcon },
    { name: "LYNotificationsIcon", Component: LYNotificationsIcon },
    { name: "LYLogoutIcon", Component: LYLogoutIcon },
    { name: "LYAccountCircleIcon", Component: LYAccountCircleIcon },
    { name: "LYCloseIcon", Component: LYCloseIcon },
    { name: "LYCheckIcon", Component: LYCheckIcon },
    { name: "LYClearIcon", Component: LYClearIcon },
    { name: "LYSaveIcon", Component: LYSaveIcon },
    { name: "LYCancelIcon", Component: LYCancelIcon },
    { name: "LYEditIcon", Component: LYEditIcon },
    { name: "LYDeleteIcon", Component: LYDeleteIcon },
    { name: "LYHelpIcon", Component: LYHelpIcon },
    { name: "LYSettingsIcon", Component: LYSettingsIcon },
    { name: "LYWarningIcon", Component: LYWarningIcon },
    { name: "LYInfoIcon", Component: LYInfoIcon },
    { name: "LYErrorIcon", Component: LYErrorIcon },
    { name: "LYSuccessIcon", Component: LYSuccessIcon },
    { name: "LYBugIcon", Component: LYBugIcon },
    { name: "LYRefreshIcon", Component: LYRefreshIcon },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "16px" }}>
      {iconList.map(({ name, Component }) => (
        <Div key={name} display="flex" flexDirection="column" alignItems="center" padding="8px">
          <Component size="32px" />
          <span style={{ fontSize: "12px", marginTop: "4px", textAlign: "center" }}>{name}</span>
        </Div>
      ))}
    </div>
  );
};

export const Core_IconDocumentation = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            <MarkDown markdown={markDownPreview} />
          </CardContent>
          <CardContent>
            <IconPreview />
          </CardContent>
          <CardContent>
            <MarkDown markdown={markdownContent} />
          </CardContent>
        </Card>
      </Div_DialogWidgetContent>
    </Paper_Dialogs>
  );
};