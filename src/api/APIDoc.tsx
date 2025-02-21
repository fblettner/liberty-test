import { useEffect, useState } from 'react';
import { Alert, Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs } from '@nomana-it/liberty-core';
import apiData from './liberty-api.json'

interface APIData {
    openapi: string;
    info: {
      title: string;
      description: string;
      version: string;
    };
    paths: Record<
      string,
      Record<
        string,
        {
          tags?: string[];
          summary?: string;
          description?: string;
          operationId?: string;
          parameters?: { name: string; in: string; description?: string; schema?: { type?: string } }[];
          responses?: Record<string, { description: string }>;
        }
      >
    >;
  }



export const Core_APIDocumentation = () => {
  const [apiDocumentation, setApiDocumentation] = useState<APIData | null>(null);

    useEffect(() => {
      setApiDocumentation(apiData); // Load JSON from file
    }, []);
  
    if (!apiDocumentation) {
      return <Alert variant="info">Loading API documentation...</Alert>;
    }
  
    const { paths } = apiDocumentation;

    // Dynamically extract all API categories and endpoints
    const categorizedEndpoints: Record<string, string[]> = {};
  
    Object.entries(paths).forEach(([endpoint, methods]) => {
      Object.entries(methods as { [key: string]: any }).forEach(([_method, details]) => {
        const category = details.tags?.[0] || "Uncategorized";
        if (!categorizedEndpoints[category]) {
          categorizedEndpoints[category] = [];
        }
        categorizedEndpoints[category].push(`- \`${endpoint}\` - ${details.description}`);
      });
    });
  
    // Format API overview section dynamically
    const apiOverview = `
  # Liberty API - Core Endpoints
  
  🔹 **Key Features:**
  - **Authentication & Authorization**: Secure endpoints with JWT tokens and OAuth2.
  - **Database Management**: Query, insert, update, and delete records across multiple pools.
  - **Framework Controls**: Manage modules, applications, themes, and logs.
  - **Security & Encryption**: Encrypt data and ensure safe database access.
  - **Logging & Auditing**: Retrieve and analyze logs for security and debugging.
  
  ${Object.entries(categorizedEndpoints)
    .map(([category, endpoints]) => `### 🔹 ${category}\n${endpoints.join("\n")}`)
    .join("\n\n")}
  
  🔗 **Explore Full API Documentation**:
  - [Swagger UI](https://liberty.nomana-it.fr/api/test)
  - [Redoc](https://liberty.nomana-it.fr/api)
  `;

  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            <MarkDown markdown={apiOverview} />
          </CardContent>

          {Object.entries(paths).map(([endpoint, methods]) =>
            Object.entries(methods as { [key: string]: any }).map(([method, details]) => (
              <CardContent key={`${endpoint}-${method}`}>
                <MarkDown
                  markdown={`## ${details.summary}\n\n**Endpoint:** \`${endpoint}\`\n\n**Method:** \`${method.toUpperCase()}\`\n\n${details.description}`}
                />

                {details.parameters && (
                  <MarkDown
                    markdown={`### Parameters\n\n| Name | In | Description | Type |\n|------|----|-------------|------|\n${details.parameters
                      .map(
                        (param: { name: any; in: any; description: any; schema: { type: any; }; }) =>
                          `| \`${param.name}\` | ${param.in} | ${param.description} | ${param.schema?.type || 'N/A'} |`
                      )
                      .join('\n')}`}
                  />
                )}

                {details.responses && (
                  <MarkDown
                    markdown={`### Responses\n\n| Status | Description |\n|--------|-------------|\n${Object.entries(details.responses)
                      .map(([status, response]) => {
                        const res = response as { description: string };
                        return `| ${status} | ${res.description} |`;
                      })
                      .join('\n')}`}
                  />
                )}
              </CardContent>
            ))
          )}
        </Card>
      </Div_DialogWidgetContent>
    </Paper_Dialogs>
  );
};