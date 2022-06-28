interface Props {
  (
    position: string | TemplateStringsArray,
    top?: string | TemplateStringsArray,
    right?: string | TemplateStringsArray,
    bottom?: string | TemplateStringsArray,
    left?: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const Position: Props = (position, top, right, bottom, left) =>
  `
    position:${position};
    top:${top};
    right:${right};
    bottom:${bottom};
    left:${left};
    `;

export default Position;
