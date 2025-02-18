import { LYComponentType } from "liberty-core";
import { Core_AppsHeader } from "../core/AppsHeader";

export const menus = {
    "items": [
        {
            "ROW_ID": 1,
            "LNG_ID": "en",
            "USR_ID": "admin",
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
                    "ROW_ID": 2,
                    "LNG_ID": "en",
                    "USR_ID": "admin",
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
        }
    ],
    status: "success",
}


export const getMenus = async () => {
    return menus
};