import { Card, CardContent, Div_DialogWidgetContent, EEnumHeader, MarkDown, Paper_Dialogs, ToolsDictionary } from "liberty-core";
import { InputEnum } from "liberty-core";
import { useCallback } from "react";

const markDownPreview = `
# InputEnum Component
`;

const markdownContent = `
## Description
The \`InputEnum\` component is an advanced dropdown that retrieves values dynamically from an enumeration source. It supports:
- **Dynamic data fetching**
- **Filtering by labels or values**
- **Customization through parameters**
- **Free solo input (custom values)**

## Props
| Prop          | Type                     | Default | Description |
|--------------|--------------------------|---------|-------------|
| \`id\` | \`string\` | - | Unique identifier for the input. |
| \`enumID\` | \`number\` | - | ID of the enumeration source. |
| \`label\` | \`string\` | - | Label for the input. |
| \`defaultValue\` | \`string\` | \`""\` | Initial selected value. |
| \`onChange\` | \`(data: { id: string, value: string }) => void\` | - | Callback when selection changes. |
| \`disabled\` | \`boolean\` | \`false\` | Disables the input. |
| \`variant\` | \`"standard" | "outlined" | "filled"\` | \`"standard"\` | Input style variant. |
| \`freeSolo\` | \`boolean\` | \`false\` | Allows custom values to be typed. |
| \`searchByLabel\` | \`boolean\` | \`false\` | Enables searching by label instead of value. |
| \`data\` | \`IColumnsFilter | ITransformedObject\` | \`undefined\` | Custom data for options. |
| \`dynamic_params\` | \`string\` | \`undefined\` | Dynamic parameters for filtering results. |
| \`fixed_params\` | \`string\` | \`undefined\` | Fixed parameters for filtering results. |
| \`sessionMode\` | \`ESessionMode\` | \`undefined\` | Defines session-based filtering. |
| \`overrideQueryPool\` | \`string\` | \`undefined\` | Overrides the default query pool for fetching data. |
| \`callFromTable\` | \`boolean\` | \`false\` | Optimizes fetching when used in table cells. |
| \`hideButton\` | \`boolean\` | \`false\` | Hides the dropdown button if needed. |

## Example Usage
\`\`\`tsx
import { InputEnum } from "liberty-core";
import { useState } from "react";

export const InputEnumExample = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleEnumChange = (data: { id: string; value: string }) => {
    setSelectedValue(data.value);
  };

  return (
    <InputEnum
      id="input-enum-1"
      enumID={0}
      label="Dictionary Rules"
      defaultValue=""
      disabled={false}
      onChange={handleEnumChange}
      variant="standard"
      freeSolo={true}
      searchByLabel={false}
    />
  );
};
\`\`\`

## Overriding the Default API
You can override the default API and set custom content:
\`\`\`tsx
import { setCustomGetEnums } from "liberty-core";

const customEnumData = [{
  columns: [
    { header: "Enum ID", field: "ENUM_ID" },
    { header: "Value", field: "VAL_ENUM" },
    { header: "Description", field: "VAL_LABEL" }
  ],
  data: [
    { VAL_ENUM: "CUSTOM1", VAL_LABEL: "Custom Option 1" },
    { VAL_ENUM: "CUSTOM2", VAL_LABEL: "Custom Option 2" },
    { VAL_ENUM: "CUSTOM3", VAL_LABEL: "Custom Option 3" }
  ],
  header: {
    ENUM_LABEL: "Custom Dictionary",
    ENUM_DISPLAY_ADD: "Y"
  },
  status: "success"
}];

export const setCustomGetEnums = () => {
  ToolsDictionary.setCustomGetEnums(async (props) => {
    return customEnumData[props?.[EEnumHeader.id]];
  });
};
\`\`\`
`;



export const Core_InputEnum = () => {
    const enumData = [{
        columns: [
          { header: "Enum ID", field: "ENUM_ID" },
          { header: "Value", field: "VAL_ENUM" },
          { header: "Description", field: "VAL_LABEL" }
        ],
        data: [
          { VAL_ENUM: "CUSTOM1", VAL_LABEL: "Custom Option 1" },
          { VAL_ENUM: "CUSTOM2", VAL_LABEL: "Custom Option 2" },
          { VAL_ENUM: "CUSTOM3", VAL_LABEL: "Custom Option 3" }
        ],
        header: {
          ENUM_LABEL: "Custom Dictionary",
          ENUM_DISPLAY_ADD: "Y"
        },
        status: "success"
      }];
      
    ToolsDictionary.setCustomGetEnums(async (props) => {
        return enumData[props?.[EEnumHeader.id]]
    });


    const onAutocompleteChanged = useCallback((event: any) => {
        console.log("Selected value:", event);
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
                        <InputEnum
                            id="core-input-enum"
                            enumID={0}
                            label="Select an Option"
                            defaultValue=""
                            disabled={false}
                            onChange={onAutocompleteChanged}
                            variant="standard"
                            freeSolo={true}
                            searchByLabel={false}
                        />
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