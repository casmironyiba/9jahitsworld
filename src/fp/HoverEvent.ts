interface Props {
  (
    background: string | TemplateStringsArray,
    color: string | TemplateStringsArray,
    scale?: number
  ): string | TemplateStringsArray;
}

const hoverEvent: Props = (background, color, scale) =>
  `
    &:hover {
      background:${background};
      color:${color};
      transform:scale(${scale});
    }    
  `;

export default hoverEvent;
