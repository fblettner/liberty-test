import { EApplications, ESessionMode, IAppsProps } from "liberty-core";

export const appsProperties = {
    "items": [
        {
            "ROW_ID": 1,
            "APPS_ID": 1,
            "APPS_NAME": "LIBERTY_CORE",
            "APPS_DESCRIPTION": "Testing Liberty Core Components",
            "APPS_POOL": "default",
            "APPS_OFFSET": 5000,
            "APPS_LIMIT": 10000,
            "APPS_VERSION": 500,
            "APPS_DASHBOARD": 1,
            "APPS_THEME": "liberty"
        },
        {
            "ROW_ID": 2,
            "APPS_ID": 2,
            "APPS_NAME": "LIBERTY",
            "APPS_DESCRIPTION": "Framework Liberty",
            "APPS_POOL": "liberty",
            "APPS_OFFSET": 10000,
            "APPS_LIMIT": 150000,
            "APPS_VERSION": 403,
            "APPS_DASHBOARD": 1,
            "APPS_THEME": "liberty"
        },
    ],
    "status": "success",

};

export const getApplications = async () => {
    return appsProperties
  };

export const connectedApps: IAppsProps = {
      [EApplications.id]: 1,
      [EApplications.pool]: "default",
      [EApplications.name]: "Liberty Core Components",
      [EApplications.description]: "Liberty Core Components",
      [EApplications.offset]: 5000,
      [EApplications.limit]: 10000,
      [EApplications.version]: "600",
      [EApplications.session]: ESessionMode.session,
      [EApplications.dashboard]: -1,
      [EApplications.theme]: "liberty",
      [EApplications.jwt_token]: "",
    };