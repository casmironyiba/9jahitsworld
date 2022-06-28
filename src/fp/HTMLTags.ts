export const HTMLTags = (str: string | TemplateStringsArray) => (
  type: string | TemplateStringsArray
) => `<${type}>${str}</${type}>`;
