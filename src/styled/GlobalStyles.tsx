import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from "@nomana-it/liberty-core";

const markDownPreview = `
# Global Styles

## Component Preview
Below is an interactive example demonstrating global styles applied across the application.
`;

const markdownContent = `
## Description
The \`GlobalStyles\` component applies system-wide styles using \`@emotion/react\`'s \`Global\` API. These styles ensure consistent typography, spacing, and UI appearance across the application.

## Features
- **Box-Sizing Normalization:** Ensures that all elements respect the \`border-box\` model.
- **Scrollbar Customization:** Modifies the appearance of scrollbars for a more modern look.
- **Typography and Layout:** Applies a consistent font, line-height, and color scheme.
- **Global Reset:** Removes default margin, padding, and styles from common HTML elements.
- **Accessibility Improvements:** Ensures proper text contrast and smooth font rendering.

---

## Applied Styles

### **Box-Sizing**
All elements, including \`::before\` and \`::after\`, inherit the \`border-box\` model for better layout consistency.

### **Scrollbar Customization**
- Width and height adjustments for both vertical and horizontal scrollbars.
- Styled scrollbar track, thumb, and corner to match the theme.
- Firefox-specific styles using \`scrollbar-width\` and \`scrollbar-color\`.

### **Typography & Layout**
- Applies a default font stack: \`Roboto, Helvetica, Arial, sans-serif\`.
- Uses a dynamic color scheme based on the theme (light/dark mode).
- Enhances font rendering for better readability.

### **Element Reset**
- Removes default padding and margin from key HTML elements.
- Normalizes list styles, anchor tags, tables, and headers.

---

## Example Usage

### Applying Global Styles in the Application
\`\`\`tsx
import GlobalStyles from "@nomana-it/liberty-core/styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Welcome to Liberty Core</h1>
        <p>This app uses global styles for consistency.</p>
      </div>
    </>
  );
};
\`\`\`

---

## **Styling Details**

| CSS Property                 | Purpose |
|------------------------------|---------|
| \`box-sizing: border-box;\`  | Ensures consistent sizing across all elements. |
| \`scrollbar-width: thin;\`   | Reduces scrollbar thickness for better UX. |
| \`font-family: Roboto, Helvetica, Arial;\` | Standardizes typography. |
| \`color-scheme: dark, light;\` | Adjusts color contrast for accessibility. |
| \`th, td border-bottom\` | Improves table appearance. |
| \`html, body { overflow-x: hidden; }\` | Prevents unwanted horizontal scrolling. |

---

`;

export const Core_GlobalStylesDocumentation = () => {
    return (
        <Paper_Dialogs>
            <Div_DialogWidgetContent>
                <Card>
                    <CardContent>
                        {/* Render markdown documentation */}
                        <MarkDown markdown={markDownPreview} />
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