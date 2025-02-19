import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, useTheme } from "liberty-core";
import { LineChart } from "liberty-core";

const markDownPreview = `
# LineChart Component
`;

const markdownContent = `
## Description
The \`LineChart\` component provides a customizable line chart using Chart.js. It supports:
- **Multiple datasets**
- **Custom colors and grid configuration**
- **Smooth line interpolation**
- **Dual Y-axis support**
- **Tooltip and legend customization**

## Props
| Prop        | Type                         | Default | Description |
|------------|------------------------------|---------|-------------|
| \`dataset\`  | \`Record<string, any>[]\`      | -       | Data source for the chart. |
| \`colors\`   | \`string[]\`                 | -       | Colors for each data series. |
| \`grid\`     | \`{ horizontal: boolean; vertical: boolean }\` | \`{ horizontal: true, vertical: true }\` | Toggles grid lines. |
| \`xAxis\`    | \`{ scaleType: string; data: string[]; label: string }[]\` | - | X-axis configuration. |
| \`yAxis\`    | \`{ id: string; label: string }[]\`       | -       | Y-axis configuration. |
| \`series\`   | \`{ dataKey: string; label: string; yAxisKey?: string }[]\` | - | Defines the data series to be plotted. |

## Example Usage
\`\`\`tsx
import { LineChart } from "liberty-core";

const dataset = [
  { month: "Jan", sales: 100, revenue: 200 },
  { month: "Feb", sales: 150, revenue: 250 },
  { month: "Mar", sales: 200, revenue: 300 },
];

export const LineChartExample = () => {
  return (
    <LineChart
      dataset={dataset}
      colors={["#1976d2", "#ff9800"]}
      grid={{ horizontal: true, vertical: false }}
      xAxis={[{ scaleType: "category", data: ["Jan", "Feb", "Mar"], label: "Month" }]}
      yAxis={[{ id: "salesAxis", label: "Sales" }, { id: "revenueAxis", label: "Revenue" }]}
      series={[
        { dataKey: "sales", label: "Sales", yAxisKey: "salesAxis" },
        { dataKey: "revenue", label: "Revenue", yAxisKey: "revenueAxis" },
      ]}
    />
  );
};
\`\`\`
`;

export const Core_LineChart = () => {
  const theme = useTheme();

  const dataset = [
    { category: "A", value1: 10, value2: 30 },
    { category: "B", value1: 50, value2: 70 },
    { category: "C", value1: 30, value2: 90 },
  ];

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent style={{ height: "400px" }}>
            {/* Render the actual component */}
            <LineChart
              dataset={dataset}
              colors={[theme.theme.palette.primary.main, theme.theme.palette.secondary.main]}
              grid={{ horizontal: true, vertical: true }}
              xAxis={[{ scaleType: "category", data: ["A", "B", "C"], label: "Category" }]}
              yAxis={[{ id: "default-axis", label: "Values" }]}
              series={[
                { dataKey: "value1", label: "Series 1" },
                { dataKey: "value2", label: "Series 2" },
              ]}
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