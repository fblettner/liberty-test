import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";
import { DatePicker } from "liberty-core";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const markDownPreview = `
# DatePicker Component
`;

const markdownContent = `
## Description
The \`DatePicker\` component is a styled date selection field that allows users to pick a date from a calendar popup.

It supports:
- **Manual input and selection** via a pop-up calendar.
- **Month and year navigation**.
- **Custom labels and full-width option**.
- **Disabled state handling**.

## Props
| Prop          | Type                   | Default | Description |
|--------------|----------------------|---------|-------------|
| \`id\`        | \`string\`            | -       | Unique identifier for the input. |
| \`value\`     | \`Dayjs | null\`     | \`null\`  | The selected date. |
| \`onChange\`  | \`(date: Dayjs | null) => void\` | - | Callback triggered when a date is selected. |
| \`disabled\`  | \`boolean\`          | \`false\` | Disables date selection. |
| \`fullWidth\` | \`boolean\`          | \`true\` | Expands input width to 100%. |
| \`label\`     | \`string\`            | -       | Label for the date input. |

## Example Usage
\`\`\`tsx
import { DatePicker } from "liberty-core";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <DatePicker
      id="example-date-picker"
      label="Select a date"
      value={selectedDate}
      onChange={setSelectedDate}
    />
  );
};
\`\`\`
`;

export const Core_DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

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
            <DatePicker
              id="test-date-picker"
              label="Pick a Date"
              value={selectedDate}
              onChange={setSelectedDate}
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