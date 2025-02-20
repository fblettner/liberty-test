import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, Typography, useDeviceDetection, useMediaQuery } from '@nomana-it/liberty-core';

const markDownPreview = `
# useMediaQuery & useDeviceDetection

## Hook Preview
Below is an interactive example demonstrating the \`useMediaQuery\` and \`useDeviceDetection\` hooks.
`;

const markdownContent = `

## Description
These hooks help in detecting screen sizes and device types for responsive UI design.

### \`useMediaQuery(query: string)\`
This hook listens to media queries and returns \`true\` or \`false\` based on the match.

### \`useDeviceDetection()\`
This hook detects if the user is on a mobile or tablet device.

## Example Usage
\`\`\`tsx
import { useMediaQuery, useDeviceDetection } from "@ly_common/UseMediaQuery";
import { Typography } from "'@nomana-it/liberty-core';

export const MediaQueryExample = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");
  const isDeviceMobile = useDeviceDetection();

  return (
    <div>
      <Typography variant="body1">
        {isMobile ? "📱 Mobile View" : "💻 Desktop View"}
      </Typography>
      <Typography variant="body1">
        {isTablet ? "📟 Tablet View" : "🖥️ Large Screen"}
      </Typography>
      <Typography variant="body1">
        {isDeviceMobile ? "📱 Mobile Device Detected" : "💻 Not a Mobile Device"}
      </Typography>
    </div>
  );
};
\`\`\`
`;

export const Core_UseMediaQuery = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");
  const isDeviceMobile = useDeviceDetection();

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Hook Preview */}
            <Typography variant="body1">
              {isMobile ? "📱 Mobile View" : "💻 Desktop View"}
            </Typography>
            <Typography variant="body1">
              {isTablet ? "📟 Tablet View" : "🖥️ Large Screen"}
            </Typography>
            <Typography variant="body1">
              {isDeviceMobile ? "📱 Mobile Device Detected" : "💻 Not a Mobile Device"}
            </Typography>
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