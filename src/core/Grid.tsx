import { Card, CardContent, Div_Markdown, MarkDown, Paper_Table, GridContainer, GridItem } from "liberty-core";

const markDownPreview = `
# Grid Components

## Component Preview
Below is an interactive example demonstrating the \`GridContainer\` and \`GridItem\` components.
`;

const markdownContent = `

## Description
The \`GridContainer\` and \`GridItem\` components provide a **flexible grid layout** system that supports:
- **Dynamic column count based on screen size**
- **Responsive design adjustments**
- **Flexible row and column spacing**

## Props

### GridContainer Props
| Prop         | Type                         | Default  | Description |
|-------------|-----------------------------|---------|-------------|
| \`spacing\`  | \`number\`                   | \`2\`     | Defines the gap between grid items (in multiples of 8px). |
| \`columns\`  | \`number | { xs, sm, md, lg }\` | \`1\`     | Number of columns, can be responsive. |
| \`py\`       | \`number\`                   | \`0\`     | Vertical padding (in multiples of 8px). |
| \`px\`       | \`number\`                   | \`0\`     | Horizontal padding (in multiples of 8px). |

### GridItem Props
| Prop         | Type                         | Default  | Description |
|-------------|-----------------------------|---------|-------------|
| \`size\`     | \`number | { xs, sm, md, lg }\` | \`12\`    | Column span of the grid item, can be responsive. |
| \`columnSpan\` | \`number | { xs, sm, md, lg }\` | \`-\`     | Allows setting span dynamically. |

## Example Usage
\`\`\`tsx
import { GridContainer, GridItem } from "liberty-core";

export const GridExample = () => {
  return (
    <GridContainer spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#0044cc", color: "white", padding: "20px", borderRadius: "8px" }}>
        Item 1
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#3366ff", color: "white", padding: "20px", borderRadius: "8px" }}>
        Item 2
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#5588ff", color: "white", padding: "20px", borderRadius: "8px" }}>
        Item 3
      </GridItem>
    </GridContainer>
  );
};
\`\`\`
`;

export const Core_Grid = () => {
  return (
    <Div_Markdown>
      <Paper_Table elevation={0} key={"core-grid-1"}>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual component */}
            <GridContainer spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
              <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#0044cc", color: "white", padding: "20px", borderRadius: "8px" }}>
                Item 1
              </GridItem>
              <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#3366ff", color: "white", padding: "20px", borderRadius: "8px" }}>
                Item 2
              </GridItem>
              <GridItem size={{ xs: 12, sm: 6, md: 4, lg: 3 }} style={{ background: "#5588ff", color: "white", padding: "20px", borderRadius: "8px" }}>
                Item 3
              </GridItem>
            </GridContainer>
          </CardContent>

          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markdownContent} />
          </CardContent>
        </Card>
      </Paper_Table>
    </Div_Markdown>
  );
};