import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, useTheme } from "liberty-core";
import { PieChart } from "liberty-core";

const markDownPreview = `
# PieChart Component
`;

const markdownContent = `
## Description
The \`PieChart\` component provides a customizable **Doughnut/Pie Chart** using Chart.js. It supports:
- **Custom colors**
- **Tooltip with percentage display**
- **Legend positioning**
- **Adaptive theming for light/dark modes**

## Props
| Prop       | Type                  | Default | Description |
|------------|-----------------------|---------|-------------|
| \`data\`     | \`{ value: number; label: string }[]\` | -       | The data to be displayed. |
| \`colors\`   | \`string[]\`          | Default colors | Custom colors for segments. |

## Example Usage
\`\`\`tsx
import { PieChart } from "liberty-core";

const chartData = [
  { value: 40, label: "Product A" },
  { value: 25, label: "Product B" },
  { value: 20, label: "Product C" },
  { value: 15, label: "Product D" },
];

export const PieChartExample = () => {
  return (
    <PieChart 
      data={chartData} 
      colors={["#1976d2", "#ff9800", "#4CAF50", "#E91E63"]}
    />
  );
};
\`\`\`
`;

export const Core_PieChart = () => {
  const theme = useTheme();

  const sampleData = [
    { value: 30, label: "Category 1" },
    { value: 50, label: "Category 2" },
    { value: 20, label: "Category 3" },
  ];

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent style={{ height: "200px" }}>
            {/* Render the actual component */}
            <PieChart 
              data={sampleData} 
              colors={[theme.theme.palette.primary.main, theme.theme.palette.secondary.main, "#FFCE56"]}
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