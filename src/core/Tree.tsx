import { Card, CardContent, Div_DialogWidgetContent, MarkDown, Paper_Dialogs, Tree } from '@nomana-it/liberty-core';

const markDownPreview = `
# Tree Component

## Component Preview
Below is an interactive example demonstrating the \`Tree\` component.
`;

const markdownContent = `

## Description
The \`Tree\` component is used to display hierarchical data in an expandable and collapsible format.

## Props
| Prop           | Type                     | Default | Description                                      |
|---------------|------------------------|---------|--------------------------------------------------|
| \`nodes\`      | \`TreeNode[]\`          | \`[]\`   | Array of tree nodes to display.                 |
| \`onDoubleClick\` | \`(event, node) => void\` | \`undefined\` | Callback triggered on double-clicking a node. |
| \`onMouseDown\`  | \`(event, node) => void\` | \`undefined\` | Callback triggered when mouse is pressed.       |
| \`onTouchStart\` | \`(event, node) => void\` | \`undefined\` | Callback triggered when touch starts on a node. |
| \`onTouchEnd\`   | \`() => void\`         | \`undefined\` | Callback triggered when touch ends.            |

## Example Usage
\`\`\`tsx
import { Tree } from '@nomana-it/liberty-core';

const treeData = [
  { id: "1", label: "Root", children: [
      { id: "1-1", label: "Child 1" },
      { id: "1-2", label: "Child 2", children: [
          { id: "1-2-1", label: "Grandchild 1" },
      ]},
  ]},
];

export const TreeExample = () => {
  return <Tree nodes={treeData} />;
};
\`\`\`
`;

const treeData = [
  {
    id: "1", label: "Root", children: [
      { id: "1-1", label: "Child 1" },
      {
        id: "1-2", label: "Child 2", children: [
          { id: "1-2-1", label: "Grandchild 1" },
        ]
      },
    ]
  },
];

export const Core_Tree = () => {
  return (
    <Paper_Dialogs>
      <Div_DialogWidgetContent>
        <Card>
          <CardContent>
            {/* Render markdown documentation */}
            <MarkDown markdown={markDownPreview} />
          </CardContent>

          <CardContent>
            {/* Interactive Component Preview */}
            <Tree nodes={treeData} />
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