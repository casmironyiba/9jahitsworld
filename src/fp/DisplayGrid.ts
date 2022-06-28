interface Props {
  (
    gridTemplate: string | TemplateStringsArray,
    gridTemplateAreas: string | TemplateStringsArray,
    gap: string | TemplateStringsArray
  ): string | TemplateStringsArray;
}

const displayGrid: Props = (gridTemplate, gridTemplateAreas, gap) => `
  display:grid;
  grid-template:${gridTemplate};
  grid-template-areas: ${gridTemplateAreas};
  gap:${gap}
  `;

export default displayGrid;
