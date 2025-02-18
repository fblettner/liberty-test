import { LYComponentType } from "liberty-core";
import { Core_AppsHeader } from "../core/AppsHeader";
import { Core_Button } from "../core/Button";
import { Core_Alert } from "../core/Alert";
import { Core_AlertMessage } from "../core/AlertMessage";
import { Core_Card } from "../core/Card";
import { Core_Checkbox } from "../core/Checkbox";
import { Core_CircularProgress } from "../core/CircularProgress";
import { Core_Collapse } from "../core/Collapse";
import { Core_ConfirmationDialog } from "../core/ConfirmationDialog";
import { Core_Dialog } from "../core/Dialog";

export const menus = {
    "items": [
        {
            "LNG_ID": "en",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "MENU_LABEL": "Application",
            "KEY_ATTRIBUTES": "100001.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100001.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "DYNAMIC_PARAMS": null,
            "FIXED_PARAMS": null,
            "children": [
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 1,
                    "MENU_LABEL": "Header",
                    "KEY_ATTRIBUTES": "100001.100001.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_AppsHeader />
                },
            ]
        },
        {
            "LNG_ID": "en",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "MENU_LABEL": "Components",
            "KEY_ATTRIBUTES": "100002.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100002.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "DYNAMIC_PARAMS": null,
            "FIXED_PARAMS": null,
            "children": [
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 2,
                    "MENU_LABEL": "Alert",
                    "KEY_ATTRIBUTES": "100002.100001.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Alert />
                },         
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 3,
                    "MENU_LABEL": "Alert Message",
                    "KEY_ATTRIBUTES": "100002.100002.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100002.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_AlertMessage />
                },                           
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 4,
                    "MENU_LABEL": "Button",
                    "KEY_ATTRIBUTES": "100002.100003.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100003.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Button />
                },
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 5,
                    "MENU_LABEL": "Card",
                    "KEY_ATTRIBUTES": "100002.100004.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100004.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Card />
                },   
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 6,
                    "MENU_LABEL": "Checkbox",
                    "KEY_ATTRIBUTES": "100002.100005.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100005.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Checkbox />
                },       
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 7,
                    "MENU_LABEL": "Circular Progress",
                    "KEY_ATTRIBUTES": "100002.100006.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100006.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_CircularProgress />
                },                                               
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 8,
                    "MENU_LABEL": "Collapse",
                    "KEY_ATTRIBUTES": "100002.100007.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100007.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Collapse />
                },            
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 9,
                    "MENU_LABEL": "Confirmation Dialog",
                    "KEY_ATTRIBUTES": "100002.100008.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100008.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_ConfirmationDialog />
                },        
                {
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 10,
                    "MENU_LABEL": "Dialog",
                    "KEY_ATTRIBUTES": "100002.100009.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100009.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Dialog />
                },                       
            ]
        }        
    ],
    status: "success",
}


export const getMenus = async () => {
    return menus
};