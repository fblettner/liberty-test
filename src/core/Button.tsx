import { Button, Card, CardContent, Div_DialogWidgetButtons, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "liberty-core";

const markDownPreview = `
# Button Component

## Component Preview
Below is an interactive example demonstrating the \`Button\` component.
`;


// Markdown Documentation for Button Component
const markdownContent = `
## Description
The \`Button\` component provides a customizable button with multiple variants and props.  
It supports different styles, icons, full-width mode, and disabled states.

## Props
| Prop          | Type                          | Description                                      |
|--------------|------------------------------|--------------------------------------------------|
| \`variant\`   | \`"contained", "outlined", "text"\` | Defines the button style                          |
| \`fullWidth\` | \`boolean\`                   | If true, the button spans the full container width |
| \`disabled\`  | \`boolean\`                   | If true, the button is disabled                   |
| \`startIcon\` | \`ReactNode, React.ElementType\` | Icon displayed before button text               |
| \`endIcon\`   | \`ReactNode, React.ElementType\` | Icon displayed after button text                |
| \`color\`     | \`string\`                     | Custom color for the button text                 |
| \`href\`      | \`string\`                     | If provided, renders the button as a link       |
| \`target\`    | \`"_blank", "_self", "_parent", "_top"\` | Defines link target behavior                     |
| \`rel\`       | \`string\`                     | Specifies the relationship between the link and target |
| \`badgeContent\` | \`ReactNode\`              | Adds a small badge (for notifications, counts, etc.) |
| \`badgeColor\`  | \`string\`                  | Defines badge background color                    |

## Example Usage
\`\`\`tsx
import { Button } from "liberty-core";
import { FaCheck } from "react-icons/fa";

export const ButtonExample = () => {
  return (
    <>
      {/* Default Contained Button */}
      <Button variant="contained" onClick={() => alert("Contained Button Clicked")}>
        Contained Button
      </Button>

      {/* Outlined Button */}
      <Button variant="outlined" color="secondary" onClick={() => alert("Outlined Button Clicked")}>
        Outlined Button
      </Button>

      {/* Button with Icon */}
      <Button startIcon={<FaCheck />} variant="contained">
        With Icon
      </Button>

      {/* Disabled Button */}
      <Button disabled>Disabled Button</Button>

      {/* Full Width Button */}
      <Button fullWidth variant="contained">Full Width Button</Button>
    </>
  );
};
\`\`\`
`;

export const Core_Button = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
        <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Render the actual button component */}
            <Div_DialogWidgetButtons>
              <Button variant="outlined" fullWidth onClick={() => alert("Button clicked")}>
                Click Me
              </Button>
            </Div_DialogWidgetButtons>
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