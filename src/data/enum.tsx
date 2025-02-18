import { EEnumHeader, ResultStatus, ToolsDictionary } from "liberty-core";

const enumData = [{
    "columns": [
        {
            "header": "Enum ID",
            "field": "ENUM_ID",
        },
        {
            "header": "Value",
            "field": "VAL_ENUM",
        },
        {
            "header": "Description",
            "field": "VAL_LABEL",
        }
    ],
    "data": [
        {
            "VAL_ENUM": "BOOLEAN",
            "VAL_LABEL": "Boolean (Y/N)"
        },
        {
            "VAL_ENUM": "COLOR",
            "VAL_LABEL": "Color Picker"
        },
        {
            "VAL_ENUM": "CURRENT_DATE",
            "VAL_LABEL": "Date Today"
        },
        {
            "VAL_ENUM": "DEFAULT",
            "VAL_LABEL": "Default value"
        },
        {
            "VAL_ENUM": "DISABLED",
            "VAL_LABEL": "Disable Dictionary Rule"
        },
        {
            "VAL_ENUM": "ENUM",
            "VAL_LABEL": "Enumeration"
        },
        {
            "VAL_ENUM": "JDEDATE",
            "VAL_LABEL": "JD Edwards Date"
        },
        {
            "VAL_ENUM": "LOGIN",
            "VAL_LABEL": "User connected"
        },
        {
            "VAL_ENUM": "LOOKUP",
            "VAL_LABEL": "Lookup Table"
        },
        {
            "VAL_ENUM": "NN",
            "VAL_LABEL": "Next Number"
        },
        {
            "VAL_ENUM": "PASSWORD",
            "VAL_LABEL": "Password (mask and encryption)"
        },
        {
            "VAL_ENUM": "SEQUENCE",
            "VAL_LABEL": "Sequence"
        },
        {
            "VAL_ENUM": "SYSDATE",
            "VAL_LABEL": "Date Today"
        }
    ],
    "header": {
        "ENUM_LABEL": "Dictionary Rules",
        "ENUM_DISPLAY_ADD": "Y"
    },
    "status": ResultStatus.success
},
{
    "columns": [
        {
            "header": "Enum ID",
            "field": "ENUM_ID",
        },
        {
            "header": "Value",
            "field": "VAL_ENUM",
        },
        {
            "header": "Description",
            "field": "VAL_LABEL",
        }
    ],
    "data": [
        {
            "VAL_ENUM": "text",
            "VAL_LABEL": "Text"
        },
        {
            "VAL_ENUM": "date",
            "VAL_LABEL": "Date"
        },
        {
            "VAL_ENUM": "textarea",
            "VAL_LABEL": "Long text"
        },
        {
            "VAL_ENUM": "boolean",
            "VAL_LABEL": "Boolean"
        },
        {
            "VAL_ENUM": "jdedate",
            "VAL_LABEL": "JD Edwards Date"
        },
        {
            "VAL_ENUM": "number",
            "VAL_LABEL": "Number"
        }
    ],
    "header": {
        "ENUM_LABEL": "Dictionary Types",
        "ENUM_DISPLAY_ADD": "Y"
    },
    "status": ResultStatus.success
}
]

export const setCustomGetEnums =  () => {
    ToolsDictionary.setCustomGetEnums(async (props) => {
        return enumData[props?.[EEnumHeader.id]]
    });

}