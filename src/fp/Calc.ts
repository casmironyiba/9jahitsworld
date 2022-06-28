interface Props {
  (size: number, desiredSize: number): string | TemplateStringsArray;
}

const calc: Props = (size, desiredSize) => `${size}px / ${desiredSize}px`;
export default calc;
