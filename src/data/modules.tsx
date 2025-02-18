export const modulesProperties = [
        {
            "MODULE_ID": "menus",
            "MODULE_DESCRIPTION": "Enable Drawer Menus",
            "MODULE_ENABLED": "Y",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "dev",
            "MODULE_DESCRIPTION": "Enable Development Mode",
            "MODULE_ENABLED": "Y",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "grafana",
            "MODULE_DESCRIPTION": "Enable Grafana Dashboard",
            "MODULE_ENABLED": "N",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "AI",
            "MODULE_DESCRIPTION": "Enable AI",
            "MODULE_ENABLED": "Y",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "debug",
            "MODULE_DESCRIPTION": "Enable Debug",
            "MODULE_ENABLED": "N",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "sentry",
            "MODULE_DESCRIPTION": "Enable Sentry",
            "MODULE_ENABLED": "N",
            "MODULE_PARAMS": null
        },
        {
            "MODULE_ID": "login",
            "MODULE_DESCRIPTION": "Enable Embedded Login",
            "MODULE_ENABLED": "Y",
            "MODULE_PARAMS": null
        }
];

export const getModules = async () => {
    return modulesProperties
  };