interface Props {
  (
    color?: string | TemplateStringsArray,
    fontSize?: string | TemplateStringsArray,
    fontWeight?: number | string | TemplateStringsArray,
    align?: string | TemplateStringsArray,
    transform?: string | TemplateStringsArray,
    spacing?: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const textProperty: Props = (
  color,
  fontSize,
  fontWeight,
  align,
  transform,
  spacing
) => `
  color:${color};
  font-size:${fontSize};
  font-weight:${fontWeight};
  text-align:${align};
  text-transform:${transform};
  letter-spacing:${spacing};
  `;

export default textProperty;
