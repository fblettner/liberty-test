import { LYComponentType } from "liberty-core";
import { Core_Alert } from "../core/Alert";
import { Core_AppsHeader } from "../core/AppsHeader";
import { Core_Button } from "../core/Button";
import { Core_Card } from "../core/Card";
import { Core_Checkbox } from "../core/Checkbox";
import { Core_Dialog } from "../core/Dialog";
import { Core_Input } from "../core/Input";
import { Core_List } from "../core/List";
import { Core_Popper } from "../core/Popper";
import { Core_Select } from "../core/Select";
import { Core_Table } from "../core/Table";

export const menus = {
    "items": [
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Application",
            "MENU_COMPONENT": null,
            "MENU_COMPONENT_ID": null,
            "KEY_ATTRIBUTES": "100001.",
            "MENU_PARENT_ID": "0",
            "MENU_CHILD_ID": "100001.",
            "MENU_LEVEL": 1,
            "AUT_RUN": "Y",
            "children": [
                {
                    "MENU_LABEL": "Header",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 1,
                    "KEY_ATTRIBUTES": "100001.100001.",
                    "MENU_PARENT_ID": "100001.",
                    "MENU_CHILD_ID": "100001.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "MENU_CONTENT": <Core_AppsHeader />
                },
            ]
        },
        {
            "LNG_ID": "en",
            "MENU_LABEL": "Components",
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
                        { "MENU_LABEL": "Alert", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 2, "KEY_ATTRIBUTES": "100002.100001.1.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Alert /> },
                        { "MENU_LABEL": "Button", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 3, "KEY_ATTRIBUTES": "100002.100001.2.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Button /> },
                        { "MENU_LABEL": "Card", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 4, "KEY_ATTRIBUTES": "100002.100001.3.", "MENU_PARENT_ID": "100002.100001.", "MENU_CHILD_ID": "100002.100001.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Card /> }
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
                        { "MENU_LABEL": "Checkbox", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 5, "KEY_ATTRIBUTES": "100002.100002.1.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Checkbox /> },
                        { "MENU_LABEL": "Input", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 6, "KEY_ATTRIBUTES": "100002.100002.2.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Input /> },
                        { "MENU_LABEL": "Select", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 7, "KEY_ATTRIBUTES": "100002.100002.3.", "MENU_PARENT_ID": "100002.100002.", "MENU_CHILD_ID": "100002.100002.3.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Select /> }
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
                        { "MENU_LABEL": "Dialog", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 8, "KEY_ATTRIBUTES": "100002.100003.1.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Dialog /> },
                        { "MENU_LABEL": "Popper", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 9, "KEY_ATTRIBUTES": "100002.100003.2.", "MENU_PARENT_ID": "100002.100003.", "MENU_CHILD_ID": "100002.100003.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Popper /> }
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
                        { "MENU_LABEL": "Table", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 10, "KEY_ATTRIBUTES": "100002.100004.1.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.1.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_Table /> },
                        { "MENU_LABEL": "List", "MENU_COMPONENT": LYComponentType.FormsContent, "MENU_COMPONENT_ID": 11, "KEY_ATTRIBUTES": "100002.100004.2.", "MENU_PARENT_ID": "100002.100004.", "MENU_CHILD_ID": "100002.100004.2.", "MENU_LEVEL": 3, "AUT_RUN": "Y", "MENU_CONTENT": <Core_List /> }
                    ]
                }
            ]
        }
    ],
    status: "success"
};

export const getMenus = async () => {
    return menus;
};