import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, useTheme } from "@nomana-it/liberty-core";
import { BarChart } from "@nomana-it/liberty-core";

const markDownPreview = `
# BarChart Component
`;

const markdownContent = `
## Description
The \`BarChart\` component is a customizable bar chart using Chart.js. It supports:
- **Dynamic datasets**
- **Custom colors**
- **Grid configuration**
- **X and Y axis customization**
- **Multiple series support**

## Props
| Prop        | Type                         | Default | Description |
|------------|------------------------------|---------|-------------|
| \`dataset\`  | \`Record<string, any>[]\`      | -       | Data source for the chart. |
| \`colors\`   | \`string[]\`                 | -       | Colors for each data series. |
| \`grid\`     | \`{ horizontal: boolean; vertical: boolean }\` | \`{ horizontal: true, vertical: true }\` | Toggles grid lines. |
| \`xAxis\`    | \`{ scaleType: string; data: string[]; label: string }[]\` | - | X-axis configuration. |
| \`yAxis\`    | \`{ label: string }[]\`       | -       | Y-axis configuration. |
| \`series\`   | \`{ dataKey: string; label: string }[]\` | - | Defines the data series to be plotted. |

## Example Usage
\`\`\`tsx
import { BarChart } from '@nomana-it/liberty-core';

const dataset = [
  { month: "Jan", revenue: 10000, profit: 3000 },
  { month: "Feb", revenue: 12000, profit: 4000 },
  { month: "Mar", revenue: 15000, profit: 5000 },
];

export const BarChartExample = () => {
  return (
    <BarChart
      dataset={dataset}
      colors={["#1976d2", "#ff9800"]}
      grid={{ horizontal: true, vertical: false }}
      xAxis={[{ scaleType: "category", data: ["Jan", "Feb", "Mar"], label: "Month" }]}
      yAxis={[{ label: "Amount ($)" }]}
      series={[
        { dataKey: "revenue", label: "Revenue" },
        { dataKey: "profit", label: "Profit" },
      ]}
    />
  );
};
\`\`\`
`;

export const Core_BarChart = () => {
  const theme = useTheme();

  const dataset = [
    { category: "A", value1: 50, value2: 30 },
    { category: "B", value1: 80, value2: 60 },
    { category: "C", value1: 40, value2: 70 },
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
            <BarChart
              dataset={dataset}
              colors={[theme.theme.palette.primary.main, theme.theme.palette.secondary.main]}
              grid={{ horizontal: true, vertical: true }}
              xAxis={[{ scaleType: "category", data: ["A", "B", "C"], label: "Category" }]}
              yAxis={[{ label: "Values" }]}
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