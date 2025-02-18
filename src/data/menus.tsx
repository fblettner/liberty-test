import { LYComponentType } from "liberty-core";
import { Core_AppsHeader } from "../core/AppsHeader";
import { Core_Button } from "../core/Button";

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
                    "ROW_ID": 2,
                    "LNG_ID": "en",
                    "MENU_COMPONENT": LYComponentType.FormsContent,
                    "MENU_COMPONENT_ID": 2,
                    "MENU_LABEL": "Button",
                    "KEY_ATTRIBUTES": "100002.100001.",
                    "MENU_PARENT_ID": "100002.",
                    "MENU_CHILD_ID": "100002.100001.",
                    "MENU_LEVEL": 2,
                    "AUT_RUN": "Y",
                    "DYNAMIC_PARAMS": null,
                    "FIXED_PARAMS": null,
                    "MENU_CONTENT": <Core_Button />
                },
            ]
        }        
    ],
    status: "success",
}


export const getMenus = async () => {
    return menus
};