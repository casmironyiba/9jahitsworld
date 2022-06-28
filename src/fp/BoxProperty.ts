interface Box {
  (
    width?: string | TemplateStringsArray,
    height?: string | TemplateStringsArray,
    margin?: string | TemplateStringsArray | number,
    padding?: string | TemplateStringsArray | number,
    background?: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const boxProperty: Box = (
  width,
  height,
  margin = 0,
  padding = 0,
  background
) => `
  width:${width};
  height:${height};
  margin:${margin};
  padding:${padding};
  box-sizing:border-box;
  background:${background};
            `;

export default boxProperty;
