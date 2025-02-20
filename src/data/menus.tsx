import { LYComponentType } from '@nomana-it/liberty-core';
import { Core_Alert } from "../core/Alert";
import { Core_AppsHeader } from "../main/AppsHeader";
import { Core_Button } from "../core/Button";
import { Core_Card } from "../core/Card";
import { Core_Checkbox } from "../core/Checkbox";
import { Core_Dialog } from "../core/Dialog";
import { Core_Input } from "../core/Input";
import { Core_List } from "../core/List";
import { Core_Popper } from "../core/Popper";
import { Core_Select } from "../core/Select";
import { Core_Table } from "../core/Table";
import { Core_AppProvider } from "../context/AppProvider";
import { Core_Modules } from "../services/Modules";
import { Core_Applications } from "../services/Applications";
import { Core_Users } from "../services/Users";
import { Core_Authentication } from "../services/Authentication";
import { Core_AlertMessage } from "../core/AlertMessage";
import { Core_CircularProgress } from "../core/CircularProgress";
import { Core_Collapse } from "../core/Collapse";
import { Core_ConfirmationDialog } from "../core/ConfirmationDialog";
import { Core_DialogExport } from "../core/DialogExport";
import { Core_Divider } from "../core/Divider";
import { Core_FlexPanels } from "../core/Flex";
import { Core_AdvancedFlexPanels } from "../core/FlexAdvanced";
import { Core_Grid } from "../core/Grid";
import { Core_IconButton } from "../core/IconButton";
import { Core_LoadingIndicator } from "../core/LoadingIndicator";
import { Core_MarkDown } from "../core/MarkDown";
import { Core_Menu } from "../core/Menus";
import { Core_SnackMessage } from "../core/SnackMessage";
import { Core_Tabs } from "../core/Tabs";
import { Core_Toggle } from "../core/Toggle";
import { Core_Tooltip } from "../core/Tooltip";
import { Core_Tree } from "../core/Tree";
import { Core_Typography } from "../core/Typography";
import { Core_UseMediaQuery } from "../core/UseMediaQuery";
import { Core_Dashboard } from "../services/Dashboard";
import { Core_Theme } from "../context/ThemeProvider";
import { Core_DatePicker } from "../input/InputDate";
import { Core_InputFile } from "../input/InputFile";
import { Core_InputColor } from "../input/InputColor";
import { Core_InputCheckbox } from "../input/InputCheckbox";
import { Core_InputEnum } from "../input/InputEnum";
import { Core_BarChart } from "../charts/BarChart";
import { Core_LineChart } from "../charts/LineChart";
import { Core_PieChart } from "../charts/PieChart";
import { Core_AppsContent } from "../main/AppsContent";
import { Core_AppsLogin } from "../main/AppsLogin";
import { Core_AppsMenus } from "../main/AppsMenus";
import { Core_AppsUser } from "../main/AppsUsers";
import { Core_ErrorBoundary } from "../context/ErrorBoundary";
import { Core_TranslationProvider } from "../context/I18nextProvider";
import { Core_CreateApp } from "../components/Create";

export const menus = {
    "items": [
        {
            "LNG_ID": "en",
            "MENU_LABEL": "New Project",
            "MENU_COMPONENT": LYComponentType.FormsContent,
            "MENU_COMPONENT_ID": 10000,
            "KEY_ATTRIBUTES": "100000.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100000.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "MENU_CONTENT": <Core_CreateApp />
        },
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Services",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100001.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100001.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [
                {
                    "MENU_LABEL": "AppProvider",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100001,
                    "KEY_ATTRIBUTES": "100001.100001.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppProvider />
                },
                {
                    "MENU_LABEL": "Modules",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100002,
                    "KEY_ATTRIBUTES": "100001.100002.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100002.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Modules />
                },        
                {
                    "MENU_LABEL": "Applications",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100003,
                    "KEY_ATTRIBUTES": "100001.100003.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100003.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Applications />
                },        
                {
                    "MENU_LABEL": "Users",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100004,
                    "KEY_ATTRIBUTES": "100001.100004.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100004.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Users />
                },       
                {
                    "MENU_LABEL": "Authentication",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100005,
                    "KEY_ATTRIBUTES": "100001.100005.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100005.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Authentication />
                },        
                {
                    "MENU_LABEL": "Use Media Query",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100006,
                    "KEY_ATTRIBUTES": "100001.100006.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100006.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_UseMediaQuery />
                },     
                {
                    "MENU_LABEL": "Themes",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100007,
                    "KEY_ATTRIBUTES": "100001.100007.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100007.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Theme />
                },        
                {
                    "MENU_LABEL": "Error Boundary",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100008,
                    "KEY_ATTRIBUTES": "100001.100008.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100008.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_ErrorBoundary />
                },    
                {
                    "MENU_LABEL": "Translations",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 100009,
                    "KEY_ATTRIBUTES": "100001.100009.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100009.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_TranslationProvider />
                },                                                                       
            ]
        },
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Core Components",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100002.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100002.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [
                {
                    "MENU_LABEL": "UI Elements",
                    "MENU_COMPONENT": null,
                    "MENU_COMPONENT_ID": null,
                    "KEY_ATTRIBUTES": "100002.100001.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "children": [
                        { "MENU_LABEL": "Alert", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20001, "KEY_ATTRIBUTES": "100002.100001.1.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Alert /> },
                        { "MENU_LABEL": "AlertMessage", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20002, "KEY_ATTRIBUTES": "100002.100001.2.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_AlertMessage /> },
                        { "MENU_LABEL": "Button", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20003, "KEY_ATTRIBUTES": "100002.100001.3.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Button /> },
                        { "MENU_LABEL": "Card", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20004, "KEY_ATTRIBUTES": "100002.100001.4.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.4.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Card /> },
                        { "MENU_LABEL": "Checkbox", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20005, "KEY_ATTRIBUTES": "100002.100002.5.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.5.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Checkbox /> },
                        { "MENU_LABEL": "Circular Progress", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20006, "KEY_ATTRIBUTES": "100002.100001.6.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.6.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_CircularProgress /> },
                        { "MENU_LABEL": "Collapse", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20007, "KEY_ATTRIBUTES": "100002.100001.7.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.7.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Collapse /> },
                        { "MENU_LABEL": "Divider", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20008, "KEY_ATTRIBUTES": "100002.100001.8.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.8.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Divider /> },
                        { "MENU_LABEL": "Flex", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20009, "KEY_ATTRIBUTES": "100002.100001.9.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.9.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_FlexPanels /> },
                        { "MENU_LABEL": "Flex Advanced", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20010, "KEY_ATTRIBUTES": "100002.100001.10.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.10.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_AdvancedFlexPanels /> },
                        { "MENU_LABEL": "Icon Button", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20011, "KEY_ATTRIBUTES": "100002.100001.11.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.11.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_IconButton /> },
                        { "MENU_LABEL": "Loading Indicator", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20012, "KEY_ATTRIBUTES": "100002.100001.12.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.12.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_LoadingIndicator /> },
                        { "MENU_LABEL": "Markdown", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20013, "KEY_ATTRIBUTES": "100002.100001.13.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.13.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_MarkDown /> },
                        { "MENU_LABEL": "SnackMessage", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20014, "KEY_ATTRIBUTES": "100002.100001.14.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.14.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_SnackMessage /> },
                        { "MENU_LABEL": "Toggle Button", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20015, "KEY_ATTRIBUTES": "100002.100001.15.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.15.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Toggle /> },
                        { "MENU_LABEL": "Tooltip", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20016, "KEY_ATTRIBUTES": "100002.100001.16.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.16.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Tooltip /> },
                        { "MENU_LABEL": "Typography", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 20017, "KEY_ATTRIBUTES": "100002.100001.17.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.17.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Typography /> },
                    ]
                },
                {
                    "MENU_LABEL": "Inputs & Forms",
                    "MENU_COMPONENT": null,
                    "MENU_COMPONENT_ID": null,
                    "KEY_ATTRIBUTES": "100002.100002.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100002.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "children": [
                        { "MENU_LABEL": "Checkbox", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30001, "KEY_ATTRIBUTES": "100002.100002.1.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_InputCheckbox /> },
                        { "MENU_LABEL": "Color Picker", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30002, "KEY_ATTRIBUTES": "100002.100002.2.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_InputColor /> },
                        { "MENU_LABEL": "Date Picker", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30003, "KEY_ATTRIBUTES": "100002.100002.3.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_DatePicker /> },
                        { "MENU_LABEL": "Enum", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30004, "KEY_ATTRIBUTES": "100002.100002.4.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.4.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_InputEnum /> },
                        { "MENU_LABEL": "File", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30005, "KEY_ATTRIBUTES": "100002.100002.5.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.5.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_InputFile /> },
                        { "MENU_LABEL": "Input", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30006, "KEY_ATTRIBUTES": "100002.100002.6.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.6.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Input /> },
                        { "MENU_LABEL": "Select", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 30007, "KEY_ATTRIBUTES": "100002.100002.7.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.7.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Select /> }
                    ]
                },
                {
                    "MENU_LABEL": "Dialogs & Overlays",
                    "MENU_COMPONENT": null,
                    "MENU_COMPONENT_ID": null,
                    "KEY_ATTRIBUTES": "100002.100003.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100003.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "children": [
                        { "MENU_LABEL": "Dialog", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 40001, "KEY_ATTRIBUTES": "100002.100003.1.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Dialog /> },
                        { "MENU_LABEL": "Confirmation", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 40002, "KEY_ATTRIBUTES": "100002.100003.2.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_ConfirmationDialog /> },
                        { "MENU_LABEL": "Export", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 40003, "KEY_ATTRIBUTES": "100002.100003.3.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_DialogExport /> },
                        { "MENU_LABEL": "Popper", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 40004, "KEY_ATTRIBUTES": "100002.100003.4.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.4.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Popper /> },
                        { "MENU_LABEL": "Tabs", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 40005, "KEY_ATTRIBUTES": "100002.100003.5.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.5.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Tabs /> }
                    ]
                },
                {
                    "MENU_LABEL": "Tables & Lists",
                    "MENU_COMPONENT": null,
                    "MENU_COMPONENT_ID": null,
                    "KEY_ATTRIBUTES": "100002.100004.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100004.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "children": [
                        { "MENU_LABEL": "Grid", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 50001, "KEY_ATTRIBUTES": "100002.100004.1.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Grid /> },
                        { "MENU_LABEL": "Table", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 50002, "KEY_ATTRIBUTES": "100002.100004.2.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Table /> },
                        { "MENU_LABEL": "List", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 50003, "KEY_ATTRIBUTES": "100002.100004.3.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_List /> },
                        { "MENU_LABEL": "Context Menus", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 50004, "KEY_ATTRIBUTES": "100002.100004.4.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.4.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Menu /> },
                        { "MENU_LABEL": "Tree", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 50005, "KEY_ATTRIBUTES": "100002.100004.5.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.5.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Tree /> }
                    ]
                },
                {
                    "LNG_ID": "en",
                    "MENU_LABEL": "Charts",
                    "MENU_COMPONENT": null,
                    "MENU_COMPONENT_ID": null,
                    "KEY_ATTRIBUTES": "100002.100005.",
                    "MENU_PARENT_ID": "100002",
                    "MENU_CHILD_ID": "100002.100005.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "children": [                                 
                        {
                            "MENU_LABEL": "Bar",
                            "MENU_COMPONENT": LYComponentType.FormsContent,
                            "MENU_COMPONENT_ID": 70001,
                            "KEY_ATTRIBUTES": "100002.100005.100001.",
                            "MENU_PARENT_ID": "100002.100005.",
                            "MENU_CHILD_ID": "100002.100005.100001.",
                            "MENU_LEVEL": 3,
                            "AUT_RUN": "Y",
                            "MENU_CONTENT": <Core_BarChart />
                        },   
                        {
                            "MENU_LABEL": "Line",
                            "MENU_COMPONENT": LYComponentType.FormsContent,
                            "MENU_COMPONENT_ID": 70002,
                            "KEY_ATTRIBUTES": "100002.100005.100002.",
                            "MENU_PARENT_ID": "100002.100005.",
                            "MENU_CHILD_ID": "100002.100005.100002.",
                            "MENU_LEVEL": 3,
                            "AUT_RUN": "Y",
                            "MENU_CONTENT": <Core_LineChart />
                        },   
                        {
                            "MENU_LABEL": "Pie",
                            "MENU_COMPONENT": LYComponentType.FormsContent,
                            "MENU_COMPONENT_ID": 70003,
                            "KEY_ATTRIBUTES": "100002.100005.100003.",
                            "MENU_PARENT_ID": "100002.100005.",
                            "MENU_CHILD_ID": "100002.100005.100003.",
                            "MENU_LEVEL": 3,
                            "AUT_RUN": "Y",
                            "MENU_CONTENT": <Core_PieChart />
                        },                                        
                    ]
                },     
            ]
        },
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Main Components",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100003.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100003.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [                                 
                {
                    "MENU_LABEL": "Header",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 60001,
                    "KEY_ATTRIBUTES": "100003.100001.",
                    "MENU_PARENT_ID": "100003.",
                    "MENU_CHILD_ID": "100003.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsHeader />
                },     
                {
                    "MENU_LABEL": "Content",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 60002,
                    "KEY_ATTRIBUTES": "100003.100002.",
                    "MENU_PARENT_ID": "100003.",
                    "MENU_CHILD_ID": "100003.100002.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsContent />
                },    
                {
                    "MENU_LABEL": "Login",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 60003,
                    "KEY_ATTRIBUTES": "100003.100003.",
                    "MENU_PARENT_ID": "100003.",
                    "MENU_CHILD_ID": "100003.100003.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsLogin />
                },   
                {
                    "MENU_LABEL": "Menus",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 60004,
                    "KEY_ATTRIBUTES": "100003.100004.",
                    "MENU_PARENT_ID": "100003.",
                    "MENU_CHILD_ID": "100003.100004.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsMenus />
                },  
                {
                    "MENU_LABEL": "Users",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 60005,
                    "KEY_ATTRIBUTES": "100003.100005.",
                    "MENU_PARENT_ID": "100003.",
                    "MENU_CHILD_ID": "100003.100005.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsUser />
                },                                                            
            ]
        },      
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Forms Components",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100004.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100004.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [                                 
                {
                    "MENU_LABEL": "Dashboard",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 70001,
                    "KEY_ATTRIBUTES": "100004.100001.",
                    "MENU_PARENT_ID": "100004.",
                    "MENU_CHILD_ID": "100004.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_Dashboard />
                },                
            ]
        },             
    ],
    status: "success"
};

export const getMenus = async () => {
    return menus;
};