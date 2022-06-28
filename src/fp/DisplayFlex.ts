interface Flex {
  (
    justify: string | TemplateStringsArray,
    align: string | TemplateStringsArray,
    flow?: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const displayFlex: Flex = (justify, align, flow) =>
  `
          display:flex;
          justify-content: ${justify};
          align-items:${align};
          flex-flow:${flow}

          `;

export default displayFlex;
